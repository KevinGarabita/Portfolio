import type { Metadata, Viewport } from "next";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { SkipToContentLink } from "@/components/layout/skip-to-content-link";
import { PageMotion } from "@/components/motion/page-motion";
import { profile } from "@/content/profile";
import { supportedLocales } from "@/i18n/locales";
import { localize } from "@/i18n/localize";
import { getCurrentLocale } from "@/i18n/request-locale";
import { brandColors } from "@/lib/brand-colors";
import { buildBaseOpenGraph } from "@/lib/metadata";
import { siteUrl } from "@/lib/site-config";

import { atkinsonHyperlegibleNext } from "../fonts";

import "../globals.css";

/** Only /es, /en, /pt and /fr exist; any other first segment falls through to app/global-not-found.tsx. */
export const dynamicParams = false;

export function generateStaticParams() {
  return supportedLocales.map((locale) => ({ lang: locale }));
}

/** The site has one dark theme: the browser paints a dark background before CSS loads. */
export const viewport: Viewport = {
  colorScheme: "dark",
  // Tints the mobile browser bar with the page background (the `page` token in globals.css).
  themeColor: brandColors.blackDeep,
};

/** Defaults for every page. Pages replace openGraph and twitter as a whole (lib/metadata.ts). */
export async function generateMetadata(): Promise<Metadata> {
  const locale = await getCurrentLocale();

  return {
    metadataBase: siteUrl,
    title: {
      default: profile.displayName,
      template: `%s | ${profile.displayName}`,
    },
    description: localize(profile.role, locale),
    openGraph: buildBaseOpenGraph(locale),
    twitter: { card: "summary_large_image" },
  };
}

export default async function LocaleRootLayout({
  children,
}: LayoutProps<"/[lang]">) {
  const locale = await getCurrentLocale();

  return (
    <html
      lang={locale}
      className={atkinsonHyperlegibleNext.variable}
      // Lets Next.js turn smooth scrolling off during route changes (globals.css turns it on).
      data-scroll-behavior="smooth"
    >
      <body>
        <div aria-hidden="true" className="site-backdrop" />
        <PageMotion />
        <SkipToContentLink />
        <SiteHeader />
        <main id="main-content" tabIndex={-1} className="focus:outline-none">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
