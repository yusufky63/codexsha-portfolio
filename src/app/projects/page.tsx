import type { Metadata } from "next";
import { ProjectIndex, type IndexRow } from "@/components/project-index";
import { archiveEntries, groupColor, groups, projects } from "@/data/portfolio";
import { pageMeta } from "@/lib/page-meta";

export const metadata: Metadata = pageMeta({
  title: "Index",
  description:
    "Every project in the Codexsha catalogue: products, desktop apps, browser extensions, onchain apps, Farcaster mini apps, AI tools and archived repositories.",
  path: "/projects"
});

const rows: IndexRow[] = [
  ...projects.map((project) => ({
    key: project.slug,
    index: project.index,
    title: project.title,
    category: project.category,
    summary: project.summary,
    year: project.year,
    href: `/projects/${project.slug}`,
    external: false,
    pinned: Boolean(project.pinned),
    group: project.group,
    color: groupColor(project.group),
    iconId: project.slug
  })),
  ...archiveEntries.map((entry, position) => ({
    key: `archive-${entry.repo}`,
    index: `A${String(position + 1).padStart(2, "0")}`,
    title: entry.title,
    category: entry.stack.length ? entry.stack.join(" / ") : "Repository",
    summary: entry.description,
    year: entry.year,
    href: entry.url,
    external: true,
    pinned: false,
    group: "archive",
    color: groupColor("archive"),
    iconId: `archive-${entry.repo}`
  }))
];

const filters = [
  { key: "all", label: "All" },
  { key: "pinned", label: "Pinned" },
  ...groups.map((group) => ({ key: group.key, label: group.label, color: groupColor(group.key) })),
  { key: "archive", label: "Archive", color: groupColor("archive") }
];

export default function ProjectsPage() {
  return (
    <main className="mx-auto max-w-[1320px] px-4 md:px-7">
      <section className="pt-10 md:pt-16">
        <p className="eyebrow" data-dust-root="">
          <span className="n">Index</span>
          {projects.length} case studies / {archiveEntries.length} archived
        </p>
        <h1
          className="display mt-8 text-[56px] leading-[0.9] text-ink md:text-[112px]"
          data-dust-root=""
        >
          The index
        </h1>
        <p className="mt-6 max-w-2xl text-[15px] text-ink-secondary" data-dust-root="">
          Numbered rows open a case study. Rows marked A are public repositories kept for the record; they open on
          GitHub. Private backends and client work are left out.
        </p>
      </section>

      <section className="pt-10 md:pt-14">
        <ProjectIndex filters={filters} rows={rows} />
      </section>
    </main>
  );
}
