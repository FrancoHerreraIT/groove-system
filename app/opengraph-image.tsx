import { BarsIcon, ogColors, ogContentType, ogImage, ogSize } from "@/lib/og";
import { SITE_IMAGE_ALT, SITE_NAME } from "@/lib/site";

export const alt = SITE_IMAGE_ALT;
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return ogImage(
    <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
      <BarsIcon size={168} />
      <div style={{ marginTop: 48, fontFamily: "Unbounded", fontSize: 104, letterSpacing: -3 }}>{SITE_NAME}</div>
      <div
        style={{
          marginTop: 36,
          padding: "14px 28px",
          border: `4px solid ${ogColors.primary}`,
          backgroundColor: ogColors.card,
          boxShadow: `8px 8px 0 ${ogColors.pink}`,
          fontSize: 34,
          color: ogColors.primary,
        }}
      >
        Páginas web · Tiendas online · Sistemas a medida
      </div>
    </div>,
  );
}
