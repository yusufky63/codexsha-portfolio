import { createHash } from "node:crypto";
import { archive } from "@/data/archive";
import { desktop } from "@/data/desktop";
import { games } from "@/data/games";
import activity from "@/data/github-activity.json";
import snapshot from "@/data/github-repos.json";
import { miniApps } from "@/data/mini-apps";
import { onchain } from "@/data/onchain";
import { tools } from "@/data/tools";
import type { Project, ProjectGroup } from "@/data/types";

export type IndexedProject = Project & {
  /** Position in the catalogue, zero-padded. */
  index: string;
  /** First seven hex characters of sha256(slug): the "sha" half of the name. */
  sha: string;
  stars: number;
};

export type ArchiveEntry = {
  repo: string;
  title: string;
  description: string;
  stack: string[];
  year: number;
  url: string;
  homepage: string | null;
  stars: number;
};

/** CSS custom property that holds a group's hue; defined per theme in globals.css. */
export function groupColor(group: ProjectGroup | "archive") {
  return `var(--g-${group})`;
}

export const groups: Array<{ key: ProjectGroup; label: string; blurb: string }> = [
  {
    key: "desktop",
    label: "Apps & extensions",
    blurb: "Open-source desktop apps in Rust and Tauri, a mobile app, and browser extensions that run on your own keys."
  },
  {
    key: "game",
    label: "Games",
    blurb: "Stick figure strategy and action games on the App Store and Google Play, and a cube-built 3D strategy game."
  },
  {
    key: "onchain",
    label: "Onchain",
    blurb: "Wallet analytics, DeFi interfaces, an onchain game platform, name services, routers and developer kits."
  },
  {
    key: "mini-app",
    label: "Mini apps",
    blurb: "Farcaster and Base mini apps for fast wallet actions, games and token creation."
  },
  {
    key: "tool",
    label: "AI & tools",
    blurb: "AI apps and an open-source UI library."
  }
];

const repoByName = new Map(snapshot.repos.map((repo) => [repo.name, repo]));

/** The five shown first on the home page, in this order. They keep their own group and colour. */
const FLAGSHIP = ["zkcodex", "bstocks", "baseplay", "downpipe", "reclaim-cleaner"];

const byGroup: Project[] = [...desktop, ...games, ...onchain, ...miniApps, ...tools];

// The flagship five open the catalogue, so their numbers read 01 to 05 wherever they appear.
const ordered: Project[] = [
  ...FLAGSHIP.flatMap((slug) => byGroup.filter((project) => project.slug === slug)),
  ...byGroup.filter((project) => !FLAGSHIP.includes(project.slug))
];

export const projects: IndexedProject[] = ordered.map((project, position) => ({
  ...project,
  index: String(position + 1).padStart(2, "0"),
  sha: createHash("sha256").update(project.slug).digest("hex").slice(0, 7),
  stars: project.repo ? (repoByName.get(project.repo)?.stars ?? 0) : 0
}));

export const pinned = projects.filter((project) => project.pinned);

export const flagship = projects.filter((project) => FLAGSHIP.includes(project.slug));

export function projectsIn(group: ProjectGroup) {
  return projects.filter((project) => project.group === group);
}

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

/** Previous and next entries in catalogue order, wrapping at both ends. */
export function neighbours(slug: string) {
  const position = projects.findIndex((project) => project.slug === slug);
  return {
    previous: projects[(position - 1 + projects.length) % projects.length],
    next: projects[(position + 1) % projects.length]
  };
}

// Repositories that were renamed or deleted since the snapshot simply drop out of the archive.
export const archiveEntries: ArchiveEntry[] = archive.flatMap((seed) => {
  const repo = repoByName.get(seed.repo);
  if (!repo) return [];
  return [
    {
      ...seed,
      year: Number(repo.createdAt.slice(0, 4)),
      url: repo.url,
      homepage: repo.homepage,
      stars: repo.stars
    }
  ];
});

const years = [...projects.map((project) => project.year), ...archiveEntries.map((entry) => entry.year)];
export const span = { from: Math.min(...years), to: Math.max(...years) };

export const stats = [
  { value: projects.length + archiveEntries.length, label: "projects indexed" },
  {
    value: projects.filter((project) => project.links.some((link) => link.label === "Live")).length,
    label: "live deployments"
  },
  { value: snapshot.publicCount, label: "public repositories" },
  { value: activity.ranges[0].total, label: "contributions, last 12 months" }
];

/** Share of the whole catalogue held by each group, archive included: the hero's pixel bar. */
export const composition = [
  ...groups.map((group) => ({
    key: group.key as string,
    label: group.label,
    count: projects.filter((project) => project.group === group.key).length
  })),
  { key: "archive", label: "Archive", count: archiveEntries.length }
];

/** How many catalogued projects use each technology, most used first. */
export const stackTally = (() => {
  const counts = new Map<string, number>();
  for (const project of projects) {
    for (const item of project.stack) counts.set(item, (counts.get(item) ?? 0) + 1);
  }
  return [...counts.entries()]
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count || a.name.localeCompare(b.name));
})();

/**
 * Groups on one side, the most used technologies on the other, and one edge
 * for every pair that shares at least one project: the stack map.
 */
export const stackMap = (() => {
  const tools = stackTally.slice(0, 8);
  const edges = groups.flatMap((group) =>
    tools.flatMap((tool) => {
      const count = projects.filter(
        (project) => project.group === group.key && project.stack.includes(tool.name)
      ).length;
      return count > 0 ? [{ group: group.key as string, tool: tool.name, count }] : [];
    })
  );
  return {
    groups: groups.map((group) => ({
      key: group.key as string,
      label: group.label,
      count: projects.filter((project) => project.group === group.key).length
    })),
    tools,
    edges
  };
})();
