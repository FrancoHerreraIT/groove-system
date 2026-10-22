import type { Metadata } from "next";
import Link from "next/link";
import { arcadeButton, arcadeButtonDark, Section } from "@/components/ui";

export const metadata: Metadata = {
  title: "Página no encontrada",
};

export default function NotFound() {
  return (
    <main className="flex flex-1 flex-col justify-center">
      <Section as="div" innerClassName="flex flex-col items-center text-center">
        <p className="font-display text-8xl font-extrabold tracking-tight sm:text-9xl">404</p>
        <h1 className="mt-6 text-lg leading-relaxed text-muted sm:text-xl">La página que buscás no existe.</h1>
        <Link href="/" className={`${arcadeButton} ${arcadeButtonDark} mt-10`}>
          Volver al inicio
        </Link>
      </Section>
    </main>
  );
}
