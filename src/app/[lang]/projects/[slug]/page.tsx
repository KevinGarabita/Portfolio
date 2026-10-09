import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { ProjectFacts } from "@/components/projects/project-facts";
import {
  ProjectStoryList,
  ProjectStorySection,
} from "@/components/projects/project-story-section";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { profile } from "@/content/profile";
import type { Dictionary } from "@/i18n/dictionaries/spanish";
import type { Locale } from "@/i18n/locales";
import { localize } from "@/i18n/localize";
import { getCurrentLocale, getDictionary } from "@/i18n/request-locale";
import { getHomeSectionHref, homeSectionIds } from "@/lib/home-sections";
import { buildLanguageAlternates } from "@/lib/metadata";
import {
  getAllProjects,
  getNeighborProjects,
  getProjectBySlug,
} from "@/lib/projects";
import type { LocalizedText, Project } from "@/types/content";

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

interface NeighborProjectLinkProps {
  project: Project;
  direction: "previous" | "next";
  locale: Locale;
  dictionary: Dictionary;
}

/** Previous/next case study: a small label above the project name, both inside one link. */
function NeighborProjectLink({
  project,
  direction,
  locale,
  dictionary,
}: NeighborProjectLinkProps) {
  return (
    <Link
      href={`/${locale}/projects/${project.slug}`}
      rel={direction === "previous" ? "prev" : "next"}
      className="group block py-6 no-underline"
    >
      <span className="block text-small text-muted">
        {dictionary.projects.neighborNavigation[direction]}
      </span>
      <span className="mt-1 block font-display text-subtitle font-bold underline decoration-1 underline-offset-[0.2em] group-hover:decoration-2">
        {localize(project.name, locale)}
      </span>
    </Link>
  );
}

/**
 * Case study. Small screens: title, facts, story. Large screens: the story in 7 of 12
 * columns and the facts in a sticky column on the right.
 */
export default async function ProjectPage({
  params,
}: PageProps<"/[lang]/projects/[slug]">) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const locale = await getCurrentLocale();
  const dictionary = await getDictionary();
  const projectTexts = dictionary.projects;
  const sectionTitles = projectTexts.sections;
  const { previousProject, nextProject } = getNeighborProjects(project.slug);
  const projectName = localize(project.name, locale);
  const localizeEach = (texts: LocalizedText[]) =>
    texts.map((text) => localize(text, locale));

  return (
    <Container className="pt-4 pb-20 lg:pt-8 lg:pb-28">
      <article className="grid gap-y-10 lg:grid-cols-12 lg:gap-x-10 lg:gap-y-16">
        <header className="lg:col-span-10">
          <p className="text-small">
            <Link
              href={getHomeSectionHref(locale, homeSectionIds.projects)}
              className="inline-block py-2"
            >
              {projectTexts.backToProjects}
            </Link>
          </p>
          <h1 className="mt-6 font-display text-headline font-extrabold lg:mt-10">
            {projectName}
          </h1>
          <p className="mt-6 max-w-prose text-subtitle">
            {localize(project.summary, locale)}
          </p>
        </header>

        <div className="lg:sticky lg:top-10 lg:col-span-4 lg:col-start-9 lg:row-start-2 lg:self-start">
          <ProjectFacts
            project={project}
            locale={locale}
            dictionary={dictionary}
          />
        </div>

        <div className="flex flex-col gap-12 lg:col-span-7 lg:col-start-1 lg:row-start-2">
          <ProjectStorySection id="problem" title={sectionTitles.problem}>
            <p>{localize(project.problem, locale)}</p>
          </ProjectStorySection>

          <ProjectStorySection id="solution" title={sectionTitles.solution}>
            <p>{localize(project.solution, locale)}</p>
            <ProjectStoryList items={localizeEach(project.highlights)} />
          </ProjectStorySection>

          {project.decisions?.length ? (
            <ProjectStorySection id="decisions" title={sectionTitles.decisions}>
              <ProjectStoryList items={localizeEach(project.decisions)} />
            </ProjectStorySection>
          ) : null}

          {project.failureHandling?.length ? (
            <ProjectStorySection
              id="failure-handling"
              title={sectionTitles.failureHandling}
            >
              <ProjectStoryList items={localizeEach(project.failureHandling)} />
            </ProjectStorySection>
          ) : null}

          <ProjectStorySection id="role" title={sectionTitles.role}>
            <p>{localize(project.role, locale)}</p>
          </ProjectStorySection>

          <ProjectStorySection id="results" title={sectionTitles.results}>
            <ProjectStoryList items={localizeEach(project.results)} />
          </ProjectStorySection>

          {project.nextSteps ? (
            <ProjectStorySection
              id="next-steps"
              title={sectionTitles.nextSteps}
            >
              <p>{localize(project.nextSteps, locale)}</p>
            </ProjectStorySection>
          ) : null}

          <div className="max-w-prose border border-hairline bg-raised p-6">
            <p>{projectTexts.confidentialityNote}</p>
            <div className="mt-4">
              <ButtonLink
                variant="secondary"
                href={`mailto:${profile.email}?subject=${encodeURIComponent(projectName)}`}
              >
                {projectTexts.requestDetails}
              </ButtonLink>
            </div>
          </div>
        </div>

        <nav
          aria-label={projectTexts.neighborNavigation.label}
          className="lg:col-span-12 lg:row-start-3"
        >
          <ul className="grid border-t border-hairline sm:grid-cols-2 sm:gap-x-10">
            {previousProject ? (
              <li>
                <NeighborProjectLink
                  project={previousProject}
                  direction="previous"
                  locale={locale}
                  dictionary={dictionary}
                />
              </li>
            ) : null}
            {nextProject ? (
              <li className="sm:col-start-2 sm:text-right">
                <NeighborProjectLink
                  project={nextProject}
                  direction="next"
                  locale={locale}
                  dictionary={dictionary}
                />
              </li>
            ) : null}
          </ul>
        </nav>
      </article>
    </Container>
  );
}
