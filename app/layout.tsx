import type { Metadata } from "next";
import { DM_Sans, Unbounded } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const unbounded = Unbounded({
  variable: "--font-unbounded",
  weight: ["400", "600", "800"],
  subsets: ["latin"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Groove System — Desarrollo de software",
  description:
    "Páginas web, tiendas online y sistemas para pymes y comercios de Córdoba. Plazos claros, trato directo con quien programa y soporte después de la entrega.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      data-scroll-behavior="smooth"
      className={`${unbounded.variable} ${dmSans.variable} h-full scroll-smooth antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
