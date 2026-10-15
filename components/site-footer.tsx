import { contactLinks, externalLinkProps } from "@/components/contact";

export function SiteFooter() {
  return (
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
  );
}
