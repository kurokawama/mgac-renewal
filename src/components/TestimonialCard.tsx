import { Quote } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import type { Testimonial } from "@/data/testimonials";

export function TestimonialCard({
  testimonial,
}: {
  testimonial: Testimonial;
}) {
  return (
    <Card className="h-full border-0 bg-white shadow-sm">
      <CardContent className="flex h-full flex-col gap-5 p-6">
        <Quote className="size-8 text-accent" aria-hidden />
        <p className="flex-1 text-base leading-8 text-foreground">
          {testimonial.body}
        </p>
        <div>
          <p className="font-bold text-primary">{testimonial.name}</p>
          <p className="text-sm text-muted-foreground">{testimonial.occupation}</p>
        </div>
      </CardContent>
    </Card>
  );
}
