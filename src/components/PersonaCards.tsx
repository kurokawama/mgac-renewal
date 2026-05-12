import Link from "next/link";
import Image from "next/image";
import { BriefcaseBusiness, HeartHandshake, Stethoscope } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { personas } from "@/data/site";
import { marketingImages } from "@/lib/marketing-images";

const hrefs = {
  family: "/for/family",
  medical: "/for/medical",
  business: "/for/business",
} as const;

const icons = {
  family: HeartHandshake,
  medical: Stethoscope,
  business: BriefcaseBusiness,
} as const;

const personaImages = {
  family: {
    src: marketingImages.familyCare,
    alt: "家族の体をやさしくケアするストレッチの様子",
  },
  medical: {
    src: marketingImages.hero,
    alt: "専門的なストレッチ技術を学ぶ医療専門職の受講風景",
  },
  business: {
    src: marketingImages.graduates,
    alt: "MGA卒業生が技術習得の達成感を分かち合う様子",
  },
} as const;

export function PersonaCards() {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {personas.map((persona) => {
        const Icon = icons[persona.key];
        const image = personaImages[persona.key];
        return (
          <Link key={persona.key} href={hrefs[persona.key]} className="group">
            <Card className="h-full border-0 bg-white p-0 shadow-sm transition group-hover:-translate-y-1 group-hover:shadow-md">
              <div className="relative h-48 overflow-hidden rounded-t-xl">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/35 to-transparent" />
                <span className="absolute bottom-4 left-4 flex size-12 items-center justify-center rounded-full bg-white/90 text-primary shadow-sm">
                  <Icon className="size-6" aria-hidden />
                </span>
              </div>
              <CardHeader className="px-6 pt-6">
                <CardTitle className="text-xl text-primary">
                  {persona.label}
                </CardTitle>
              </CardHeader>
              <CardContent className="px-6 pb-6">
                <p className="leading-7 text-muted-foreground">
                  {persona.description}
                </p>
              </CardContent>
            </Card>
          </Link>
        );
      })}
    </div>
  );
}
