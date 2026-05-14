const MODAL_FIELDS = new Set(["overallStyle", "temperament", "legs"]);

const CORE_FIELDS = [
  { key: "overallStyle", advanced: ["overallStyleAdvanced"] },
  { key: "age", advanced: [] },
  { key: "body", advanced: ["height", "chest", "waist", "hips", "legShape"] },
  { key: "temperament", advanced: [] },
  { key: "expression", advanced: ["skin", "face", "eyebrow", "eyes", "eyeColor", "nose", "lips", "marks", "makeup"] },
  { key: "hairstyle", advanced: ["hairColor", "specialHairColor", "hairLength", "bangs", "hairTail", "hairState", "headAccessory", "glasses", "hat", "earAccessory", "extraHeadAccessory"] },
  { key: "top", advanced: ["topSubType", "innerTop", "neckline", "shoulderDesign", "sleeveType", "topFit", "topLength", "topExposure", "topColor", "topMaterial", "topPattern", "neckAccessory", "handAccessory"] },
  { key: "bottom", advanced: ["bottomDressType", "bottomPantsType", "onePieceType", "bottomFit", "bottomLength", "bottomDetail", "bottomColor", "bottomMaterial", "bottomPattern", "waistAccessory", "bottomCharm"] },
  { key: "legs", advanced: ["socks", "sockMaterial", "sockColor", "sockCuff", "legAccessory"] },
  { key: "shoes", advanced: ["shoeCategory", "shoeHeel", "shoeToe", "shoeMaterial", "shoeDetail"] },
  { key: "accessorySet", advanced: ["bag", "handheld", "prop"] }
];

