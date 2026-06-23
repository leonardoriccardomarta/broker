import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/site-url";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();
  const lastModified = new Date();

  return [
    {
      url: siteUrl.origin,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: new URL("/privacy", siteUrl).toString(),
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
