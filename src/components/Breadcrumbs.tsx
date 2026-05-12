import Link from "next/link";
import { ChevronRight } from "lucide-react";

import { JsonLd } from "@/components/JsonLd";
import { site } from "@/data/site";

export type BreadcrumbItem = {
  label: string;
  href: string;
};

export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  const allItems = [{ label: "ホーム", href: "/" }, ...items];
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: allItems.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: `${site.url}${item.href}`,
    })),
  };

  return (
    <>
      <nav
        aria-label="パンくずリスト"
        className="mx-auto w-full max-w-6xl px-4 pt-6 text-sm text-muted-foreground"
      >
        <ol className="flex flex-wrap items-center gap-2">
          {allItems.map((item, index) => {
            const isLast = index === allItems.length - 1;
            return (
              <li key={item.href} className="flex items-center gap-2">
                {isLast ? (
                  <span className="font-medium text-foreground">
                    {item.label}
                  </span>
                ) : (
                  <Link className="text-primary hover:underline" href={item.href}>
                    {item.label}
                  </Link>
                )}
                {!isLast && <ChevronRight className="size-3" aria-hidden />}
              </li>
            );
          })}
        </ol>
      </nav>
      <JsonLd data={jsonLd} />
    </>
  );
}
