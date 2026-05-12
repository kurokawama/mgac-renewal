import type { MetadataRoute } from "next";

import { campuses } from "@/data/campuses";
import { site } from "@/data/site";

const staticPaths = [
  "/",
  "/trainers",
  "/license",
  "/license/holders",
  "/admission",
  "/campus",
  "/faq",
  "/contact",
  "/privacy",
  "/terms",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const campusPaths = campuses.map((campus) => `/campus/${campus.slug}`);

  return [...staticPaths, ...campusPaths].map((path) => ({
    url: `${site.url}${path}`,
    lastModified,
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : path.startsWith("/campus/") ? 0.7 : 0.8,
  }));
}
