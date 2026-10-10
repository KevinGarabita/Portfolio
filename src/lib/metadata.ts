import type { Metadata } from "next";

import { profile } from "@/content/profile";
import { projectSeo } from "@/content/project-seo";
import {
  homeDescription,
  projectsPageDescription,
  projectsPageTitle,
  siteLastUpdated,
} from "@/content/site-metadata";
import {
  defaultLocale,
  regionalLocaleTags,
  supportedLocales,
  type Locale,
} from "@/i18n/locales";
import { localize } from "@/i18n/localize";
import type { CalendarDate, LocalizedText, Project } from "@/types/content";

import { getAllProjects } from "./projects";
import {
  describeShareCard,
  getHomeShareCard,
  getProjectShareCard,
  getProjectsShareCard,
  shareImageSize,
  shareImageType,
  type ShareCardText,
} from "./share-card";
import { siteUrl } from "./site-config";

/*
 * Search-result limits: Google shows about 60 characters of a title and about 160 of a
 * description. 140 is this site's floor, so every description fills the snippet.
 */
const titleMaxLength = 60;
const descriptionMinLength = 140;
const descriptionMaxLength = 160;

function assertLength(
  text: LocalizedText,
  min: number,
  max: number,
  source: string,
): void {
  for (const locale of supportedLocales) {
    const { length } = text[locale];
    if (length < min || length > max) {
      throw new Error(
        `${source} (${locale}) has ${length} characters; keep it between ${min} and ${max}: "${text[locale]}"`,
      );
    }
  }
}

/**
 * Fails the build when a project has no search texts in content/project-seo.ts, when an
 * entry there names no project, or when a hand-written title or description is out of
 * range. The home title is not checked: it comes from the profile (name and role).
 */
function assertSearchTexts(): void {
  const projectSlugs = new Set(getAllProjects().map((project) => project.slug));

  for (const slug of projectSlugs) {
    if (!Object.hasOwn(projectSeo, slug)) {
      throw new Error(
        `src/content/project-seo.ts has no title and description for the project "${slug}"`,
      );
    }
  }

  for (const [slug, { title, description }] of Object.entries(projectSeo)) {
    if (!projectSlugs.has(slug)) {
      throw new Error(
        `src/content/project-seo.ts has texts for "${slug}", which is not a project`,
      );
    }
    const source = `The search texts of "${slug}" in src/content/project-seo.ts`;
    assertLength(title, 1, titleMaxLength, `${source}: title`);
    assertLength(
      description,
      descriptionMinLength,
      descriptionMaxLength,
      `${source}: description`,
    );
  }

  const siteSource = "src/content/site-metadata.ts";
  assertLength(
    homeDescription,
    descriptionMinLength,
    descriptionMaxLength,
    `homeDescription in ${siteSource}`,
  );
  assertLength(
    projectsPageTitle,
    1,
    titleMaxLength,
    `projectsPageTitle in ${siteSource}`,
  );
  assertLength(
    projectsPageDescription,
    descriptionMinLength,
    descriptionMaxLength,
    `projectsPageDescription in ${siteSource}`,
  );
}

assertSearchTexts();

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

/**
 * Path of a page's link-preview image: every page has an opengraph-image.tsx next to it,
 * so it answers at the page's path plus "/opengraph-image" (/es/opengraph-image,
 * /es/projects/x/opengraph-image), prerendered at build time.
 */
export function getShareImagePath(
  pathWithoutLocale: string,
  locale: Locale,
): string {
  return `${localizePath(pathWithoutLocale, locale)}/opengraph-image`;
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
 * hreflang paths of a page that exists in every language: one per language, plus
 * x-default on the English page, a page that answers 200 and the one proxy.ts sends
 * visitors without a language cookie to. The <head> and the sitemap both use it.
 * `pathWithoutLocale` starts with "/" ("/" for the home page, "/projects/x" for a project).
 */
export function buildHreflangPaths(
  pathWithoutLocale: string,
): Record<Locale | "x-default", string> {
  return {
    ...(Object.fromEntries(
      supportedLocales.map((locale) => [
        locale,
        localizePath(pathWithoutLocale, locale),
      ]),
    ) as Record<Locale, string>),
    "x-default": localizePath(pathWithoutLocale, defaultLocale),
  };
}

/** Canonical URL (the page itself, in its language) and hreflang links of a page. */
export function buildLanguageAlternates(
  pathWithoutLocale: string,
  currentLocale: Locale,
): Metadata["alternates"] {
  return {
    canonical: localizePath(pathWithoutLocale, currentLocale),
    languages: buildHreflangPaths(pathWithoutLocale),
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
  /** The whole <title>, at most 60 characters. The layout's "%s | Kevin Garabita" template is skipped. */
  title: string;
  description: string;
  pathWithoutLocale: string;
  locale: Locale;
  type: "website" | "article";
  /** What the page's link-preview image says, for its alt text. */
  shareCard: ShareCardText;
}

/**
 * Title, description, canonical, hreflang, Open Graph and Twitter card for one page.
 *
 * Next.js merges metadata shallowly: a page that sets `openGraph` replaces the layout's
 * whole object, so every page builds the complete set here.
 *
 * The image is listed by hand, with its alt in the page's language. Listing it replaces
 * the one Next.js would take from opengraph-image.tsx (whose alt could only be the same
 * in every language) instead of adding a second og:image, and the image route stays
 * prerendered. Next.js copies the image and its alt to the Twitter card.
 */
function buildPageMetadata({
  title,
  description,
  pathWithoutLocale,
  locale,
  type,
  shareCard,
}: PageMetadataOptions): Metadata {
  return {
    title: { absolute: title },
    description,
    alternates: buildLanguageAlternates(pathWithoutLocale, locale),
    openGraph: {
      ...buildBaseOpenGraph(locale),
      type,
      url: localizePath(pathWithoutLocale, locale),
      title,
      description,
      images: [
        {
          url: getShareImagePath(pathWithoutLocale, locale),
          ...shareImageSize,
          type: shareImageType,
          alt: describeShareCard(shareCard),
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

/** Home page: the name and the role as title. */
export function buildHomeMetadata(locale: Locale): Metadata {
  return buildPageMetadata({
    title: buildHomeTitle(locale),
    description: localize(homeDescription, locale),
    pathWithoutLocale: "/",
    locale,
    type: "website",
    shareCard: getHomeShareCard(locale),
  });
}

/** The page with every project. */
export function buildProjectsPageMetadata(locale: Locale): Metadata {
  return buildPageMetadata({
    title: localize(projectsPageTitle, locale),
    description: localize(projectsPageDescription, locale),
    pathWithoutLocale: "/projects",
    locale,
    type: "website",
    shareCard: getProjectsShareCard(locale),
  });
}

/** A case study, with its search texts from content/project-seo.ts. */
export function buildProjectMetadata(
  project: Project,
  locale: Locale,
): Metadata {
  const { title, description } = projectSeo[project.slug];

  return buildPageMetadata({
    title: localize(title, locale),
    description: localize(description, locale),
    pathWithoutLocale: `/projects/${project.slug}`,
    locale,
    type: "article",
    shareCard: getProjectShareCard(project, locale),
  });
}
