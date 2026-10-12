import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { FlowDiagram } from "@/components/projects/flow-diagram";
import { ProjectArchitecture } from "@/components/projects/project-architecture";
import { ProjectFacts } from "@/components/projects/project-facts";
import {
  ProjectGallery,
  type GalleryLabels,
} from "@/components/projects/project-gallery";
import { ProjectMetrics } from "@/components/projects/project-metrics";
import { ProjectStatus } from "@/components/projects/project-status";
import {
  ProjectKeyPoints,
  ProjectStoryList,
  ProjectStorySection,
} from "@/components/projects/project-story-section";
import { ProjectStructuredData } from "@/components/seo/structured-data";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  ExternalLinkIcon,
  WhatsAppLogoIcon,
} from "@/components/ui/icons";
import type { Dictionary } from "@/i18n/dictionaries/spanish";
import type { Locale } from "@/i18n/locales";
import { localize } from "@/i18n/localize";
import { getCurrentLocale, getDictionary } from "@/i18n/request-locale";
import { joinClassNames } from "@/lib/class-names";
import { buildProjectMetadata } from "@/lib/metadata";
import {
  getAllProjects,
  getNeighborProjects,
  getProjectBySlug,
  getProjectCredit,
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

  return buildProjectMetadata(project, await getCurrentLocale());
}

interface NeighborProjectLinkProps {
  project: Project;
  direction: "previous" | "next";
  locale: Locale;
  dictionary: Dictionary;
}

/**
 * Previous/next case study: a hairline frame with a small label above the project name,
 * all one link. On hover or keyboard focus the frame turns orange and the name is
 * underlined, like the project tiles (globals.css, .link-frame); nothing lifts or glows.
 * The space between label and name keeps the link's name from reading "Proyecto
 * siguienteCRM…" (a flex container does not render white-space-only text).
 */
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
        "link-frame flex h-full flex-col gap-2 rounded-media border p-6 no-underline",
        !isPrevious && "sm:items-end sm:text-right",
      )}
    >
      <span className="inline-flex items-center gap-2 text-small text-muted">
        {isPrevious ? <DirectionIcon className="size-4 text-accent" /> : null}
        {dictionary.projects.neighborNavigation[direction]}
        {isPrevious ? null : <DirectionIcon className="size-4 text-accent" />}
      </span>{" "}
      <span className="link-frame-name font-display text-subtitle font-bold text-heading decoration-accent decoration-2 underline-offset-[0.2em]">
        {localize(project.name, locale)}
      </span>
    </Link>
  );
}

/**
 * Case study: header (credit, status, title, summary, key facts), screenshots, key
 * points, the automation flow, then the story (problem, solution, decisions, failure
 * handling, role, results, next steps), public links, an invitation to write on
 * WhatsApp and the previous/next projects.
 *
 * The header arrives in sequence on load without fading (.entrance-slide): the one
 * motion of the page, like the hero of the home page. Everything after it is simply
 * there.
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
      <ProjectStructuredData project={project} />
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
            {/* Who the work was for, then the status and its note. The comma is only
                read, so the text never runs the credit into the status. */}
            <p className="entrance-slide mt-6 flex flex-wrap items-center gap-x-3 gap-y-2 text-small text-muted [--entrance-order:1] lg:mt-10">
              <span>{projectTexts.credit[getProjectCredit(project)]}</span>
              {project.status ? (
                <>
                  <span className="sr-only">, </span>
                  <ProjectStatus
                    status={project.status}
                    statusNote={project.statusNote}
                    locale={locale}
                    dictionary={dictionary}
                  />
                </>
              ) : null}
            </p>
            <h1 className="entrance-slide mt-4 font-display text-headline font-bold [--entrance-order:2]">
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
          <section aria-labelledby="gallery-title" className="pb-12 lg:pb-16">
            <h2 id="gallery-title" className="sr-only">
              {sectionTitles.gallery}
            </h2>
            <ProjectGallery images={galleryImages} labels={galleryLabels} />
          </section>
        ) : null}

        <ProjectStorySection id="highlights" title={sectionTitles.highlights}>
          <ProjectKeyPoints items={localizeEach(project.highlights)} />
        </ProjectStorySection>

        {/* Before/after figures, only when the project has real ones. */}
        {project.metrics?.length ? (
          <ProjectStorySection id="metrics" title={sectionTitles.metrics}>
            <ProjectMetrics
              metrics={project.metrics}
              locale={locale}
              labels={dictionary.recruiter.metrics}
            />
          </ProjectStorySection>
        ) : null}

        {project.flowDiagram?.length ? (
          <ProjectStorySection
            id="flow-diagram"
            title={sectionTitles.flowDiagram}
            layout="wide"
          >
            <FlowDiagram
              steps={project.flowDiagram}
              locale={locale}
              toolLabel={projectTexts.flowStepTool}
            />
          </ProjectStorySection>
        ) : null}

        <ProjectStorySection id="problem" title={sectionTitles.problem}>
          <p className="max-w-prose">{localize(project.problem, locale)}</p>
        </ProjectStorySection>

        <ProjectStorySection id="solution" title={sectionTitles.solution}>
          <p className="max-w-prose">{localize(project.solution, locale)}</p>
        </ProjectStorySection>

        {/* Full width, like the automation flow; only when the project has one. */}
        {project.architecture ? (
          <ProjectStorySection
            id="architecture"
            title={sectionTitles.architecture}
            layout="wide"
          >
            <ProjectArchitecture
              architecture={project.architecture}
              locale={locale}
              toolLabel={projectTexts.flowStepTool}
            />
          </ProjectStorySection>
        ) : null}

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
      </article>

      {/* The next step for a client who has read this far, with the words and the
          action of the contact section of the home page. */}
      <div className="border-t border-hairline py-12 lg:py-16">
        <p className="max-w-[18em] font-display text-title font-bold text-heading">
          {dictionary.contact.lead}
        </p>
        <ButtonLink
          href={buildWhatsAppUrl(locale)}
          target="_blank"
          rel="noopener noreferrer"
          variant="whatsapp"
          leadingIcon={<WhatsAppLogoIcon />}
          className="mt-6 max-sm:w-full"
        >
          {dictionary.hero.writeOnWhatsApp}
          <span className="sr-only"> ({dictionary.opensInNewTab})</span>
        </ButtonLink>
      </div>

      <nav aria-label={projectTexts.neighborNavigation.label}>
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
