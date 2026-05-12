import Link from "next/link";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import { ArrowRight, CheckCircle2, Clock, CreditCard } from "lucide-react";

import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";
import { JsonLd } from "@/components/JsonLd";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  courseSlugs,
  formatPrice,
  getCourseBySlug,
  type Course,
} from "@/data/courses";
import { site } from "@/data/site";
import { cn } from "@/lib/utils";
import { pageMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return courseSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata(props: PageProps<"/courses/[slug]">) {
  const { slug } = await props.params;
  const course = getCourseBySlug(slug);

  if (!course) {
    return pageMetadata({
      title: "コース詳細 | MGA",
      description: "MGAのストレッチ専門コース詳細ページです。",
      path: `/courses/${slug}`,
    });
  }

  return pageMetadata({
    title: `${course.name} | MGA`,
    description: course.description,
    path: `/courses/${course.slug}`,
  });
}

export default async function CourseDetailPage(
  props: PageProps<"/courses/[slug]">,
) {
  const { slug } = await props.params;
  const course = getCourseBySlug(slug);

  if (!course) {
    notFound();
  }

  const monthlyInstallment = Math.ceil(course.price / 24);

  return (
    <>
      <Breadcrumbs
        items={[
          { label: "コース一覧", href: "/courses" },
          { label: course.name, href: `/courses/${course.slug}` },
        ]}
      />
      <JsonLd data={courseJsonLd(course)} />

      <section className="bg-gradient-to-b from-white to-muted py-16 md:py-24">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <Badge className="mb-5 bg-primary/10 text-primary">
              {course.hoursLabel} / {course.techniques}
            </Badge>
            <h1 className="text-4xl font-black tracking-tight text-primary md:text-6xl">
              {course.name}
            </h1>
            <p className="mt-6 text-lg leading-9 text-muted-foreground">
              {course.longDescription}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className={cn(
                  buttonVariants({ variant: "default" }),
                  "h-12 rounded-full bg-accent px-8 text-base text-white hover:bg-accent/90",
                )}
              >
                無料体験を予約
              </Link>
              <Link
                href="/courses"
                className={cn(
                  buttonVariants({ variant: "outline" }),
                  "h-12 rounded-full bg-white px-8 text-base text-primary",
                )}
              >
                コース一覧へ
                <ArrowRight className="ml-2 size-4" aria-hidden />
              </Link>
            </div>
          </div>

          <Card className="border-0 bg-white shadow-sm">
            <CardContent className="p-6">
              <p className="text-sm font-bold text-accent">受講料</p>
              <p className="mt-3 text-4xl font-black text-primary">
                {formatPrice(course.price)}円
              </p>
              {course.priceNote && (
                <p className="mt-2 text-sm font-bold text-accent">
                  {course.priceNote}
                </p>
              )}
              <div className="mt-6 grid gap-4">
                <InfoRow
                  icon={<CreditCard className="size-5" aria-hidden />}
                  label="24回分割の目安"
                  value={`月々 ${formatPrice(monthlyInstallment)}円〜`}
                />
                <InfoRow
                  icon={<Clock className="size-5" aria-hidden />}
                  label="学習時間"
                  value={course.hoursLabel}
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHeader
            label="カリキュラム"
            title="現場で使える流れで学ぶ"
            description="理論、評価、実技、確認テストまで、理解と実践を往復しながら定着させます。"
          />
          <div className="grid gap-4 md:grid-cols-2">
            {course.curriculum.map((item, index) => (
              <Card key={item.title} className="border-0 bg-white shadow-sm">
                <CardContent className="flex gap-4 p-6">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-primary">
                      {item.title}
                    </h3>
                    <p className="mt-2 leading-7 text-muted-foreground">
                      {item.detail}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHeader
            label="特徴"
            title={`${course.shortName}で得られること`}
            description="受講後にどのような場面で活かせるかを具体的に確認できます。"
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {course.features.map((feature) => (
              <Card key={feature} className="border-0 bg-white shadow-sm">
                <CardContent className="flex gap-3 p-6">
                  <CheckCircle2
                    className="mt-1 size-5 shrink-0 text-accent"
                    aria-hidden
                  />
                  <p className="leading-7 font-medium">{feature}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title={`${course.shortName}の受講相談をする`}
        description="日程、支払い方法、受講前に必要な準備まで、専任スタッフが目的に合わせてご案内します。"
      />
    </>
  );
}

function InfoRow({
  icon,
  label,
  value,
}: {
  icon: ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center gap-3 rounded-xl bg-muted p-4">
      <div className="text-accent">{icon}</div>
      <div>
        <p className="text-sm text-muted-foreground">{label}</p>
        <p className="font-bold text-foreground">{value}</p>
      </div>
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

function courseJsonLd(course: Course) {
  return {
    "@context": "https://schema.org",
    "@type": "Course",
    name: course.name,
    description: course.longDescription,
    provider: {
      "@type": "Organization",
      name: site.name,
      sameAs: site.url,
    },
    url: `${site.url}/courses/${course.slug}`,
    offers: {
      "@type": "Offer",
      price: course.price,
      priceCurrency: "JPY",
      availability: "https://schema.org/InStock",
      url: `${site.url}/courses/${course.slug}`,
    },
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: "onsite",
      courseWorkload: course.hoursLabel,
    },
  };
}
