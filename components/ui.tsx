import Image from "next/image";
import { ImageIcon } from "lucide-react";
import type { ReactNode } from "react";
import type { ProjectImage } from "@/data/projects";

// Ritmo vertical del sitio: padding de cada sección, título → contenido y separación entre bloques grandes
export const sectionPadding = "py-14 md:py-20";
// Primera sección de una página interna: menos aire debajo del navbar
export const firstSectionPadding = "pb-14 pt-8 md:pb-20 md:pt-10";
export const contentGap = "mt-8 md:mt-10";
export const blockGap = "mt-14 md:mt-20";

export function Section({
  id,
  as: Tag = "section",
  first = false,
  className = "",
  innerClassName = "",
  children,
}: {
  id?: string;
  as?: "section" | "article" | "div";
  first?: boolean;
  className?: string;
  innerClassName?: string;
  children: ReactNode;
}) {
  return (
    <Tag id={id} className={`${id ? "scroll-mt-20" : ""} ${className}`}>
      <div className={`mx-auto max-w-6xl px-6 ${first ? firstSectionPadding : sectionPadding} ${innerClassName}`}>
        {children}
      </div>
    </Tag>
  );
}

// Botón "arcade": sombra dura que se reduce al hover y desaparece al presionar
export const arcadeButton =
  "inline-flex items-center justify-center gap-2 border-2 border-primary px-8 py-4 font-display text-sm font-semibold uppercase tracking-wider transition-all duration-300 hover:translate-x-[2px] hover:translate-y-[2px] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none";

export const arcadeButtonDark =
  "bg-inverse text-on-inverse shadow-[4px_4px_0px_var(--color-retro-pink)] hover:shadow-[2px_2px_0px_var(--color-retro-pink)]";

export const arcadeButtonLight =
  "bg-card text-ink shadow-[4px_4px_0px_var(--color-primary)] hover:shadow-[2px_2px_0px_var(--color-primary)]";

export const textLink = "text-sm font-medium text-muted transition-colors duration-300 hover:text-retro-pink";

export function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="max-w-2xl">
      <p className="mb-4 w-fit border-2 border-primary bg-card px-3 py-1 font-display text-xs font-semibold uppercase tracking-[0.2em] text-retro-purple">
        {eyebrow}
      </p>
      <h2 className="font-display text-3xl font-extrabold tracking-tight sm:text-5xl">{title}</h2>
    </div>
  );
}

export function CategoryTag({ children }: { children: string }) {
  return (
    <p className="inline-block border-2 border-primary bg-card px-3 py-1 font-display text-xs font-semibold uppercase tracking-[0.2em] text-retro-purple">
      {children}
    </p>
  );
}

export function TagList({ tags, className = "" }: { tags: string[]; className?: string }) {
  return (
    <ul className={`flex flex-wrap gap-2 ${className}`}>
      {tags.map((name) => (
        <li
          key={name}
          className="border-2 border-primary bg-primary px-2 py-0.5 font-mono text-xs font-bold uppercase tracking-wider text-accent"
        >
          {name}
        </li>
      ))}
    </ul>
  );
}

// Portada 16:9 sobre el color de superficie; sin imagen muestra el placeholder
export function ProjectCover({
  cover,
  sizes,
  preload = false,
  className = "",
}: {
  cover: ProjectImage | null;
  sizes: string;
  preload?: boolean;
  className?: string;
}) {
  return (
    <div className={`relative grid aspect-video place-items-center bg-surface ${className}`}>
      {cover ? (
        <Image src={cover.src} alt={cover.alt} fill sizes={sizes} preload={preload} className="object-contain" />
      ) : (
        <ImageIcon aria-hidden className="size-10 text-muted/60" strokeWidth={1.5} />
      )}
    </div>
  );
}
