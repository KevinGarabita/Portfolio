import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { ProjectFacts } from "@/components/projects/project-facts";
import { localize } from "@/i18n/localize";
import { getCurrentLocale, getDictionary } from "@/i18n/request-locale";
import { buildLanguageAlternates } from "@/lib/metadata";
import {
  getAllProjects,
  getNeighborProjects,
  getProjectBySlug,
} from "@/lib/projects";

/**
 * Only the slugs in content/projects.ts exist. Any other slug never reaches this file:
 * Next.js answers 404 with app/global-not-found.tsx. The `if (!project)` guards below
 * only narrow the type.
 */
export const dynamicParams = false;

export function generateStaticParams() {
  return getAllProjects().map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/projects/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};

  const locale = await getCurrentLocale();

  return {
    title: localize(project.name, locale),
    description: localize(project.summary, locale),
    alternates: buildLanguageAlternates(`/projects/${project.slug}`, locale),
  };
}

export default async function ProjectPage({
  params,
}: PageProps<"/[lang]/projects/[slug]">) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const locale = await getCurrentLocale();
  const dictionary = await getDictionary();
  const sectionTitles = dictionary.projects.sections;
  const { previousProject, nextProject } = getNeighborProjects(project.slug);

  return (
    <article>
      <header>
        <p>
          <Link href={`/${locale}#projects`}>
            {dictionary.projects.backToProjects}
          </Link>
        </p>
        <h1>{localize(project.name, locale)}</h1>
        <p>{localize(project.summary, locale)}</p>
        <ProjectFacts
          project={project}
          locale={locale}
          dictionary={dictionary}
        />
      </header>

      <section aria-labelledby="problem-title">
        <h2 id="problem-title">{sectionTitles.problem}</h2>
        <p>{localize(project.problem, locale)}</p>
      </section>

      <section aria-labelledby="solution-title">
        <h2 id="solution-title">{sectionTitles.solution}</h2>
        <p>{localize(project.solution, locale)}</p>
        <ul>
          {project.highlights.map((highlight) => (
            <li key={highlight.es}>{localize(highlight, locale)}</li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="role-title">
        <h2 id="role-title">{sectionTitles.role}</h2>
        <p>{localize(project.role, locale)}</p>
      </section>

      <section aria-labelledby="results-title">
        <h2 id="results-title">{sectionTitles.results}</h2>
        <ul>
          {project.results.map((result) => (
            <li key={result.es}>{localize(result, locale)}</li>
          ))}
        </ul>
      </section>

      <nav aria-label={dictionary.projects.sectionTitle}>
        {previousProject ? (
          <Link href={`/${locale}/projects/${previousProject.slug}`} rel="prev">
            {localize(previousProject.name, locale)}
          </Link>
        ) : null}
        {nextProject ? (
          <Link href={`/${locale}/projects/${nextProject.slug}`} rel="next">
            {localize(nextProject.name, locale)}
          </Link>
        ) : null}
      </nav>
    </article>
  );
}
