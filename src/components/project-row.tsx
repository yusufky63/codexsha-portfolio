import Link from "next/link";
import { getProjectSummary, type Project } from "@/data/portfolio";
import { DetailsArrow } from "@/components/project-card-chrome";
import { ProjectIconBadge } from "@/components/project-icon";
import { ProjectLinkList } from "@/components/project-link-list";
import { TechStackIcons } from "@/components/tech-stack-icons";

type ProjectRowProps = {
  project: Project;
};

export function ProjectRow({ project }: ProjectRowProps) {
  const githubLinks = project.links.filter((link) =>
    link.label.toLowerCase().includes("github")
  );

  return (
    <article className="group relative overflow-hidden rounded-lg border border-[#2a2a2a] bg-[#161616] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.025)] transition-colors hover:border-[#555] hover:bg-[#1b1b1b]">
      <Link
        aria-label={`View ${project.title} details`}
        className="absolute inset-0 z-10"
        href={`/projects/${project.slug}`}
      />
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="absolute inset-x-8 top-0 h-px bg-[#e6e6e6]/25" />
        <div className="absolute bottom-0 right-8 h-px w-1/3 bg-[#e6e6e6]/20" />
      </div>
      <ProjectLinkList
        className="absolute right-11 top-3 z-20 hidden justify-end md:flex"
        iconOnly
        links={githubLinks}
      />
      <DetailsArrow className="absolute right-2 top-2 z-20 hidden md:inline-flex" />
      <div className="relative grid gap-3 md:grid-cols-[44px_minmax(0,1fr)] md:items-start md:pr-56">
        <span className="font-mono text-[12px] text-[#6f6f6f]">
          {project.index}
        </span>
        <div className="min-w-0">
          <div className="mb-1.5 flex flex-wrap items-center gap-2">
            <ProjectIconBadge slug={project.slug} />
            <h3 className="text-lg font-medium leading-tight text-[#e6e6e6]">
              {project.title}
            </h3>
            <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-[#777]">
              {project.category}
            </span>
          </div>
          <p className="max-w-2xl text-sm leading-6 text-[#a1a1a1]">
            {getProjectSummary(project)}
          </p>
          <TechStackIcons items={project.stack} />
          <div className="pointer-events-none relative z-20 mt-4 flex items-center justify-between border-t border-[#242424] pt-3 md:hidden">
            <ProjectLinkList
              className="pointer-events-auto"
              iconOnly
              links={githubLinks}
            />
            <DetailsArrow className="ml-auto inline-flex text-[#bdbdbd]" />
          </div>
        </div>
      </div>
    </article>
  );
}
