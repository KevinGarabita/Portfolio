import { ImageResponse } from "next/og";

import {
  OpenGraphCard,
  openGraphImageOptions,
} from "@/components/seo/open-graph-card";
import { profile } from "@/content/profile";
import { dictionariesByLocale } from "@/i18n/dictionaries-by-locale";
import { isSupportedLocale, supportedLocales } from "@/i18n/locales";
import { localize } from "@/i18n/localize";

/**
 * Link-preview image of the projects page, per language. Same rules as
 * app/[lang]/opengraph-image.tsx: listed languages only, one alt for all of them.
 */
export const dynamicParams = false;

export function generateStaticParams() {
  return supportedLocales.map((locale) => ({ lang: locale }));
}

export const alt = profile.displayName;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isSupportedLocale(lang)) return new Response(null, { status: 404 });

  const pageTexts = dictionariesByLocale[lang].projects.allProjectsPage;

  return new ImageResponse(
    <OpenGraphCard
      title={pageTexts.title}
      titleSize={96}
      subtitle={pageTexts.description}
      footer={`${profile.displayName} · ${localize(profile.role, lang)}`}
    />,
    openGraphImageOptions,
  );
}
