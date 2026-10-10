import { ImageResponse } from "next/og";

import {
  OpenGraphCard,
  openGraphImageOptions,
} from "@/components/seo/open-graph-card";
import { isSupportedLocale, supportedLocales } from "@/i18n/locales";
import { getAllProjects, getProjectBySlug } from "@/lib/projects";
import {
  getProjectShareCard,
  shareImageSize,
  shareImageType,
} from "@/lib/share-card";

/**
 * Link-preview image of each case study, per language. Route handlers do not inherit
 * generateStaticParams from the layouts, so this file lists every language and slug
 * itself to be generated at build time.
 */
export const dynamicParams = false;

export function generateStaticParams() {
  return supportedLocales.flatMap((locale) =>
    getAllProjects().map((project) => ({ lang: locale, slug: project.slug })),
  );
}

// The alt is in the page's metadata, in its language: see app/[lang]/opengraph-image.tsx.
export const size = shareImageSize;
export const contentType = shareImageType;

export default async function Image({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang, slug } = await params;
  const project = getProjectBySlug(slug);
  if (!isSupportedLocale(lang) || !project) {
    return new Response(null, { status: 404 });
  }

  return new ImageResponse(
    <OpenGraphCard {...getProjectShareCard(project, lang)} titleSize={72} />,
    openGraphImageOptions,
  );
}
