import { NextResponse, type NextRequest } from "next/server";

import {
  defaultLocale,
  isSupportedLocale,
  preferredLocaleCookieName,
} from "@/i18n/locales";

/**
 * Absolute URL for `pathname` that keeps the query string. A plain URL and not a clone of
 * request.nextUrl: NextURL puts back the trailing slash the request had.
 */
function buildUrl(request: NextRequest, pathname: string): URL {
  return new URL(`${pathname}${request.nextUrl.search}`, request.url);
}

/**
 * Sends paths without a language prefix (/, /projects/x) to /en/... or to the language
 * picked in the switcher (cookie), always in a single redirect. The browser's
 * Accept-Language is not consulted: the site opens in English unless the visitor chose
 * another language.
 *
 * - Without the cookie: 308 to English, the page x-default points to (lib/metadata.ts).
 * - With the cookie: 307 to that language, a choice of this visitor only.
 *
 * Both answers depend on the cookie, so they carry "Cache-Control: private, no-store" and
 * "Vary: Cookie": a browser must not keep the 308 and send a visitor who later picks
 * Spanish back to English.
 */
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  // The trailing slash goes in the same redirect: "/projects/" → "/en/projects". Next.js
  // removes it itself, in an earlier redirect of its own, unless next.config.ts sets
  // skipTrailingSlashRedirect (see docs/decisions.md).
  const path = pathname.replace(/\/+$/, "") || "/";
  const firstSegment = path.split("/")[1] ?? "";

  // Localized pages and files ("/en/projects/", "/sitemap.xml/") only lose the slash,
  // the same for every visitor.
  if (isSupportedLocale(firstSegment) || /\.\w+$/.test(path)) {
    return path === pathname
      ? NextResponse.next()
      : NextResponse.redirect(buildUrl(request, path), 308);
  }

  const preferredLocale = request.cookies.get(preferredLocaleCookieName)?.value;
  const hasPreferredLocale =
    preferredLocale !== undefined && isSupportedLocale(preferredLocale);
  const locale = hasPreferredLocale ? preferredLocale : defaultLocale;

  const localizedPath = path === "/" ? `/${locale}` : `/${locale}${path}`;

  const response = NextResponse.redirect(
    buildUrl(request, localizedPath),
    hasPreferredLocale ? 307 : 308,
  );
  response.headers.set("Cache-Control", "private, no-store");
  response.headers.set("Vary", "Cookie");
  return response;
}

export const config = {
  // Keep the languages in sync with supportedLocales in src/i18n/locales.ts.
  matcher: [
    // Paths without a language. Skips localized paths, Next.js internals and any file
    // with an extension (sitemap.xml, robots.txt, favicon.ico, icon.svg, CV PDFs).
    // Generated metadata images (opengraph-image.tsx) have no extension: keep them inside
    // app/[lang]/ so their URLs start with a language.
    "/((?!es/|es$|en/|en$|pt/|pt$|fr/|fr$|_next/|_vercel/|.*\\.\\w+$).*)",
    // Localized paths that end in a slash ("/en/", "/en/projects/"), and only those.
    "/:lang(es|en|pt|fr)/:rest*/",
  ],
};
