import type { Metadata } from "next";
import { site } from "@/lib/site";

type PageMeta = {
  title: string;
  description: string;
  /** Canonical path, starting with a slash. */
  path: string;
  type?: "website" | "article";
};

/**
 * Next replaces nested `openGraph` and `twitter` objects instead of merging
 * them, so every page builds its whole set here. Images are left out on
 * purpose: the `opengraph-image` file of the segment is attached automatically.
 */
export function pageMeta({ title, description, path, type = "website" }: PageMeta): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type,
      siteName: site.name,
      locale: "en_US",
      title: `${title} - ${site.name}`,
      description,
      url: path
    },
    twitter: {
      card: "summary_large_image",
      site: site.xHandle,
      creator: site.xHandle,
      title: `${title} - ${site.name}`,
      description
    }
  };
}
