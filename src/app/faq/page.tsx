import type { Metadata } from "next";

import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { SectionHeader } from "@/components/SectionHeader";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { faqCategories, faqItems } from "@/data/faq";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "よくある質問 | MGA",
  description:
    "MGAの体験セミナー、入学、料金、授業に関するよくある質問をまとめました。",
  path: "/faq",
});

export default function FaqPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <Breadcrumbs items={[{ label: "よくある質問", href: "/faq" }]} />
      <JsonLd data={faqJsonLd} />
      <section className="bg-gradient-to-b from-white to-muted py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHeader
            label="FAQ"
            title="よくある質問"
            description="無料体験、入学手続き、料金、授業の進め方について、よくいただく質問をカテゴリ別にまとめました。"
          />
          <div className="grid gap-6 lg:grid-cols-2">
            {faqCategories.map((category) => {
              const items = faqItems.filter((faq) => faq.category === category.id);
              return (
                <Card key={category.id} className="border-0 bg-white shadow-sm">
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-bold text-primary">
                      {category.label}
                    </h2>
                    <Accordion className="mt-5">
                      {items.map((faq) => (
                        <AccordionItem key={faq.id} value={faq.id}>
                          <AccordionTrigger className="py-4 text-base">
                            {faq.question}
                          </AccordionTrigger>
                          <AccordionContent className="leading-7 text-muted-foreground">
                            {faq.answer}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
