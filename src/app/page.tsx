import Link from "next/link";
import Image from "next/image";
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
import { marketingImages } from "@/lib/marketing-images";
import { cn } from "@/lib/utils";
import { organizationJsonLd } from "@/lib/seo";

export default function Home() {
  const firstFaqs = faqItems.slice(0, 5);

  return (
    <>
      <Breadcrumbs items={[]} />
      <JsonLd data={organizationJsonLd()} />
      <section className="relative isolate overflow-hidden bg-primary text-white">
        <Image
          src={marketingImages.hero}
          alt="MGAのストレッチ技術を学ぶ受講生と講師"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-primary/65 to-black/35" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background/95 to-transparent" />
        <div className="relative mx-auto grid min-h-[620px] max-w-6xl items-center gap-10 px-4 py-20 md:py-28 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <Badge className="mb-5 border-white/25 bg-white/15 text-white backdrop-blur">
              医学的根拠で学ぶストレッチスクール
            </Badge>
            <h1 className="max-w-4xl text-4xl font-black tracking-tight text-white md:text-6xl">
              世界で認められた技術を、あなたの手に。
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-9 text-white/90 md:text-xl">
              年間500人以上が卒業。プロアスリートも認めるストレッチ技術を学べる唯一のスクール
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className={cn(
                  buttonVariants({ variant: "default" }),
                  "h-12 rounded-full bg-accent px-8 text-base text-accent-foreground shadow-lg shadow-black/20 hover:bg-accent/90",
                )}
              >
                無料体験セミナーに申し込む
              </Link>
              <Link
                href="/courses"
                className={cn(
                  buttonVariants({ variant: "outline" }),
                  "h-12 rounded-full border-white/60 bg-white px-8 text-base text-primary hover:bg-white/90",
                )}
              >
                講座を見る
                <ArrowRight className="ml-2 size-4" aria-hidden />
              </Link>
            </div>
          </div>
          <Card className="border-0 bg-white/95 shadow-xl backdrop-blur">
            <CardContent className="p-6 md:p-8">
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
                    <span className="leading-7 text-foreground">{item}</span>
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
          <div className="relative mb-10 h-32 overflow-hidden rounded-3xl shadow-sm md:h-44">
            <Image
              src={marketingImages.classroom}
              alt="MGAの教室でストレッチ技術を実技指導する様子"
              fill
              sizes="(max-width: 768px) 100vw, 1152px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-primary/35" />
          </div>
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
          <div className="mb-10 grid gap-6 rounded-3xl bg-muted p-3 shadow-sm md:grid-cols-[0.9fr_1.1fr] md:items-center md:p-4">
            <div className="relative min-h-[240px] overflow-hidden rounded-2xl">
              <Image
                src={marketingImages.graduates}
                alt="MGAを卒業して達成感を分かち合う受講生"
                fill
                sizes="(max-width: 768px) 100vw, 480px"
                className="object-cover"
              />
            </div>
            <div className="p-4 md:p-6">
              <p className="text-sm font-bold text-accent">GRADUATES</p>
              <h3 className="mt-3 text-2xl font-bold text-primary md:text-3xl">
                学んだ技術が、家族・現場・事業の次の一歩になる
              </h3>
              <p className="mt-4 leading-8 text-muted-foreground">
                少人数で実技を確認しながら、目的に合わせた使い方まで落とし込むから、修了後の行動につながります。
              </p>
            </div>
          </div>
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
