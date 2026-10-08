import type { MetadataRoute } from "next";
import { person } from "@/lib/content";
import { getThoughts } from "@/lib/thoughts";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: person.site, changeFrequency: "monthly", priority: 1 },
    { url: `${person.site}/thoughts`, changeFrequency: "monthly", priority: 0.6 },
    ...getThoughts().map((n) => ({ url: `${person.site}/thoughts/${n.slug}`, priority: 0.5 })),
  ];
}
