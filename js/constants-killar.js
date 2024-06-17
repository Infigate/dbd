const symbols = [
  {
    img: "./img/killar/zusan.webp",
    text: "ずさんな肉屋",
    group: "common",
    user: "共通パーク",
  },
  {
    img: "./img/killar/irapu.webp",
    text: "イラプション",
    group: "common",
    user: "共通パーク",
  },
  {
    img: "./img/killar/mind.webp",
    text: "マイブレ",
    group: "common",
    user: "共通パーク",
  },
  {
    img: "./img/killar/kariko.webp",
    text: "狩りの興奮",
    group: "common",
    user: "共通パーク",
  },
  {
    img: "./img/killar/noone.webp",
    text: "ノーワン",
    group: "common",
    user: "共通パーク",
  },
  {
    img: "./img/killar/sasayaki.webp",
    text: "囁き",
    group: "common",
    user: "共通パーク",
  },
  {
    img: "./img/killar/mittei.webp",
    text: "影の密偵",
    group: "common",
    user: "共通パーク",
  },
  {
    img: "./img/killar/sinobi.webp",
    text: "忍び寄る者",
    group: "common",
    user: "共通パーク",
  },
  {
    img: "./img/killar/murumuru.webp",
    text: "憎悪の囁き",
    group: "common",
    user: "共通パーク",
  },
  {
    img: "./img/killar/utikibo.webp",
    text: "打ち砕かれた希望",
    group: "common",
    user: "共通パーク",
  },
  {
    img: "./img/killar/sa-ji.webp",
    text: "景気付け",
    group: "common",
    user: "共通パーク",
  },
  {
    img: "./img/killar/tuiseki.webp",
    text: "死を呼ぶ追跡者",
    group: "common",
    user: "共通パーク",
  },
  {
    img: "./img/killar/mujihi.webp",
    text: "無慈悲",
    group: "common",
    user: "共通パーク",
  },
  {
    img: "./img/killar/kokatu.webp",
    text: "狡猾",
    group: "common",
    user: "共通パーク",
  },
  {
    img: "./img/killar/saidan.webp",
    text: "異形の祭壇",
    group: "common",
    user: "共通パーク",
  },
  {
    img: "./img/killar/tetuwan.webp",
    text: "鋼の握力",
    group: "common",
    user: "共通パーク",
  },
  {
    img: "./img/killar/heisyo.webp",
    text: "閉所恐怖症",
    group: "common",
    user: "共通パーク",
  },
  {
    img: "./img/killar/his.webp",
    text: "集団ヒステリー",
    group: "common",
    user: "共通パーク",
  },
  {
    img: "./img/killar/mayakasi.webp",
    text: "まやかし",
    group: "crown",
    user: "クラウン",
  },
  {
    img: "./img/killar/piero.webp",
    text: "ピエロ恐怖症",
    group: "crown",
    user: "クラウン",
  },
  {
    img: "./img/killar/itati.webp",
    text: "イタチが飛び出した",
    group: "crown",
    user: "クラウン",
  },

  {
    img: "./img/killar/star.webp",
    text: "スターに憧れて",
    group: "trickstar",
    user: "トリックスター",
  },
  {
    img: "./img/killar/crowd.webp",
    text: "クラウドコントロール",
    group: "trickstar",
    user: "トリックスター",
  },
  {
    img: "./img/killar/hukuro.webp",
    text: "袋小路",
    group: "trickstar",
    user: "トリックスター",
  },

  {
    img: "./img/killar/dedoro.webp",
    text: "デッドロック",
    group: "senoba",
    user: "セノバイト",
  },
  {
    img: "./img/killar/gangu.webp",
    text: "玩具",
    group: "senoba",
    user: "セノバイト",
  },
  {
    img: "./img/killar/kutuuto.webp",
    text: "苦痛という名の賜り物",
    group: "senoba",
    user: "セノバイト",
  },

  {
    img: "./img/killar/knockout.webp",
    text: "ノックアウト",
    group: "canival",
    user: "カニバル",
  },
  {
    img: "./img/killar/babetiri.webp",
    text: "バベチリ",
    group: "canival",
    user: "カニバル",
  },
  {
    img: "./img/killar/furan.webp",
    text: "フランクリンの悲劇",
    group: "canival",
    user: "カニバル",
  },

  {
    img: "./img/killar/fireup.webp",
    text: "ファイヤーアップ",
    group: "nightmare",
    user: "ナイトメア",
  },
  {
    img: "./img/killar/remember.webp",
    text: "リメンバーミー",
    group: "nightmare",
    user: "ナイトメア",
  },
  {
    img: "./img/killar/woden.webp",
    text: "血の番人",
    group: "nightmare",
    user: "ナイトメア",
  },

  {
    img: "./img/killar/hukyou.webp",
    text: "不協和音",
    group: "resion",
    user: "リージョン",
  },
  {
    img: "./img/killar/kyoki.webp",
    text: "狂気の根性",
    group: "resion",
    user: "リージョン",
  },
  {
    img: "./img/killar/meiden.webp",
    text: "アイアンメイデン",
    group: "resion",
    user: "リージョン",
  },

  {
    img: "./img/killar/hukitu.webp",
    text: "不吉な包囲",
    group: "artist",
    user: "アーティスト",
  },
  {
    img: "./img/killar/kyomei.webp",
    text: "共鳴する苦痛",
    group: "artist",
    user: "アーティスト",
  },
  {
    img: "./img/killar/penti.webp",
    text: "ペンティメント",
    group: "artist",
    user: "アーティスト",
  },

  {
    img: "./img/killar/genkyo.webp",
    text: "不安の元凶",
    group: "trapper",
    user: "トラッパー",
  },
  {
    img: "./img/killar/yaban.webp",
    text: "野蛮な力",
    group: "trapper",
    user: "トラッパー",
  },
  {
    img: "./img/killar/ajite.webp",
    text: "興奮",
    group: "trapper",
    user: "トラッパー",
  },

  {
    img: "./img/killar/hukutu.webp",
    text: "不屈",
    group: "billy",
    user: "ヒルビリー",
  },
  {
    img: "./img/killar/lightborn.webp",
    text: "光より出でし者",
    group: "billy",
    user: "ヒルビリー",
  },
  {
    img: "./img/killar/garakuta.webp",
    text: "ガラクタいじり",
    group: "billy",
    user: "ヒルビリー",
  },

  {
    img: "./img/killar/myougi.webp",
    text: "処刑人の妙技",
    group: "pig",
    user: "ピッグ",
  },
  {
    img: "./img/killar/kansi.webp",
    text: "監視",
    group: "pig",
    user: "ピッグ",
  },
  {
    img: "./img/killar/tenbin.webp",
    text: "選択は君次第だ",
    group: "pig",
    user: "ピッグ",
  },

  {
    img: "./img/killar/daisan.webp",
    text: "第三の封印",
    group: "hug",
    user: "ハグ",
  },
  {
    img: "./img/killar/hametu.webp",
    text: "破滅",
    group: "hug",
    user: "ハグ",
  },
  {
    img: "./img/killar/deboa.webp",
    group: "貪られる希望",
    user: "ハグ",
  },

  {
    img: "./img/killar/zenmei.webp",
    text: "喘鳴",
    group: "nurse",
    user: "ナース",
  },
  {
    img: "./img/killar/tanato.webp",
    text: "死恐怖症",
    group: "nurse",
    user: "ナース",
  },
  {
    img: "./img/killar/nasuko.webp",
    text: "看護師の使命",
    group: "nurse",
    user: "ナース",
  },

  {
    img: "./img/killar/attouteki.webp",
    text: "圧倒的存在感",
    group: "doctor",
    user: "ドクター",
  },
  {
    img: "./img/killar/kansatu.webp",
    text: "観察＆虐待",
    group: "doctor",
    user: "ドクター",
  },
  {
    img: "./img/killar/obatya.webp",
    text: "オーバーチャージ",
    group: "doctor",
    user: "ドクター",
  },

  {
    img: "./img/killar/jigoku.webp",
    text: "地獄耳",
    group: "gost",
    user: "ゴーストフェイス",
  },
  {
    img: "./img/killar/senritu.webp",
    text: "戦慄",
    group: "gost",
    user: "ゴーストフェイス",
  },
  {
    img: "./img/killar/onmitu.webp",
    text: "隠密の追跡",
    group: "gost",
    user: "ゴーストフェイス",
  },

  {
    img: "./img/killar/daraku.webp",
    text: "堕落の介入",
    group: "prage",
    user: "プレイグ",
  },
  {
    img: "./img/killar/ojike.webp",
    text: "伝播する怖気",
    group: "prage",
    user: "プレイグ",
  },
  {
    img: "./img/killar/yamino.webp",
    text: "闇の信仰心",
    group: "prage",
    user: "プレイグ",
  },

  {
    img: "./img/killar/hensoku.webp",
    text: "変速機",
    group: "death",
    user: "デススリンガー",
  },
  {
    img: "./img/killar/sibito.webp",
    text: "死人のスイッチ",
    group: "death",
    user: "デススリンガー",
  },
  {
    img: "./img/killar/hohuku.webp",
    text: "報復",
    group: "death",
    user: "デススリンガー",
  },

  {
    img: "./img/killar/onryou.webp",
    text: "怨霊の怒り",
    group: "spilit",
    user: "スピリット",
  },
  {
    img: "./img/killar/reisyo.webp",
    text: "霊障の地",
    group: "spilit",
    user: "スピリット",
  },
  {
    img: "./img/killar/enkon.webp",
    text: "怨恨",
    group: "spilit",
    user: "スピリット",
  },

  {
    img: "./img/killar/hanran.webp",
    text: "氾濫する憤怒",
    group: "sadako",
    user: "貞子",
  },
  {
    img: "./img/killar/umi.webp",
    text: "海の叫び声",
    group: "sadako",
    user: "貞子",
  },
  {
    img: "./img/killar/dotou.webp",
    text: "怒涛の嵐",
    group: "sadako",
    user: "貞子",
  },

  {
    img: "./img/killar/hosyoku.webp",
    text: "捕食者",
    group: "wraith",
    user: "レイス",
  },
  {
    img: "./img/killar/tuisekisya.webp",
    text: "血の追跡者",
    group: "wraith",
    user: "レイス",
  },
  {
    img: "./img/killar/syadobo.webp",
    text: "闇より出でし者",
    group: "wraith",
    user: "レイス",
  },

  {
    img: "./img/killar/otanosimi.webp",
    text: "最後のお楽しみ",
    group: "shape",
    user: "シェイプ",
  },
  {
    img: "./img/killar/kumo.webp",
    text: "弄ばれる獲物",
    group: "shape",
    user: "シェイプ",
  },
  {
    img: "./img/killar/dairai.webp",
    text: "消えゆく灯",
    group: "shape",
    user: "シェイプ",
  },

  {
    img: "./img/killar/zansin.webp",
    text: "残心の戦術",
    group: "oni",
    user: "鬼",
  },
  {
    img: "./img/killar/tinokyoumei.webp",
    text: "血の共鳴",
    group: "oni",
    user: "鬼",
  },
  {
    img: "./img/killar/tentyu.webp",
    text: "天誅",
    group: "oni",
    user: "鬼",
  },

  {
    img: "./img/killar/tamekomi.webp",
    text: "溜め込み屋",
    group: "twins",
    user: "ツインズ",
  },
  {
    img: "./img/killar/hakugai.webp",
    text: "迫害",
    group: "twins",
    user: "ツインズ",
  },
  {
    img: "./img/killar/todome.webp",
    text: "とどめの一撃",
    group: "twins",
    user: "ツインズ",
  },

  {
    img: "./img/killar/mojyu.webp",
    text: "猛獣",
    group: "hunt",
    user: "ハントレス",
  },
  {
    img: "./img/killar/nawabari.webp",
    text: "縄張り意識",
    group: "hunt",
    user: "ハントレス",
  },
  {
    img: "./img/killar/rarabai.webp",
    text: "女狩人の子守歌",
    group: "hunt",
    user: "ハントレス",
  },
  {
    img: "./img/killar/identeki.webp",
    text: "遺伝的限界",
    group: "singura",
    user: "シンギュラリティ",
  },
  {
    img: "./img/killar/kyousei.webp",
    text: "躊躇の強制",
    group: "singura",
    user: "シンギュラリティ",
  },
  {
    img: "./img/killar/kikai.webp",
    text: "機械学習",
    group: "singura",
    user: "シンギュラリティ",
  },
  {
    img: "./img/killar/hutari.webp",
    text: "二人遊び",
    group: "chacky",
    user: "チャッキー",
  },
  {
    img: "./img/killar/sinumade.webp",
    text: "死ぬまで親友",
    group: "chacky",
    user: "チャッキー",
  },
  {
    img: "./img/killar/denti.webp",
    text: "電池付き",
    group: "chacky",
    user: "チャッキー",
  },

  {
    img: "./img/killar/dragon.webp",
    text: "ドラゴンの掌握",
    group: "bright",
    user: "ブライト",
  },
  {
    img: "./img/killar/onkei.webp",
    text: "血の恩恵",
    group: "bright",
    user: "ブライト",
  },
  {
    img: "./img/killar/husi.webp",
    text: "不死",
    group: "bright",
    user: "ブライト",
  },

  {
    img: "./img/killar/kaitai.webp",
    text: "解体",
    group: "dredge",
    user: "ドレッジ",
  },
  {
    img: "./img/killar/roken.webp",
    text: "露見する闇",
    group: "dredge",
    user: "ドレッジ",
  },
  {
    img: "./img/killar/huhai.webp",
    text: "腐敗の気配",
    group: "dredge",
    user: "ドレッジ",
  },

  {
    img: "./img/killar/kakureba.webp",
    text: "隠れ場なし",
    group: "night",
    user: "ナイト",
  },
  {
    img: "./img/killar/hubu.webp",
    text: "ヒュブリス",
    group: "night",
    user: "ナイト",
  },
  {
    img: "./img/killar/yamitai.webp",
    text: "闇との対面",
    group: "night",
    user: "ナイト",
  },

  {
    img: "./img/killar/situyou.webp",
    text: "執拗な狩り",
    group: "marchan",
    user: "マーチャント",
  },
  {
    img: "./img/killar/basi.webp",
    text: "バシッ！",
    group: "marchan",
    user: "マーチャント",
  },
  {
    img: "./img/killar/honenuki.webp",
    text: "骨抜きの作用",
    group: "marchan",
    user: "マーチャント",
  },
  {
    img: "./img/killar/jintai.webp",
    text: "人体の超越",
    group: "buy",
    user: "購入パーク",
  },
  {
    img: "./img/killar/titaku.webp",
    text: "知覚覚醒",
    group: "buy",
    user: "購入パーク",
  },
  {
    img: "./img/killar/syumatu.webp",
    text: "終末期",
    group: "buy",
    user: "購入パーク",
  },
];
