import Image from "next/image";
import { HomeLink, MobileMenu, NavLinks } from "@/components/nav-links";
import { ThemeToggle } from "@/components/theme-toggle";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-20 border-b-2 border-primary bg-bg/85 backdrop-blur-md">
      <nav className="relative mx-auto flex h-20 max-w-6xl items-center justify-between gap-4 px-6">
        <HomeLink
          className="flex items-center outline-none focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-solid focus-visible:outline-accent"
        >
          <Image
            src="/logo-groove-system.svg"
            alt="Groove System"
            width={363}
            height={53}
            preload
            className="h-7 w-auto sm:h-[34px] dark:hidden"
          />
          <Image
            src="/logo-groove-system-dark.svg"
            alt="Groove System"
            width={363}
            height={53}
            preload
            className="hidden h-7 w-auto sm:h-[34px] dark:block"
          />
        </HomeLink>
        <div className="flex items-center gap-3 md:gap-8">
          <NavLinks />
          <ThemeToggle />
          <MobileMenu />
        </div>
      </nav>
    </header>
  );
}
