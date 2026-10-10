import type { Metadata } from "next";

import { profile } from "@/content/profile";
import { siteLastUpdated } from "@/content/site-metadata";
import {
  regionalLocaleTags,
  supportedLocales,
  type Locale,
} from "@/i18n/locales";
import { localize } from "@/i18n/localize";
import type { CalendarDate } from "@/types/content";

import { getAllProjects } from "./projects";
import { siteUrl } from "./site-config";

/** Open Graph locale code (language_TERRITORY): "es-MX" → "es_MX", "pt-BR" → "pt_BR". */
function toOpenGraphLocale(locale: Locale): string {
  return regionalLocaleTags[locale].replace("-", "_");
}

/** "/" → "/es", "/projects/x" → "/es/projects/x". `pathWithoutLocale` starts with "/". */
export function localizePath(
  pathWithoutLocale: string,
  locale: Locale,
): string {
  return pathWithoutLocale === "/"
    ? `/${locale}`
    : `/${locale}${pathWithoutLocale}`;
}

/** Absolute URL on the site's domain (see site-config.ts), for the sitemap and structured data. */
export function toAbsoluteUrl(path: string): string {
  return new URL(path, siteUrl).href;
}

/** Home page title for search results and link previews: the name and the role. */
export function buildHomeTitle(locale: Locale): string {
  return `${profile.displayName} | ${localize(profile.role, locale)}`;
}

/**
 * The home page and the projects page show the projects, so they change when the site
 * content or any project does.
 */
export function getHomeLastModified(): CalendarDate {
  return getAllProjects().reduce<CalendarDate>(
    (latest, project) =>
      project.lastUpdated > latest ? project.lastUpdated : latest,
    siteLastUpdated,
  );
}

/**
 * Canonical URL and hreflang links for a page that exists in every language.
 * `pathWithoutLocale` starts with "/" ("/" for the home page, "/projects/x" for a project).
 * x-default points to the unprefixed path, which redirects to English or to the language
 * the visitor picked in the switcher.
 */
export function buildLanguageAlternates(
  pathWithoutLocale: string,
  currentLocale: Locale,
): Metadata["alternates"] {
  return {
    canonical: localizePath(pathWithoutLocale, currentLocale),
    languages: {
      ...Object.fromEntries(
        supportedLocales.map((locale) => [
          locale,
          localizePath(pathWithoutLocale, locale),
        ]),
      ),
      "x-default": pathWithoutLocale,
    },
  };
}

/** Open Graph fields every page shares: site name and the current and alternate languages. */
export function buildBaseOpenGraph(
  locale: Locale,
): NonNullable<Metadata["openGraph"]> {
  return {
    siteName: profile.displayName,
    type: "website",
    locale: toOpenGraphLocale(locale),
    alternateLocale: supportedLocales
      .filter((otherLocale) => otherLocale !== locale)
      .map(toOpenGraphLocale),
  };
}

interface PageMetadataOptions {
  /** A plain string goes through the layout's "%s | Kevin Garabita" template; `absolute` skips it. */
  title: string | { absolute: string };
  description: string;
  pathWithoutLocale: string;
  locale: Locale;
  type: "website" | "article";
}

/**
 * Title, description, canonical, hreflang, Open Graph and Twitter card for one page.
 *
 * Next.js merges metadata shallowly: a page that sets `openGraph` replaces the layout's
 * whole object, so every page builds the complete set here. There is deliberately no
 * `images` key: the opengraph-image.tsx file next to each page supplies the image, and
 * Next.js copies it to the Twitter card.
 */
export function buildPageMetadata({
  title,
  description,
  pathWithoutLocale,
  locale,
  type,
}: PageMetadataOptions): Metadata {
  const shareTitle = typeof title === "string" ? title : title.absolute;

  return {
    title,
    description,
    alternates: buildLanguageAlternates(pathWithoutLocale, locale),
    openGraph: {
      ...buildBaseOpenGraph(locale),
      type,
      url: localizePath(pathWithoutLocale, locale),
      title: shareTitle,
      description,
    },
    twitter: {
      card: "summary_large_image",
      title: shareTitle,
      description,
    },
  };
}
