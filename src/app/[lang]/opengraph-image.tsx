import { ImageResponse } from "next/og";

import {
  OpenGraphCard,
  openGraphImageOptions,
} from "@/components/seo/open-graph-card";
import { isSupportedLocale, supportedLocales } from "@/i18n/locales";
import {
  getHomeShareCard,
  shareImageSize,
  shareImageType,
} from "@/lib/share-card";

/**
 * Link-preview image of the home page, one per language (/en/opengraph-image, /es/...).
 * It lives in app/[lang]/ and not in app/ because proxy.ts redirects every path that has
 * neither a language prefix nor a file extension.
 */
export const dynamicParams = false;

export function generateStaticParams() {
  return supportedLocales.map((locale) => ({ lang: locale }));
}

// No `alt` export: the page lists this image in its own metadata with an alt in its
// language (lib/metadata.ts). An alt here would be the same for every language, and a
// per-language one needs generateImageMetadata, with which Next.js 16.4 stops
// prerendering images under [lang] (see docs/decisions.md).
export const size = shareImageSize;
export const contentType = shareImageType;

export default async function Image({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isSupportedLocale(lang)) return new Response(null, { status: 404 });

  return new ImageResponse(
    <OpenGraphCard {...getHomeShareCard(lang)} titleSize={96} />,
    openGraphImageOptions,
  );
}
