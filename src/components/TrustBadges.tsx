import { Award, BadgeCheck, Globe2, Trophy } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { site } from "@/data/site";

const icons = [Award, Globe2, Trophy, BadgeCheck];

export function TrustBadges() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {site.trustBadges.map((badge, index) => {
        const Icon = icons[index] ?? BadgeCheck;
        return (
          <Card key={badge.title} className="border-0 bg-white shadow-sm">
            <CardContent className="flex items-center gap-3 p-5">
              <span className="flex size-11 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Icon className="size-5" aria-hidden />
              </span>
              <span className="text-base font-bold text-primary">{badge.title}</span>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