const fields = {
  overallStyle: {
    label: "整体风格",
    type: "single",
    default: "",
    options: ["无指定", "简约", "休闲", "学院", "通勤", "甜美", "温柔", "优雅", "高冷"],
    promptLabel: "整体风格",
    modalHint: "先从高频风格中选主风格。"
  },
  overallStyleAdvanced: {
    label: "风格扩展",
    type: "multi",
    default: ["无指定"],
    limit: 4,
    options: ["无指定", "运动", "淑女", "法式", "轻熟", "御姐", "酷感", "机车", "暗黑", "辣妹", "JK", "洛丽塔", "汉服", "芭蕾风", "复古", "民族风", "礼服风"],
    promptLabel: "扩展风格"
  },
  age: {
    label: "年龄阶段",
    type: "single",
    default: "",
    options: ["无指定", "女孩", "少女", "青年女性", "成熟女性"],
    promptLabel: "年龄"
  },
  body: {
    label: "身材",
    type: "single",
    default: "",
    options: ["无指定", "纤细", "匀称", "有曲线", "丰满"],
    promptLabel: "身材"
  },
  height: {
    label: "身高感",
    type: "single",
    default: "",
    options: ["无指定", "娇小", "匀称", "高挑"],
    promptLabel: "身高"
  },
  chest: {
    label: "胸部",
    type: "single",
    default: "",
    options: ["无指定", "平胸", "适中", "丰满"],
    promptLabel: "胸部"
  },
  waist: {
    label: "腰部",
    type: "single",
    default: "",
    options: ["无指定", "纤细", "匀称", "有曲线"],
    promptLabel: "腰部"
  },
  hips: {
    label: "臀部",
    type: "single",
    default: "",
    options: ["无指定", "普通", "饱满", "翘臀"],
    promptLabel: "臀部"
  },
  legShape: {
    label: "腿部细节",
    type: "multi",
    default: ["无指定"],
    limit: 2,
    options: ["无指定", "匀称", "修长", "肉感", "笔直"],
    promptLabel: "腿部细节"
  },
  temperament: {
    label: "气质",
    type: "single",
    default: "",
    options: ["无指定", "清纯", "甜美", "可爱", "温柔", "优雅", "知性", "成熟", "冷艳", "妩媚", "性感", "元气", "干练", "高冷", "慵懒", "文静", "活泼"],
    promptLabel: "气质",
    modalHint: "选择主气质方向。"
  },
  expression: {
    label: "表情神态",
    type: "single",
    default: "",
    options: ["无指定", "平静", "冷淡", "愤怒", "微笑", "大笑", "冷笑", "脸红", "眨眼", "抛媚眼", "咬唇", "落泪", "呆滞", "专注", "害羞", "惊讶", "委屈", "困倦", "慵懒", "若有所思"],
    promptLabel: "表情"
  },
  skin: {
    label: "肤色",
    type: "single",
    default: "",
    options: ["无指定", "冷白", "瓷白", "白皙", "自然", "小麦色"],
    promptLabel: "肤色"
  },
  face: {
    label: "脸型",
    type: "single",
    default: "",
    options: ["无指定", "圆脸", "鹅蛋脸", "瓜子脸", "心形脸", "方脸", "长脸", "菱形脸"],
    promptLabel: "脸型"
  },
  eyebrow: {
    label: "眉形",
    type: "single",
    default: "",
    options: ["无指定", "平眉", "柳叶眉", "挑眉", "细眉", "浓眉", "自然眉"],
    promptLabel: "眉形"
  },
  eyes: {
    label: "眼型",
    type: "single",
    default: "",
    options: ["无指定", "圆眼", "杏眼", "桃花眼", "丹凤眼", "下垂眼", "猫眼"],
    promptLabel: "眼型"
  },
  eyeColor: {
    label: "瞳色",
    type: "single",
    default: "",
    options: ["无指定", "黑色", "深棕", "浅棕", "灰色", "蓝色", "绿色", "紫色"],
    promptLabel: "瞳色"
  },
  nose: {
    label: "鼻型",
    type: "single",
    default: "",
    options: ["无指定", "小巧鼻", "直鼻", "翘鼻", "立体鼻"],
    promptLabel: "鼻型"
  },
  lips: {
    label: "唇形",
    type: "single",
    default: "",
    options: ["无指定", "薄唇", "饱满唇", "樱桃唇", "微翘唇"],
    promptLabel: "唇形"
  },
  marks: {
    label: "面部 / 身体特征",
    type: "multi",
    default: ["无指定"],
    limit: 4,
    options: ["无指定", "泪痣", "美人痣", "酒窝", "梨涡", "小虎牙", "雀斑", "伤痕", "胎记"],
    promptLabel: "特征"
  },
  makeup: {
    label: "妆造状态",
    type: "single",
    default: "",
    options: ["无指定", "素颜", "淡妆", "浓妆", "韩系妆", "日系妆", "欧美妆", "烟熏妆", "裸妆", "红唇妆", "闪妆"],
    promptLabel: "妆容"
  },
  hairstyle: {
    label: "发型",
    type: "single",
    default: "",
    options: ["无指定", "直发", "卷发", "微卷", "扎发", "盘发", "编发", "单马尾", "双马尾", "低马尾", "高马尾", "丸子头", "公主头", "披发"],
    promptLabel: "发型"
  },
  hairColor: {
    label: "发色",
    type: "single",
    default: "",
    options: ["无指定", "黑色", "深棕", "浅棕", "栗色", "亚麻色", "金色", "银灰", "蓝黑", "粉色", "白金色", "红棕色"],
    promptLabel: "发色"
  },
  specialHairColor: {
    label: "特殊发色设计",
    type: "multi",
    default: ["无指定"],
    limit: 2,
    options: ["无指定", "挑染", "挂耳染", "渐变色", "双拼色"],
    promptLabel: "染发设计"
  },
  hairLength: {
    label: "发长",
    type: "single",
    default: "",
    options: ["无指定", "齐耳短发", "锁骨发", "中长发", "长发"],
    promptLabel: "发长"
  },
  bangs: {
    label: "刘海",
    type: "single",
    default: "",
    options: ["无指定", "无刘海", "齐刘海", "斜刘海", "中分刘海", "空气刘海", "法式刘海"],
    promptLabel: "刘海"
  },
  hairTail: {
    label: "发尾",
    type: "single",
    default: "",
    options: ["无指定", "内扣", "外翘", "微卷", "大卷", "碎发尾", "齐整发尾", "层次发尾"],
    promptLabel: "发尾"
  },
  hairState: {
    label: "头发状态",
    type: "multi",
    default: ["无指定"],
    limit: 3,
    options: ["无指定", "整齐", "湿发", "飘动", "凌乱", "蓬松", "顺滑", "毛躁", "微乱"],
    promptLabel: "头发状态"
  },
  headAccessory: {
    label: "发饰",
    type: "multi",
    default: ["无指定"],
    limit: 3,
    options: ["无指定", "发夹", "发箍", "发带", "蝴蝶结", "丝带", "发绳", "珍珠发饰", "花饰"],
    promptLabel: "发饰"
  },
  glasses: {
    label: "眼镜",
    type: "single",
    default: "",
    options: ["无指定", "无框眼镜", "细框眼镜", "圆框眼镜", "方框眼镜", "墨镜"],
    promptLabel: "眼镜"
  },
  hat: {
    label: "帽子",
    type: "single",
    default: "",
    options: ["无指定", "鸭舌帽", "贝雷帽", "针织帽", "草帽", "礼帽", "渔夫帽"],
    promptLabel: "帽子"
  },
  earAccessory: {
    label: "耳饰",
    type: "multi",
    default: ["无指定"],
    limit: 3,
    options: ["无指定", "耳钉", "耳环", "耳坠", "珍珠耳饰", "流苏耳饰", "金属耳饰"],
    promptLabel: "耳饰"
  },
  extraHeadAccessory: {
    label: "附加配饰",
    type: "multi",
    default: ["无指定"],
    limit: 2,
    options: ["无指定", "面纱", "口罩", "眼罩", "头戴式耳机", "入耳式耳机"],
    promptLabel: "附加头部配饰"
  },
  top: {
    label: "上装款式",
    type: "single",
    default: "",
    options: ["无指定", "T恤", "衬衫", "卫衣", "针织衫", "POLO衫", "雪纺衫", "吊带衫", "外穿背心", "打底衫", "大衣", "风衣", "西服", "毛衣", "羽绒服", "皮衣", "皮草", "马甲", "夹克", "短外套", "挂脖上衣", "背心", "短款上衣", "露脐上衣", "连体衣", "抹胸上衣"],
    promptLabel: "上装"
  },
  topSubType: {
    label: "上衣主体细分",
    type: "multi",
    default: ["无指定"],
    limit: 3,
    options: ["无指定", "轻薄上装", "外套", "保暖上装", "连体款", "延伸款"],
    promptLabel: "上衣细分"
  },
  innerTop: {
    label: "贴身 / 特殊场景上装",
    type: "multi",
    default: ["无指定"],
    limit: 3,
    options: ["无指定", "运动内衣", "蕾丝内衣", "抹胸", "隐形内衣", "束腰", "比基尼上装", "泳装上身结构"],
    promptLabel: "贴身上装"
  },
  neckline: {
    label: "领口样式",
    type: "single",
    default: "",
    options: ["无指定", "V领", "圆领", "高领", "水手领", "一字领", "方领", "挂脖领", "半高领", "低胸领", "心形领"],
    promptLabel: "领口"
  },
  shoulderDesign: {
    label: "肩颈设计",
    type: "single",
    default: "",
    options: ["无指定", "常规肩线", "露肩", "双肩全露", "斜肩", "削肩", "挂脖"],
    promptLabel: "肩颈设计"
  },
  sleeveType: {
    label: "袖型",
    type: "single",
    default: "",
    options: ["无指定", "无袖", "短袖", "长袖", "泡泡袖", "宽袖", "喇叭袖", "灯笼袖", "荷叶袖", "紧身袖"],
    promptLabel: "袖型"
  },
  topFit: {
    label: "上装版型",
    type: "multi",
    default: ["无指定"],
    limit: 3,
    options: ["无指定", "修身", "宽松", "A字版型", "H版型", "垂坠", "蓬松", "贴身", "收腰", "直筒版型"],
    promptLabel: "上装版型"
  },
  topLength: {
    label: "上装长度",
    type: "single",
    default: "",
    options: ["无指定", "短款", "常规款", "及腰", "及臀"],
    promptLabel: "上装长度"
  },
  topExposure: {
    label: "局部展露",
    type: "multi",
    default: ["无指定"],
    limit: 3,
    options: ["无指定", "露肩", "双肩全露", "开胸", "露沟", "露脐", "露背", "透肤"],
    promptLabel: "局部展露"
  },
  topColor: {
    label: "上装颜色",
    type: "single",
    default: "",
    options: ["无指定", "黑色", "白色", "灰色", "米色", "奶油色", "卡其色", "棕色", "红色", "酒红色", "粉色", "浅粉色", "玫红色", "蓝色", "浅蓝色", "藏蓝色", "绿色", "墨绿色", "紫色", "浅紫色", "黄色"],
    promptLabel: "上装颜色"
  },
  topMaterial: {
    label: "上装材质",
    type: "multi",
    default: ["无指定"],
    limit: 3,
    options: ["无指定", "丝绸", "皮革", "蕾丝", "牛仔布", "针织", "半透明", "雪纺", "棉质", "羊毛", "缎面", "网纱", "天鹅绒"],
    promptLabel: "上装材质"
  },
  topPattern: {
    label: "上装纹理 / 图案",
    type: "multi",
    default: ["无指定"],
    limit: 3,
    options: ["无指定", "纯色", "格子", "条纹", "碎花", "波点", "刺绣", "印花", "字母印花", "动物纹", "几何纹", "蕾丝花纹"],
    promptLabel: "上装图案"
  },
  neckAccessory: {
    label: "颈饰",
    type: "multi",
    default: ["无指定"],
    limit: 3,
    options: ["无指定", "项链", "锁骨链", "choker", "珍珠项链", "吊坠"],
    promptLabel: "颈饰"
  },
  handAccessory: {
    label: "手饰",
    type: "multi",
    default: ["无指定"],
    limit: 3,
    options: ["无指定", "手链", "手镯", "戒指", "蕾丝手套", "长手套", "短手套"],
    promptLabel: "手饰"
  },
  bottom: {
    label: "下装款式",
    type: "single",
    default: "",
    options: ["无指定", "半身裙", "A字裙", "百褶裙", "包臀裙", "鱼尾裙", "伞裙", "吊带裙", "衬衫裙", "牛仔裙", "背带裙", "迷你裙", "长裙", "长裤", "短裤", "牛仔裤", "阔腿裤", "休闲裤", "直筒裤", "工装裤", "西裤", "运动裤", "紧身裤", "打底裤", "热裤", "连衣裙", "旗袍", "针织连衣裙", "礼裙", "晚礼服", "开衩裙", "抹胸裙", "连体泳装", "死库水"],
    promptLabel: "下装"
  },
  bottomDressType: {
    label: "裙装细分",
    type: "multi",
    default: ["无指定"],
    limit: 3,
    options: ["无指定", "连衣裙", "半身裙", "A字裙", "百褶裙", "包臀裙", "鱼尾裙", "伞裙", "吊带裙", "衬衫裙", "牛仔裙", "背带裙", "迷你裙", "长裙"],
    promptLabel: "裙装细分"
  },
  bottomPantsType: {
    label: "裤装细分",
    type: "multi",
    default: ["无指定"],
    limit: 3,
    options: ["无指定", "长裤", "短裤", "牛仔裤", "阔腿裤", "休闲裤", "直筒裤", "工装裤", "西裤", "运动裤", "紧身裤", "打底裤", "热裤"],
    promptLabel: "裤装细分"
  },
  onePieceType: {
    label: "连衣 / 特殊款式",
    type: "multi",
    default: ["无指定"],
    limit: 3,
    options: ["无指定", "连衣裙", "旗袍", "针织连衣裙", "礼裙", "晚礼服", "开衩裙", "抹胸裙", "连体泳装", "死库水"],
    promptLabel: "连衣类"
  },
  bottomFit: {
    label: "下装版型",
    type: "multi",
    default: ["无指定"],
    limit: 3,
    options: ["无指定", "修身", "宽松", "A字版型", "H版型", "垂坠", "蓬松", "包臀", "高腰", "低腰", "直筒", "阔摆"],
    promptLabel: "下装版型"
  },
  bottomLength: {
    label: "下装长度",
    type: "single",
    default: "",
    options: ["无指定", "齐臀", "超短", "短款", "及膝", "过膝", "及踝", "拖地"],
    promptLabel: "下装长度"
  },
  bottomDetail: {
    label: "下装局部设计",
    type: "multi",
    default: ["无指定"],
    limit: 3,
    options: ["无指定", "侧开叉", "高开叉", "不规则下摆", "高腰", "低腰", "收腰", "包臀", "百褶", "荷叶边", "绑带"],
    promptLabel: "下装细节"
  },
  bottomColor: {
    label: "下装颜色",
    type: "single",
    default: "",
    options: ["无指定", "黑色", "白色", "灰色", "米色", "卡其色", "蓝色", "深蓝色", "牛仔蓝", "棕色", "红色", "粉色", "绿色"],
    promptLabel: "下装颜色"
  },
  bottomMaterial: {
    label: "下装材质",
    type: "multi",
    default: ["无指定"],
    limit: 3,
    options: ["无指定", "丝绸", "皮革", "蕾丝", "牛仔布", "针织", "半透明", "雪纺", "棉质", "缎面", "网纱"],
    promptLabel: "下装材质"
  },
  bottomPattern: {
    label: "下装纹理 / 图案",
    type: "multi",
    default: ["无指定"],
    limit: 3,
    options: ["无指定", "纯色", "格子", "条纹", "碎花", "波点", "刺绣", "印花", "蕾丝花纹"],
    promptLabel: "下装图案"
  },
  waistAccessory: {
    label: "腰饰",
    type: "multi",
    default: ["无指定"],
    limit: 3,
    options: ["无指定", "腰带", "细腰带", "宽腰封", "链条腰饰", "蝴蝶结腰饰"],
    promptLabel: "腰饰"
  },
  bottomCharm: {
    label: "下装挂件",
    type: "multi",
    default: ["无指定"],
    limit: 3,
    options: ["无指定", "挂链", "金属扣饰", "挂坠", "小包挂饰"],
    promptLabel: "下装挂件"
  },
  legs: {
    label: "腿部表现",
    type: "single",
    default: "",
    options: ["无指定", "光腿", "修长腿", "匀称腿", "肉感腿", "笔直腿"],
    promptLabel: "腿部",
    modalHint: "选择整体腿部观感。"
  },
  socks: {
    label: "袜子款式",
    type: "multi",
    default: ["无指定"],
    limit: 3,
    options: ["无指定", "连裤丝袜", "黑丝", "白色长筒袜", "渔网袜", "及膝袜", "短袜", "中筒袜", "过膝袜", "堆堆袜", "裸足 / 光腿"],
    promptLabel: "袜子"
  },
  sockMaterial: {
    label: "袜子材质",
    type: "multi",
    default: ["无指定"],
    limit: 3,
    options: ["无指定", "尼龙", "蕾丝", "棉质", "针织", "网纱", "半透明", "加绒"],
    promptLabel: "袜子材质"
  },
  sockColor: {
    label: "袜子颜色",
    type: "multi",
    default: ["无指定"],
    limit: 3,
    options: ["无指定", "黑色", "白色", "灰色", "肤色", "奶油色"],
    promptLabel: "袜子颜色"
  },
  sockCuff: {
    label: "袜口设计",
    type: "multi",
    default: ["无指定"],
    limit: 3,
    options: ["无指定", "花边", "荷叶边", "蕾丝边", "蝴蝶结", "松紧口", "绑带"],
    promptLabel: "袜口设计"
  },
  legAccessory: {
    label: "腿足饰品",
    type: "multi",
    default: ["无指定"],
    limit: 3,
    options: ["无指定", "腿环", "袜圈", "脚链", "踝饰", "绑带饰品"],
    promptLabel: "腿足饰品"
  },
  shoes: {
    label: "鞋子款式",
    type: "single",
    default: "",
    options: ["无指定", "小白鞋", "运动鞋", "乐福鞋", "单鞋", "高跟鞋", "短靴", "过膝靴", "凉鞋", "赤脚"],
    promptLabel: "鞋子"
  },
  shoeCategory: {
    label: "鞋类总分",
    type: "multi",
    default: ["无指定"],
    limit: 3,
    options: ["无指定", "老爹鞋", "内增高鞋", "帆布鞋", "板鞋", "网面鞋", "椰子鞋", "高帮鞋", "深口单鞋", "尖头鞋", "浅口单鞋", "玛丽珍鞋", "平底鞋", "粗跟鞋", "马丁靴", "切尔西靴", "烟筒靴", "雪地靴", "高筒靴", "袜靴", "弹力靴", "休闲靴", "短筒靴", "雨靴", "踝靴", "罗马凉鞋", "一字带凉鞋", "坡跟凉鞋", "绑带凉鞋", "厚底凉鞋", "包头凉鞋", "高跟凉鞋", "运动凉鞋", "法式复古鞋", "芭蕾风单鞋", "布鞋", "绣花鞋", "汉服鞋", "JK小皮鞋", "洛丽塔鞋", "民族风女鞋", "机车风女靴", "人字拖", "凉拖", "毛绒拖鞋", "穆勒鞋", "拖鞋"],
    promptLabel: "鞋类细分"
  },
  shoeHeel: {
    label: "鞋跟",
    type: "single",
    default: "",
    options: ["无指定", "无跟", "低跟", "中跟", "坡跟", "高跟", "细跟", "粗跟"],
    promptLabel: "鞋跟"
  },
  shoeToe: {
    label: "鞋头",
    type: "single",
    default: "",
    options: ["无指定", "圆头", "方头", "尖头", "露趾", "包头"],
    promptLabel: "鞋头"
  },
  shoeMaterial: {
    label: "鞋面 / 鞋身材质",
    type: "multi",
    default: ["无指定"],
    limit: 3,
    options: ["无指定", "皮革", "漆皮", "麂皮", "绒面", "帆布", "针织", "网面", "橡胶", "PVC", "缎面"],
    promptLabel: "鞋面材质"
  },
  shoeDetail: {
    label: "鞋面纹理 / 装饰",
    type: "multi",
    default: ["无指定"],
    limit: 3,
    options: ["无指定", "纯色", "拼色", "亮面", "哑光", "绑带", "蝴蝶结", "金属扣", "铆钉", "珍珠", "水钻", "刺绣", "镂空", "系带", "搭扣", "链条装饰"],
    promptLabel: "鞋面装饰"
  },
  accessorySet: {
    label: "配饰与随身物",
    type: "single",
    default: "",
    options: ["无指定", "包包", "饰品", "手持物", "特殊道具"],
    promptLabel: "配饰与随身物"
  },
  bag: {
    label: "包包",
    type: "multi",
    default: ["无指定"],
    limit: 3,
    options: ["无指定", "帆布包", "双肩包", "手提包", "斜挎包", "单肩包", "链条包", "编织包", "托特包", "小方包", "腋下包"],
    promptLabel: "包包"
  },
  handheld: {
    label: "手持物",
    type: "multi",
    default: ["无指定"],
    limit: 3,
    options: ["无指定", "手机", "咖啡杯", "书本", "雨伞", "折扇", "相机", "鲜花", "乐器"],
    promptLabel: "手持物"
  },
  prop: {
    label: "特殊道具",
    type: "multi",
    default: ["无指定"],
    limit: 3,
    options: ["无指定", "魔法杖", "法书", "权杖", "手杖", "长剑", "短剑", "武器模型", "枪械风道具"],
    promptLabel: "特殊道具"
  }
};

