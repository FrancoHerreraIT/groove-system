"use client";

import Link from "next/link";
import { useState } from "react";
import { CategoryTag, contentGap, ProjectCover, TagList } from "@/components/ui";
import { categories, type Project, type ProjectCategory } from "@/data/projects";

// Versión chica del botón arcade
const filterButton =
  "border-2 border-primary px-4 py-2 font-display text-xs font-semibold uppercase tracking-wider transition-all duration-300 hover:translate-x-[2px] hover:translate-y-[2px] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none";

const cardCoverSizes = "(min-width: 1152px) 536px, (min-width: 768px) calc(50vw - 40px), calc(100vw - 48px)";

export function ProjectsGrid({ projects }: { projects: Project[] }) {
  const [filter, setFilter] = useState<ProjectCategory | null>(null);
  const available = categories.filter((category) => projects.some((project) => project.category === category));
  const visible = filter ? projects.filter((project) => project.category === filter) : projects;

  const options: { label: string; value: ProjectCategory | null }[] = [
    { label: "Todos", value: null },
    ...available.map((category) => ({ label: category, value: category })),
  ];

  return (
    <>
      <div role="group" aria-label="Filtrar por categoría" className={`${contentGap} flex flex-wrap gap-4`}>
        {options.map(({ label, value }) => {
          const active = filter === value;
          return (
            <button
              key={label}
              type="button"
              onClick={() => setFilter(value)}
              aria-pressed={active}
              className={`${filterButton} ${
                active
                  ? "bg-inverse text-on-inverse shadow-[4px_4px_0px_var(--color-retro-pink)] hover:shadow-[2px_2px_0px_var(--color-retro-pink)]"
                  : "bg-card text-ink shadow-[4px_4px_0px_var(--color-primary)] hover:shadow-[2px_2px_0px_var(--color-primary)]"
              }`}
            >
              {label}
            </button>
          );
        })}
      </div>

      <ul className={`${contentGap} grid gap-8 md:grid-cols-2`}>
        {visible.map(({ slug, title, category, summary, tags, cover }) => (
          <li key={slug}>
            <Link
              href={`/proyectos/${slug}`}
              className="flex h-full flex-col border-2 border-primary bg-card shadow-[6px_6px_0px_var(--color-primary)] transition-all duration-300 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[8px_8px_0px_var(--color-primary)]"
            >
              <ProjectCover cover={cover} sizes={cardCoverSizes} className="border-b-2 border-primary" />
              <div className="flex flex-1 flex-col p-8">
                <div>
                  <CategoryTag>{category}</CategoryTag>
                </div>
                <h2 className="mt-5 font-display text-xl font-semibold tracking-tight">{title}</h2>
                <p className="mt-4 leading-relaxed text-muted">{summary}</p>
                <TagList tags={tags} className="mt-6" />
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
