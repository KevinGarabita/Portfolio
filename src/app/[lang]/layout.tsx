import type { Metadata } from "next";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { SkipToContentLink } from "@/components/layout/skip-to-content-link";
import { profile } from "@/content/profile";
import { supportedLocales } from "@/i18n/locales";
import { localize } from "@/i18n/localize";
import { getCurrentLocale } from "@/i18n/request-locale";
import { siteUrl } from "@/lib/site-config";

import "../globals.css";

/** Only /es and /en exist; any other first segment falls through to app/global-not-found.tsx. */
export const dynamicParams = false;

export function generateStaticParams() {
  return supportedLocales.map((locale) => ({ lang: locale }));
}

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getCurrentLocale();

  return {
    metadataBase: siteUrl,
    title: {
      default: profile.displayName,
      template: `%s | ${profile.displayName}`,
    },
    description: localize(profile.role, locale),
  };
}

export default async function LocaleRootLayout({
  children,
}: LayoutProps<"/[lang]">) {
  const locale = await getCurrentLocale();

  return (
    <html lang={locale}>
      <body>
        <SkipToContentLink />
        <SiteHeader />
        <main id="main-content">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