const state = {};
const coreGrid = document.getElementById("coreGrid");
const highlightRoot = document.getElementById("keyHighlights");
const promptOutput = document.getElementById("promptOutput");
const resetButton = document.getElementById("resetButton");
const copyButton = document.getElementById("copyButton");
const optionModal = document.getElementById("optionModal");
const modalTitle = document.getElementById("modalTitle");
const modalHint = document.getElementById("modalHint");
const modalOptions = document.getElementById("modalOptions");
const closeModalButton = document.getElementById("closeModalButton");
const clearModalButton = document.getElementById("clearModalButton");
const doneModalButton = document.getElementById("doneModalButton");
const advancedModal = document.getElementById("advancedModal");
const advancedModalTitle = document.getElementById("advancedModalTitle");
const advancedModalHint = document.getElementById("advancedModalHint");
const advancedModalBody = document.getElementById("advancedModalBody");
const closeAdvancedModalButton = document.getElementById("closeAdvancedModalButton");
const doneAdvancedModalButton = document.getElementById("doneAdvancedModalButton");

let activeModalField = null;

function initState() {
  Object.keys(fields).forEach((key) => {
    const field = fields[key];
    state[key] = field.type === "multi" ? [...field.default] : field.default;
  });
}

function normalizeSingle(value) {
  return value === "无指定" ? "" : value;
}

