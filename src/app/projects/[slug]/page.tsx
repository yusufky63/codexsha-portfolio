import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Home } from "lucide-react";
import { ProjectLinkList } from "@/components/project-link-list";
import { SiteHeader } from "@/components/site-header";
import { TechStackIcons } from "@/components/tech-stack-icons";
import { Button } from "@/components/ui/button";
import { allProjects, getFeaturedProject } from "@/data/portfolio";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return allProjects.map((project) => ({
    slug: project.slug
  }));
}

export async function generateMetadata({
  params
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getFeaturedProject(slug);

  if (!project) {
    return {
      title: "Project not found - Codexsha"
    };
  }

  return {
    title: `${project.title} - Codexsha`,
    description: project.summary
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getFeaturedProject(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#121212]">
      <SiteHeader />
      <div className="mx-auto max-w-[1080px] px-4 pb-12 pt-7 md:px-6 md:pt-10">
        <Link
          className="inline-flex h-9 items-center gap-2 rounded-md border border-[#343434] bg-[#171717] px-3 text-[13px] font-medium text-[#e6e6e6] transition-colors hover:border-[#4a4a4a] hover:bg-[#202020]"
          href="/"
        >
          <ArrowLeft className="size-3.5" />
          Back home
        </Link>

        <section className="mt-6 border-b border-[#2a2a2a] pb-7">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-[#6f6f6f]">
              {project.index} / {project.category}
            </p>
            <h1 className="mt-3 text-[32px] font-medium leading-tight text-[#e6e6e6] md:text-[38px]">
              {project.title}
            </h1>
            <p className="mt-4 max-w-3xl text-[15px] leading-7 text-[#a1a1a1]">
              {project.description}
            </p>
          </div>

          <aside className="mt-5 rounded-lg border border-[#2a2a2a] bg-[#171717] p-4">
            <dl className="grid gap-4 md:grid-cols-[minmax(0,1fr)_auto] md:items-start">
              <div>
                <dt className="font-mono text-[10px] uppercase tracking-[0.12em] text-[#6f6f6f]">
                  Status
                </dt>
                <dd className="mt-1 text-sm leading-6 text-[#d0d0d0]">
                  {project.status}
                </dd>
              </div>
              {project.links.length ? (
                <div>
                  <dt className="font-mono text-[10px] uppercase tracking-[0.12em] text-[#6f6f6f]">
                    Links
                  </dt>
                  <dd className="mt-2">
                    <ProjectLinkList links={project.links} />
                  </dd>
                </div>
              ) : null}
            </dl>
          </aside>
        </section>

        <section className="py-8">
          <div className="space-y-4">
            <DetailBlock title="Overview">
              <p>{project.summary}</p>
            </DetailBlock>

            <DetailBlock title="Key Features">
              <ul className="grid gap-2">
                {project.features.map((feature) => (
                  <li className="flex gap-3" key={feature}>
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[#9a9a9a]" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </DetailBlock>

            <DetailBlock title="Architecture">
              <p>{project.architecture}</p>
            </DetailBlock>

            <DetailBlock title="Role / Ownership">
              <p>{project.role}</p>
            </DetailBlock>

            <DetailBlock title="Stack">
              <TechStackIcons
                items={project.stack}
                limit={project.stack.length}
              />
              {project.privateNote ? (
                <p className="mt-4 border-t border-[#252525] pt-4 text-[12px] leading-5 text-[#777]">
                  {project.privateNote}
                </p>
              ) : null}
            </DetailBlock>
          </div>
        </section>

        <section className="rounded-lg border border-[#2a2a2a] bg-[#171717] p-5 md:flex md:items-center md:justify-between">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-[#6f6f6f]">
              Next
            </p>
            <h2 className="mt-2 text-lg font-medium text-[#e6e6e6]">
              Return to the homepage
            </h2>
          </div>
          <div className="mt-4 md:mt-0">
            <Button href="/" variant="primary">
              <Home className="size-3.5" />
              Home
            </Button>
          </div>
        </section>
      </div>
    </main>
  );
}

function DetailBlock({
  title,
  children
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-lg border border-[#2a2a2a] bg-[#171717] p-4">
      <h2 className="font-mono text-[11px] uppercase tracking-[0.14em] text-[#8a8a8a]">
        {title}
      </h2>
      <div className="mt-3 text-sm leading-7 text-[#b8b8b8]">{children}</div>
    </section>
  );
}
