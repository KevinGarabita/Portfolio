import type { Locale } from "@/i18n/locales";

/**
 * Anchor ids of the home page sections, in page order. The sections and the header
 * navigation both read them from here, so a renamed id cannot break a link.
 */
export const homeSectionIds = {
  projects: "projects",
  experience: "experience",
  education: "education",
  about: "about",
  contact: "contact",
} as const;

export type HomeSectionId =
  (typeof homeSectionIds)[keyof typeof homeSectionIds];

/** Link to a home section that works from any page, e.g. "/es#projects". */
export function getHomeSectionHref(
  locale: Locale,
  sectionId: HomeSectionId,
): string {
  return `/${locale}#${sectionId}`;
}