function normalizeMulti(values) {
  const filtered = values.filter(Boolean);
  if (!filtered.length) {
    return ["无指定"];
  }
  const withoutUnspecified = filtered.filter((item) => item !== "无指定");
  return withoutUnspecified.length ? withoutUnspecified : ["无指定"];
}

function setFieldValue(key, option) {
  const field = fields[key];

  if (field.type === "single") {
    state[key] = normalizeSingle(option);
    return;
  }

  const current = state[key];
  if (option === "无指定") {
    state[key] = ["无指定"];
    return;
  }

  if (current.includes(option)) {
    state[key] = normalizeMulti(current.filter((item) => item !== option));
  } else {
    state[key] = normalizeMulti(
      [...current.filter((item) => item !== "无指定"), option].slice(
        -(field.limit || field.options.length)
      )
    );
  }
}

function getDisplayText(key) {
  const value = state[key];
  if (Array.isArray(value)) {
    return value.includes("无指定") ? "" : value.join("、");
  }
  return value;
}

function createAdvancedField(key) {
  const field = fields[key];
  const card = document.createElement("article");
  card.className = "field-card";

  const title = document.createElement("div");
  title.className = "field-title";
  title.textContent = field.label;
  card.appendChild(title);

  const group = document.createElement("div");
  group.className = "chip-group";

  field.options.forEach((option) => {
    const chip = document.createElement("button");
    chip.type = "button";
    chip.className = "chip";
    chip.textContent = option;
    syncAdvancedChip(key, chip, option);
    chip.addEventListener("click", () => {
      setFieldValue(key, option);
      syncAdvancedGroup(key, group);
      renderPrompt();
    });
    group.appendChild(chip);
  });

  card.appendChild(group);
  return card;
}

