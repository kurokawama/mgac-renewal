import type { Metadata } from "next";
import Image from "next/image";

import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { SectionHeader } from "@/components/SectionHeader";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { trainers } from "@/data/trainers";
import { marketingImages } from "@/lib/marketing-images";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "講師紹介 | MGA",
  description:
    "MGAの講師陣を紹介します。医療、スポーツ、ストレッチ店舗運営の現場経験を持つ講師が少人数で直接指導します。",
  path: "/trainers",
});

export default function TrainersPage() {
  const trainerJsonLd = trainers.map((trainer) => ({
    "@context": "https://schema.org",
    "@type": "Person",
    name: trainer.name,
    alternateName: trainer.nameKana,
    jobTitle: trainer.title,
    description: trainer.bio,
    affiliation: {
      "@type": "Organization",
      name: "MGA メディカルグローアップアカデミー",
    },
    worksFor: {
      "@type": "EducationalOrganization",
      name: "MGA メディカルグローアップアカデミー",
    },
    knowsAbout: trainer.specialties,
    hasCredential: trainer.qualifications,
  }));

  return (
    <>
      <Breadcrumbs items={[{ label: "講師紹介", href: "/trainers" }]} />
      <JsonLd data={trainerJsonLd} />
      <section className="bg-gradient-to-b from-white to-muted py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <div className="relative mb-12 min-h-[260px] overflow-hidden rounded-3xl shadow-sm md:min-h-[360px]">
            <Image
              src={marketingImages.classroom}
              alt="MGAの教室で講師が受講生にストレッチ実技を指導する様子"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 1152px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/70 via-primary/30 to-transparent" />
            <div className="absolute bottom-6 left-6 max-w-xl text-white md:bottom-8 md:left-8">
              <p className="text-sm font-bold text-white/75">TRAINERS</p>
              <h1 className="mt-3 text-3xl font-black tracking-tight text-white md:text-5xl">
                現場の熱量を、そのまま教室へ。
              </h1>
            </div>
          </div>
          <SectionHeader
            label="TRAINERS"
            title="現場経験のある9名の講師陣"
            description="医療国家資格者、アスリート指導経験者、Dr.stretch店舗運営経験者が、理論と実技を結びつけて指導します。"
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {trainers.map((trainer) => (
              <Card key={trainer.slug} className="h-full border-0 bg-white shadow-sm">
                <CardContent className="flex h-full flex-col p-6">
                  <div className="mb-4">
                    <p className="text-sm font-bold text-accent">{trainer.campus}</p>
                    <h2 className="mt-2 text-2xl font-bold text-primary">
                      {trainer.name}
                    </h2>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {trainer.nameKana}
                    </p>
                    <p className="mt-3 font-bold text-foreground">{trainer.title}</p>
                  </div>
                  <div className="mb-5 flex flex-wrap gap-2">
                    {trainer.qualifications.map((qualification) => (
                      <Badge
                        key={qualification}
                        variant="secondary"
                        className="h-auto rounded-full px-3 py-1"
                      >
                        {qualification}
                      </Badge>
                    ))}
                  </div>
                  <p className="leading-7 text-muted-foreground">{trainer.bio}</p>
                  <p className="mt-auto pt-5 text-sm font-bold text-primary">
                    指導歴 {trainer.yearsOfExperience}年 / 専門:{" "}
                    {trainer.specialties.join("・")}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
