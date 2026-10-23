import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Check } from "lucide-react";
import { externalLinkProps, INSTAGRAM_PROFILE } from "@/components/contact";
import { ContactButtons } from "@/components/contact-buttons";
import { ProjectGallery } from "@/components/project-gallery";
import { arcadeButton, arcadeButtonLight, blockGap, CategoryTag, contentGap, ProjectCover, Section, textLink } from "@/components/ui";
import { getProject, projects, type Project } from "@/data/projects";
import { SITE_NAME, socialMetadata } from "@/lib/site";

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps<"/proyectos/[slug]">): Promise<Metadata> {
  const project = getProject((await params).slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.summary,
    ...socialMetadata(`${project.title} | ${SITE_NAME}`, project.summary),
  };
}

const card = "border-2 border-primary bg-card shadow-[6px_6px_0px_var(--color-primary)]";

function CheckList({ items, className = "" }: { items: string[]; className?: string }) {
  return (
    <ul className={`space-y-3 ${className}`}>
      {items.map((item) => (
        <li key={item} className="flex gap-3 leading-relaxed text-muted">
          <Check aria-hidden className="mt-1 size-4 shrink-0 text-accent" strokeWidth={3} />
          {item}
        </li>
      ))}
    </ul>
  );
}

function CaseSection({ number, title, children }: { number: number; title: string; children: ReactNode }) {
  return (
    <section>
      <div className="flex items-baseline gap-4 border-b-2 border-primary pb-4">
        <span className="font-mono text-sm text-muted">{String(number).padStart(2, "0")}</span>
        <h2 className="font-display text-2xl font-extrabold tracking-tight sm:text-3xl">{title}</h2>
      </div>
      <div className={contentGap}>{children}</div>
    </section>
  );
}

