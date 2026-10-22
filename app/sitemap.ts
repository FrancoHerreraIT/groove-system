import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: SITE_URL, changeFrequency: "monthly", priority: 1 },
    { url: `${SITE_URL}/proyectos`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/preguntas-frecuentes`, changeFrequency: "yearly", priority: 0.5 },
    ...projects.map(({ slug }) => ({
      url: `${SITE_URL}/proyectos/${slug}`,
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
  ];
}
