import Link from "next/link";
import { HelpCircle, Mail } from "lucide-react";
import {
  externalLinkProps,
  Instagram,
  INSTAGRAM_PROFILE,
  instagramButtonColors,
  mailButtonColors,
} from "@/components/contact";
import { EmailButton } from "@/components/email-button";
import { arcadeButton } from "@/components/ui";

// Botones de Instagram y mail (y opcionalmente Preguntas frecuentes), apilados en mobile
export function ContactButtons({ withFaq = false }: { withFaq?: boolean }) {
  return (
    <div className="mt-10 flex w-full flex-col justify-center gap-5 sm:w-auto sm:flex-row">
      <a href={INSTAGRAM_PROFILE} {...externalLinkProps} className={`${arcadeButton} ${instagramButtonColors}`}>
        <Instagram aria-hidden className="size-4" />
        Instagram
      </a>
      <EmailButton className={`${arcadeButton} ${mailButtonColors}`}>
        <Mail aria-hidden className="size-4" />
        Escribinos por mail
      </EmailButton>
      {withFaq && (
        <Link
          href="/preguntas-frecuentes"
          className={`${arcadeButton} bg-card text-ink shadow-[4px_4px_0px_var(--color-accent)] hover:shadow-[2px_2px_0px_var(--color-accent)]`}
        >
          <HelpCircle aria-hidden className="size-4" />
          Preguntas frecuentes
        </Link>
      )}
    </div>
  );
}
