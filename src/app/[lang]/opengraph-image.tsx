import { ImageResponse } from "next/og";

import {
  OpenGraphCard,
  openGraphImageOptions,
} from "@/components/seo/open-graph-card";
import { profile } from "@/content/profile";
import { isSupportedLocale, supportedLocales } from "@/i18n/locales";
import { localize } from "@/i18n/localize";

/**
 * Link-preview image of the home page, one per language (/en/opengraph-image, /es/...).
 * It lives in app/[lang]/ and not in app/ because proxy.ts redirects every path that has
 * neither a language prefix nor a file extension.
 */
export const dynamicParams = false;

export function generateStaticParams() {
  return supportedLocales.map((locale) => ({ lang: locale }));
}

// One alt for every language, so it names only what reads the same in all: the name.
// A per-language alt needs generateImageMetadata, and with it Next.js 16.4 stops
// prerendering images under [lang] (see docs/decisions.md).
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

  const { city, region, country } = profile.location;

  return new ImageResponse(
    <OpenGraphCard
      title={profile.displayName}
      titleSize={96}
      subtitle={localize(profile.role, lang)}
      footer={`${city}, ${region}, ${localize(country, lang)}`}
    />,
    openGraphImageOptions,
  );
}
