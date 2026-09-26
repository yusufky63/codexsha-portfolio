import Link from "next/link";
import { getProjectSummary, type Project } from "@/data/portfolio";
import { DetailsArrow } from "@/components/project-card-chrome";
import { ProjectIconBadge } from "@/components/project-icon";
import { ProjectLinkList } from "@/components/project-link-list";
import { TechStackIcons } from "@/components/tech-stack-icons";

type CompactCardProps = {
  project: Project;
};

export function CompactCard({ project }: CompactCardProps) {
  const githubLinks = project.links.filter((link) =>
    link.label.toLowerCase().includes("github")
  );

  return (
    <article className="group relative rounded-lg border border-[#2a2a2a] bg-[#171717] p-3 transition-colors hover:border-[#3f3f3f] hover:bg-[#1c1c1c]">
      <Link
        aria-label={`View ${project.title} details`}
        className="absolute inset-0 z-10"
        href={`/projects/${project.slug}`}
      />
      <ProjectLinkList
        className="absolute right-11 top-3 z-20 hidden justify-end md:flex"
        iconOnly
        links={githubLinks}
      />
      <DetailsArrow className="absolute right-2 top-2 z-20 hidden md:inline-flex" />
      <div className="flex min-h-[126px] flex-col justify-between gap-3 md:pr-20">
        <div className="pr-1">
          <div className="flex items-center gap-2">
            <ProjectIconBadge slug={project.slug} />
            <div className="min-w-0">
              <h3 className="truncate text-[15px] font-medium text-[#e6e6e6]">
                {project.title}
              </h3>
              <p className="mt-0.5 truncate font-mono text-[10px] uppercase tracking-[0.1em] text-[#6f6f6f]">
                {project.category}
              </p>
            </div>
          </div>
          <p className="project-card-description mt-2 text-[12px] leading-5 text-[#a1a1a1]">
            {getProjectSummary(project)}
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <TechStackIcons items={project.stack} limit={4} />
          <div className="pointer-events-none relative z-20 flex items-center justify-between border-t border-[#242424] pt-3 md:hidden">
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
