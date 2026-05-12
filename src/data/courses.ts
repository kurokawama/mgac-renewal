export type CoursePersona = "family" | "medical" | "business";

export type Course = {
  slug: string;
  name: string;
  shortName: string;
  price: number;
  priceNote?: string;
  hours?: number;
  hoursLabel: string;
  techniques: string;
  description: string;
  longDescription: string;
  curriculum: { title: string; detail: string }[];
  targetPersonas: CoursePersona[];
  features: string[];
  category: "core" | "advanced" | "career";
  order: number;
};

export const courses: Course[] = [
  {
    slug: "basic",
    name: "MGAベーシックコース",
    shortName: "ベーシック",
    price: 275000,
    hours: 54,
    hoursLabel: "全54時間",
    techniques: "64種目",
    description:
      "ストレッチの基礎理論から64種目の実技まで、土台を一気に身につける最重要コース。",
    longDescription:
      "解剖学・運動学の基礎から、関節可動域を引き出す64種目のストレッチ技術までを54時間で習得します。家族のセルフケアにも、医療現場での臨床応用にも繋がる、すべての受講生におすすめする基礎コースです。",
    curriculum: [
      { title: "解剖学・運動生理学の基礎", detail: "筋骨格系の構造と機能を理解" },
      { title: "ストレッチ理論", detail: "静的・動的ストレッチの使い分け" },
      { title: "上肢ストレッチ20種", detail: "肩・肘・手首の可動域改善" },
      { title: "下肢ストレッチ24種", detail: "股関節・膝・足首のアプローチ" },
      { title: "体幹ストレッチ20種", detail: "脊柱・骨盤・呼吸の連動" },
      { title: "総合実技テスト", detail: "全64種目の習熟度評価" },
    ],
    targetPersonas: ["family", "medical", "business"],
    features: [
      "入会金・教材費なし",
      "全国5校舎で受講可能",
      "未経験から始められる",
      "MGA修了証発行",
    ],
    category: "core",
    order: 1,
  },
  {
    slug: "advance",
    name: "MGAアドバンスコース",
    shortName: "アドバンス",
    price: 275000,
    hours: 34,
    hoursLabel: "全34時間",
    techniques: "20種目",
    description:
      "ベーシック修了者向け。臨床応用と難症例対応20種目を学ぶ上級コース。",
    longDescription:
      "ベーシックコース修了を前提に、慢性痛・スポーツ障害・姿勢不良など難症例への臨床応用を学びます。20種目の応用テクニックと評価法、施術計画の組み立てまでを34時間で身につけます。",
    curriculum: [
      { title: "臨床評価とアセスメント", detail: "問診・視診・触診の体系化" },
      { title: "肩関節障害アプローチ", detail: "四十肩・インピンジメント" },
      { title: "腰部・骨盤アプローチ", detail: "慢性腰痛・坐骨神経痛" },
      { title: "スポーツ障害対応", detail: "ランナー膝・テニス肘等" },
      { title: "施術プログラム設計", detail: "短期・長期プランの作り方" },
    ],
    targetPersonas: ["medical", "business"],
    features: [
      "ベーシック修了が前提",
      "症例別アプローチ",
      "施術計画立案スキル",
      "MGA認定アドバンス資格",
    ],
    category: "advanced",
    order: 2,
  },
  {
    slug: "resistance",
    name: "MGAレジスタンスコース",
    shortName: "レジスタンス",
    price: 165000,
    hours: 26,
    hoursLabel: "全26時間",
    techniques: "34種目",
    description:
      "筋力強化と関節安定化の34種目。リハ・トレーニング指導に直結。",
    longDescription:
      "PNFや等尺性収縮を用いたレジスタンスストレッチ34種目を学びます。可動域改善だけでなく筋出力・関節安定性を同時に高めるテクニックで、リハビリ・スポーツ現場で即戦力となります。",
    curriculum: [
      { title: "PNFの理論と実技", detail: "固有受容性神経筋促通法" },
      { title: "アイソメトリック手技", detail: "等尺性収縮の活用" },
      { title: "上肢レジスタンス12種", detail: "肩甲帯・上肢筋群" },
      { title: "下肢レジスタンス14種", detail: "股関節・大腿・下腿" },
      { title: "体幹レジスタンス8種", detail: "深層筋・コア活性化" },
    ],
    targetPersonas: ["medical", "business"],
    features: [
      "リハビリ現場で即活用",
      "アスリート指導に有効",
      "短期間で技術習得",
      "MGA認定レジスタンス資格",
    ],
    category: "advanced",
    order: 3,
  },
  {
    slug: "trigger",
    name: "MGAトリガーコース",
    shortName: "トリガー",
    price: 165000,
    hours: 18,
    hoursLabel: "全18時間",
    techniques: "24種目",
    description:
      "トリガーポイント24種目で慢性痛にダイレクトアプローチ。",
    longDescription:
      "筋膜性疼痛症候群（MPS）の原因となるトリガーポイントへの24種目の徒手アプローチを学びます。慢性的な肩こり・腰痛・頭痛などへの即効性が期待できる技術です。",
    curriculum: [
      { title: "トリガーポイント理論", detail: "関連痛のメカニズム" },
      { title: "上肢トリガー10種", detail: "僧帽筋・棘下筋・前腕屈筋" },
      { title: "下肢トリガー10種", detail: "中臀筋・腓腹筋・足底" },
      { title: "頭頸部トリガー4種", detail: "後頭下筋群・側頭筋" },
    ],
    targetPersonas: ["medical", "business"],
    features: [
      "慢性痛への即効性",
      "短時間で身につく",
      "他コースと組合せ可能",
      "MGA認定トリガー資格",
    ],
    category: "advanced",
    order: 4,
  },
  {
    slug: "dynamic",
    name: "MGAダイナミックコース",
    shortName: "ダイナミック",
    price: 165000,
    hours: 18,
    hoursLabel: "全18時間",
    techniques: "24種目",
    description:
      "動的ストレッチ24種目。ウォームアップ・パフォーマンス向上に。",
    longDescription:
      "競技前のウォームアップやコンディショニングに有効な動的ストレッチ24種目を学習。神経筋協調・パフォーマンス向上を狙ったメニュー設計までを身につけます。",
    curriculum: [
      { title: "動的ストレッチの原理", detail: "神経筋促通の理論" },
      { title: "上肢ダイナミック8種", detail: "投球・打撃動作の準備" },
      { title: "下肢ダイナミック10種", detail: "走・跳・蹴動作の準備" },
      { title: "全身連動メニュー6種", detail: "競技別ウォームアップ" },
    ],
    targetPersonas: ["medical", "business", "family"],
    features: [
      "競技パフォーマンス向上",
      "怪我予防に有効",
      "学生スポーツ指導者にも",
      "MGA認定ダイナミック資格",
    ],
    category: "advanced",
    order: 5,
  },
  {
    slug: "anatomy-train",
    name: "MGAアナトミートレインコース",
    shortName: "アナトミートレイン",
    price: 165000,
    hours: 14,
    hoursLabel: "全14時間",
    techniques: "18種目",
    description:
      "筋膜連鎖アナトミートレイン18種目。全身を一本でつなぐ視点を獲得。",
    longDescription:
      "筋膜の連続性「アナトミートレイン」の概念を基に、全身を1本のラインとして捉える18種目のアプローチを習得。局所だけでなく全身バランスから不調にアプローチします。",
    curriculum: [
      { title: "アナトミートレイン概論", detail: "12本のラインの理解" },
      { title: "スーパーフィシャル・バックライン", detail: "後面連鎖" },
      { title: "スーパーフィシャル・フロントライン", detail: "前面連鎖" },
      { title: "ラテラルライン・スパイラルライン", detail: "側面・螺旋連鎖" },
      { title: "アームライン・コアライン", detail: "上肢・深層連鎖" },
    ],
    targetPersonas: ["medical", "business"],
    features: [
      "筋膜連鎖の視点を獲得",
      "全身バランス改善",
      "他流派とも併用可能",
      "MGA認定アナトミートレイン資格",
    ],
    category: "advanced",
    order: 6,
  },
  {
    slug: "regional",
    name: "MGA地方コース",
    shortName: "地方コース",
    price: 198000,
    priceNote: "動画76本＋実技スクーリング4日",
    hoursLabel: "動画76本＋実技4日",
    techniques: "動画76本＋実技スクーリング4日",
    description:
      "通学が難しい方向け。動画76本＋実技4日でベーシック相当を習得。",
    longDescription:
      "校舎から離れた地域にお住まいの方向けのハイブリッドコース。オンラインで動画76本を学習した後、実技スクーリング4日でアウトプット。働きながら・育児しながらでも続けやすい構成です。",
    curriculum: [
      { title: "オンライン理論講義 動画76本", detail: "解剖学・運動学・実技解説" },
      { title: "オンライン課題提出", detail: "理解度を可視化" },
      { title: "実技スクーリング1日目", detail: "基本テクニックの確認" },
      { title: "実技スクーリング2〜3日目", detail: "応用技術の習得" },
      { title: "実技スクーリング4日目", detail: "総合実技・修了試験" },
    ],
    targetPersonas: ["family", "medical", "business"],
    features: [
      "全国どこからでも受講可能",
      "自分のペースで学べる",
      "実技4日で確実に習得",
      "MGA修了証発行",
    ],
    category: "core",
    order: 7,
  },
  {
    slug: "dr-stretch",
    name: "Dr.stretch採用前提コース",
    shortName: "Dr.stretch採用前提",
    price: 357500,
    priceNote: "採用後178,750円キャッシュバック",
    hours: 57,
    hoursLabel: "全57時間",
    techniques: "ベーシック相当＋採用研修",
    description:
      "Dr.stretchトレーナー採用を前提とした最短育成コース。採用後にキャッシュバックあり。",
    longDescription:
      "世界250店舗以上を展開するDr.stretchへの就業を前提とした特別コース。57時間でベーシック相当の技術＋採用後の店舗実務を身につけ、採用が確定した時点で178,750円がキャッシュバックされます（実質負担178,750円）。",
    curriculum: [
      { title: "解剖・運動学の基礎", detail: "Dr.stretch水準の基礎理論" },
      { title: "Dr.stretch標準ストレッチ", detail: "店舗実装テクニック" },
      { title: "接客・カウンセリング", detail: "顧客対応の基本" },
      { title: "店舗オペレーション", detail: "1日の流れ・記録" },
      { title: "採用面談・店舗配属", detail: "面接対策・配属相談" },
    ],
    targetPersonas: ["business"],
    features: [
      "採用後178,750円キャッシュバック",
      "未経験から正社員トレーナーへ",
      "全国の店舗で勤務可能",
      "Dr.stretch認定トレーナー資格",
    ],
    category: "career",
    order: 8,
  },
];

export function getCourseBySlug(slug: string): Course | undefined {
  return courses.find((c) => c.slug === slug);
}

export const courseSlugs = courses.map((c) => c.slug);

export function formatPrice(price: number): string {
  return new Intl.NumberFormat("ja-JP").format(price);
}
