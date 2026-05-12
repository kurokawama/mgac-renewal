import Link from "next/link";
import { Phone } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { site } from "@/data/site";
import { cn } from "@/lib/utils";

type CTASectionProps = {
  title?: string;
  description?: string;
};

export function CTASection({
  title = "まずは無料体験で、学び方を相談しませんか",
  description = "目的に合うコース、通学日程、支払い方法まで、専任スタッフが日本語で丁寧にご案内します。",
}: CTASectionProps) {
  return (
    <section className="bg-primary py-16 text-white md:py-24">
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-8 px-4 md:flex-row md:items-center md:justify-between">
        <div className="max-w-2xl">
          <p className="mb-3 text-sm font-bold text-white/75">無料相談受付中</p>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            {title}
          </h2>
          <p className="mt-4 text-base leading-8 text-white/85">
            {description}
          </p>
        </div>
        <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          <a
            href={`tel:${site.phone}`}
            className={cn(
              buttonVariants({ variant: "outline" }),
              "h-12 rounded-full border-white bg-white px-8 text-base text-primary hover:bg-white/90",
            )}
          >
            <Phone className="mr-2 size-4" aria-hidden />
            {site.phone}
          </a>
          <Link
            href="/contact"
            className={cn(
              buttonVariants({ variant: "default" }),
              "h-12 rounded-full bg-accent px-8 text-base text-white hover:bg-accent/90",
            )}
          >
            無料体験を予約
          </Link>
        </div>
      </div>
    </section>
  );
}
