import { createHash } from "node:crypto";

import { profile } from "@/content/profile";
import { dictionariesByLocale } from "@/i18n/dictionaries-by-locale";
import type { Locale } from "@/i18n/locales";
import { localize } from "@/i18n/localize";
import type { Project } from "@/types/content";

import { getProjectTechnologies } from "./projects";

/**
 * What each link-preview image says. The images (opengraph-image.tsx next to each page)
 * draw it with components/seo/open-graph-card.tsx, and the page metadata (lib/metadata.ts)
 * turns the same text into the image's alt, so the two never disagree.
 */
export interface ShareCardText {
  /** Short line next to the monogram, such as the owner's name on a project card. */
  eyebrow?: string;
  title: string;
  subtitle: string;
  footer: string;
}

/** 1200×630, the size Facebook, LinkedIn, X and WhatsApp crop the least. */
export const shareImageSize = { width: 1200, height: 630 };
export const shareImageType = "image/png";

export function getHomeShareCard(locale: Locale): ShareCardText {
  const { city, region, country } = profile.location;

  return {
    title: profile.displayName,
    subtitle: localize(profile.role, locale),
    footer: `${city}, ${region}, ${localize(country, locale)}`,
  };
}

export function getProjectsShareCard(locale: Locale): ShareCardText {
  const pageTexts = dictionariesByLocale[locale].projects.allProjectsPage;

  return {
    title: pageTexts.title,
    subtitle: pageTexts.description,
    footer: `${profile.displayName} · ${localize(profile.role, locale)}`,
  };
}

export function getProjectShareCard(
  project: Project,
  locale: Locale,
): ShareCardText {
  const clientLabel = dictionariesByLocale[locale].projects.facts.client;
  // French puts a space before the colon ("Client : Controltec").
  const colon = locale === "fr" ? " :" : ":";

  return {
    eyebrow: profile.displayName,
    title: localize(project.name, locale),
    subtitle: `${clientLabel}${colon} ${project.client}`,
    footer: getProjectTechnologies(project).join(" · "),
  };
}

/**
 * Short hash of what a card says, for the version in its image URL (?v=...). Facebook,
 * LinkedIn and X keep a preview image by its URL, so the URL changes whenever the text on
 * the card does. Next.js's own ?hash only followed the source of opengraph-image.tsx, not
 * the texts it draws. A change to the layout alone keeps the URL (see docs/decisions.md).
 */
export function getShareCardVersion(card: ShareCardText): string {
  return createHash("sha256")
    .update(JSON.stringify(card))
    .digest("hex")
    .slice(0, 12);
}

/**
 * Alt text of a card: its lines from top to bottom, one sentence each, in the page's
 * language. The "·" separators become commas, the pause they stand for.
 */
export function describeShareCard(card: ShareCardText): string {
  const lines = [card.eyebrow, card.title, card.subtitle, card.footer];

  return `${lines
    .filter((line) => line !== undefined)
    .map((line) => line.replaceAll(" · ", ", ").replace(/\.$/, ""))
    .join(". ")}.`;
}
