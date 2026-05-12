import Link from "next/link";
import { HeartHandshake, ShieldCheck } from "lucide-react";

import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CourseCard } from "@/components/CourseCard";
import { CTASection } from "@/components/CTASection";
import { TestimonialCard } from "@/components/TestimonialCard";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { courses } from "@/data/courses";
import { testimonialsByPersona } from "@/data/testimonials";
import { cn } from "@/lib/utils";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "家族のために学ぶストレッチ | MGA",
  description:
    "肩こり、腰痛、介護疲れに寄り添い、大切な家族を安全にケアするためのMGAストレッチコース案内です。",
  path: "/for/family",
});

const painPoints = [
  {
    title: "肩こり",
    description:
      "家事、デスクワーク、介助姿勢で固まりやすい首肩まわりを、無理なくゆるめる方法を学びます。",
  },
  {
    title: "腰痛",
    description:
      "立ち上がり介助や長時間の同じ姿勢で負担がかかる腰に、体の構造を理解してアプローチします。",
  },
  {
    title: "介護疲れ",
    description:
      "相手の体だけでなく、ケアする自分の体も守れるよう、負担の少ない姿勢と手順を身につけます。",
  },
];

const recommendedCourses = courses.filter((course) =>
  ["basic", "resistance"].includes(course.slug),
);

const comparisons = [
  {
    item: "学べる内容",
    mga: "解剖学と安全確認を含む実技中心のストレッチ",
    competitor: "短時間の動画視聴やリラクゼーション中心",
  },
  {
    item: "家族への使いやすさ",
    mga: "年齢や体調に合わせて強さを調整する考え方まで学べる",
    competitor: "決まった手順の暗記に偏り、応用しにくい",
  },
  {
    item: "フォロー",
    mga: "校舎で講師に質問でき、無料相談で受講前の不安も整理",
    competitor: "教材配布のみで実技の確認が少ない",
  },
];

export default function FamilyPage() {
  return (
    <>
      <Breadcrumbs
        items={[{ label: "家族のために学ぶ方", href: "/for/family" }]}
      />

      <section className="bg-gradient-to-b from-white to-muted py-16 md:py-24">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <Badge className="mb-5 bg-primary/10 text-primary">
              家族ケアを学びたい方へ
            </Badge>
            <h1 className="text-4xl font-black tracking-tight text-primary md:text-6xl">
              大切な人のつらさに、もう「見守るだけ」で終わらない。
            </h1>
            <p className="mt-6 text-lg leading-9 text-muted-foreground">
              肩こり、腰痛、介護疲れ。毎日の小さな不調に気づいていても、
              どう触れたら安全なのか不安な方へ。MGAでは、家族に寄り添うための医学的なストレッチを基礎から学べます。
            </p>
            <Link
              href="/contact"
              className={cn(
                buttonVariants({ variant: "default" }),
                "mt-8 h-12 rounded-full bg-accent px-8 text-base text-white hover:bg-accent/90",
              )}
            >
              家族ケアを相談する
            </Link>
          </div>
          <Card className="border-0 bg-white shadow-sm">
            <CardContent className="p-6">
              <HeartHandshake className="size-10 text-accent" aria-hidden />
              <h2 className="mt-5 text-2xl font-bold text-primary">
                「よかれと思って」が不安な方に
              </h2>
              <p className="mt-4 leading-8 text-muted-foreground">
                MGAは禁忌、姿勢、力加減、声かけまで扱います。相手の体を守りながら、
                ケアする自分も疲れにくい方法を身につけます。
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHeader
            label="よくある悩み"
            title="家庭で起きやすい不調に、やさしく対応する"
            description="強く揉むのではなく、体の仕組みを理解して安全に動きを引き出すことを重視します。"
          />
          <div className="grid gap-6 md:grid-cols-3">
            {painPoints.map((point) => (
              <Card key={point.title} className="border-0 bg-white shadow-sm">
                <CardContent className="p-6">
                  <ShieldCheck className="size-8 text-accent" aria-hidden />
                  <h3 className="mt-4 text-xl font-bold text-primary">
                    {point.title}
                  </h3>
                  <p className="mt-3 leading-7 text-muted-foreground">
                    {point.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHeader
            label="おすすめコース"
            title="家族ケアに活かしやすい2コース"
            description="まずはベーシックで安全な土台を作り、必要に応じてレジスタンスで動きの安定まで学べます。"
          />
          <div className="grid gap-6 md:grid-cols-2">
            {recommendedCourses.map((course) => (
              <CourseCard key={course.slug} course={course} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHeader
            label="受講生の声"
            title="家族の体に向き合えるようになった実感"
            description="家庭の中でストレッチを活かしている受講生の声を紹介します。"
          />
          <div className="grid gap-6 md:grid-cols-3">
            {testimonialsByPersona.family.map((testimonial) => (
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
          <SectionHeader
            label="比較"
            title="家庭で使うからこそ、安全性と実技確認を重視"
            description="MGAは、家族に触れる前に必要な知識と手技の確認を大切にしています。"
          />
          <div className="overflow-x-auto rounded-xl bg-white shadow-sm">
            <table className="w-full min-w-[720px] text-left text-sm">
              <thead className="bg-primary text-white">
                <tr>
                  <th className="px-5 py-4 font-bold">比較項目</th>
                  <th className="px-5 py-4 font-bold">MGA</th>
                  <th className="px-5 py-4 font-bold">一般的な講座</th>
                </tr>
              </thead>
              <tbody>
                {comparisons.map((row) => (
                  <tr key={row.item} className="border-b last:border-b-0">
                    <th className="px-5 py-4 font-bold text-primary">
                      {row.item}
                    </th>
                    <td className="px-5 py-4 leading-7">{row.mga}</td>
                    <td className="px-5 py-4 leading-7 text-muted-foreground">
                      {row.competitor}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <CTASection
        title="家族に合う学び方を相談しませんか"
        description="介護中の方、子育て中の方、遠方の方も、通いやすい日程や地方コースをご案内します。"
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
