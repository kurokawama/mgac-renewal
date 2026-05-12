import Link from "next/link";
import Image from "next/image";
import { ArrowRight, BriefcaseBusiness, CheckCircle2, TrendingUp } from "lucide-react";

import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";
import { TestimonialCard } from "@/components/TestimonialCard";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { courses, formatPrice } from "@/data/courses";
import { testimonialsByPersona } from "@/data/testimonials";
import { marketingImages } from "@/lib/marketing-images";
import { cn } from "@/lib/utils";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "独立開業・事業導入のためのストレッチスクール | MGA",
  description:
    "ストレッチで独立開業、店舗導入、Dr.stretch就職を目指す方に向けたMGAの事業化コース案内です。",
  path: "/for/business",
});

const roiItems = [
  {
    title: "客単価を上げる",
    description:
      "既存メニューに評価とストレッチを加え、納得感のある提案で単価向上を狙えます。",
  },
  {
    title: "リピートにつなげる",
    description:
      "可動域や姿勢の変化を説明しやすく、継続利用の理由を明確にできます。",
  },
  {
    title: "採用・育成を短縮する",
    description:
      "共通の技術体系を持つことで、スタッフ教育や品質管理を標準化しやすくなります。",
  },
];

const licenseBenefits = [
  "修了証や認定資格を店舗メニューの信頼材料にできる",
  "Dr.stretch水準の技術と言語でスタッフ教育をそろえられる",
  "開業前のメニュー設計、価格設計、導線づくりを相談できる",
];

const drStretchCourse = courses.find((course) => course.slug === "dr-stretch");

