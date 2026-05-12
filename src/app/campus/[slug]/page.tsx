import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Clock, MapPinned, Phone, Train } from "lucide-react";

import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";
import { JsonLd } from "@/components/JsonLd";
import { SectionHeader } from "@/components/SectionHeader";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { campusSlugs, getCampusBySlug, type Campus } from "@/data/campuses";
import { courses } from "@/data/courses";
import { site } from "@/data/site";
import { pageMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return campusSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata(
  props: PageProps<"/campus/[slug]">,
): Promise<Metadata> {
  const { slug } = await props.params;
  const campus = getCampusBySlug(slug);

  if (!campus) {
    return pageMetadata({
      title: "校舎詳細 | MGA",
      description: "MGAの校舎詳細ページです。",
      path: "/campus",
    });
  }

  return pageMetadata({
    title: `${campus.name} | MGA`,
    description: `${campus.name}の住所、アクセス、電話番号、開講コースをご案内します。${campus.access}`,
    path: `/campus/${campus.slug}`,
  });
}

export default async function CampusDetailPage(props: PageProps<"/campus/[slug]">) {
  const { slug } = await props.params;
  const campus = getCampusBySlug(slug);

  if (!campus) {
    notFound();
  }

  const availableCourses = getAvailableCourses(campus);
  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: `${site.name} ${campus.name}`,
    url: `${site.url}/campus/${campus.slug}`,
    telephone: campus.phone,
    description: campus.description,
    address: {
      "@type": "PostalAddress",
      postalCode: campus.postalCode.replace("〒", ""),
      streetAddress: campus.address,
      addressCountry: "JP",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: campus.coords.lat,
      longitude: campus.coords.lng,
    },
    openingHours: campus.hours,
    hasMap: campus.mapEmbedUrl,
  };

  return (
    <>
      <Breadcrumbs
        items={[
          { label: "校舎一覧", href: "/campus" },
          { label: campus.name, href: `/campus/${campus.slug}` },
        ]}
      />
      <JsonLd data={localBusinessJsonLd} />
      <section className="bg-gradient-to-b from-white to-muted py-16 md:py-24">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <Badge className="mb-5 bg-primary/10 text-primary">{campus.region}</Badge>
            <h1 className="text-4xl font-black tracking-tight text-primary md:text-6xl">
              {campus.name}
            </h1>
            <p className="mt-6 text-lg leading-9 text-muted-foreground">
              {campus.description}
            </p>
            <dl className="mt-8 grid gap-4 text-sm">
              <InfoRow icon={MapPinned} label="住所" value={`${campus.postalCode} ${campus.address}`} />
              <InfoRow icon={Train} label="アクセス" value={campus.access} />
              <InfoRow icon={Phone} label="電話番号" value={campus.phone} />
              <InfoRow icon={Clock} label="受付時間" value={campus.hours} />
            </dl>
          </div>
          <div className="overflow-hidden rounded-xl bg-white shadow-sm">
            <iframe
              src={campus.mapEmbedUrl}
              title={`${campus.name} Google Maps`}
              className="h-[360px] w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHeader
            label="COURSES"
            title={`${campus.name}で受講できるコース`}
            description="校舎ごとの開講状況は時期により変わります。最新日程は無料相談でご確認ください。"
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {availableCourses.map((course) => (
              <Card key={course.slug} className="border-0 bg-white shadow-sm">
                <CardContent className="p-6">
                  <h2 className="text-xl font-bold text-primary">{course.name}</h2>
                  <p className="mt-3 leading-7 text-muted-foreground">
                    {course.description}
                  </p>
                  <p className="mt-4 text-sm font-bold text-accent">
                    {course.hoursLabel} / {course.techniques}
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
            label="ACCESS"
            title="アクセス情報"
            description="駅からのアクセスと校舎の特徴を確認できます。"
          />
          <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
            <Card className="border-0 bg-white shadow-sm">
              <CardContent className="p-6">
                <h2 className="text-xl font-bold text-primary">通学アクセス</h2>
                <p className="mt-4 leading-8 text-muted-foreground">{campus.access}</p>
                <p className="mt-4 leading-8 text-muted-foreground">
                  {campus.postalCode} {campus.address}
                </p>
              </CardContent>
            </Card>
            <Card className="border-0 bg-white shadow-sm">
              <CardContent className="p-6">
                <h2 className="text-xl font-bold text-primary">校舎の特徴</h2>
                <ul className="mt-4 space-y-3">
                  {campus.features.map((feature) => (
                    <li key={feature} className="flex gap-3 leading-7">
                      <span className="mt-2 size-2 rounded-full bg-accent" aria-hidden />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <CTASection
        title={`${campus.name}の無料体験を予約する`}
        description="開講日程、振替、支払い方法まで校舎スタッフが個別にご案内します。"
      />
    </>
  );
}

function InfoRow({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof MapPinned;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-xl bg-white p-4 shadow-sm">
      <dt className="flex items-center gap-2 font-bold text-primary">
        <Icon className="size-4 text-accent" aria-hidden />
        {label}
      </dt>
      <dd className="mt-2 leading-7 text-muted-foreground">{value}</dd>
    </div>
  );
}

function getAvailableCourses(campus: Campus) {
  const hasAllCourses = campus.features.some((feature) => feature.includes("全コース"));

  if (hasAllCourses) {
    return courses;
  }

  return courses.filter((course) =>
    campus.features.some((feature) => feature.includes(course.shortName)),
  );
}
