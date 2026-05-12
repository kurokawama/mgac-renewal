import type { Metadata } from "next";

import { site } from "@/data/site";

export function pageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title,
      description,
      url: `${site.url}${path}`,
      siteName: site.name,
      locale: "ja_JP",
      type: "website",
    },
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    alternateName: site.shortName,
    url: site.url,
    telephone: site.phone,
    email: site.email,
    address: site.address,
    sameAs: ["https://www.dr-stretch.com"],
  };
}
