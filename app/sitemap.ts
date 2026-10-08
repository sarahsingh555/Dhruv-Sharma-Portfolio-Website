import type { MetadataRoute } from "next";
import { person } from "@/lib/content";
import { getNotes } from "@/lib/notes";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: person.site, changeFrequency: "monthly", priority: 1 },
    { url: `${person.site}/notes`, changeFrequency: "monthly", priority: 0.6 },
    ...getNotes().map((n) => ({ url: `${person.site}/notes/${n.slug}`, priority: 0.5 })),
  ];
}
