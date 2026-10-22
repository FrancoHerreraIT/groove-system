import Link from "next/link";
import { Mail } from "lucide-react";
import { externalLinkProps, Instagram, INSTAGRAM_PROFILE } from "@/components/contact";
import { EmailButton } from "@/components/email-button";
import { textLink } from "@/components/ui";

const iconLink =
  "grid size-9 place-items-center border-2 border-primary bg-card transition-colors duration-300 hover:text-retro-pink";

export function SiteFooter() {
  return (
    <footer className="border-t-4 border-primary bg-card">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-10 text-center sm:flex-row sm:text-left">
        <p className="flex items-center gap-2 font-display font-extrabold tracking-tight">
          <span aria-hidden className="size-3 bg-linear-to-br from-retro-purple via-retro-pink to-accent" />
          Groove System
        </p>
        <ul className="flex gap-3">
          <li>
            <a href={INSTAGRAM_PROFILE} {...externalLinkProps} aria-label="Instagram" className={iconLink}>
              <Instagram aria-hidden className="size-4" />
            </a>
          </li>
          <li>
            <EmailButton ariaLabel="Mail" placement="top" className={iconLink}>
              <Mail aria-hidden className="size-4" />
            </EmailButton>
          </li>
        </ul>
        <div className="flex flex-col items-center gap-2 sm:flex-row sm:gap-6">
          <Link href="/preguntas-frecuentes" className={textLink}>
            Preguntas frecuentes
          </Link>
          <p className="text-sm text-muted">Groove System ©</p>
        </div>
      </div>
    </footer>
  );
}
