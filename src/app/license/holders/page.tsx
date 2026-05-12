import type { Metadata } from "next";

import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";
import { SectionHeader } from "@/components/SectionHeader";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { pageMetadata } from "@/lib/seo";

const holders = [
  {
    name: "佐伯 直子",
    qualification: "CBSTベーシック",
    testimonial:
      "母の腰痛ケアを安全に行いたくて受講しました。禁忌や声かけまで学べたので、家族にも安心して続けられています。",
  },
  {
    name: "森田 悠介",
    qualification: "CBSTアドバンス",
    testimonial:
      "理学療法士としての評価にストレッチ技術を組み合わせられるようになり、患者さんへの説明が具体的になりました。",
  },
  {
    name: "長谷川 由依",
    qualification: "CBSTスペシャリスト",
    testimonial:
      "トリガーポイントの考え方をサロンメニューに導入し、慢性的な肩こりのお客様からリピートが増えました。",
  },
  {
    name: "小野寺 翔",
    qualification: "CBSTキャリア",
    testimonial:
      "未経験からDr.stretch採用を目指しました。実技だけでなく接客や面談準備まで支援があり、自信を持てました。",
  },
  {
    name: "中村 里帆",
    qualification: "CBSTベーシック",
    testimonial:
      "育児中でも振替制度があり通いやすかったです。解剖学が初めてでも、実技と結びつけて理解できました。",
  },
  {
    name: "古川 大地",
    qualification: "CBSTアドバンス",
    testimonial:
      "スポーツ現場で使う評価とレジスタンス技術を整理できました。チームのウォームアップ改善にも役立っています。",
  },
];

export const metadata: Metadata = pageMetadata({
  title: "資格保持者の声 | MGA",
  description:
    "MGAのCBST資格を取得した受講生の声を紹介します。家族ケア、医療現場、サロン導入、キャリア転換の体験談です。",
  path: "/license/holders",
});

export default function LicenseHoldersPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "CBST資格", href: "/license" },
          { label: "資格保持者の声", href: "/license/holders" },
        ]}
      />
      <section className="bg-gradient-to-b from-white to-muted py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHeader
            label="VOICE"
            title="CBST資格保持者の声"
            description="目的も背景も異なる6名が、MGAで得た学びと資格取得後の変化を語ります。"
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {holders.map((holder) => (
              <Card key={holder.name} className="h-full border-0 bg-white shadow-sm">
                <CardContent className="flex h-full flex-col p-6">
                  <Badge className="mb-5 w-fit bg-primary/10 text-primary">
                    {holder.qualification}
                  </Badge>
                  <h2 className="text-2xl font-bold text-primary">{holder.name}</h2>
                  <p className="mt-5 flex-1 leading-8 text-muted-foreground">
                    「{holder.testimonial}」
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <CTASection
        title="あなたに合う資格プランを相談しませんか"
        description="家族ケア、医療現場、独立開業など、目的に合わせた学び方をご案内します。"
      />
    </>
  );
}
