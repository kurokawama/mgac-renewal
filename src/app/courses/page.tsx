import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CourseCard } from "@/components/CourseCard";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { courses } from "@/data/courses";
import { personas } from "@/data/site";
import { cn } from "@/lib/utils";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "コース一覧 | MGA",
  description:
    "MGAの8つのストレッチ専門コースを、家族ケア、医療専門職、独立開業の目的別に比較できます。",
  path: "/courses",
});

export default function CoursesPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "コース一覧", href: "/courses" }]} />

      <section className="bg-gradient-to-b from-white to-muted py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <Badge className="mb-5 bg-primary/10 text-primary">
            MGAコース一覧
          </Badge>
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div>
              <h1 className="text-4xl font-black tracking-tight text-primary md:text-6xl">
                目的に合わせて選べる8つのストレッチ専門コース
              </h1>
              <p className="mt-6 text-lg leading-9 text-muted-foreground">
                未経験から家族をケアしたい方、医療現場で技術を高めたい方、
                ストレッチを仕事にしたい方まで、段階的に学べるカリキュラムを用意しています。
              </p>
            </div>
            <div className="rounded-xl bg-white p-6 shadow-sm">
              <p className="text-sm font-bold text-accent">迷ったらここから</p>
              <h2 className="mt-2 text-2xl font-bold text-primary">
                ベーシックで安全な土台をつくる
              </h2>
              <p className="mt-4 leading-8 text-muted-foreground">
                解剖学、評価、64種目の基本手技を学ぶベーシックは、すべての目的に共通する入口です。
              </p>
              <Link
                href="/courses/basic"
                className={cn(
                  buttonVariants({ variant: "default" }),
                "mt-6 h-12 rounded-full bg-accent px-8 text-base text-accent-foreground hover:bg-accent/90",
                )}
              >
                ベーシックを見る
                <ArrowRight className="ml-2 size-4" aria-hidden />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHeader
            label="コース比較"
            title="目的別に絞り込んで探す"
            description="全8コースを一覧で確認しながら、あなたの目的に合う講座だけを表示できます。"
          />

          <Tabs defaultValue="all">
            <TabsList className="mb-8 h-auto flex-wrap justify-start">
              <TabsTrigger value="all" className="px-4 py-2">
                すべて
              </TabsTrigger>
              {personas.map((persona) => (
                <TabsTrigger
                  key={persona.key}
                  value={persona.key}
                  className="px-4 py-2"
                >
                  {persona.label}
                </TabsTrigger>
              ))}
            </TabsList>

            <TabsContent value="all">
              <CourseGrid coursesToShow={courses} />
            </TabsContent>

            {personas.map((persona) => (
              <TabsContent key={persona.key} value={persona.key}>
                <CourseGrid
                  coursesToShow={courses.filter((course) =>
                    course.targetPersonas.includes(persona.key),
                  )}
                />
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      <section className="bg-muted py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <div className="rounded-xl bg-white p-8 shadow-sm md:p-10">
            <p className="text-sm font-bold text-accent">無料相談</p>
            <div className="mt-3 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div className="max-w-2xl">
                <h2 className="text-3xl font-bold text-primary">
                  受講目的に合う順番を一緒に整理します
                </h2>
                <p className="mt-4 leading-8 text-muted-foreground">
                  通学日程、地方コース、分割支払い、資格取得後の活用方法まで個別にご相談いただけます。
                </p>
              </div>
              <Link
                href="/contact"
                className={cn(
                  buttonVariants({ variant: "default" }),
                  "h-12 rounded-full bg-accent px-8 text-base text-accent-foreground hover:bg-accent/90",
                )}
              >
                無料体験を予約
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function CourseGrid({ coursesToShow }: { coursesToShow: typeof courses }) {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      {coursesToShow.map((course) => (
        <CourseCard key={course.slug} course={course} />
      ))}
    </div>
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
