import { ImageResponse } from "next/og";

import {
  OpenGraphCard,
  openGraphImageOptions,
} from "@/components/seo/open-graph-card";
import { profile } from "@/content/profile";
import { englishDictionary } from "@/i18n/dictionaries/english";
import { spanishDictionary } from "@/i18n/dictionaries/spanish";
import { isSupportedLocale, supportedLocales } from "@/i18n/locales";
import { localize } from "@/i18n/localize";

/**
 * Link-preview image of the projects page, per language. Same rules as
 * app/[lang]/opengraph-image.tsx: listed languages only, one alt for both.
 */
export const dynamicParams = false;

export function generateStaticParams() {
  return supportedLocales.map((locale) => ({ lang: locale }));
}

export const alt = profile.displayName;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const pageTexts = {
  es: spanishDictionary.projects.allProjectsPage,
  en: englishDictionary.projects.allProjectsPage,
};

export default async function Image({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isSupportedLocale(lang)) return new Response(null, { status: 404 });

  return new ImageResponse(
    <OpenGraphCard
      title={pageTexts[lang].title}
      titleSize={96}
      subtitle={pageTexts[lang].description}
      footer={`${profile.displayName} · ${localize(profile.role, lang)}`}
    />,
    openGraphImageOptions,
  );
}
