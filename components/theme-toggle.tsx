"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";

const subscribe = () => () => {};

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  // false en el servidor y en la hidratación, true después de montar: evita mostrar el ícono equivocado
  const mounted = useSyncExternalStore(subscribe, () => true, () => false);
  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Activar modo claro" : "Activar modo oscuro"}
      className="grid size-10 place-items-center border-2 border-primary bg-card text-ink shadow-[4px_4px_0px_var(--color-primary)] transition-all duration-300 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_var(--color-primary)] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none"
    >
      {mounted && (isDark ? <Sun aria-hidden className="size-4" /> : <Moon aria-hidden className="size-4" />)}
    </button>
  );
}
