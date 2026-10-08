import type { MetadataRoute } from "next";
import { person } from "@/lib/content";

export default function robots(): MetadataRoute.Robots {
  return { rules: { userAgent: "*", allow: "/" }, sitemap: `${person.site}/sitemap.xml` };
}
