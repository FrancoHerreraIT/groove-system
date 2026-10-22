import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import type { ReactNode } from "react";

export const ogSize = { width: 1200, height: 630 };
export const ogContentType = "image/png";

// Mismos valores que los tokens del modo claro en globals.css
export const ogColors = {
  bg: "#FAFAFA",
  card: "#FFFFFF",
  primary: "#111827",
  accent: "#10B981",
  pink: "#EC4899",
  purple: "#8B5CF6",
  muted: "#6B7280",
  line: "#E5E7EB",
};

const fontsDir = join(process.cwd(), "assets/fonts");

// Ícono de las barras, igual que app/icon.svg
export function BarsIcon({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32">
      <rect x="4" y="4" width="27" height="27" fill="#EC4899" />
      <rect x="1" y="1" width="27" height="27" fill="#111827" />
      <rect x="6.13" y="15.34" width="3.06" height="7.53" fill="#A855F7" />
      <rect x="10.69" y="9.48" width="3.06" height="13.39" fill="#D946EF" />
      <rect x="15.25" y="12.83" width="3.06" height="10.04" fill="#EC4899" />
      <rect x="19.81" y="6.13" width="3.06" height="16.74" fill="#10B981" />
    </svg>
  );
}

// Fondo claro con la cuadrícula del sitio
export async function ogImage(children: ReactNode) {
  const [unbounded, dmSans] = await Promise.all([
    readFile(join(fontsDir, "Unbounded-ExtraBold.ttf")),
    readFile(join(fontsDir, "DMSans-Medium.ttf")),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          padding: 72,
          backgroundColor: ogColors.bg,
          backgroundImage: `linear-gradient(${ogColors.line} 2px, transparent 2px), linear-gradient(90deg, ${ogColors.line} 2px, transparent 2px)`,
          backgroundSize: "60px 60px",
          color: ogColors.primary,
          fontFamily: "DM Sans",
        }}
      >
        {children}
      </div>
    ),
    {
      ...ogSize,
      fonts: [
        { name: "Unbounded", data: unbounded, weight: 800, style: "normal" },
        { name: "DM Sans", data: dmSans, weight: 500, style: "normal" },
      ],
    },
  );
}
