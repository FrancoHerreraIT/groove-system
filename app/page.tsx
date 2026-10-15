import Link from "next/link";
import { ProjectCarousel } from "@/components/project-carousel";
import { contactLinks, externalLinkProps, whatsappUrl } from "@/components/contact";
import {
  arcadeButton,
  arcadeButtonDark,
  arcadeButtonLight,
  CategoryTag,
  contentGap,
  ProjectCover,
  Section,
  SectionHeading,
} from "@/components/ui";
import { projects, type Project } from "@/data/projects";
import {
  ArrowRight,
  LayoutTemplate,
  ShoppingBag,
  Workflow,
  type LucideIcon,
} from "lucide-react";

type Feature = { title: string; icon: LucideIcon; iconColor: string; description: string };

const services: Feature[] = [
  {
    title: "Landing Pages",
    icon: LayoutTemplate,
    iconColor: "bg-accent",
    description:
      "Una página simple para presentar tu servicio o una promo, con botón directo a tu WhatsApp. La tenés online en unas dos semanas y te ayudamos a armar los textos y las fotos.",
  },
  {
    title: "Tiendas Webs",
    icon: ShoppingBag,
    iconColor: "bg-retro-pink",
    description:
      "Tu catálogo online con carrito y cobro con Mercado Pago. Te enseñamos a cargar productos y cambiar precios vos mismo, y si algo falla, nos escribís y lo resolvemos.",
  },
  {
    title: "Sistemas a Medida",
    icon: Workflow,
    iconColor: "bg-retro-purple",
    description:
      "Si llevás el stock, los turnos o los pedidos en planillas o en un cuaderno, armamos una herramienta pensada para tu negocio, así dejás de perder horas pasando datos a mano.",
  },
];

const featuredProjects = projects.filter((project) => project.featured).slice(0, 3);

// Imagen ~60% del ancho en desktop: (1104px de contenido - 48px de gap) * 3/5
const rowCoverSizes = "(min-width: 1152px) 634px, (min-width: 1024px) calc(60vw - 58px), calc(100vw - 48px)";

