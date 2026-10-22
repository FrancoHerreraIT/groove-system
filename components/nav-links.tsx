"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

type NavItem = { label: string; href: string; isActive: (pathname: string) => boolean };

const navItems: NavItem[] = [
  { label: "Inicio", href: "/", isActive: (pathname) => pathname === "/" },
  { label: "Servicios", href: "/#servicios", isActive: () => false },
  { label: "Proyectos", href: "/proyectos", isActive: (pathname) => pathname.startsWith("/proyectos") },
  { label: "Contacto", href: "/#contacto", isActive: () => false },
  { label: "Ayuda", href: "/preguntas-frecuentes", isActive: (pathname) => pathname.startsWith("/preguntas-frecuentes") },
];

const linkClass =
  "transition-colors duration-300 hover:text-retro-pink outline-none focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-solid focus-visible:outline-accent";
const activeClass = "text-ink underline decoration-accent decoration-2 underline-offset-8";

function NavItems({ onNavigate, className }: { onNavigate?: () => void; className: string }) {
  const pathname = usePathname();
  return (
    <ul className={className}>
      {navItems.map(({ label, href, isActive }) => {
        const active = isActive(pathname);
        return (
          <li key={href}>
            <Link
              href={href}
              onClick={onNavigate}
              aria-current={active ? "page" : undefined}
              className={`${linkClass} ${active ? activeClass : ""}`}
            >
              {label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export function NavLinks() {
  return <NavItems className="hidden items-center gap-8 text-sm font-medium text-muted md:flex" />;
}

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    // Clic fuera del menú lo cierra
    const onPointerDown = (event: PointerEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, [open]);

  return (
    <div ref={containerRef} className="md:hidden">
      <button
        ref={buttonRef}
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-controls="menu-mobile"
        aria-label={open ? "Cerrar menú" : "Abrir menú"}
        className="grid size-10 place-items-center border-2 border-primary bg-card text-ink shadow-[4px_4px_0px_var(--color-primary)] transition-all duration-300 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_var(--color-primary)] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none"
      >
        {open ? <X aria-hidden className="size-4" /> : <Menu aria-hidden className="size-4" />}
      </button>
      {open && (
        <div
          id="menu-mobile"
          className="absolute right-6 top-[calc(100%+0.75rem)] w-56 border-2 border-primary bg-card p-2 shadow-[6px_6px_0px_var(--color-primary)]"
        >
          <NavItems
            onNavigate={() => setOpen(false)}
            className="flex flex-col text-sm font-medium text-muted [&_a]:block [&_a]:px-4 [&_a]:py-3"
          />
        </div>
      )}
    </div>
  );
}
