import Link from "next/link";
import type { Metadata } from "next";
import { Award, BadgeCheck, BookOpenCheck, BriefcaseBusiness, Users } from "lucide-react";

import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";
import { SectionHeader } from "@/components/SectionHeader";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { formatPrice } from "@/data/courses";
import { cn } from "@/lib/utils";
import { pageMetadata } from "@/lib/seo";

const benefits = [
  {
    title: "医学的根拠を示せる",
    description: "解剖学・評価・禁忌を理解したうえで説明できるため、家族や顧客に安心して提案できます。",
    icon: BookOpenCheck,
  },
  {
    title: "現場で使える技術証明",
    description: "実技試験で安全性と再現性を確認するため、医療・運動指導の現場で導入しやすくなります。",
    icon: BadgeCheck,
  },
  {
    title: "キャリアの幅が広がる",
    description: "副業、サロン導入、Dr.stretch採用、独立開業など目的に合わせたキャリア設計に活用できます。",
    icon: BriefcaseBusiness,
  },
  {
    title: "卒業後も学び続けられる",
    description: "復習会、症例相談、校舎振替など、資格取得後も技術を磨き続ける環境があります。",
    icon: Users,
  },
];

const plans = [
  {
    name: "CBSTベーシック",
    price: 275000,
    features: ["基礎解剖学", "64種目のストレッチ", "実技試験", "家族ケア・未経験向け"],
  },
  {
    name: "CBSTアドバンス",
    price: 275000,
    features: ["臨床評価", "難症例対応", "施術計画", "医療専門職向け"],
  },
  {
    name: "CBSTスペシャリスト",
    price: 165000,
    features: ["専門技術選択", "トリガー・レジスタンス等", "短期集中", "現場導入向け"],
  },
  {
    name: "CBSTキャリア",
    price: 357500,
    features: ["採用前提研修", "店舗実務", "面談サポート", "キャッシュバック制度"],
  },
];

const steps = [
  {
    title: "無料体験・受講相談",
    description: "目的、経験、通学しやすい校舎を確認し、最適な資格プランを一緒に選びます。",
  },
  {
    title: "講座受講・実技練習",
    description: "少人数クラスで理論と実技を反復し、講師からフォームと説明力のフィードバックを受けます。",
  },
  {
    title: "認定試験・資格発行",
    description: "筆記・実技の到達度を確認し、合格者へCBST認定証を発行します。",
  },
];

export const metadata: Metadata = pageMetadata({
  title: "CBST資格 | MGA",
  description:
    "MGAのCBST認定資格の特徴、取得メリット、プラン、取得までの流れを紹介します。",
  path: "/license",
});

export default function LicensePage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "CBST資格", href: "/license" }]} />
      <section className="bg-gradient-to-b from-white to-muted py-16 md:py-24">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 lg:grid-cols-[1fr_0.8fr] lg:items-center">
          <div>
            <Badge className="mb-5 bg-primary/10 text-primary">CBST認定資格</Badge>
            <h1 className="text-4xl font-black tracking-tight text-primary md:text-6xl">
              安全に伸ばし、根拠をもって伝えるストレッチ資格。
            </h1>
            <p className="mt-6 text-lg leading-9 text-muted-foreground">
              CBSTは、MGAが認定するストレッチ技術資格です。身体評価、禁忌判断、実技の再現性を体系的に学び、家族ケアから現場導入、独立開業まで活かせます。
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className={cn(
                  buttonVariants({ variant: "default" }),
                  "h-12 rounded-full bg-accent px-8 text-base text-accent-foreground hover:bg-accent/90",
                )}
              >
                資格取得を相談する
              </Link>
              <Link
                href="/license/holders"
                className={cn(
                  buttonVariants({ variant: "outline" }),
                  "h-12 rounded-full bg-white px-8 text-base text-primary",
                )}
              >
                資格保持者の声
              </Link>
            </div>
          </div>
          <Card className="border-0 bg-white shadow-sm">
            <CardContent className="p-8">
              <Award className="size-12 text-accent" aria-hidden />
              <h2 className="mt-5 text-2xl font-bold text-primary">
                CBST: Certified Body Stretch Trainer
              </h2>
              <p className="mt-4 leading-8 text-muted-foreground">
                「安全性」「説明力」「実技力」の3つを評価するMGA独自の認定制度です。資格名だけでなく、現場で信頼される技術の習得を重視しています。
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHeader
            label="BENEFITS"
            title="CBST資格を取得する4つのメリット"
            description="技術の証明だけでなく、説明・集客・キャリア形成まで一貫して役立つ資格です。"
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <Card key={benefit.title} className="border-0 bg-white shadow-sm">
                  <CardContent className="p-6">
                    <Icon className="size-9 text-accent" aria-hidden />
                    <h3 className="mt-5 text-xl font-bold text-primary">
                      {benefit.title}
                    </h3>
                    <p className="mt-3 leading-7 text-muted-foreground">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-muted py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHeader
            label="PLANS"
            title="4つの資格プラン比較"
            description="目標に合わせて、基礎から専門・キャリア支援まで選べます。"
          />
          <div className="overflow-x-auto rounded-xl bg-white shadow-sm">
            <table className="w-full min-w-[760px] text-left text-sm">
              <thead className="bg-primary text-white">
                <tr>
                  <th className="px-5 py-4 font-bold">プラン名</th>
                  <th className="px-5 py-4 font-bold">価格</th>
                  <th className="px-5 py-4 font-bold">特徴</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {plans.map((plan) => (
                  <tr key={plan.name}>
                    <td className="px-5 py-5 text-base font-bold text-primary">
                      {plan.name}
                    </td>
                    <td className="px-5 py-5 font-bold">
                      {formatPrice(plan.price)}円
                    </td>
                    <td className="px-5 py-5">
                      <div className="flex flex-wrap gap-2">
                        {plan.features.map((feature) => (
                          <Badge key={feature} variant="secondary">
                            {feature}
                          </Badge>
                        ))}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHeader
            label="FLOW"
            title="資格取得までの3ステップ"
            description="初回相談から認定証発行まで、専任スタッフと講師が伴走します。"
          />
          <div className="grid gap-6 md:grid-cols-3">
            {steps.map((step, index) => (
              <Card key={step.title} className="border-0 bg-white shadow-sm">
                <CardContent className="p-6">
                  <div className="flex size-12 items-center justify-center rounded-full bg-primary text-lg font-black text-white">
                    {index + 1}
                  </div>
                  <h3 className="mt-5 text-xl font-bold text-primary">{step.title}</h3>
                  <p className="mt-3 leading-7 text-muted-foreground">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="CBST資格で、ストレッチを仕事にできる技術へ"
        description="無料体験では、資格プランの違い、受講日程、支払い方法まで個別にご案内します。"
      />
    </>
  );
}
