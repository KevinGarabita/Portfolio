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
import {
  getAllProjects,
  getProjectBySlug,
  getProjectTechnologies,
} from "@/lib/projects";

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

// One alt for every project and language, so it names only what every card shows the
// same way: the owner's name. See the note in app/[lang]/opengraph-image.tsx.
export const alt = profile.displayName;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const clientLabels = {
  es: spanishDictionary.projects.facts.client,
  en: englishDictionary.projects.facts.client,
};

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
    <OpenGraphCard
      eyebrow={profile.displayName}
      title={localize(project.name, lang)}
      titleSize={72}
      subtitle={`${clientLabels[lang]}: ${project.client}`}
      footer={getProjectTechnologies(project).join(" · ")}
    />,
    openGraphImageOptions,
  );
}
