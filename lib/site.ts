import type { Metadata } from "next";

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
export const SITE_NAME = "Groove System";
export const SITE_TITLE = "Groove System | Desarrollo web";
export const SITE_DESCRIPTION = "Desarrollamos páginas web, tiendas online y sistemas a medida para pymes y comercios.";

export const SITE_IMAGE_ALT = "Groove System — Páginas web, tiendas online y sistemas a medida";

const defaultImage = { url: "/opengraph-image", width: 1200, height: 630, alt: SITE_IMAGE_ALT };

// Next.js no combina openGraph/twitter entre segmentos: cada página que los define los arma completos.
// Las rutas sin opengraph-image propio piden la imagen general con `withDefaultImage`.
export function socialMetadata(
  title: string,
  description: string,
  withDefaultImage = false,
): Pick<Metadata, "openGraph" | "twitter"> {
  // `images: undefined` también taparía la imagen del archivo, así que la clave va solo si hace falta
  const images = withDefaultImage ? { images: [defaultImage] } : {};
  return {
    openGraph: { type: "website", locale: "es_AR", siteName: SITE_NAME, title, description, ...images },
    twitter: { card: "summary_large_image", title, description, ...images },
  };
}
