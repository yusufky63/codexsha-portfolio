"use client";

import { useState } from "react";

type GraphGroup = { key: string; label: string; count: number; color: string };
type GraphTool = { name: string; count: number };
type GraphEdge = { group: string; tool: string; count: number };

type StackGraphProps = {
  groups: GraphGroup[];
  tools: GraphTool[];
  edges: GraphEdge[];
};

type Active = { side: "group" | "tool"; id: string } | null;

const WIDTH = 1240;
const GROUP = { width: 264, height: 60 };
const TOOL = { width: 250, height: 44, gap: 12 };
const TICK = 7;

/** Four corner brackets, the same mark every frame on the site carries. */
function ticks(x: number, y: number, width: number, height: number) {
  const right = x + width;
  const bottom = y + height;
  return [
    `M${x} ${y + TICK}V${y}H${x + TICK}`,
    `M${right - TICK} ${y}H${right}V${y + TICK}`,
    `M${x} ${bottom - TICK}V${bottom}H${x + TICK}`,
    `M${right - TICK} ${bottom}H${right}V${bottom - TICK}`
  ].join("");
}

/**
 * Node graph of the catalogue: project groups on the left, the most used tools
 * on the right, one curve per pair that shares projects. Every number on it is
 * counted from the case studies. Hovering or focusing a node isolates its
 * curves and prints the counts on them.
 */
