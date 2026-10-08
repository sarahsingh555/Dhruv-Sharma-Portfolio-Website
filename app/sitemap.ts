import type { MetadataRoute } from "next";
import { person } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: person.site, changeFrequency: "monthly", priority: 1 }];
}
