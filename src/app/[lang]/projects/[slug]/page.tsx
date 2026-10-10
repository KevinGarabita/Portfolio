import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { FlowDiagram } from "@/components/projects/flow-diagram";
import { ProjectBuildBadge } from "@/components/projects/project-build-badge";
import { ProjectFacts } from "@/components/projects/project-facts";
import {
  ProjectGallery,
  type GalleryLabels,
} from "@/components/projects/project-gallery";
import { ProjectStatus } from "@/components/projects/project-status";
import {
  ProjectKeyPoints,
  ProjectStoryList,
  ProjectStorySection,
} from "@/components/projects/project-story-section";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  WhatsAppLogoIcon,
  ExternalLinkIcon,
  MailIcon,
} from "@/components/ui/icons";
import { profile } from "@/content/profile";
import type { Dictionary } from "@/i18n/dictionaries/spanish";
import type { Locale } from "@/i18n/locales";
import { localize } from "@/i18n/localize";
import { getCurrentLocale, getDictionary } from "@/i18n/request-locale";
import { joinClassNames } from "@/lib/class-names";
import { buildPageMetadata } from "@/lib/metadata";
import {
  getAllProjects,
  getNeighborProjects,
  getProjectBySlug,
} from "@/lib/projects";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
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

  return buildPageMetadata({
    title: localize(project.name, locale),
    description: localize(project.summary, locale),
    pathWithoutLocale: `/projects/${project.slug}`,
    locale,
    type: "article",
  });
}

interface NeighborProjectLinkProps {
  project: Project;
  direction: "previous" | "next";
  locale: Locale;
  dictionary: Dictionary;
}

/** Previous/next case study: a panel with a small label above the project name, all one link. */
function NeighborProjectLink({
  project,
  direction,
  locale,
  dictionary,
}: NeighborProjectLinkProps) {
  const isPrevious = direction === "previous";
  const DirectionIcon = isPrevious ? ArrowLeftIcon : ArrowRightIcon;

  return (
    <Link
      href={`/${locale}/projects/${project.slug}`}
      rel={isPrevious ? "prev" : "next"}
      className={joinClassNames(
        "project-card hover-glow gradient-ring group flex h-full flex-col gap-2 rounded-section border p-6 no-underline",
        !isPrevious && "sm:items-end sm:text-right",
      )}
    >
      <span className="inline-flex items-center gap-2 text-small text-muted">
        {isPrevious ? (
          <DirectionIcon className="project-card-arrow size-4 text-accent" />
        ) : null}
        {dictionary.projects.neighborNavigation[direction]}
        {isPrevious ? null : (
          <DirectionIcon className="project-card-arrow size-4 text-accent" />
        )}
      </span>
      <span className="font-display text-subtitle font-bold text-heading underline decoration-1 underline-offset-[0.2em] group-hover:decoration-2">
        {localize(project.name, locale)}
      </span>
    </Link>
  );
}