function syncAdvancedChip(key, chip, option) {
  const field = fields[key];

  if (field.type === "single") {
    const current = state[key] || "无指定";
    chip.classList.toggle(
      "active",
      current === option || (!state[key] && option === "无指定")
    );
  } else {
    chip.classList.toggle("active", state[key].includes(option));
  }
}

function syncAdvancedGroup(key, group) {
  [...group.children].forEach((chip) => {
    syncAdvancedChip(key, chip, chip.textContent);
  });
}

function createMainControl(config) {
  const field = fields[config.key];

  if (MODAL_FIELDS.has(config.key)) {
    const trigger = document.createElement("button");
    trigger.type = "button";
    trigger.className = "core-trigger";

    const label = document.createElement("span");
    label.className = "core-label";
    label.textContent = field.label;

    const value = document.createElement("span");
    value.className = "core-value";
    const text = getDisplayText(config.key);
    value.textContent = text || "无指定";
    value.classList.toggle("is-empty", !text);

    trigger.append(label, value);
    trigger.addEventListener("click", () => openModal(config.key));
    return trigger;
  }

  const shell = document.createElement("label");
  shell.className = "core-select-shell";

  const label = document.createElement("span");
  label.className = "core-label";
  label.textContent = field.label;
  shell.appendChild(label);

  const select = document.createElement("select");
  select.className = "core-select";
  select.setAttribute("aria-label", field.label);

  field.options.forEach((option) => {
    const node = document.createElement("option");
    node.value = option === "无指定" ? "" : option;
    node.textContent = option;
    node.selected = normalizeSingle(option) === state[config.key];
    select.appendChild(node);
  });

  select.addEventListener("change", (event) => {
    state[config.key] = event.target.value;
    renderPrompt();
  });

  shell.appendChild(select);
  return shell;
}