export function StackGraph({ groups, tools, edges }: StackGraphProps) {
  const [active, setActive] = useState<Active>(null);

  const height = tools.length * TOOL.height + (tools.length - 1) * TOOL.gap;
  const groupGap = groups.length > 1 ? (height - groups.length * GROUP.height) / (groups.length - 1) : 0;
  const groupY = (position: number) => position * (GROUP.height + groupGap);
  const toolY = (position: number) => position * (TOOL.height + TOOL.gap);
  const toolX = WIDTH - TOOL.width;
  const colorOf = new Map(groups.map((group) => [group.key, group.color]));

  const curves = edges.map((edge) => {
    const groupAt = groups.findIndex((group) => group.key === edge.group);
    const toolAt = tools.findIndex((tool) => tool.name === edge.tool);
    const fromGroup = edges.filter((other) => other.group === edge.group);
    const intoTool = edges.filter((other) => other.tool === edge.tool);
    // Ports fan out along each node's edge so the curves do not share one point.
    const y1 = groupY(groupAt) + GROUP.height / 2 + (fromGroup.indexOf(edge) - (fromGroup.length - 1) / 2) * 5;
    const y2 = toolY(toolAt) + TOOL.height / 2 + (intoTool.indexOf(edge) - (intoTool.length - 1) / 2) * 5;
    const x1 = GROUP.width;
    const x2 = toolX;
    const bend = (x2 - x1) / 2;
    const on = active ? (active.side === "group" ? active.id === edge.group : active.id === edge.tool) : false;
    return {
      ...edge,
      on,
      path: `M${x1} ${y1}C${x1 + bend} ${y1} ${x2 - bend} ${y2} ${x2} ${y2}`,
      x1,
      y1,
      x2,
      y2,
      // A cubic with mirrored handles passes through the midpoint of its ends.
      midX: (x1 + x2) / 2,
      midY: (y1 + y2) / 2,
      color: colorOf.get(edge.group) ?? "var(--text-muted)"
    };
  });

  const bind = (side: "group" | "tool", id: string) => ({
    onBlur: () => setActive(null),
    onFocus: () => setActive({ side, id }),
    onMouseEnter: () => setActive({ side, id }),
    onMouseLeave: () => setActive(null),
    tabIndex: 0
  });

  return (
    <svg
      aria-label="Stack map: project groups connected to the tools they use"
      className="block h-auto w-full overflow-visible"
      role="group"
      viewBox={`0 0 ${WIDTH} ${height}`}
    >
      <g fill="none">
        {curves.map((curve) => (
          <path
            d={curve.path}
            key={`${curve.group}-${curve.tool}`}
            style={{
              stroke: curve.color,
              strokeWidth: 1 + Math.min(curve.count, 12) * 0.35,
              opacity: active ? (curve.on ? 1 : 0.08) : 0.5,
              transition: "opacity 180ms cubic-bezier(0.2, 0, 0, 1)"
            }}
          />
        ))}
      </g>

      {curves.map((curve) => (
        <g key={`ports-${curve.group}-${curve.tool}`} style={{ opacity: active && !curve.on ? 0.15 : 1 }}>
          <circle cx={curve.x1} cy={curve.y1} r={2.5} style={{ fill: curve.color }} />
          <circle cx={curve.x2} cy={curve.y2} r={2.5} style={{ fill: curve.color }} />
        </g>
      ))}

      {curves
        .filter((curve) => curve.on)
        .map((curve) => (
          <g key={`label-${curve.group}-${curve.tool}`}>
            <rect
              className="fill-surface"
              height={20}
              style={{ stroke: curve.color }}
              width={30}
              x={curve.midX - 15}
              y={curve.midY - 10}
            />
            <text
              className="fill-ink font-mono text-[11px]"
              dominantBaseline="central"
              textAnchor="middle"
              x={curve.midX}
              y={curve.midY}
            >
              {curve.count}
            </text>
          </g>
        ))}

      {groups.map((group, position) => {
        const y = groupY(position);
        const on = active?.side === "group" && active.id === group.key;
        const linked = active?.side === "tool" && edges.some((edge) => edge.tool === active.id && edge.group === group.key);
        const dim = active !== null && !on && !linked;
        return (
          <g
            aria-label={`${group.label}: ${group.count} projects`}
            className="cursor-default outline-none"
            key={group.key}
            role="img"
            style={{ opacity: dim ? 0.35 : 1, transition: "opacity 180ms cubic-bezier(0.2, 0, 0, 1)" }}
            {...bind("group", group.key)}
          >
            <rect
              className="fill-surface"
              height={GROUP.height}
              style={{ stroke: on ? group.color : "var(--border)" }}
              width={GROUP.width}
              x={0}
              y={y}
            />
            <path
              d={ticks(0, y, GROUP.width, GROUP.height)}
              fill="none"
              style={{ stroke: on || linked ? group.color : "var(--text-muted)" }}
            />
            <circle cx={18} cy={y + 23} r={3.5} style={{ fill: group.color }} />
            <text className="fill-ink text-[15px] font-medium" x={32} y={y + 28}>
              {group.label}
            </text>
            <text className="fill-ink-muted font-mono text-[11px] uppercase tracking-[0.08em]" x={32} y={y + 46}>
              {group.count} {group.count === 1 ? "project" : "projects"}
            </text>
          </g>
        );
      })}

      {tools.map((tool, position) => {
        const y = toolY(position);
        const on = active?.side === "tool" && active.id === tool.name;
        const linked =
          active?.side === "group" && edges.some((edge) => edge.group === active.id && edge.tool === tool.name);
        const dim = active !== null && !on && !linked;
        return (
          <g
            aria-label={`${tool.name}: used by ${tool.count} projects`}
            className="cursor-default outline-none"
            key={tool.name}
            role="img"
            style={{ opacity: dim ? 0.35 : 1, transition: "opacity 180ms cubic-bezier(0.2, 0, 0, 1)" }}
            {...bind("tool", tool.name)}
          >
            <rect
              className="fill-surface"
              height={TOOL.height}
              style={{ stroke: on ? "var(--text)" : "var(--border)" }}
              width={TOOL.width}
              x={toolX}
              y={y}
            />
            <path
              d={ticks(toolX, y, TOOL.width, TOOL.height)}
              fill="none"
              style={{ stroke: on || linked ? "var(--text)" : "var(--text-muted)" }}
            />
            <text className="fill-ink text-[14px] font-medium" dominantBaseline="central" x={toolX + 16} y={y + TOOL.height / 2}>
              {tool.name}
            </text>
            <text
              className="fill-ink-muted font-mono text-[12px]"
              dominantBaseline="central"
              textAnchor="end"
              x={WIDTH - 16}
              y={y + TOOL.height / 2}
            >
              {tool.count}
            </text>
          </g>
        );
      })}
    </svg>
  );
}
