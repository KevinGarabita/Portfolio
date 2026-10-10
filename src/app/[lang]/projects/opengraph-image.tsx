import { ImageResponse } from "next/og";

import {
  OpenGraphCard,
  openGraphImageOptions,
} from "@/components/seo/open-graph-card";
import { isSupportedLocale, supportedLocales } from "@/i18n/locales";
import {
  getProjectsShareCard,
  shareImageSize,
  shareImageType,
} from "@/lib/share-card";

/**
 * Link-preview image of the projects page, per language. Same rules as
 * app/[lang]/opengraph-image.tsx: listed languages only, alt in the page's metadata.
 */
export const dynamicParams = false;

export function generateStaticParams() {
  return supportedLocales.map((locale) => ({ lang: locale }));
}

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
    <OpenGraphCard {...getProjectsShareCard(lang)} titleSize={96} />,
    openGraphImageOptions,
  );
}
