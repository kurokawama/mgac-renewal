import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, Stethoscope } from "lucide-react";

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
  title: "医療専門職のためのストレッチ技術 | MGA",
  description:
    "理学療法士、柔道整復師、看護師など医療専門職が、評価とエビデンスに基づくストレッチ技術を段階的に学べるMGAの案内です。",
  path: "/for/medical",
});

const values = [
  "解剖学・運動学に基づいた説明力が身につく",
  "可動域、疼痛、姿勢を評価して施術計画に落とし込める",
  "臨床・整骨院・スポーツ現場で使える手技を体系化できる",
];

const coursePath = ["basic", "advance", "resistance"]
  .map((slug) => courses.find((course) => course.slug === slug))
  .filter((course) => course !== undefined);

export default function MedicalPage() {
  return (
    <>
      <Breadcrumbs
        items={[{ label: "医療専門職の方", href: "/for/medical" }]}
      />

      <section className="relative isolate overflow-hidden bg-primary py-16 text-white md:py-24">
        <Image
          src={marketingImages.hero}
          alt="医療専門職がプロフェッショナルなストレッチ技術を学ぶ様子"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-primary/70 to-primary/30" />
        <div className="relative mx-auto grid max-w-6xl gap-10 px-4 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <Badge className="mb-5 border-white/25 bg-white/15 text-white backdrop-blur">
              医療専門職のスキルアップ
            </Badge>
            <h1 className="text-4xl font-black tracking-tight text-white md:text-6xl">
              評価から介入まで、根拠を持ってストレッチを使いこなす。
            </h1>
            <p className="mt-6 text-lg leading-9 text-white/90">
              MGAは、感覚だけに頼らないストレッチ技術を学ぶスクールです。
              解剖学、運動学、評価、実技をつなげ、患者さんや利用者さんに説明できる技術へ高めます。
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className={cn(
                  buttonVariants({ variant: "default" }),
                  "h-12 rounded-full bg-accent px-8 text-base text-accent-foreground hover:bg-accent/90",
                )}
              >
                臨床活用を相談する
              </Link>
              <Link
                href="/license"
                className={cn(
                  buttonVariants({ variant: "outline" }),
                  "h-12 rounded-full border-white/60 bg-white px-8 text-base text-primary hover:bg-white/90",
                )}
              >
                ライセンスを見る
                <ArrowRight className="ml-2 size-4" aria-hidden />
              </Link>
            </div>
          </div>
          <Card className="border-0 bg-white/95 shadow-xl backdrop-blur">
            <CardContent className="p-6 md:p-8">
              <Stethoscope className="size-10 text-accent" aria-hidden />
              <h2 className="mt-5 text-2xl font-bold text-primary">
                現場の限られた時間で、結果につながる選択肢を増やす
              </h2>
              <p className="mt-4 leading-8 text-muted-foreground">
                手技の引き出しだけでなく、どの症例にどの順番で使うかまで整理。
                チーム内で共有しやすい言語化も重視します。
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHeader
            label="価値提案"
            title="医療専門職がMGAで得られる3つの力"
            description="既存の資格や臨床経験に、ストレッチの評価と実技を重ねることで介入の幅を広げます。"
          />
          <div className="grid gap-6 md:grid-cols-3">
            {values.map((value) => (
              <Card key={value} className="border-0 bg-white shadow-sm">
                <CardContent className="flex gap-3 p-6">
                  <CheckCircle2
                    className="mt-1 size-5 shrink-0 text-accent"
                    aria-hidden
                  />
                  <p className="leading-7 font-medium">{value}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHeader
            label="学習パス"
            title="ベーシックから臨床応用、筋出力まで段階的に"
            description="基礎手技を固めたあと、症例対応とレジスタンスストレッチへ進む流れがおすすめです。"
          />
          <div className="grid gap-6 lg:grid-cols-3">
            {coursePath.map((course, index) => (
              <Card key={course.slug} className="border-0 bg-white shadow-sm">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between gap-4">
                    <Badge className="bg-primary/10 text-primary">
                      STEP {index + 1}
                    </Badge>
                    <span className="text-sm font-bold text-accent">
                      {course.hoursLabel}
                    </span>
                  </div>
                  <h3 className="mt-5 text-2xl font-bold text-primary">
                    {course.shortName}
                  </h3>
                  <p className="mt-3 leading-7 text-muted-foreground">
                    {course.description}
                  </p>
                  <p className="mt-4 font-bold text-foreground">
                    {formatPrice(course.price)}円
                  </p>
                  <Link
                    href={`/courses/${course.slug}`}
                    className="mt-5 inline-flex items-center text-sm font-bold text-primary hover:underline"
                  >
                    詳細を見る
                    <ArrowRight className="ml-1 size-4" aria-hidden />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <div className="rounded-xl bg-primary p-8 text-white shadow-sm md:p-10">
            <p className="text-sm font-bold text-white/75">資格プレビュー</p>
            <div className="mt-3 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div className="max-w-2xl">
                <h2 className="text-3xl font-bold">
                  修了後に目指せるライセンスを確認する
                </h2>
                <p className="mt-4 leading-8 text-white/85">
                  各コースの修了証、認定資格、院内メニュー化に使える表示内容を事前に確認できます。
                </p>
              </div>
              <Link
                href="/license"
                className={cn(
                  buttonVariants({ variant: "default" }),
                  "h-12 rounded-full bg-accent px-8 text-base text-accent-foreground hover:bg-accent/90",
                )}
              >
                ライセンス案内へ
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-muted py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHeader
            label="受講生の声"
            title="臨床現場で活きた学び"
            description="医療専門職としてMGAを受講した方の変化を紹介します。"
          />
          <div className="grid gap-6 md:grid-cols-3">
            {testimonialsByPersona.medical.map((testimonial) => (
              <TestimonialCard
                key={testimonial.id}
                testimonial={testimonial}
              />
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="専門職としての強みを、ストレッチで広げませんか"
        description="現在の職種、勤務形態、学びたい症例に合わせて、最適な受講順をご提案します。"
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