function createCoreCard(config) {
  const card = document.createElement("article");
  card.className = "core-card";

  const row = document.createElement("div");
  row.className = `core-row${config.advanced.length ? "" : " no-advanced"}`;
  row.appendChild(createMainControl(config));

  if (config.advanced.length) {
    const toggle = document.createElement("button");
    toggle.type = "button";
    toggle.className = "advanced-toggle";
    toggle.textContent = "高级设置";
    row.appendChild(toggle);
    toggle.addEventListener("click", () => openAdvancedModal(config.key));
  }

  card.appendChild(row);
  return card;
}

function renderCoreGrid() {
  coreGrid.innerHTML = "";
  CORE_FIELDS.forEach((config) => {
    coreGrid.appendChild(createCoreCard(config));
  });
}

function syncModalButton(fieldKey, button, option) {
  const field = fields[fieldKey];

  if (field.type === "single") {
    const current = state[fieldKey] || "";
    button.classList.toggle("active", normalizeSingle(option) === current);
  } else {
    button.classList.toggle("active", state[fieldKey].includes(option));
  }
}

function syncModalOptions(fieldKey) {
  [...modalOptions.children].forEach((button) => {
    syncModalButton(fieldKey, button, button.textContent);
  });
}

function openModal(fieldKey) {
  activeModalField = fieldKey;
  const field = fields[fieldKey];
  modalTitle.textContent = field.label;
  modalHint.textContent = field.modalHint || "";
  modalOptions.innerHTML = "";

  field.options.forEach((option) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "modal-option";
    button.textContent = option;
    syncModalButton(fieldKey, button, option);
    button.addEventListener("click", () => {
      setFieldValue(fieldKey, option);
      syncModalOptions(fieldKey);
    });
    modalOptions.appendChild(button);
  });

  optionModal.hidden = false;
}

