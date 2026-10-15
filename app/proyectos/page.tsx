import type { Metadata } from "next";
import { ProjectsGrid } from "@/components/projects-grid";
import { Section } from "@/components/ui";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Proyectos — Groove System",
  description: "Tiendas online, sistemas y páginas web que hicimos para pymes y comercios.",
};

export default function ProjectsPage() {
  return (
    <main className="flex-1">
      <Section as="div" first>
        <h1 className="font-display text-3xl font-extrabold tracking-tight sm:text-5xl">Proyectos</h1>
        <ProjectsGrid projects={projects} />
      </Section>
    </main>
  );
}