// Arma solo las secciones que tienen datos, en orden
function caseSections({ challenge, solutionIntro, solution, stack, results }: Project) {
  const sections: { title: string; content: ReactNode }[] = [];

  if (challenge.length > 0) {
    sections.push({
      title: "El desafío",
      content: (
        <div className="space-y-4 text-lg leading-relaxed text-muted">
          {challenge.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      ),
    });
  }

  if (solutionIntro || solution.length > 0) {
    sections.push({
      title: "La solución",
      content: (
        <>
          {solutionIntro && <p className="text-lg leading-relaxed text-muted">{solutionIntro}</p>}
          {solution.length > 0 && (
            <div className={`grid gap-6 md:grid-cols-2 ${solutionIntro ? contentGap : ""}`}>
              {solution.map(({ title, description, items }) => (
                <article key={title} className={`${card} p-6`}>
                  <h3 className="font-display text-lg font-semibold tracking-tight">{title}</h3>
                  <p className="mt-3 leading-relaxed text-muted">{description}</p>
                  <CheckList items={items} className="mt-5 text-sm" />
                </article>
              ))}
            </div>
          )}
        </>
      ),
    });
  }

  if (stack.length > 0) {
    sections.push({
      title: "Stack tecnológico",
      content: (
        <table className={`w-full border-collapse text-left ${card}`}>
          <thead className="font-mono text-xs uppercase tracking-wider text-muted">
            <tr>
              <th scope="col" className="px-4 py-3 font-medium sm:px-6">
                Tecnología
              </th>
              <th scope="col" className="px-4 py-3 font-medium sm:px-6">
                Para qué se usa
              </th>
            </tr>
          </thead>
          <tbody>
            {stack.map(({ name, purpose }) => (
              <tr key={name} className="border-t-2 border-primary">
                <th scope="row" className="px-4 py-3 align-top font-mono text-sm font-bold sm:whitespace-nowrap sm:px-6">
                  {name}
                </th>
                <td className="px-4 py-3 leading-relaxed text-muted sm:px-6">{purpose}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ),
    });
  }

  if (results.length > 0) {
    sections.push({
      title: "Resultados",
      content: (
        <div className="border-2 border-primary bg-card p-6 shadow-[6px_6px_0px_var(--color-accent)] sm:p-8">
          <CheckList items={results} className="text-lg" />
        </div>
      ),
    });
  }

  return sections;
}

export default async function ProjectPage({ params }: PageProps<"/proyectos/[slug]">) {
  const project = getProject((await params).slug);
  if (!project) notFound();

  const { title, category, summary, url, cover, overview, images } = project;
  const sections = caseSections(project);

  const facts = overview
    ? [
        { label: "Cliente", value: overview.client },
        { label: "Rubro", value: overview.industry },
        { label: "Tipo", value: overview.type },
        { label: "Alcance", value: overview.scope },
      ]
    : [];

  return (
    <main className="flex-1">
      <Section as="article" first>
        <Link href="/proyectos" className={`${textLink} group inline-flex items-center gap-2`}>
          <ArrowLeft aria-hidden className="size-4 transition-transform duration-300 group-hover:-translate-x-1" />
          Volver a proyectos
        </Link>
        <header className="mt-5 max-w-3xl">
          <CategoryTag>{category}</CategoryTag>
          <h1 className="mt-4 font-display text-3xl font-extrabold tracking-tight sm:text-5xl">{title}</h1>
          <p className="mt-6 text-lg leading-relaxed text-muted text-pretty sm:text-xl">{summary}</p>
          {url && (
            <a href={url} {...externalLinkProps} className={`${arcadeButton} ${arcadeButtonLight} mt-10`}>
              Visitar sitio ↗
            </a>
          )}
        </header>

        <ProjectCover
          cover={cover}
          sizes="(min-width: 1152px) 1104px, calc(100vw - 48px)"
          preload
          className={`${contentGap} border-2 border-primary shadow-[8px_8px_0px_var(--color-primary)]`}
        />

        {(overview || sections.length > 0) && (
          <div className={`${blockGap} grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,65fr)_minmax(0,35fr)]`}>
            <aside className="lg:order-last">
              <div className="space-y-8 lg:sticky lg:top-28">
                {overview && (
                  <div className={`${card} p-6 sm:p-8`}>
                    <h2 className="font-display text-lg font-semibold tracking-tight">Ficha del proyecto</h2>
                    <dl className="mt-6 divide-y-2 divide-line">
                      {facts.map(({ label, value }) => (
                        <div key={label} className="py-3 first:pt-0 last:pb-0">
                          <dt className="font-mono text-xs uppercase tracking-wider text-muted">{label}</dt>
                          <dd className="mt-1 leading-relaxed">{value}</dd>
                        </div>
                      ))}
                      <div className="py-3 last:pb-0">
                        <dt className="font-mono text-xs uppercase tracking-wider text-muted">Estado</dt>
                        <dd className="mt-1 flex items-center gap-2">
                          {overview.status === "Online" && (
                            <span aria-hidden className="size-2.5 shrink-0 border-2 border-primary bg-accent" />
                          )}
                          {overview.status}
                        </dd>
                      </div>
                      {url && overview.site && (
                        <div className="py-3 last:pb-0">
                          <dt className="font-mono text-xs uppercase tracking-wider text-muted">Sitio</dt>
                          <dd className="mt-1">
                            <a href={url} {...externalLinkProps} className="transition-colors duration-300 hover:text-retro-pink">
                              {overview.site} ↗
                            </a>
                          </dd>
                        </div>
                      )}
                    </dl>
                  </div>
                )}
                <a
                  href={INSTAGRAM_PROFILE}
                  {...externalLinkProps}
                  className={`${arcadeButton} w-full bg-accent text-white shadow-[4px_4px_0px_var(--color-primary)] hover:shadow-[2px_2px_0px_var(--color-primary)]`}
                >
                  Contactar
                </a>
              </div>
            </aside>

            {sections.length > 0 && (
              <div className="space-y-14 md:space-y-20">
                {sections.map(({ title: sectionTitle, content }, i) => (
                  <CaseSection key={sectionTitle} number={i + 1} title={sectionTitle}>
                    {content}
                  </CaseSection>
                ))}
              </div>
            )}
          </div>
        )}

        {images.length > 0 && (
          <section className={blockGap}>
            <h2 className="font-display text-2xl font-extrabold tracking-tight sm:text-3xl">Galería</h2>
            <ProjectGallery images={images} />
          </section>
        )}
      </Section>

      <Section className="border-t-2 border-primary" innerClassName="flex flex-col items-center text-center">
        <h2 className="font-display text-3xl font-extrabold tracking-tight text-balance sm:text-5xl">
          ¿Tu negocio necesita algo así?
        </h2>
        <p className={`${contentGap} max-w-2xl text-lg leading-relaxed text-muted text-pretty sm:text-xl`}>
          Contanos tu idea y te enviamos una propuesta sin cargo.
        </p>
        <ContactButtons />
      </Section>
    </main>
  );
}