export default function BusinessPage() {
  return (
    <>
      <Breadcrumbs
        items={[{ label: "独立開業したい方", href: "/for/business" }]}
      />

      <section className="relative isolate overflow-hidden bg-primary py-16 text-white md:py-24">
        <Image
          src={marketingImages.graduates}
          alt="MGAで学び卒業後の成功に向かう受講生"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-primary/65 to-accent/30" />
        <div className="relative mx-auto grid max-w-6xl gap-10 px-4 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <Badge className="mb-5 border-white/25 bg-white/15 text-white backdrop-blur">
              独立開業・事業導入
            </Badge>
            <h1 className="text-4xl font-black tracking-tight text-white md:text-6xl">
              ストレッチを、選ばれる事業の柱にする。
            </h1>
            <p className="mt-6 text-lg leading-9 text-white/90">
              未経験からトレーナーを目指す方、整体院やジムに新メニューを入れたい方、
              将来の独立開業を見据える方へ。MGAは技術だけでなく、事業化まで見据えた学びを提供します。
            </p>
            <Link
              href="/contact"
              className={cn(
                buttonVariants({ variant: "default" }),
                "mt-8 h-12 rounded-full bg-accent px-8 text-base text-accent-foreground hover:bg-accent/90",
              )}
            >
              開業相談を予約
            </Link>
          </div>
          <Card className="border-0 bg-white/95 shadow-xl backdrop-blur">
            <CardContent className="p-6 md:p-8">
              <BriefcaseBusiness className="size-10 text-accent" aria-hidden />
              <h2 className="mt-5 text-2xl font-bold text-primary">
                技術、採用、メニュー化を一つの導線で
              </h2>
              <p className="mt-4 leading-8 text-muted-foreground">
                MGAはDr.stretchグループとの連携を背景に、店舗で使える品質、
                接客、継続提案まで実践的に学べます。
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHeader
            label="ROI"
            title="投資した学びを、売上と品質に変える"
            description="ストレッチ技術は単発の施術だけでなく、継続メニュー、スタッフ育成、紹介導線に活かせます。"
          />
          <div className="grid gap-6 md:grid-cols-3">
            {roiItems.map((item) => (
              <Card key={item.title} className="border-0 bg-white shadow-sm">
                <CardContent className="p-6">
                  <TrendingUp className="size-8 text-accent" aria-hidden />
                  <h3 className="mt-4 text-xl font-bold text-primary">
                    {item.title}
                  </h3>
                  <p className="mt-3 leading-7 text-muted-foreground">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {drStretchCourse && (
        <section className="bg-muted py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-4">
            <SectionHeader
              label="注目コース"
              title="Dr.stretch採用前提コース"
              description="未経験からトレーナー就職を目指す方に、技術と店舗実務をまとめて学べる特別コースです。"
            />
            <Card className="border-0 bg-white shadow-sm">
              <CardContent className="grid gap-8 p-6 md:grid-cols-[1fr_0.8fr] md:p-8">
                <div>
                  <Badge className="bg-primary/10 text-primary">
                    {drStretchCourse.hoursLabel}
                  </Badge>
                  <h3 className="mt-5 text-3xl font-bold text-primary">
                    {drStretchCourse.name}
                  </h3>
                  <p className="mt-4 leading-8 text-muted-foreground">
                    {drStretchCourse.longDescription}
                  </p>
                  <Link
                    href={`/courses/${drStretchCourse.slug}`}
                    className={cn(
                      buttonVariants({ variant: "default" }),
                      "mt-6 h-12 rounded-full bg-accent px-8 text-base text-accent-foreground hover:bg-accent/90",
                    )}
                  >
                    コース詳細を見る
                    <ArrowRight className="ml-2 size-4" aria-hidden />
                  </Link>
                </div>
                <div className="rounded-xl bg-muted p-6">
                  <p className="text-sm font-bold text-accent">受講料</p>
                  <p className="mt-2 text-4xl font-black text-primary">
                    {formatPrice(drStretchCourse.price)}円
                  </p>
                  {drStretchCourse.priceNote && (
                    <p className="mt-3 text-sm font-bold text-accent">
                      {drStretchCourse.priceNote}
                    </p>
                  )}
                  <ul className="mt-6 space-y-3">
                    {drStretchCourse.features.map((feature) => (
                      <li key={feature} className="flex gap-3">
                        <CheckCircle2
                          className="mt-1 size-5 shrink-0 text-accent"
                          aria-hidden
                        />
                        <span className="leading-7">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      )}

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHeader
            label="成功事例"
            title="事業にストレッチを取り入れた受講生"
            description="独立、店舗導入、スタッフ育成でMGAを活用した声を紹介します。"
          />
          <div className="grid gap-6 md:grid-cols-3">
            {testimonialsByPersona.business.map((testimonial) => (
              <TestimonialCard
                key={testimonial.id}
                testimonial={testimonial}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-8 rounded-xl bg-white p-8 shadow-sm md:grid-cols-[0.8fr_1fr] md:p-10">
            <div>
              <p className="text-sm font-bold text-accent">ライセンス活用</p>
              <h2 className="mt-3 text-3xl font-bold text-primary md:text-4xl">
                信頼されるメニューとして届ける
              </h2>
              <p className="mt-4 leading-8 text-muted-foreground">
                学んだ技術を事業に落とし込むには、品質を示す言葉と継続できる仕組みが必要です。
              </p>
            </div>
            <ul className="space-y-4">
              {licenseBenefits.map((benefit) => (
                <li key={benefit} className="flex gap-3">
                  <CheckCircle2
                    className="mt-1 size-5 shrink-0 text-accent"
                    aria-hidden
                  />
                  <span className="leading-7 font-medium">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <CTASection
        title="ストレッチ事業の始め方を相談する"
        description="未経験からの就職、店舗導入、独立準備まで、目的に合わせて受講順と活用方法をご提案します。"
      />
    </>
  );
}

function SectionHeader({
  label,
  title,
  description,
}: {
  label: string;
  title: string;
  description: string;
}) {
  return (
    <div className="mb-10 max-w-3xl">
      <p className="mb-3 text-sm font-bold text-accent">{label}</p>
      <h2 className="text-3xl font-bold tracking-tight text-primary md:text-4xl">
        {title}
      </h2>
      <p className="mt-4 leading-8 text-muted-foreground">{description}</p>
    </div>
  );
}
