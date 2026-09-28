import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";
import { siteUrl } from "@/lib/site";

const siteUpdatedAt = "2026-09-27";
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const projectEntries = projects.map((project) => ({
    url: `${siteUrl}/projects/${project.slug}`,
    lastModified: project.updatedAt,
    changeFrequency: "monthly" as const,
    priority: project.parentSlug ? 0.7 : 0.8,
  }));

  return [
    {
      url: siteUrl,
      lastModified: siteUpdatedAt,
      changeFrequency: "weekly" as const,
      priority: 1,
    },
    {
      url: `${siteUrl}/designer`,
      lastModified: siteUpdatedAt,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    ...projectEntries,
  ];
}
