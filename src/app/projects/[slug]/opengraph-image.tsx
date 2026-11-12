import { ImageResponse } from "next/og";
import { getProject, projects } from "@/data/portfolio";
import type { ProjectGroup } from "@/data/types";
import { OG, OgCard, OgLabel, SiteCard, ogClamp, ogFonts, ogHeadlineSize } from "@/lib/og";
import { site } from "@/lib/site";

export const alt = `${site.name} project card`;
export const size = OG.size;
export const contentType = "image/png";
// The catalogue only changes with a deploy.
export const revalidate = 86400;

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

// Satori cannot read CSS variables, so the light-theme group hues are repeated here.
const GROUP_COLOR: Record<ProjectGroup, string> = {
  desktop: "#0d8574",
  game: "#5b7f0e",
  onchain: "#2c78bd",
  "mini-app": "#7650d2",
  tool: "#b8327a"
};

type Params = { params: Promise<{ slug: string }> };

export default async function Image({ params }: Params) {
  const { slug } = await params;
  const project = getProject(slug);

  // An unknown slug still gets a card: a thrown error would leave crawlers with no preview at all.
  if (!project) {
    return new ImageResponse(<SiteCard />, { ...size, fonts: ogFonts() });
  }

  return new ImageResponse(
    (
      <OgCard
        footer={`Started ${project.year}`}
        meta={`No ${project.index} / sha ${project.sha}`}
        color={GROUP_COLOR[project.group]}
        seed={Number.parseInt(project.sha, 16)}
      >
        <OgLabel text={project.category} />
        <div
          style={{
            display: "flex",
            fontFamily: OG.display,
            fontSize: ogHeadlineSize(project.title),
            fontWeight: 700,
            letterSpacing: -4,
            lineHeight: 1
          }}
        >
          {project.title}
        </div>
        <div style={{ display: "flex", fontSize: 26, lineHeight: 1.3, color: OG.secondary }}>
          {ogClamp(project.summary, 132)}
        </div>
      </OgCard>
    ),
    { ...size, fonts: ogFonts() }
  );
}
