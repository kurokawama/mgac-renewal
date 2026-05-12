import Link from "next/link";
import type { Metadata } from "next";
import { MapPin, Phone } from "lucide-react";

import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SectionHeader } from "@/components/SectionHeader";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { campuses } from "@/data/campuses";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "校舎一覧 | MGA",
  description:
    "MGAの全国5校舎を紹介します。新宿、大久保、名古屋、大阪、福岡でストレッチ技術を学べます。",
  path: "/campus",
});

export default function CampusPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "校舎一覧", href: "/campus" }]} />
      <section className="bg-gradient-to-b from-white to-muted py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHeader
            label="CAMPUS"
            title="全国5校舎で学べるMGA"
            description="通いやすい校舎を選び、必要に応じて振替受講もできます。各校舎のアクセスと開講コースをご確認ください。"
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {campuses.map((campus) => (
              <Link key={campus.slug} href={`/campus/${campus.slug}`} className="group">
                <Card className="h-full border-0 bg-white shadow-sm transition group-hover:-translate-y-1 group-hover:shadow-md">
                  <CardContent className="p-6">
                    <Badge className="mb-4 bg-primary/10 text-primary">
                      {campus.region}
                    </Badge>
                    <h2 className="text-2xl font-bold text-primary">{campus.name}</h2>
                    <p className="mt-3 leading-7 text-muted-foreground">
                      {campus.description}
                    </p>
                    <div className="mt-6 space-y-3 text-sm">
                      <p className="flex gap-2 leading-6">
                        <MapPin className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden />
                        <span>
                          {campus.postalCode}
                          <br />
                          {campus.address}
                        </span>
                      </p>
                      <p className="flex items-center gap-2 font-bold text-primary">
                        <Phone className="size-4 text-accent" aria-hidden />
                        {campus.phone}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
