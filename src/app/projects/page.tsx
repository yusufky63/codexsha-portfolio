import type { Metadata } from "next";
import { CompactCard } from "@/components/compact-card";
import { SiteHeader } from "@/components/site-header";
import { SectionHeading } from "@/components/ui/section-heading";
import {
  featuredProjects,
  miniApps,
  tools
} from "@/data/portfolio";

export const metadata: Metadata = {
  title: "Projects - Codexsha",
  description:
    "All visible Codexsha projects across Web3 products, Farcaster mini apps, AI tools, and automation."
};

const projectGroups = [
  {
    eyebrow: "01 / Flagship",
    title: "Featured Products",
    description:
      "Primary product-led case studies with detail pages and public-facing product context.",
    projects: featuredProjects
  },
  {
    eyebrow: "02 / Farcaster",
    title: "Mini Apps",
    description:
      "Fast wallet actions, games, token creation, and social on-chain flows.",
    projects: miniApps
  },
  {
    eyebrow: "03 / Tools",
    title: "AI & Automation",
    description:
      "AI, deployment, and media automation tools supporting the wider builder profile.",
    projects: tools
  }
].filter((group) => group.projects.length > 0);

const projectCount = projectGroups.reduce(
  (total, group) => total + group.projects.length,
  0
);

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-[#121212]">
      <SiteHeader />
      <div className="mx-auto max-w-[1080px] px-4 pb-12 pt-8 md:px-6 md:pt-11">
        <section className="border-b border-[#2a2a2a] pb-7">
          <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-[#6f6f6f]">
            Project Index
          </p>
          <div className="mt-3 grid gap-4 md:grid-cols-[minmax(0,1fr)_220px] md:items-end">
            <div>
              <h1 className="text-[30px] font-medium leading-tight text-[#e6e6e6] md:text-[36px]">
                All visible projects.
              </h1>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-[#a1a1a1]">
                A compact index of shipped products, mini apps, tools, and
                public experiments. Private backend, stats, and feedback repos
                are intentionally excluded.
              </p>
            </div>
            <div className="rounded-lg border border-[#2a2a2a] bg-[#171717] p-4">
              <p className="font-mono text-2xl text-[#e6e6e6]">
                {projectCount}
              </p>
              <p className="mt-1 text-[12px] text-[#7d7d7d]">
                visible projects
              </p>
            </div>
          </div>
        </section>

        <div className="space-y-10 py-8">
          {projectGroups.map((group) => (
            <section key={group.title}>
              <SectionHeading
                description={group.description}
                eyebrow={group.eyebrow}
                title={group.title}
              />
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {group.projects.map((project) => (
                  <CompactCard key={project.slug} project={project} />
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