function closeModal() {
  optionModal.hidden = true;
  activeModalField = null;
  renderCoreGrid();
  renderPrompt();
}

function openAdvancedModal(fieldKey) {
  const config = CORE_FIELDS.find((item) => item.key === fieldKey);
  const field = fields[fieldKey];
  advancedModalTitle.textContent = `${field.label}高级设置`;
  advancedModalHint.textContent = "补充这个项目的细节选项。";
  advancedModalBody.innerHTML = "";
  config.advanced.forEach((advancedKey) => {
    advancedModalBody.appendChild(createAdvancedField(advancedKey));
  });
  advancedModal.hidden = false;
}

function closeAdvancedModal() {
  advancedModal.hidden = true;
  renderCoreGrid();
  renderPrompt();
}

function clearActiveModalField() {
  if (!activeModalField) {
    return;
  }

  const field = fields[activeModalField];
  state[activeModalField] = field.type === "multi" ? ["无指定"] : "";
  syncModalOptions(activeModalField);
}

function buildPrompt() {
  const orderedKeys = [
    ...CORE_FIELDS.map((item) => item.key),
    ...CORE_FIELDS.flatMap((item) => item.advanced)
  ];

  return orderedKeys
    .map((key) => {
      const text = getDisplayText(key);
      return text ? `${fields[key].promptLabel}：${text}` : "";
    })
    .filter(Boolean)
    .join("，");
}

