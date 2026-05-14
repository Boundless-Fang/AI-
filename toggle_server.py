from __future__ import annotations

import os
import signal
import socket
import subprocess
import sys
import time
from pathlib import Path


ROOT = Path(__file__).resolve().parent
PID_FILE = ROOT / ".server.pid"
PORT = 8000
HOST = "127.0.0.1"


def is_port_open(host: str, port: int, timeout: float = 0.4) -> bool:
    with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as sock:
        sock.settimeout(timeout)
        return sock.connect_ex((host, port)) == 0


def process_exists(pid: int) -> bool:
    try:
        os.kill(pid, 0)
        return True
    except OSError:
        return False


def get_listener_pid(port: int) -> int | None:
    result = subprocess.run(
        ["netstat", "-ano", "-p", "tcp"],
        capture_output=True,
        text=True,
        encoding="utf-8",
        errors="ignore",
        check=False,
    )

    for line in result.stdout.splitlines():
        if f":{port}" not in line or "LISTENING" not in line.upper():
            continue

        parts = line.split()
        if len(parts) < 5:
            continue

        local_addr = parts[1]
        state = parts[3].upper()
        pid_text = parts[4]

        if not local_addr.endswith(f":{port}") or state != "LISTENING":
            continue

        try:
            return int(pid_text)
        except ValueError:
            continue

    return None


def read_pid() -> int | None:
    if not PID_FILE.exists():
        return None

    text = PID_FILE.read_text(encoding="utf-8").strip()
    if not text:
        PID_FILE.unlink(missing_ok=True)
        return None

    try:
        return int(text)
    except ValueError:
        PID_FILE.unlink(missing_ok=True)
        return None


def clear_pid_file() -> None:
    PID_FILE.unlink(missing_ok=True)


def start_server() -> None:
    process = subprocess.Popen(
        [sys.executable, "-m", "http.server", str(PORT)],
        cwd=ROOT,
        stdout=subprocess.DEVNULL,
        stderr=subprocess.DEVNULL,
        creationflags=getattr(subprocess, "CREATE_NEW_PROCESS_GROUP", 0),
    )

    for _ in range(25):
        listener_pid = get_listener_pid(PORT)
        if listener_pid == process.pid or is_port_open(HOST, PORT):
            PID_FILE.write_text(str(process.pid), encoding="utf-8")
            print(f"已启动，PID: {process.pid}")
            print(f"访问地址: http://localhost:{PORT}")
            return
        time.sleep(0.2)

    process.terminate()
    clear_pid_file()
    print("启动失败：8000 端口未成功进入监听状态。")


def stop_server(pid: int) -> None:
    try:
        os.kill(pid, signal.SIGTERM)
    except OSError:
        clear_pid_file()
        print(f"目标进程不存在，已清理状态，PID: {pid}")
        return

    for _ in range(25):
        if not process_exists(pid) and get_listener_pid(PORT) != pid:
            clear_pid_file()
            print(f"已终止服务，PID: {pid}")
            return
        time.sleep(0.2)

    clear_pid_file()
    print(f"已发送终止信号，PID: {pid}")


def main() -> None:
    listener_pid = get_listener_pid(PORT)
    saved_pid = read_pid()

    if listener_pid is not None:
        stop_server(listener_pid)
        return

    if saved_pid is not None and process_exists(saved_pid):
        stop_server(saved_pid)
        return

    clear_pid_file()
    start_server()


if __name__ == "__main__":
    main()
