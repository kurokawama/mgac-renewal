import Link from "next/link";
import { BriefcaseBusiness, HeartHandshake, Stethoscope } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { personas } from "@/data/site";

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

export function PersonaCards() {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {personas.map((persona) => {
        const Icon = icons[persona.key];
        return (
          <Link key={persona.key} href={hrefs[persona.key]} className="group">
            <Card className="h-full border-0 bg-white shadow-sm transition group-hover:-translate-y-1 group-hover:shadow-md">
              <CardHeader>
                <span className="mb-3 flex size-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon className="size-6" aria-hidden />
                </span>
                <CardTitle className="text-xl text-primary">
                  {persona.label}
                </CardTitle>
              </CardHeader>
              <CardContent>
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
