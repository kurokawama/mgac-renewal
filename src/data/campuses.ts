export type Campus = {
  slug: string;
  name: string;
  prefecture: string;
  region: string;
  address: string;
  postalCode: string;
  access: string;
  phone: string;
  hours: string;
  mapEmbedUrl: string;
  description: string;
  features: string[];
  coords: { lat: number; lng: number };
};

export const campuses: Campus[] = [
  {
    slug: "shinjuku",
    name: "新宿校",
    prefecture: "東京都",
    region: "関東",
    postalCode: "〒160-0022",
    address: "東京都新宿区新宿2-8-17 SYビル8F",
    access: "東京メトロ丸ノ内線「新宿御苑前駅」より徒歩3分／JR「新宿駅」より徒歩10分",
    phone: "050-5491-2929",
    hours: "10:00〜21:00（年末年始除く）",
    mapEmbedUrl:
      "https://www.google.com/maps?q=%E6%9D%B1%E4%BA%AC%E9%83%BD%E6%96%B0%E5%AE%BF%E5%8C%BA%E6%96%B0%E5%AE%BF2-8-17&output=embed",
    description:
      "MGAの中核校舎。最新の実技スタジオを備え、平日夜・土日も受講しやすい立地です。",
    features: [
      "新宿御苑前駅から徒歩3分",
      "平日21時まで受講可能",
      "実技スタジオ完備",
      "全コース開講",
    ],
    coords: { lat: 35.6896, lng: 139.7099 },
  },
  {
    slug: "okubo",
    name: "大久保校",
    prefecture: "東京都",
    region: "関東",
    postalCode: "〒169-0073",
    address: "東京都新宿区百人町1-23-4",
    access: "JR山手線「新大久保駅」より徒歩4分／JR中央・総武線「大久保駅」より徒歩2分",
    phone: "050-5491-2929",
    hours: "10:00〜21:00（年末年始除く）",
    mapEmbedUrl:
      "https://www.google.com/maps?q=%E6%9D%B1%E4%BA%AC%E9%83%BD%E6%96%B0%E5%AE%BF%E5%8C%BA%E7%99%BE%E4%BA%BA%E7%94%BA1-23-4&output=embed",
    description:
      "新宿校のセカンドキャンパス。少人数で集中して学べる実技重視の校舎です。",
    features: [
      "大久保駅から徒歩2分",
      "少人数制クラス",
      "実技中心の校舎",
      "ベーシック・アドバンス開講",
    ],
    coords: { lat: 35.7008, lng: 139.6986 },
  },
  {
    slug: "nagoya",
    name: "名古屋校",
    prefecture: "愛知県",
    region: "中部",
    postalCode: "〒460-0003",
    address: "愛知県名古屋市中区錦1-7-44 NPGビル8F",
    access: "名古屋市営地下鉄東山線「伏見駅」より徒歩3分／JR「名古屋駅」より徒歩10分",
    phone: "050-5491-2929",
    hours: "10:00〜20:00（年末年始除く）",
    mapEmbedUrl:
      "https://www.google.com/maps?q=%E6%84%9B%E7%9F%A5%E7%9C%8C%E5%90%8D%E5%8F%A4%E5%B1%8B%E5%B8%82%E4%B8%AD%E5%8C%BA%E9%8C%A6+1-7-44&output=embed",
    description:
      "中部エリアの拠点校舎。東海・北陸エリアからのアクセスも良好です。",
    features: [
      "伏見駅から徒歩3分",
      "中部エリア唯一の拠点",
      "全コース開講",
      "東海エリアから通学可",
    ],
    coords: { lat: 35.1697, lng: 136.8927 },
  },
  {
    slug: "osaka",
    name: "大阪校",
    prefecture: "大阪府",
    region: "関西",
    postalCode: "〒530-0026",
    address: "大阪府大阪市北区神山町8-1 梅田辰巳ビル2F",
    access: "JR「大阪駅」より徒歩7分／大阪メトロ谷町線「中崎町駅」より徒歩3分",
    phone: "050-5491-2929",
    hours: "10:00〜20:00（年末年始除く）",
    mapEmbedUrl:
      "https://www.google.com/maps?q=%E5%A4%A7%E9%98%AA%E5%BA%9C%E5%A4%A7%E9%98%AA%E5%B8%82%E5%8C%97%E5%8C%BA%E7%A5%9E%E5%B1%B1%E7%94%BA8-1&output=embed",
    description:
      "関西エリアの拠点校舎。梅田から徒歩圏内、関西全域から通学しやすい立地です。",
    features: [
      "中崎町駅から徒歩3分",
      "梅田エリアの拠点",
      "全コース開講",
      "関西圏からアクセス良好",
    ],
    coords: { lat: 34.7065, lng: 135.5021 },
  },
  {
    slug: "fukuoka",
    name: "福岡校",
    prefecture: "福岡県",
    region: "九州",
    postalCode: "〒814-0030",
    address: "福岡県福岡市早良区東光1-3-10",
    access: "福岡市営地下鉄空港線「西新駅」より徒歩8分",
    phone: "050-5491-2929",
    hours: "10:00〜20:00（年末年始除く）",
    mapEmbedUrl:
      "https://www.google.com/maps?q=%E7%A6%8F%E5%B2%A1%E7%9C%8C%E7%A6%8F%E5%B2%A1%E5%B8%82%E6%97%A9%E8%89%AF%E5%8C%BA%E6%9D%B1%E5%85%891-3-10&output=embed",
    description:
      "九州エリア唯一のMGA校舎。九州・中四国からも多くの受講生が通っています。",
    features: [
      "西新駅から徒歩8分",
      "九州エリアの拠点",
      "ベーシック・アドバンス開講",
      "九州全域から通学可",
    ],
    coords: { lat: 33.5806, lng: 130.358 },
  },
];

export function getCampusBySlug(slug: string): Campus | undefined {
  return campuses.find((c) => c.slug === slug);
}

export const campusSlugs = campuses.map((c) => c.slug);
