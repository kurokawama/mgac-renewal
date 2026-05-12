export const site = {
  name: "MGA メディカルグローアップアカデミー",
  shortName: "MGA",
  tagline: "医学的根拠に基づくストレッチを、最短で身につける。",
  description:
    "MGA（メディカルグローアップアカデミー）は、医学的根拠に基づいたストレッチを学べるストレッチスクールです。年間500人以上が受講、世界250店舗以上のDr.stretch（ドクターストレッチ）とも連携し、ご家族のセルフケアから医療専門職のスキルアップ、独立開業まで幅広く支援します。",
  url: "https://mga-stretch.example.com",
  phone: "050-5491-2929",
  phoneHref: "tel:+81-50-5491-2929",
  email: "info@mga-stretch.example.com",
  trialUrl: "/contact?course=trial",
  trustBadges: [
    {
      title: "年間500人以上",
      description: "全国の校舎で500名以上が受講するストレッチ専門スクール。",
    },
    {
      title: "世界250店舗",
      description:
        "Dr.stretch（ドクターストレッチ）グループは世界250店舗以上を展開。",
    },
    {
      title: "プロアスリート導入",
      description: "国内外のプロアスリート・スポーツ選手にも採用される技術。",
    },
    {
      title: "10年+キャリア講師陣",
      description: "現場経験10年以上のトレーナーが直接指導します。",
    },
  ],
  navItems: [    { label: "コース一覧", href: "/courses" },    { label: "ペルソナ別", href: "/for/family" },    { label: "講師紹介", href: "/trainers" },    { label: "入学案内", href: "/admission" },    { label: "校舎一覧", href: "/campus" },    { label: "FAQ", href: "/faq" },  ],
  address: "東京都新宿区新宿2-8-17 SYビル8F",
  socials: {
    instagram: "https://www.instagram.com/",
    youtube: "https://www.youtube.com/",
    line: "https://line.me/",
  },
} as const;

export type SiteInfo = typeof site;

export const personas = [
  { key: "family" as const, label: "家族のために学びたい方", icon: "Heart", description: "大切な家族の健康を自分の手で守りたい方へ" },
  { key: "medical" as const, label: "医療専門職の方", icon: "Stethoscope", description: "エビデンスに基づくストレッチ技術で専門性を高めたい方へ" },
  { key: "business" as const, label: "独立開業したい方", icon: "Briefcase", description: "ストレッチで独立・副業を目指す方へ" },
] as const;

export type PersonaKey = (typeof personas)[number]["key"];
