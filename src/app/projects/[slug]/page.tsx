import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Pin, Star } from "lucide-react";
import { ProjectIcon } from "@/components/project-icon";
import { LinkList, tone } from "@/components/ui";
import { getProject, groupColor, groups, neighbours, projects } from "@/data/portfolio";
import { pageMeta } from "@/lib/page-meta";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Project not found" };

  return pageMeta({
    title: project.title,
    description: project.summary,
    path: `/projects/${project.slug}`,
    type: "article"
  });
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const group = groups.find((item) => item.key === project.group);
  const { previous, next } = neighbours(project.slug);
  const color = groupColor(project.group);
  const live = project.links.some((link) => link.label === "Live");
  const inStores = project.links.some((link) => link.label === "App Store" || link.label === "Google Play");
  const facts = [
    { label: "Group", value: group?.label ?? project.group },
    { label: "Started", value: String(project.year) },
    ...(project.license ? [{ label: "License", value: project.license }] : []),
    { label: "Status", value: project.status }
  ];

  return (
    <main className="mx-auto max-w-[1320px] px-4 md:px-7" style={tone(color)}>
      <section className="pt-8 md:pt-12">
        <div className="flex items-center justify-between gap-4" data-dust-root="">
          <Link
            className="inline-flex items-center gap-2 font-mono text-[11px] font-medium uppercase tracking-[0.08em] text-ink-secondary transition-colors hover:text-ink"
            href="/projects"
          >
            <ArrowLeft className="size-3.5" strokeWidth={1.75} />
            Index
          </Link>
          <p className="num font-mono text-[11px] font-medium uppercase tracking-[0.08em] text-ink-muted" title="sha256 of the slug">
            N{"°"} {project.index} / sha {project.sha}
          </p>
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-2 md:mt-14">
          <p className="label flex items-center gap-2" data-dust-root="">
            <span className="dot" />
            {project.category}
          </p>
          {project.pinned ? (
            <span className="badge badge-info">
              <Pin strokeWidth={1.75} />
              Pinned
            </span>
          ) : null}
          {live ? <span className="badge badge-ok">Live</span> : null}
          {inStores ? <span className="badge badge-ok">In stores</span> : null}
          {project.license ? <span className="badge">{project.license}</span> : null}
        </div>
        <div className="mt-6 flex flex-col gap-5 md:flex-row md:items-center md:gap-7" data-dust-root="">
          <ProjectIcon id={project.slug} size={88} />
          <h1 className="display text-[52px] leading-[0.92] text-ink [overflow-wrap:anywhere] md:text-[104px]">
            {project.title}
          </h1>
        </div>

        <div className="mt-8 grid gap-8 border-t border-line pt-6 md:mt-12 md:grid-cols-12 md:gap-6">
          <p
            className="display-medium text-[24px] leading-[1.16] text-ink md:col-span-7 md:text-[30px]"
            data-dust-root=""
          >
            {project.summary}
          </p>
          <div className="md:col-span-4 md:col-start-9">
            <LinkList links={project.links} />
            {project.stars > 0 ? (
              <p
                className="mt-5 inline-flex items-center gap-2 font-mono text-[12px] text-ink-secondary"
                data-dust-root=""
              >
                <Star className="size-3.5" strokeWidth={1.75} />
                <span className="num">{project.stars}</span> {project.stars === 1 ? "star" : "stars"} on GitHub
              </p>
            ) : null}
          </div>
        </div>
      </section>

      <section className="grid gap-10 pt-14 md:grid-cols-12 md:gap-6 md:pt-20">
        <dl className="frame h-fit md:col-span-4" data-dust-frame="" data-dust-root="">
          {facts.map((fact) => (
            <div className="border-b border-line px-4 py-3.5 last:border-b-0" key={fact.label}>
              <dt className="label">{fact.label}</dt>
              <dd className="mt-1.5 text-[14px] text-ink">{fact.value}</dd>
            </div>
          ))}
        </dl>

        <div className="grid gap-12 md:col-span-7 md:col-start-6">
          <Block title="Overview">
            <p>{project.description}</p>
          </Block>

          <Block title="What it does">
            <ol className="border-t border-line">
              {project.features.map((feature, position) => (
                <li className="grid grid-cols-[2.5rem_minmax(0,1fr)] border-b border-line py-3" key={feature}>
                  <span className="num font-mono text-[12px] text-ink-muted">
                    {String(position + 1).padStart(2, "0")}
                  </span>
                  <span className="text-ink">{feature}</span>
                </li>
              ))}
            </ol>
          </Block>

          <Block title="How it is built">
            <p>{project.architecture}</p>
          </Block>

          {project.role ? (
            <Block title="Role">
              <p>{project.role}</p>
            </Block>
          ) : null}

          <Block title="Stack">
            <p className="font-mono text-[13px] leading-7 text-ink">{project.stack.join(" / ")}</p>
            {project.privateNote ? <p className="mt-4 text-[13px] text-ink-muted">{project.privateNote}</p> : null}
          </Block>
        </div>
      </section>

      <nav aria-label="More projects" className="frame mt-20 grid md:mt-28 md:grid-cols-2">
        <NeighbourLink direction="previous" index={previous.index} slug={previous.slug} title={previous.title} />
        <NeighbourLink direction="next" index={next.index} slug={next.slug} title={next.title} />
      </nav>
    </main>
  );
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section data-dust-root="">
      <h2 className="eyebrow">
        <span className="n">{title}</span>
      </h2>
      <div className="mt-4 text-[16px] leading-7 text-ink-secondary">{children}</div>
    </section>
  );
}

type NeighbourLinkProps = {
  direction: "previous" | "next";
  index: string;
  slug: string;
  title: string;
};

function NeighbourLink({ direction, index, slug, title }: NeighbourLinkProps) {
  const next = direction === "next";

  return (
    <Link
      className={`rail group flex flex-col gap-3 px-4 py-8 transition-colors hover:bg-raised md:px-5 ${
        next ? "border-t border-line md:items-end md:border-l md:border-t-0 md:text-right" : ""
      }`}
      data-dust-root=""
      href={`/projects/${slug}`}
    >
      <span className="inline-flex items-center gap-2 font-mono text-[11px] font-medium uppercase tracking-[0.08em] text-ink-muted">
        {next ? null : <ArrowLeft className="size-3.5" strokeWidth={1.75} />}
        {next ? "Next" : "Previous"} / {index}
        {next ? <ArrowRight className="size-3.5" strokeWidth={1.75} /> : null}
      </span>
      <span className="display text-[30px] leading-none text-ink md:text-[40px]">{title}</span>
    </Link>
  );
}
