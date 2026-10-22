import type { Metadata } from "next";
import { ContactButtons } from "@/components/contact-buttons";
import { FaqList } from "@/components/faq-list";
import { contentGap, Section } from "@/components/ui";
import { faqs } from "@/data/faqs";
import { SITE_NAME, socialMetadata } from "@/lib/site";

const title = "Preguntas frecuentes";
const description = "Respondemos las consultas más comunes sobre precios, plazos, dominio, hosting y soporte.";

export const metadata: Metadata = {
  title,
  description,
  ...socialMetadata(`${title} | ${SITE_NAME}`, description, true),
};

export default function FaqPage() {
  return (
    <main className="flex-1">
      <Section as="div" first>
        <h1 className="text-center font-display text-3xl font-extrabold tracking-tight sm:text-5xl">{title}</h1>
        <FaqList faqs={faqs} className={`${contentGap} mx-auto`} />
      </Section>

      <Section className="border-t-2 border-primary">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-balance sm:text-5xl">
            ¿Tenés otra consulta?
          </h2>
          <p className={`${contentGap} max-w-2xl text-lg leading-relaxed text-muted text-pretty sm:text-xl`}>
            Escribinos y te respondemos en el día.
          </p>
          <ContactButtons />
        </div>
      </Section>
    </main>
  );
}
