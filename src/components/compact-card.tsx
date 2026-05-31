import type { CompactProject } from "@/data/portfolio";
import { ProjectIconBadge } from "@/components/project-icon";
import { ProjectLinkList } from "@/components/project-link-list";
import Link from "next/link";
import { TechStackIcons } from "@/components/tech-stack-icons";

type CompactCardProps = {
  project: CompactProject;
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
      <Link
        aria-label={`View ${project.title} details`}
        className="absolute right-2 top-2 z-20 hidden size-8 items-center justify-center rounded-md text-[#9a9a9a] transition-colors hover:bg-[#232323] hover:text-[#e6e6e6] md:inline-flex"
        href={`/projects/${project.slug}`}
      >
        <svg
          aria-hidden="true"
          className="size-4"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            d="M7 17 17 7M9 7h8v8"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.8"
          />
        </svg>
      </Link>
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
            {project.description}
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <TechStackIcons items={project.stack} limit={4} />
          <div className="relative z-20 flex items-center justify-between border-t border-[#242424] pt-3 md:hidden">
            <ProjectLinkList iconOnly links={githubLinks} />
            <Link
              aria-label={`View ${project.title} details`}
              className="ml-auto inline-flex size-8 items-center justify-center rounded-md text-[#bdbdbd] transition-colors hover:bg-[#232323] hover:text-[#e6e6e6]"
              href={`/projects/${project.slug}`}
            >
              <svg
                aria-hidden="true"
                className="size-4"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  d="M7 17 17 7M9 7h8v8"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.8"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
