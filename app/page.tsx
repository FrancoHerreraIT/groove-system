import Image from "next/image";
import type { ComponentType } from "react";
import { ThemeToggle } from "@/components/theme-toggle";
import {
  ArrowRight,
  ClipboardList,
  CodeXml,
  ImageIcon,
  LayoutTemplate,
  LifeBuoy,
  Mail,
  MessageCircle,
  MessagesSquare,
  ShoppingBag,
  Workflow,
  type LucideIcon,
  type LucideProps,
} from "lucide-react";

// lucide-react quitó los íconos de marcas: este es el trazado original de su ícono de Instagram
function Instagram({ className, strokeWidth = 2, ...props }: LucideProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={24}
      height={24}
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

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

const steps: Feature[] = [
  {
    title: "Charla inicial",
    icon: MessagesSquare,
    iconColor: "bg-accent",
    description:
      "Nos juntamos en persona o por videollamada, sin costo. Nos contás cómo trabaja tu negocio y qué querés resolver.",
  },
  {
    title: "Propuesta y presupuesto",
    icon: ClipboardList,
    iconColor: "bg-retro-pink",
    description:
      "En pocos días te mandamos por escrito qué vamos a hacer, cuánto cuesta y para cuándo está. Sin letra chica.",
  },
  {
    title: "Desarrollo con avances",
    icon: CodeXml,
    iconColor: "bg-retro-purple",
    description:
      "Cada semana te mostramos cómo va y ajustamos sobre la marcha. Siempre hablás con la misma persona: la que programa.",
  },
  {
    title: "Entrega y soporte",
    icon: LifeBuoy,
    iconColor: "bg-accent",
    description:
      "Publicamos todo, te explicamos cómo usarlo y seguimos a un mensaje de distancia para cambios y consultas.",
  },
];

const projects: { title: string; description: string; tech: string[] }[] = [
  {
    title: "Sistema de gestión escolar",
    description: "Plataforma para administrar alumnos, cursos y notas de un colegio.",
    tech: ["Next.js", "React", "Node.js", "PostgreSQL"],
  },
  {
    title: "Tienda online con panel",
    description: "Catálogo de productos con panel de administración e imágenes en la nube.",
    tech: ["Next.js", "React", "Node.js", "Cloudinary"],
  },
];

// Número de WhatsApp en formato internacional, sin "+" ni espacios
const WHATSAPP_NUMBER = "549351XXXXXXX";
const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hola, quiero consultar por un proyecto")}`;
const INSTAGRAM_USER = "USUARIO";
const CONTACT_EMAIL = "MAIL@DOMINIO.COM";

const contactLinks: { label: string; href: string; icon: ComponentType<LucideProps>; external: boolean; className: string }[] = [
  {
    label: "WhatsApp",
    href: whatsappUrl,
    icon: MessageCircle,
    external: true,
    className: "bg-accent text-white shadow-[4px_4px_0px_var(--color-primary)] hover:shadow-[2px_2px_0px_var(--color-primary)]",
  },
  {
    label: "Instagram",
    href: `https://instagram.com/${INSTAGRAM_USER}`,
    icon: Instagram,
    external: true,
    className:
      "bg-inverse text-on-inverse shadow-[4px_4px_0px_var(--color-retro-pink)] hover:shadow-[2px_2px_0px_var(--color-retro-pink)]",
  },
  {
    label: "Mail",
    href: `mailto:${CONTACT_EMAIL}`,
    icon: Mail,
    external: false,
    className:
      "bg-card text-ink shadow-[4px_4px_0px_var(--color-retro-purple)] hover:shadow-[2px_2px_0px_var(--color-retro-purple)]",
  },
];

const externalLinkProps = { target: "_blank", rel: "noopener noreferrer" } as const;

const navLinks = [
  { label: "Servicios", href: "#servicios" },
  { label: "Proceso", href: "#proceso" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Contacto", href: "#contacto" },
];

// Botón "arcade": sombra dura que se reduce al hover y desaparece al presionar
const arcadeButton =
  "inline-flex items-center justify-center gap-2 border-2 border-primary px-8 py-4 font-display text-sm font-semibold uppercase tracking-wider transition-all duration-300 hover:translate-x-[2px] hover:translate-y-[2px] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none";

function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="max-w-2xl">
      <p className="inline-block border-2 border-primary bg-card px-3 py-1 font-display text-xs font-semibold uppercase tracking-[0.2em] text-retro-purple">
        {eyebrow}
      </p>
      <h2 className="mt-5 font-display text-3xl font-extrabold tracking-tight sm:text-5xl">{title}</h2>
    </div>
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
    <div className="flex flex-1 flex-col">
      {/* NAV */}
      <header className="sticky top-0 z-20 border-b-2 border-primary bg-bg/85 backdrop-blur-md">
        <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <a href="#" className="flex items-center">
            <Image
              src="/logo-groove-system.svg"
              alt="Groove System"
              width={363}
              height={53}
              preload
              className="h-[34px] w-auto dark:hidden"
            />
            <Image
              src="/logo-groove-system-dark.svg"
              alt="Groove System"
              width={363}
              height={53}
              preload
              className="hidden h-[34px] w-auto dark:block"
            />
          </a>
          <div className="flex items-center gap-8">
            <ul className="hidden items-center gap-8 text-sm font-medium text-muted md:flex">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="transition-colors duration-300 hover:text-retro-pink">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <ThemeToggle />
          </div>
        </nav>
      </header>

      <main className="flex-1">
        {/* HERO */}
        <section className="relative overflow-hidden">
          {/* Brillo neón de fondo */}
          <div aria-hidden className="pointer-events-none absolute inset-0 -z-0">
            <div className="absolute left-1/2 top-24 h-[28rem] w-[min(90vw,48rem)] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_30%_40%,var(--color-retro-pink),transparent_60%),radial-gradient(circle_at_70%_60%,var(--color-retro-purple),transparent_60%)] opacity-20 blur-3xl dark:opacity-10" />
          </div>

          <div className="relative mx-auto flex max-w-5xl flex-col items-center px-6 pb-24 pt-20 text-center sm:pb-32 sm:pt-28">
            <h1 className="font-display text-4xl font-extrabold leading-[1.1] tracking-tight text-balance sm:text-6xl lg:text-7xl">
              Marcamos el ritmo de tu negocio{" "}
              <span className="bg-linear-to-r from-retro-purple via-retro-pink to-accent bg-clip-text text-transparent">
                digital.
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted text-pretty sm:text-xl">
              Hacemos páginas web, tiendas online y sistemas para pymes y comercios. Plazos claros desde el primer día, trato directo con quien programa y soporte después de la entrega.
            </p>

            <div className="mt-12 flex w-full flex-col justify-center gap-5 sm:w-auto sm:flex-row">
              <a
                href="#servicios"
                className={`${arcadeButton} group bg-inverse text-on-inverse shadow-[4px_4px_0px_var(--color-retro-pink)] hover:shadow-[2px_2px_0px_var(--color-retro-pink)]`}
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
        <section id="servicios" className="scroll-mt-16 border-t-2 border-primary">
          <div className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
            <SectionHeading eyebrow="Servicios" title="Elegí tu nivel." />
            <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service, i) => (
                <FeatureCard key={service.title} {...service} index={i} />
              ))}
            </div>
          </div>
        </section>

        {/* PROCESO */}
        <section id="proceso" className="scroll-mt-16 border-y-2 border-primary bg-card">
          <div className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
            <SectionHeading eyebrow="Proceso" title="Cómo trabajamos." />
            <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {steps.map((step, i) => (
                <FeatureCard key={step.title} {...step} index={i} />
              ))}
            </div>
          </div>
        </section>

        {/* PROYECTOS */}
        <section id="proyectos" className="scroll-mt-16">
          <div className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
            <SectionHeading eyebrow="Proyectos recientes" title="Nuestro Trabajo" />
            <div className="mt-16 grid gap-8 md:grid-cols-2">
              {projects.map(({ title, description, tech }, i) => (
                <article
                  key={title}
                  className="flex flex-col border-2 border-primary bg-card shadow-[6px_6px_0px_var(--color-primary)] transition-all duration-300 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[8px_8px_0px_var(--color-primary)]"
                >
                  {/* TODO: captura */}
                  <div className="grid aspect-video place-items-center border-b-2 border-primary bg-surface">
                    <ImageIcon aria-hidden className="size-10 text-muted/60" strokeWidth={1.5} />
                  </div>
                  <div className="flex flex-1 flex-col p-8">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="font-display text-xl font-semibold tracking-tight">{title}</h3>
                      <span className="font-mono text-xs text-muted">0{i + 1}</span>
                    </div>
                    <p className="mt-4 leading-relaxed text-muted">{description}</p>
                    <ul className="mt-6 flex flex-wrap gap-2">
                      {tech.map((name) => (
                        <li
                          key={name}
                          className="border-2 border-primary bg-primary px-2 py-0.5 font-mono text-xs font-bold uppercase tracking-wider text-accent"
                        >
                          {name}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACTO */}
        <section id="contacto" className="scroll-mt-16 border-t-2 border-primary">
          <div className="mx-auto flex max-w-6xl flex-col items-center px-6 py-24 text-center sm:py-32">
            <h2 className="font-display text-3xl font-extrabold tracking-tight sm:text-5xl">¿Hablamos?</h2>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted text-pretty sm:text-xl">
              Contame qué necesitás y te respondo en el día.
            </p>
            <div className="mt-12 flex w-full flex-col justify-center gap-5 sm:w-auto sm:flex-row">
              {contactLinks.map(({ label, href, icon: Icon, external, className }) => (
                <a key={label} href={href} {...(external && externalLinkProps)} className={`${arcadeButton} ${className}`}>
                  <Icon aria-hidden className="size-4" />
                  {label}
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t-4 border-primary bg-card">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-10 text-center sm:flex-row sm:text-left">
          <p className="flex items-center gap-2 font-display font-extrabold tracking-tight">
            <span aria-hidden className="size-3 bg-linear-to-br from-retro-purple via-retro-pink to-accent" />
            Groove System
          </p>
          <ul className="flex gap-3">
            {contactLinks.map(({ label, href, icon: Icon, external }) => (
              <li key={label}>
                <a
                  href={href}
                  {...(external && externalLinkProps)}
                  aria-label={label}
                  className="grid size-9 place-items-center border-2 border-primary bg-card transition-colors duration-300 hover:text-retro-pink"
                >
                  <Icon aria-hidden className="size-4" />
                </a>
              </li>
            ))}
          </ul>
          <p className="text-sm text-muted">Groove System ©</p>
        </div>
      </footer>
    </div>
  );
}
