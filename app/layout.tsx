import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { DM_Sans, Unbounded } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { ThemeProvider } from "@/components/theme-provider";
import { SITE_DESCRIPTION, SITE_TITLE, SITE_URL, socialMetadata } from "@/lib/site";
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
  metadataBase: new URL(SITE_URL),
  title: { default: SITE_TITLE, template: "%s | Groove System" },
  description: SITE_DESCRIPTION,
  ...socialMetadata(SITE_TITLE, SITE_DESCRIPTION),
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
          <div className="flex flex-1 flex-col">
            <SiteHeader />
            {children}
            <SiteFooter />
          </div>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
