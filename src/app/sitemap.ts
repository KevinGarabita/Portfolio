import type { MetadataRoute } from "next";

import { supportedLocales } from "@/i18n/locales";
import {
  getHomeLastModified,
  localizePath,
  toAbsoluteUrl,
} from "@/lib/metadata";
import { getAllProjects } from "@/lib/projects";
import type { CalendarDate } from "@/types/content";

interface SitemapPage {
  pathWithoutLocale: string;
  lastModified: CalendarDate;
}

/**
 * /sitemap.xml: every page in every language, each with its hreflang alternates.
 * Dates come from the content (never the build date), so a deploy without content
 * changes does not tell search engines that every page changed.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const pages: SitemapPage[] = [
    { pathWithoutLocale: "/", lastModified: getHomeLastModified() },
    { pathWithoutLocale: "/projects", lastModified: getHomeLastModified() },
    ...getAllProjects().map((project) => ({
      pathWithoutLocale: `/projects/${project.slug}`,
      lastModified: project.lastUpdated,
    })),
  ];

  return pages.flatMap(({ pathWithoutLocale, lastModified }) => {
    const languages = {
      ...Object.fromEntries(
        supportedLocales.map((locale) => [
          locale,
          toAbsoluteUrl(localizePath(pathWithoutLocale, locale)),
        ]),
      ),
      "x-default": toAbsoluteUrl(pathWithoutLocale),
    };

    return supportedLocales.map((locale) => ({
      url: toAbsoluteUrl(localizePath(pathWithoutLocale, locale)),
      lastModified,
      alternates: { languages },
    }));
  });
}
