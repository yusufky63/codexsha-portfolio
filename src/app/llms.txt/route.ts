import { archiveEntries, groups, projects, projectsIn } from "@/data/portfolio";
import { site } from "@/lib/site";

export const dynamic = "force-static";

export function GET() {
  const lines = [
    `# ${site.name}`,
    "",
    `> ${site.description}`,
    "",
    `The site lists ${projects.length} case studies and ${archiveEntries.length} archived public repositories by ${site.owner}. Each case study page states what the project does, how it is built, its stack, its status and its links.`,
    "",
    "## Pages",
    "",
    `- [Home](${site.url}/): overview, pinned projects, GitHub activity and stack`,
    `- [Index](${site.url}/projects): every project, filterable by group`,
    ""
  ];

  for (const group of groups) {
    lines.push(`## ${group.label}`, "");
    for (const project of projectsIn(group.key)) {
      lines.push(`- [${project.title}](${site.url}/projects/${project.slug}): ${project.summary}`);
    }
    lines.push("");
  }

  return new Response(lines.join("\n"), {
    headers: {
      "content-type": "text/plain; charset=utf-8",
      "cache-control": "public, max-age=3600, s-maxage=86400, stale-while-revalidate=604800"
    }
  });
}
