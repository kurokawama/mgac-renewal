import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import { formatPrice, type Course } from "@/data/courses";
import { personas } from "@/data/site";
import { cn } from "@/lib/utils";

export function CourseCard({ course }: { course: Course }) {
  return (
    <Card className="h-full border-0 bg-white shadow-sm">
      <CardHeader>
        <div className="flex flex-wrap gap-2">
          {course.targetPersonas.map((personaId) => {
            const persona = personas.find((item) => item.key === personaId);
            return (
              <Badge key={personaId} variant="secondary">
                {persona?.label}
              </Badge>
            );
          })}
        </div>
        <CardTitle className="text-xl text-primary">{course.name}</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-1 flex-col gap-4">
        <p className="leading-7 text-muted-foreground">{course.description}</p>
        <dl className="grid grid-cols-2 gap-3 rounded-xl bg-muted p-4 text-sm">
          <div>
            <dt className="text-muted-foreground">受講料</dt>
            <dd className="font-bold text-foreground">
              {formatPrice(course.price)}円
            </dd>
          </div>
          <div>
            <dt className="text-muted-foreground">時間</dt>
            <dd className="font-bold text-foreground">{course.hoursLabel}</dd>
          </div>
          <div className="col-span-2">
            <dt className="text-muted-foreground">習得内容</dt>
            <dd className="font-bold text-foreground">{course.techniques}</dd>
          </div>
        </dl>
      </CardContent>
      <CardFooter className="bg-white p-4">
        <Link
          href={`/courses/${course.slug}`}
          className={cn(
            buttonVariants({ variant: "default" }),
            "h-12 w-full rounded-full bg-accent px-8 text-base text-white hover:bg-accent/90",
          )}
        >
          詳細を見る
        </Link>
      </CardFooter>
    </Card>
  );
}