function ProjectRow({ project, index }: { project: Project; index: number }) {
  const { slug, title, category, summary, url, cover, images } = project;
  return (
    <article className="grid items-center gap-8 lg:grid-cols-5 lg:gap-12">
      <div
        className={`border-2 border-primary shadow-[6px_6px_0px_var(--color-primary)] transition-all duration-300 hover:shadow-[10px_10px_0px_var(--color-primary)] motion-safe:hover:-translate-y-1 motion-reduce:transition-none lg:col-span-3 ${index % 2 === 1 ? "lg:order-last" : ""}`}
      >
        {images.length > 0 ? (
          <ProjectCarousel images={images} href={`/proyectos/${slug}`} sizes={rowCoverSizes} />
        ) : (
          <Link href={`/proyectos/${slug}`} aria-label={`Ver caso: ${title}`} className="block">
            <ProjectCover cover={cover} sizes={rowCoverSizes} />
          </Link>
        )}
      </div>
      <div className="lg:col-span-2">
        <span className="block font-mono text-5xl font-bold text-muted sm:text-6xl">{String(index + 1).padStart(2, "0")}</span>
        <div className="mt-6">
          <CategoryTag>{category}</CategoryTag>
        </div>
        <h3 className="mt-5 font-display text-2xl font-semibold tracking-tight sm:text-3xl">{title}</h3>
        <p className="mt-4 leading-relaxed text-muted">{summary}</p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Link href={`/proyectos/${slug}`} className={`${arcadeButton} ${arcadeButtonDark}`}>
            Ver caso
          </Link>
          {url && (
            <a href={url} {...externalLinkProps} className={`${arcadeButton} ${arcadeButtonLight}`}>
              Ver sitio ↗
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

function FeatureCard({ title, icon: Icon, iconColor, description, index }: Feature & { index: number }) {
  return (
    <article className="flex flex-col border-2 border-primary bg-card p-8 shadow-[6px_6px_0px_var(--color-primary)] transition-all duration-300 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[8px_8px_0px_var(--color-primary)]">
      <div className="flex items-start justify-between">
        <div className={`grid size-12 place-items-center border-2 border-primary text-white ${iconColor}`}>
          <Icon aria-hidden className="size-5" strokeWidth={2.25} />
        </div>
        <span className="font-mono text-xs text-muted">0{index + 1}</span>
      </div>
      <h3 className="mt-8 font-display text-xl font-semibold tracking-tight">{title}</h3>
      <p className="mt-4 leading-relaxed text-muted">{description}</p>
    </article>
  );
}

function RetroTerminal() {
  return (
    <div className="w-full max-w-xl border-2 border-primary bg-primary text-left shadow-[8px_8px_0px_var(--color-retro-purple)] md:-rotate-1">
      <div className="flex items-center justify-between border-b-2 border-primary bg-card px-4 py-2">
        <span aria-hidden className="flex gap-2">
          <span className="size-3 border-2 border-primary bg-retro-pink" />
          <span className="size-3 border-2 border-primary bg-retro-purple" />
          <span className="size-3 border-2 border-primary bg-accent" />
        </span>
        <span className="font-mono text-xs text-muted">groove@system:~</span>
      </div>
      <pre className="overflow-x-auto p-5 font-mono text-sm leading-7 sm:p-6 sm:text-base">
        <code>
          <span className="text-muted">$ </span>
          <span className="text-white">iniciando tu proyecto...</span>
          {"\n"}
          <span className="text-accent">✓</span>
          <span className="text-white/70"> Página web ............ </span>
          <span className="text-accent">lista</span>
          {"\n"}
          <span className="text-accent">✓</span>
          <span className="text-white/70"> Tienda online ......... </span>
          <span className="text-accent">lista</span>
          {"\n"}
          <span className="text-accent">✓</span>
          <span className="text-white/70"> Sistema a medida ...... </span>
          <span className="text-accent">listo</span>
          {"\n"}
          <span className="text-retro-pink">&gt; </span>
          <span className="text-white">Tu negocio, en marcha</span>
          <span aria-hidden className="ml-1 inline-block h-5 w-2.5 translate-y-1 animate-pulse bg-retro-pink" />
        </code>
      </pre>
    </div>
  );
}

export default function Home() {
  return (
    <main className="flex-1">
      {/* HERO */}
      <section className="relative overflow-hidden">
        {/* Brillo neón de fondo */}
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-0">
          <div className="absolute left-1/2 top-24 h-[28rem] w-[min(90vw,48rem)] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_30%_40%,var(--color-retro-pink),transparent_60%),radial-gradient(circle_at_70%_60%,var(--color-retro-purple),transparent_60%)] opacity-20 blur-3xl dark:opacity-10" />
        </div>

        <div className="relative mx-auto flex max-w-5xl flex-col items-center px-6 pb-14 pt-20 text-center sm:pt-28 md:pb-20">
          <h1 className="font-display text-4xl font-extrabold leading-[1.1] tracking-tight text-balance sm:text-6xl lg:text-7xl">
            Marcamos el ritmo de tu negocio{" "}
            <span className="bg-linear-to-r from-retro-purple via-retro-pink to-accent bg-clip-text text-transparent">
              digital.
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted text-pretty sm:text-xl">
            Hacemos páginas web, tiendas online y sistemas para pymes y comercios. Plazos claros desde el primer día, trato directo con el equipo que desarrolla tu proyecto y soporte después de la entrega.
          </p>

          <div className="mt-12 flex w-full flex-col justify-center gap-5 sm:w-auto sm:flex-row">
            <a
              href="#servicios"
              className={`${arcadeButton} ${arcadeButtonDark} group`}
            >
              Ver Servicios
              <ArrowRight aria-hidden className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href={whatsappUrl}
              {...externalLinkProps}
              className={`${arcadeButton} bg-accent text-white shadow-[4px_4px_0px_var(--color-primary)] hover:shadow-[2px_2px_0px_var(--color-primary)]`}
            >
              Contactar
            </a>
          </div>

          <div className="mt-20 flex w-full justify-center">
            <RetroTerminal />
          </div>
        </div>
      </section>

      {/* SERVICIOS */}
      <Section id="servicios" className="border-t-2 border-primary">
        <SectionHeading eyebrow="Servicios" title="Elegí tu nivel." />
        <div className={`${contentGap} grid gap-8 md:grid-cols-2 lg:grid-cols-3`}>
          {services.map((service, i) => (
            <FeatureCard key={service.title} {...service} index={i} />
          ))}
        </div>
      </Section>

      {/* PROYECTOS */}
      <Section id="proyectos" className="border-t-2 border-primary">
        <SectionHeading eyebrow="Proyectos recientes" title="Nuestro Trabajo" />
        <div className={`${contentGap} space-y-14 md:space-y-20`}>
          {featuredProjects.map((project, i) => (
            <ProjectRow key={project.slug} project={project} index={i} />
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <Link
            href="/proyectos"
            className={`${arcadeButton} group bg-accent text-white shadow-[4px_4px_0px_var(--color-primary)] hover:shadow-[2px_2px_0px_var(--color-primary)]`}
          >
            Ver todos los proyectos
            <ArrowRight aria-hidden className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </Section>

      {/* CONTACTO */}
      <Section id="contacto" className="border-t-2 border-primary" innerClassName="flex flex-col items-center text-center">
        <h2 className="font-display text-3xl font-extrabold tracking-tight sm:text-5xl">¿Hablamos?</h2>
        <p className={`${contentGap} max-w-2xl text-lg leading-relaxed text-muted text-pretty sm:text-xl`}>
          Contanos qué necesitás y te respondemos en el día.
        </p>
        <div className="mt-10 flex w-full flex-col justify-center gap-5 sm:w-auto sm:flex-row">
          {contactLinks.map(({ label, href, icon: Icon, external, className }) => (
            <a key={label} href={href} {...(external && externalLinkProps)} className={`${arcadeButton} ${className}`}>
              <Icon aria-hidden className="size-4" />
              {label}
            </a>
          ))}
        </div>
      </Section>
    </main>
  );
}
