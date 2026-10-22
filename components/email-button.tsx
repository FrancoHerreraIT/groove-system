"use client";

import { Check, Copy, ExternalLink, Mail } from "lucide-react";
import { useEffect, useId, useRef, useState, type ReactNode } from "react";
import { CONTACT_EMAIL, externalLinkProps } from "@/components/contact";

const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${CONTACT_EMAIL}`;

const optionClass =
  "flex w-full items-center gap-3 px-4 py-3 text-left text-sm font-medium text-muted transition-colors duration-300 hover:text-retro-pink outline-none focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-solid focus-visible:outline-accent";

async function copyToClipboard(text: string) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    // Sin permiso o fuera de un contexto seguro: método clásico
    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.setAttribute("readonly", "");
    textarea.style.position = "fixed";
    textarea.style.opacity = "0";
    document.body.appendChild(textarea);
    textarea.select();
    const copied = document.execCommand("copy");
    textarea.remove();
    return copied;
  }
}

// Botón de mail con menú: copiar la dirección, abrir Gmail o la app de correo
export function EmailButton({
  className,
  children,
  ariaLabel,
  placement = "bottom",
}: {
  className: string;
  children: ReactNode;
  ariaLabel?: string;
  placement?: "top" | "bottom";
}) {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const firstOptionRef = useRef<HTMLButtonElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout>>(undefined);
  const menuId = useId();

  const close = (returnFocus = false) => {
    clearTimeout(closeTimer.current);
    setOpen(false);
    setCopied(false);
    if (returnFocus) buttonRef.current?.focus();
  };

  useEffect(() => {
    if (!open) return;
    firstOptionRef.current?.focus();
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close(true);
    };
    const onPointerDown = (event: PointerEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) close();
    };
    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, [open]);

  useEffect(() => () => clearTimeout(closeTimer.current), []);

  // Muestra la confirmación 2 segundos y después cierra el menú
  const onCopy = async () => {
    if (!(await copyToClipboard(CONTACT_EMAIL))) return;
    setCopied(true);
    clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => close(), 2000);
  };

  return (
    <div ref={containerRef} className="relative flex flex-col">
      <button
        ref={buttonRef}
        type="button"
        onClick={() => (open ? close() : setOpen(true))}
        aria-expanded={open}
        aria-controls={menuId}
        aria-label={ariaLabel}
        className={className}
      >
        {children}
      </button>
      {open && (
        <div
          id={menuId}
          className={`absolute left-1/2 z-30 w-64 -translate-x-1/2 border-2 border-primary bg-card p-2 text-left shadow-[6px_6px_0px_var(--color-primary)] ${
            placement === "top" ? "bottom-[calc(100%+0.75rem)]" : "top-[calc(100%+0.75rem)]"
          }`}
        >
          <p className="break-all border-b-2 border-line px-4 pb-3 pt-2 font-mono text-xs text-ink">{CONTACT_EMAIL}</p>
          <ul className="pt-1">
            <li>
              <button ref={firstOptionRef} type="button" onClick={onCopy} className={optionClass}>
                {copied ? (
                  <Check aria-hidden className="size-4 shrink-0 text-accent" strokeWidth={3} />
                ) : (
                  <Copy aria-hidden className="size-4 shrink-0" />
                )}
                <span aria-live="polite" className={copied ? "text-accent" : ""}>
                  {copied ? "¡Mail copiado!" : "Copiar mail"}
                </span>
              </button>
            </li>
            <li>
              <a href={gmailUrl} {...externalLinkProps} onClick={() => close()} className={optionClass}>
                <ExternalLink aria-hidden className="size-4 shrink-0" />
                Abrir en Gmail
              </a>
            </li>
            <li>
              <a href={`mailto:${CONTACT_EMAIL}`} onClick={() => close()} className={optionClass}>
                <Mail aria-hidden className="size-4 shrink-0" />
                Abrir app de correo
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
