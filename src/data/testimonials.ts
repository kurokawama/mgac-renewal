export type Persona = "family" | "medical" | "business";

export type Testimonial = {
  id: string;
  persona: Persona;
  name: string;
  age: number;
  occupation: string;
  course: string;
  campus: string;
  rating: number;
  body: string;
};

export const testimonials: Testimonial[] = [
  {
    id: "fam-1",
    persona: "family",
    name: "M.K.",
    age: 38,
    occupation: "主婦",
    course: "ベーシック",
    campus: "新宿校",
    rating: 5,
    body:
      "夫の腰痛と高校生の息子の野球部のケアのために受講しました。家庭で実践できる64種目を学べたことで、家族の不調を自分の手で和らげられるようになり、本当に感謝しています。",
  },
  {
    id: "fam-2",
    persona: "family",
    name: "T.S.",
    age: 45,
    occupation: "会社員（父親）",
    course: "地方コース",
    campus: "オンライン＋名古屋校",
    rating: 5,
    body:
      "高齢の母のためにと始めましたが、地方コースで動画と実技を組み合わせて学べたので、平日忙しい中でも続けられました。母も以前より体が動くようになり、家族で喜んでいます。",
  },
  {
    id: "fam-3",
    persona: "family",
    name: "Y.N.",
    age: 32,
    occupation: "ヨガインストラクター",
    course: "ベーシック",
    campus: "大阪校",
    rating: 5,
    body:
      "自分自身の体のケアと、レッスン生へのアドバイスのために受講。医学的根拠を踏まえてストレッチを語れるようになり、レッスンの質が大きく変わりました。",
  },
  {
    id: "med-1",
    persona: "medical",
    name: "R.O.",
    age: 29,
    occupation: "理学療法士（病院勤務）",
    course: "ベーシック→アドバンス",
    campus: "新宿校",
    rating: 5,
    body:
      "病院のリハビリでは時間に限りがあり、ストレッチを体系的に学ぶ機会がありませんでした。MGAでは臨床応用まで踏み込んで学べ、患者さんの可動域改善が明らかに早くなりました。",
  },
  {
    id: "med-2",
    persona: "medical",
    name: "K.H.",
    age: 35,
    occupation: "柔道整復師（整骨院勤務）",
    course: "アドバンス＋レジスタンス",
    campus: "名古屋校",
    rating: 5,
    body:
      "施術メニューにレジスタンスストレッチを加えてから、リピート率と紹介率が上がりました。アドバンスで学んだ評価法を活かして、患者さんに納得感のある説明ができています。",
  },
  {
    id: "med-3",
    persona: "medical",
    name: "A.F.",
    age: 27,
    occupation: "看護師",
    course: "ベーシック＋トリガー",
    campus: "大阪校",
    rating: 4,
    body:
      "看護師として患者さんへのケアの幅を広げたく受講しました。トリガーポイントの知識は、自分自身の肩こり・腰痛のケアにも役立っています。",
  },
  {
    id: "biz-1",
    persona: "business",
    name: "D.M.",
    age: 31,
    occupation: "元営業職→ストレッチ店経営",
    course: "Dr.stretch採用前提",
    campus: "新宿校",
    rating: 5,
    body:
      "未経験から57時間でDr.stretchトレーナーとして採用され、3年後に独立。MGAで学んだ技術と接客が今の店舗運営の土台になっています。",
  },
  {
    id: "biz-2",
    persona: "business",
    name: "S.W.",
    age: 36,
    occupation: "整体院オーナー",
    course: "ベーシック→アドバンス→レジスタンス",
    campus: "福岡校",
    rating: 5,
    body:
      "既存の整体院にMGAのメニューを導入。客単価が上がり、紹介の輪が広がりました。九州唯一の校舎で体系的に学べるのが本当にありがたいです。",
  },
  {
    id: "biz-3",
    persona: "business",
    name: "H.I.",
    age: 42,
    occupation: "Dr.stretch加盟店オーナー",
    course: "アドバンス＋トリガー",
    campus: "新宿校",
    rating: 5,
    body:
      "Dr.stretchの加盟店としてスタッフ育成にもMGAを活用。共通の言語と技術を持てるので、店舗全体のサービス品質が安定します。",
  },
];

export function getTestimonialsByPersona(persona: Persona): Testimonial[] {
  return testimonials.filter((t) => t.persona === persona);
}

export const testimonialsByPersona = {
  family: testimonials.filter((t) => t.persona === "family"),
  medical: testimonials.filter((t) => t.persona === "medical"),
  business: testimonials.filter((t) => t.persona === "business"),
};
