import { NextResponse, type NextRequest } from "next/server";

import { negotiateLocale } from "@/i18n/negotiate-locale";
import { isSupportedLocale } from "@/i18n/locales";

/** Sends paths without a language prefix (/, /projects/x) to /es/... or /en/... */
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const firstSegment = pathname.split("/")[1] ?? "";

  if (isSupportedLocale(firstSegment)) return NextResponse.next();

  const locale = negotiateLocale(request.headers.get("accept-language"));
  const localizedUrl = request.nextUrl.clone();
  localizedUrl.pathname =
    pathname === "/" ? `/${locale}` : `/${locale}${pathname}`;

  const response = NextResponse.redirect(localizedUrl);
  response.headers.set("Vary", "Accept-Language");
  return response;
}

export const config = {
  // Skips localized paths, Next.js internals and any file with an extension
  // (sitemap.xml, robots.txt, icons, CV PDFs). Keep "es" and "en" in sync with
  // supportedLocales in src/i18n/locales.ts.
  matcher: ["/((?!es/|es$|en/|en$|_next/|_vercel/|.*\\.\\w+$).*)"],
};
