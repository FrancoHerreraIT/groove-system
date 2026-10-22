import { Plus } from "lucide-react";
import type { Faq } from "@/data/faqs";

// Acordeones nativos (details/summary): accesibles con teclado y sin JavaScript
export function FaqList({ faqs, className = "" }: { faqs: Faq[]; className?: string }) {
  return (
    <div className={`max-w-3xl space-y-5 ${className}`}>
      {faqs.map(({ question, answer }) => (
        <details key={question} className="group border-2 border-primary bg-card shadow-[6px_6px_0px_var(--color-primary)]">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 font-display font-semibold tracking-tight outline-none transition-colors duration-300 hover:text-retro-pink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-solid focus-visible:outline-accent sm:p-6 [&::-webkit-details-marker]:hidden">
            {question}
            <Plus
              aria-hidden
              className="size-5 shrink-0 text-accent transition-transform duration-300 group-open:rotate-45"
              strokeWidth={3}
            />
          </summary>
          <p className="border-t-2 border-line px-5 py-5 leading-relaxed text-muted sm:px-6">{answer}</p>
        </details>
      ))}
    </div>
  );
}
