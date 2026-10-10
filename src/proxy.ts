import { NextResponse, type NextRequest } from "next/server";

import {
  defaultLocale,
  isSupportedLocale,
  preferredLocaleCookieName,
} from "@/i18n/locales";

/**
 * Sends paths without a language prefix (/, /projects/x) to /en/... or to the language
 * picked in the switcher (cookie). The browser's Accept-Language is not consulted: the
 * site opens in English unless the visitor chose another language.
 */
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const firstSegment = pathname.split("/")[1] ?? "";

  if (isSupportedLocale(firstSegment)) return NextResponse.next();

  const preferredLocale = request.cookies.get(preferredLocaleCookieName)?.value;
  const locale =
    preferredLocale && isSupportedLocale(preferredLocale)
      ? preferredLocale
      : defaultLocale;

  const localizedUrl = request.nextUrl.clone();
  localizedUrl.pathname =
    pathname === "/" ? `/${locale}` : `/${locale}${pathname}`;

  const response = NextResponse.redirect(localizedUrl);
  response.headers.set("Vary", "Cookie");
  return response;
}

export const config = {
  // Skips localized paths, Next.js internals and any file with an extension
  // (sitemap.xml, robots.txt, favicon.ico, icon.svg, CV PDFs). Generated metadata
  // images (icon.tsx, opengraph-image.tsx) have no extension: keep them inside
  // app/[lang]/ so their URLs start with a language.
  // Keep the languages in sync with supportedLocales in src/i18n/locales.ts.
  matcher: [
    "/((?!es/|es$|en/|en$|pt/|pt$|fr/|fr$|_next/|_vercel/|.*\\.\\w+$).*)",
  ],
};
