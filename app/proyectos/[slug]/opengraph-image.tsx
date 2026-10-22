import { notFound } from "next/navigation";
import { getProject, projects } from "@/data/projects";
import { BarsIcon, ogColors, ogContentType, ogImage, ogSize } from "@/lib/og";
import { SITE_NAME } from "@/lib/site";

export const alt = "Caso de Groove System";
export const size = ogSize;
export const contentType = ogContentType;

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const project = getProject((await params).slug);
  if (!project) notFound();

  return ogImage(
    <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-between", gap: 32 }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          padding: 48,
          border: `4px solid ${ogColors.primary}`,
          backgroundColor: ogColors.card,
          boxShadow: `12px 12px 0 ${ogColors.primary}`,
        }}
      >
        <div
          style={{
            alignSelf: "flex-start",
            padding: "6px 16px",
            border: `3px solid ${ogColors.primary}`,
            fontFamily: "Unbounded",
            fontSize: 20,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: ogColors.purple,
          }}
        >
          {project.category}
        </div>
        <div style={{ marginTop: 24, fontFamily: "Unbounded", fontSize: 64, letterSpacing: -2, lineHeight: 1.1 }}>
          {project.title}
        </div>
        <div style={{ marginTop: 20, fontSize: 28, lineHeight: 1.4, color: ogColors.muted }}>{project.summary}</div>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
        <BarsIcon size={56} />
        <div style={{ fontFamily: "Unbounded", fontSize: 32 }}>{SITE_NAME}</div>
      </div>
    </div>,
  );
}
