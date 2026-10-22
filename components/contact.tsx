import type { LucideProps } from "lucide-react";

// lucide-react quitó los íconos de marcas: este es el trazado original de su ícono de Instagram
export function Instagram({ className, strokeWidth = 2, ...props }: LucideProps) {
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

export const INSTAGRAM_USER = "groove.system";
export const INSTAGRAM_PROFILE = "https://www.instagram.com/groove.system";
export const CONTACT_EMAIL = "francoherreramoyano@gmail.com";

export const externalLinkProps = { target: "_blank", rel: "noopener noreferrer" } as const;

// Colores de los botones de contacto (se combinan con arcadeButton)
export const instagramButtonColors =
  "bg-inverse text-on-inverse shadow-[4px_4px_0px_var(--color-retro-pink)] hover:shadow-[2px_2px_0px_var(--color-retro-pink)]";
export const mailButtonColors =
  "bg-card text-ink shadow-[4px_4px_0px_var(--color-retro-purple)] hover:shadow-[2px_2px_0px_var(--color-retro-purple)]";
