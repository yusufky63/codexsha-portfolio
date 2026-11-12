import type { MetadataRoute } from "next";
import snapshot from "@/data/github-repos.json";
import { flagship, projects } from "@/data/portfolio";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  // The catalogue is rebuilt from the GitHub snapshot, so its date is the honest "last modified".
  const lastModified = new Date(snapshot.updatedAt);
  const leading = new Set(flagship.map((project) => project.slug));

  return [
    { url: site.url, lastModified, changeFrequency: "weekly", priority: 1 },
    { url: `${site.url}/projects`, lastModified, changeFrequency: "weekly", priority: 0.9 },
    ...projects.map((project) => ({
      url: `${site.url}/projects/${project.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: project.pinned || leading.has(project.slug) ? 0.8 : 0.6
    }))
  ];
}