/**
 * Case study: header (category, status, title, summary, key facts), screenshots, key
 * points, the automation flow, then the story (problem, solution, decisions, failure
 * handling, role, results, next steps), public links, the confidentiality note and the
 * previous/next projects. Everything after the header fades in on scroll.
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

  const galleryImages = project.images.map((image) => ({
    src: image.src,
    alt: localize(image.alt, locale),
    width: image.width,
    height: image.height,
    viewport: image.viewport,
  }));
  const galleryLabels: GalleryLabels = {
    enlarge: projectTexts.gallery.enlarge,
    dialogLabel: projectTexts.gallery.dialogLabel,
    close: projectTexts.gallery.close,
    previous: projectTexts.gallery.previous,
    next: projectTexts.gallery.next,
    positions: galleryImages.map((_, index) =>
      projectTexts.gallery.position(index + 1, galleryImages.length),
    ),
  };

  return (
    <Container className="pt-6 pb-20 lg:pt-10 lg:pb-28">
      <article>
        <header className="grid gap-10 pb-12 lg:grid-cols-12 lg:gap-x-10 lg:pb-16">
          <div className="lg:col-span-8">
            <p className="entrance-slide text-small [--entrance-order:0]">
              <Link
                href={`/${locale}/projects`}
                className="inline-flex min-h-11 items-center gap-2 font-bold"
              >
                <ArrowLeftIcon className="size-4" />
                {projectTexts.backToProjects}
              </Link>
            </p>
            {/* Above the title, which has its own stacking context (entrance-slide), so the
                build badge's tooltip opens over it. */}
            <div className="entrance-slide relative z-(--layer-raised) mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 [--entrance-order:1] lg:mt-10">
              <p className="font-mono text-small font-bold tracking-widest text-accent uppercase">
                {projectTexts.category[project.category]}
              </p>
              {project.status ? (
                <ProjectStatus
                  status={project.status}
                  statusNote={project.statusNote}
                  locale={locale}
                  dictionary={dictionary}
                />
              ) : null}
              {project.buildMethod ? (
                <ProjectBuildBadge
                  buildMethod={project.buildMethod}
                  dictionary={dictionary}
                />
              ) : null}
            </div>
            <h1 className="entrance-slide mt-4 font-display text-headline font-extrabold [--entrance-order:2]">
              {projectName}
            </h1>
            <p className="entrance-slide mt-6 max-w-prose text-subtitle [--entrance-order:3]">
              {localize(project.summary, locale)}
            </p>
          </div>

          <div className="entrance-slide [--entrance-order:4] lg:col-span-4 lg:self-end">
            <ProjectFacts
              project={project}
              locale={locale}
              dictionary={dictionary}
            />
          </div>
        </header>

        {galleryImages.length > 0 ? (
          <section
            aria-labelledby="gallery-title"
            data-reveal
            className="pb-12 lg:pb-16"
          >
            <h2 id="gallery-title" className="sr-only">
              {sectionTitles.gallery}
            </h2>
            <ProjectGallery images={galleryImages} labels={galleryLabels} />
          </section>
        ) : null}

        <ProjectStorySection id="highlights" title={sectionTitles.highlights}>
          <ProjectKeyPoints items={localizeEach(project.highlights)} />
        </ProjectStorySection>

        {project.flowDiagram?.length ? (
          <section
            aria-labelledby="flow-diagram-title"
            data-reveal
            className="border-t border-hairline py-10 lg:py-14"
          >
            <h2
              id="flow-diagram-title"
              className="font-display text-title font-bold"
            >
              {sectionTitles.flowDiagram}
            </h2>
            <div className="mt-8">
              <FlowDiagram
                steps={project.flowDiagram}
                locale={locale}
                toolLabel={projectTexts.flowStepTool}
              />
            </div>
          </section>
        ) : null}

        <ProjectStorySection id="problem" title={sectionTitles.problem}>
          <p className="max-w-prose">{localize(project.problem, locale)}</p>
        </ProjectStorySection>

        <ProjectStorySection id="solution" title={sectionTitles.solution}>
          <p className="max-w-prose">{localize(project.solution, locale)}</p>
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
          <p className="max-w-prose">{localize(project.role, locale)}</p>
        </ProjectStorySection>

        <ProjectStorySection id="results" title={sectionTitles.results}>
          <ProjectStoryList items={localizeEach(project.results)} />
        </ProjectStorySection>

        {project.nextSteps ? (
          <ProjectStorySection id="next-steps" title={sectionTitles.nextSteps}>
            <p className="max-w-prose">{localize(project.nextSteps, locale)}</p>
          </ProjectStorySection>
        ) : null}

        {project.links.length > 0 ? (
          <ProjectStorySection id="links" title={sectionTitles.links}>
            <ul className="flex flex-wrap gap-3">
              {project.links.map((projectLink) => (
                <li key={projectLink.url}>
                  <ButtonLink
                    href={projectLink.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="secondary"
                    trailingIcon={
                      <ExternalLinkIcon className="size-4 text-accent" />
                    }
                  >
                    {localize(projectLink.label, locale)}
                    <span className="sr-only">
                      {" "}
                      ({dictionary.opensInNewTab})
                    </span>
                  </ButtonLink>
                </li>
              ))}
            </ul>
          </ProjectStorySection>
        ) : null}

        <div
          data-reveal
          className="gradient-ring mt-4 rounded-section border p-4 min-[22.5rem]:p-6 sm:p-8"
        >
          <p className="max-w-prose">{projectTexts.confidentialityNote}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <ButtonLink
              variant="secondary"
              href={`mailto:${profile.email}?subject=${encodeURIComponent(projectName)}`}
              leadingIcon={<MailIcon className="text-accent" />}
            >
              {projectTexts.requestDetails}
            </ButtonLink>
            <ButtonLink
              variant="whatsapp"
              className="max-[22.5rem]:px-4"
              href={buildWhatsAppUrl(locale)}
              target="_blank"
              rel="noopener noreferrer"
              leadingIcon={<WhatsAppLogoIcon />}
            >
              {dictionary.hero.writeOnWhatsApp}
              <span className="sr-only"> ({dictionary.opensInNewTab})</span>
            </ButtonLink>
          </div>
        </div>
      </article>

      <nav
        aria-label={projectTexts.neighborNavigation.label}
        data-reveal
        className="mt-16 lg:mt-20"
      >
        <ul className="grid gap-4 sm:grid-cols-2 sm:gap-6">
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
            <li className="sm:col-start-2">
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
    </Container>
  );
}