function renderHighlights() {
  const keys = [
    "overallStyle",
    "age",
    "body",
    "temperament",
    "expression",
    "hairstyle",
    "top",
    "bottom",
    "legs",
    "shoes",
    "accessorySet"
  ];

  highlightRoot.innerHTML = "";
  keys.forEach((key) => {
    const text = getDisplayText(key);
    if (!text) {
      return;
    }
    const pill = document.createElement("span");
    pill.className = "highlight-pill";
    pill.textContent = `${fields[key].label} · ${text}`;
    highlightRoot.appendChild(pill);
  });
}

function renderPrompt() {
  promptOutput.value = buildPrompt();
  renderHighlights();
}

function resetAll() {
  initState();
  renderCoreGrid();
  renderPrompt();
}

async function copyPrompt() {
  const content = promptOutput.value.trim();
  if (!content) {
    copyButton.textContent = "没有可复制内容";
    setTimeout(() => {
      copyButton.textContent = "复制提示词";
    }, 1200);
    return;
  }

  try {
    await navigator.clipboard.writeText(content);
    copyButton.textContent = "已复制";
  } catch {
    promptOutput.focus();
    promptOutput.select();
    copyButton.textContent = "请手动复制";
  }

  setTimeout(() => {
    copyButton.textContent = "复制提示词";
  }, 1200);
}

document.addEventListener("click", (event) => {
  const target = event.target;
  if (target instanceof HTMLElement && target.dataset.closeModal === "true") {
    closeModal();
  }
  if (target instanceof HTMLElement && target.dataset.closeAdvanced === "true") {
    closeAdvancedModal();
  }
});

closeModalButton.addEventListener("click", closeModal);
doneModalButton.addEventListener("click", closeModal);
clearModalButton.addEventListener("click", clearActiveModalField);
closeAdvancedModalButton.addEventListener("click", closeAdvancedModal);
doneAdvancedModalButton.addEventListener("click", closeAdvancedModal);
resetButton.addEventListener("click", resetAll);
copyButton.addEventListener("click", copyPrompt);

initState();
renderCoreGrid();
renderPrompt();
