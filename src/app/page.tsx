import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CourseCard } from "@/components/CourseCard";
import { CTASection } from "@/components/CTASection";
import { JsonLd } from "@/components/JsonLd";
import { PersonaCards } from "@/components/PersonaCards";
import { TestimonialCard } from "@/components/TestimonialCard";
import { TrustBadges } from "@/components/TrustBadges";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { courses } from "@/data/courses";
import { faqItems } from "@/data/faq";
import { personas } from "@/data/site";
import { testimonialsByPersona } from "@/data/testimonials";
import { trainers } from "@/data/trainers";
import { cn } from "@/lib/utils";
import { organizationJsonLd } from "@/lib/seo";

export default function Home() {
  const firstFaqs = faqItems.slice(0, 5);

  return (
    <>
      <Breadcrumbs items={[]} />
      <JsonLd data={organizationJsonLd()} />
      <section className="bg-gradient-to-b from-white to-muted py-16 md:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <Badge className="mb-5 bg-primary/10 text-primary">
              医学的根拠で学ぶストレッチスクール
            </Badge>
            <h1 className="text-4xl font-black tracking-tight text-primary md:text-6xl">
              家族のケアから独立開業まで、体に触れる力を確かな技術へ。
            </h1>
            <p className="mt-6 text-lg leading-9 text-muted-foreground">
              MGAは、解剖学、評価、実技を少人数で学ぶストレッチスクールです。未経験の方、医療専門職、事業化を目指す方まで目的別に学べます。
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
                講座を見る
                <ArrowRight className="ml-2 size-4" aria-hidden />
              </Link>
            </div>
          </div>
          <Card className="border-0 bg-white shadow-sm">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold text-primary">
                MGAで身につくこと
              </h2>
              <ul className="mt-6 space-y-4">
                {[
                  "禁忌を理解した安全なストレッチ",
                  "姿勢と可動域を見立てる評価力",
                  "家族、患者、顧客に説明できる言葉",
                  "資格取得後も続く復習と開業支援",
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <CheckCircle2 className="mt-1 size-5 shrink-0 text-accent" />
                    <span className="leading-7">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHeader
            label="目的別に選ぶ"
            title="あなたの目標に合わせた学び方"
            description="家族のケア、医療現場、独立開業。それぞれに必要な深さで学べます。"
          />
          <PersonaCards />
        </div>
      </section>

      <section className="bg-muted py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <TrustBadges />
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHeader
            label="講座"
            title="8つの専門コース"
            description="基礎から専門技術、地方集中、Dr.stretch開業まで段階的に学べます。"
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {courses.map((course) => (
              <CourseCard key={course.slug} course={course} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHeader
            label="講師"
            title="現場経験のある講師陣"
            description="医療、運動指導、開業支援の専門家が実技を直接指導します。"
          />
          <div className="grid gap-6 md:grid-cols-3">
            {trainers.slice(0, 3).map((trainer) => (
              <Card key={trainer.name} className="border-0 bg-white shadow-sm">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-primary">
                    {trainer.name}
                  </h3>
                  <p className="mt-1 text-sm font-bold text-accent">
                    {trainer.title}
                  </p>
                  <p className="mt-4 leading-7 text-muted-foreground">
                    {trainer.bio}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHeader
            label="受講生の声"
            title="目的別の成果"
            description="家族ケア、医療現場、事業化で学びがどう活きたかをご紹介します。"
          />
          <Tabs defaultValue="family">
            <TabsList className="mb-8 h-auto flex-wrap">
              {personas.map((persona) => (
                <TabsTrigger key={persona.key} value={persona.key} className="px-4 py-2">
                  {persona.label}
                </TabsTrigger>
              ))}
            </TabsList>
            {personas.map((persona) => (
              <TabsContent key={persona.key} value={persona.key}>
                <div className="grid gap-6 md:grid-cols-3">
                  {testimonialsByPersona[persona.key].map((testimonial) => (
                    <TestimonialCard
                      key={testimonial.name}
                      testimonial={testimonial}
                    />
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      <section className="bg-muted py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-4">
          <SectionHeader
            label="FAQ"
            title="よくある質問"
            description="体験、料金、授業について多い質問をまとめました。"
          />
          <Accordion>
            {firstFaqs.map((faq, index) => (
              <AccordionItem key={faq.question} value={`faq-${index}`}>
                <AccordionTrigger className="text-base">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="leading-7 text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <CTASection />
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
