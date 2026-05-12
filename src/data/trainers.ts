export type Trainer = {
  slug: string;
  name: string;
  nameKana: string;
  title: string;
  campus: string;
  qualifications: string[];
  specialties: string[];
  bio: string;
  yearsOfExperience: number;
};

export const trainers: Trainer[] = [
  {
    slug: "takahashi-shinya",
    name: "高橋 慎也",
    nameKana: "たかはし しんや",
    title: "MGA代表トレーナー / 統括講師",
    campus: "新宿校",
    qualifications: [
      "理学療法士",
      "Dr.stretch認定マスタートレーナー",
      "アナトミートレイン公認指導者",
    ],
    specialties: ["臨床応用", "アドバンス指導", "難症例対応"],
    bio:
      "理学療法士として総合病院で10年以上臨床を経験後、MGA創立メンバーとして参画。年間200名以上の受講生を指導し、医療現場で使えるストレッチを徹底して伝えています。",
    yearsOfExperience: 18,
  },
  {
    slug: "ito-megumi",
    name: "伊藤 めぐみ",
    nameKana: "いとう めぐみ",
    title: "シニアトレーナー / ベーシック主任",
    campus: "新宿校",
    qualifications: [
      "柔道整復師",
      "JATI認定トレーニング指導者",
      "MGA認定アドバンス",
    ],
    specialties: ["ベーシック指導", "女性向けケア", "産後ケア"],
    bio:
      "整骨院での臨床経験を経て、MGAでベーシックコースを担当。とくに女性のセルフケア・産後ケアに精通し、家族・主婦層からの支持を集めています。",
    yearsOfExperience: 12,
  },
  {
    slug: "saito-takeshi",
    name: "斎藤 剛",
    nameKana: "さいとう たけし",
    title: "シニアトレーナー / レジスタンス主任",
    campus: "新宿校",
    qualifications: [
      "鍼灸師",
      "NSCA認定パーソナルトレーナー",
      "MGA認定レジスタンス",
    ],
    specialties: ["スポーツ障害", "レジスタンス", "競技力向上"],
    bio:
      "プロアスリート・実業団選手のパーソナルトレーナーとして10年以上活動。スポーツ現場で使えるレジスタンス・ダイナミックの指導を得意としています。",
    yearsOfExperience: 14,
  },
  {
    slug: "matsumoto-aya",
    name: "松本 彩",
    nameKana: "まつもと あや",
    title: "トレーナー / 大久保校責任者",
    campus: "大久保校",
    qualifications: [
      "あん摩マッサージ指圧師",
      "MGA認定ベーシック・アドバンス",
    ],
    specialties: ["トリガーポイント", "慢性痛", "セルフケア"],
    bio:
      "治療院での施術経験を活かし、トリガーポイントを中心とした慢性痛アプローチを得意とします。少人数制クラスで一人ひとり丁寧に指導します。",
    yearsOfExperience: 10,
  },
  {
    slug: "yamada-kenichi",
    name: "山田 健一",
    nameKana: "やまだ けんいち",
    title: "シニアトレーナー / 名古屋校責任者",
    campus: "名古屋校",
    qualifications: [
      "理学療法士",
      "MGA認定アドバンス",
      "アナトミートレイン公認指導者",
    ],
    specialties: ["臨床応用", "筋膜連鎖", "アナトミートレイン"],
    bio:
      "急性期病院でのリハビリ経験を経て名古屋校を立ち上げ。アナトミートレインの視点を活かした全身評価が強みです。",
    yearsOfExperience: 15,
  },
  {
    slug: "kobayashi-misaki",
    name: "小林 美咲",
    nameKana: "こばやし みさき",
    title: "トレーナー / 名古屋校",
    campus: "名古屋校",
    qualifications: ["健康運動指導士", "MGA認定ベーシック"],
    specialties: ["ベーシック指導", "高齢者ケア", "家庭向けセルフケア"],
    bio:
      "スポーツクラブで高齢者の運動指導を10年以上経験。ご家族でのセルフケアに使えるストレッチを丁寧にお伝えしています。",
    yearsOfExperience: 11,
  },
  {
    slug: "nakata-ryosuke",
    name: "中田 涼介",
    nameKana: "なかた りょうすけ",
    title: "シニアトレーナー / 大阪校責任者",
    campus: "大阪校",
    qualifications: [
      "柔道整復師",
      "MGA認定アドバンス・レジスタンス",
      "Dr.stretch認定トレーナー",
    ],
    specialties: ["独立開業支援", "Dr.stretch採用研修", "店舗運営"],
    bio:
      "Dr.stretch店舗での店長経験を活かし、独立開業・Dr.stretch採用希望者の指導を担当。ビジネス視点でのアドバイスも好評です。",
    yearsOfExperience: 13,
  },
  {
    slug: "fujita-rina",
    name: "藤田 莉奈",
    nameKana: "ふじた りな",
    title: "トレーナー / 大阪校",
    campus: "大阪校",
    qualifications: ["看護師", "MGA認定ベーシック・トリガー"],
    specialties: ["医療専門職向け指導", "トリガーポイント", "慢性痛"],
    bio:
      "看護師として急性期病棟で勤務した経歴を持ち、医療従事者向けの実践的なストレッチ指導を担当。専門用語にも対応した解説が好評です。",
    yearsOfExperience: 10,
  },
  {
    slug: "okumura-daisuke",
    name: "奥村 大輔",
    nameKana: "おくむら だいすけ",
    title: "シニアトレーナー / 福岡校責任者",
    campus: "福岡校",
    qualifications: [
      "理学療法士",
      "MGA認定アドバンス",
      "NSCA-CPT",
    ],
    specialties: ["スポーツ現場", "アスリート対応", "独立開業支援"],
    bio:
      "プロサッカーチームのトレーナー経験を経て福岡校を担当。九州エリアの独立開業希望者を多数輩出しています。",
    yearsOfExperience: 16,
  },
];

export function getTrainerBySlug(slug: string): Trainer | undefined {
  return trainers.find((t) => t.slug === slug);
}
