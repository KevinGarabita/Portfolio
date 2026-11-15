import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";

import { ButtonLink } from "@/components/ui/button-link";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  ExternalLinkIcon,
  WhatsAppLogoIcon,
} from "@/components/ui/icons";
import { SocialNetworkLogo } from "@/components/ui/social-icon-link";
import type { Dictionary } from "@/i18n/dictionaries/spanish";
import type { Locale } from "@/i18n/locales";
import { localize } from "@/i18n/localize";
import { getProjectCredit } from "@/lib/projects";
import { socialNetworkNames } from "@/lib/social-networks";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import type {
  LocalizedText,
  Project,
  ProjectVideo,
  WebsiteComparison,
  WebsiteScore,
  WebsiteShowcase,
} from "@/types/content";

import { ProjectFacts } from "./project-facts";
import { ProjectGallery, type GalleryLabels } from "./project-gallery";
import { ProjectStatus } from "./project-status";
import {
  ProjectOverviewPart,
  ProjectStoryList,
  ProjectStorySection,
  ProjectTechnicalDetails,
} from "./project-story-section";

interface WebsiteCaseStudyProps {
  project: Project;
  website: WebsiteShowcase;
  locale: Locale;
  dictionary: Dictionary;
}

/** The host of a URL without "www.", as a browser's address bar shows it. */
function getDisplayHost(url: string): string {
  return new URL(url).host.replace(/^www\./, "");
}

/**
 * The live site in a browser frame, with the phone version in front of its lower right
 * corner: the first thing a business owner sees is the work itself, on both screens.
 * The desktop screenshot is the page's largest paint, so it is preloaded with high
 * priority. The frame is drawn with hairlines, nothing glows.
 */
function WebsiteHeroFrames({
  website,
  locale,
}: {
  website: WebsiteShowcase;
  locale: Locale;
}) {
  const { desktop, phone } = website.hero;
  return (
    <div className="relative pr-[9%] pb-[14%]">
      <div className="overflow-hidden rounded-media border border-hairline bg-raised-strong shadow-(--shadow-floating)">
        <div
          aria-hidden="true"
          className="flex h-8 items-center gap-1.5 border-b border-hairline px-3 sm:h-9"
        >
          <span className="size-2 rounded-full bg-control-border" />
          <span className="size-2 rounded-full bg-control-border" />
          <span className="size-2 rounded-full bg-control-border" />
          <span className="sm:text-xs mx-auto truncate rounded-tag bg-raised px-3 text-[0.6875rem] leading-5 text-muted">
            {getDisplayHost(website.url)}
          </span>
        </div>
        <Image
          src={desktop.src}
          alt={localize(desktop.alt, locale)}
          width={desktop.width}
          height={desktop.height}
          preload
          fetchPriority="high"
          sizes="(min-width: 1800px) 700px, (min-width: 1280px) 630px, (min-width: 1024px) 52vw, 90vw"
          className="block h-auto w-full"
        />
      </div>
      <div className="absolute right-0 bottom-0 w-[26%] overflow-hidden rounded-[1.1rem] border-4 border-raised-strong bg-raised-strong shadow-(--shadow-floating) outline outline-hairline sm:rounded-[1.5rem] sm:border-[6px]">
        <Image
          src={phone.src}
          alt={localize(phone.alt, locale)}
          width={phone.width}
          height={phone.height}
          sizes="(min-width: 1800px) 200px, (min-width: 1280px) 180px, (min-width: 1024px) 15vw, 26vw"
          className="block h-auto w-full"
        />
      </div>
    </div>
  );
}

/** A link to the project's video on one network, with the network's logo. */
function VideoButton({
  video,
  dictionary,
  className,
}: {
  video: ProjectVideo;
  dictionary: Dictionary;
  className?: string;
}) {
  return (
    <ButtonLink
      href={video.url}
      target="_blank"
      rel="noopener noreferrer"
      variant="secondary"
      leadingIcon={<SocialNetworkLogo network={video.network} />}
      className={className}
    >
      {dictionary.projects.website.watchOn(socialNetworkNames[video.network])}
      <span className="sr-only"> ({dictionary.opensInNewTab})</span>
    </ButtonLink>
  );
}

/**
 * One Lighthouse score as a ring that fills to the score, with the number inside and
 * the category under it. The ring is drawn with a conic gradient (no JavaScript, no
 * animation); the number is the real text, so the ring is only decoration.
 */
function ScoreRing({ score, label }: { score: number; label: string }) {
  return (
    <div className="flex flex-col items-center gap-3 text-center">
      <dt className="order-2 text-small text-muted">{label}</dt>
      <dd
        style={{ "--score": score } as CSSProperties}
        className="order-1 grid size-20 place-items-center rounded-full bg-[conic-gradient(var(--color-accent)_calc(var(--score)*1%),var(--color-hairline)_0)] sm:size-24"
      >
        <span className="grid size-[calc(100%-0.5rem)] place-items-center rounded-full bg-page font-display text-subtitle font-bold text-heading tabular-nums sm:text-title">
          {score}
        </span>
      </dd>
    </div>
  );
}

function WebsiteScores({
  scores,
  locale,
  dictionary,
}: {
  scores: { values: WebsiteScore[]; note: LocalizedText };
  locale: Locale;
  dictionary: Dictionary;
}) {
  const texts = dictionary.projects.website;
  return (
    <section
      aria-labelledby="scores-title"
      className="grid gap-8 border-t border-hairline py-12 lg:grid-cols-12 lg:items-center lg:gap-10 lg:py-16"
    >
      <div className="lg:col-span-4">
        <h2 id="scores-title" className="font-display text-title font-bold">
          {texts.scoresTitle}
        </h2>
        <p className="mt-3 text-small text-muted">
          {localize(scores.note, locale)}
        </p>
      </div>
      <dl className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-4 lg:col-span-8">
        {scores.values.map((value) => (
          <ScoreRing
            key={value.category}
            score={value.score}
            label={texts.scores[value.category]}
          />
        ))}
      </dl>
    </section>
  );
}

/**
 * One part of the site, old and new side by side, at every width: the difference is
 * what sells, so both stay visible together even on a phone. Both frames are 2:1, the
 * shape of the old screenshots; the new ones (16:10) lose a strip at the bottom.
 */
function ComparisonRow({
  comparison,
  locale,
  dictionary,
}: {
  comparison: WebsiteComparison;
  locale: Locale;
  dictionary: Dictionary;
}) {
  const texts = dictionary.projects.website;
  const sides = [
    { key: "before", image: comparison.before, label: texts.before },
    { key: "after", image: comparison.after, label: texts.after },
  ] as const;

  return (
    <div>
      <h3 className="font-display text-subtitle font-bold">
        {localize(comparison.label, locale)}
      </h3>
      <div className="mt-4 grid grid-cols-2 gap-3 sm:gap-6">
        {sides.map(({ key, image, label }) => (
          <figure key={key} className="flex min-w-0 flex-col gap-2">
            <figcaption
              className={
                key === "after"
                  ? "text-small font-bold text-accent"
                  : "text-small font-bold text-muted"
              }
            >
              {label}
            </figcaption>
            <div className="relative aspect-[2/1] overflow-hidden rounded-media border border-hairline bg-raised-strong">
              <Image
                src={image.src}
                alt={localize(image.alt, locale)}
                fill
                sizes="(min-width: 1800px) 652px, (min-width: 1280px) 588px, 48vw"
                className="object-cover object-top"
              />
            </div>
          </figure>
        ))}
      </div>
    </div>
  );
}

/**
 * Case study of a website, laid out to sell the next one: the live site in a browser
 * and a phone beside the pitch and its actions (visit the site, watch the video), the
 * measured Lighthouse scores, the old site next to the new one, what the site does for
 * the business, the video, more screenshots, the role and the results, the technical
 * details collapsed, and an invitation to ask for a site like it on WhatsApp.
 *
 * Like the other case studies, only the header arrives in sequence on load
 * (.entrance-slide); everything after it is simply there.
 */
export function WebsiteCaseStudy({
  project,
  website,
  locale,
  dictionary,
}: WebsiteCaseStudyProps) {
  const projectTexts = dictionary.projects;
  const sectionTitles = projectTexts.sections;
  const texts = projectTexts.website;
  const localizeEach = (items: LocalizedText[]) =>
    items.map((item) => localize(item, locale));

  // The hero already shows its two screenshots; the gallery shows the rest.
  const heroSources = new Set([
    website.hero.desktop.src,
    website.hero.phone.src,
  ]);
  const galleryImages = project.images
    .filter((image) => !heroSources.has(image.src))
    .map((image) => ({
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

  const visitSiteButton = (
    <ButtonLink
      href={website.url}
      target="_blank"
      rel="noopener noreferrer"
      trailingIcon={<ExternalLinkIcon className="size-4" />}
      className="max-sm:w-full"
    >
      {texts.visitSite}
      <span className="sr-only"> ({dictionary.opensInNewTab})</span>
    </ButtonLink>
  );

  return (
    <>
      <article>
        <header className="grid gap-10 pb-12 lg:grid-cols-12 lg:items-center lg:gap-x-12 lg:pb-16">
          <div className="lg:col-span-5">
            <p className="entrance-slide text-small [--entrance-order:0]">
              <Link
                href={`/${locale}/projects`}
                className="inline-flex min-h-11 items-center gap-2 font-bold"
              >
                <ArrowLeftIcon className="size-4" />
                {projectTexts.backToProjects}
              </Link>
            </p>
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
            <h1 className="entrance-slide mt-4 font-display text-headline font-bold text-balance [--entrance-order:2]">
              {localize(project.name, locale)}
            </h1>
            <p className="entrance-slide mt-6 max-w-prose text-subtitle [--entrance-order:3]">
              {localize(project.summary, locale)}
            </p>
            <div className="entrance-slide mt-8 flex flex-col gap-3 [--entrance-order:4] sm:flex-row sm:flex-wrap">
              {visitSiteButton}
              {website.videos.map((video) => (
                <VideoButton
                  key={video.url}
                  video={video}
                  dictionary={dictionary}
                  className="max-sm:w-full"
                />
              ))}
            </div>
          </div>

          <div className="entrance-slide [--entrance-order:3] lg:col-span-7">
            <WebsiteHeroFrames website={website} locale={locale} />
          </div>
        </header>

        {website.scores ? (
          <WebsiteScores
            scores={website.scores}
            locale={locale}
            dictionary={dictionary}
          />
        ) : null}

        {/* What was wrong and what replaced it, then the same parts of both sites. */}
        {website.comparisons.length > 0 ? (
          <ProjectStorySection
            id="before-after"
            title={texts.comparisonsTitle}
            layout="wide"
          >
            <div className="grid gap-8 sm:grid-cols-2 lg:gap-10">
              <ProjectOverviewPart title={texts.before}>
                <p className="max-w-prose">
                  {localize(project.problem, locale)}
                </p>
              </ProjectOverviewPart>
              <ProjectOverviewPart title={texts.after}>
                <p className="max-w-prose">
                  {localize(project.solution, locale)}
                </p>
              </ProjectOverviewPart>
            </div>
            <div className="mt-8 flex flex-col gap-10 lg:gap-12">
              {website.comparisons.map((comparison) => (
                <ComparisonRow
                  key={comparison.after.src}
                  comparison={comparison}
                  locale={locale}
                  dictionary={dictionary}
                />
              ))}
            </div>
          </ProjectStorySection>
        ) : null}

        <ProjectStorySection
          id="features"
          title={texts.featuresTitle}
          layout="wide"
        >
          <ul className="grid gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
            {website.features.map((feature) => (
              <li
                key={feature.title.en}
                className="border-t-2 border-accent-fill pt-4"
              >
                <h3 className="font-display text-subtitle font-bold">
                  {localize(feature.title, locale)}
                </h3>
                <p className="mt-2 text-muted">
                  {localize(feature.text, locale)}
                </p>
              </li>
            ))}
          </ul>
        </ProjectStorySection>

        {website.videos.length > 0 ? (
          <section
            aria-labelledby="video-title"
            className="grid grid-cols-[minmax(0,8.5rem)_minmax(0,1fr)] items-center gap-5 border-t border-hairline py-12 sm:grid-cols-[13rem_minmax(0,1fr)] sm:gap-10 lg:grid-cols-12 lg:py-16"
          >
            {website.videoCover ? (
              <Image
                src={website.videoCover.src}
                alt={localize(website.videoCover.alt, locale)}
                width={website.videoCover.width}
                height={website.videoCover.height}
                sizes="(min-width: 1024px) 13rem, (min-width: 640px) 13rem, 8.5rem"
                className="h-auto w-full rounded-media border border-hairline lg:col-span-3"
              />
            ) : null}
            <div
              className={
                website.videoCover
                  ? "min-w-0 lg:col-span-8 lg:col-start-5"
                  : "col-span-2 lg:col-span-12"
              }
            >
              <h2
                id="video-title"
                className="font-display text-title font-bold"
              >
                {texts.videoTitle}
              </h2>
              {website.videoSummary ? (
                <p className="mt-3 max-w-prose text-muted">
                  {localize(website.videoSummary, locale)}
                </p>
              ) : null}
              <div className="mt-6 hidden flex-wrap gap-3 sm:flex">
                {website.videos.map((video) => (
                  <VideoButton
                    key={video.url}
                    video={video}
                    dictionary={dictionary}
                  />
                ))}
              </div>
            </div>
            {/* On phones the buttons go under the cover and the text, full width. */}
            <div className="col-span-2 flex flex-col gap-3 sm:hidden">
              {website.videos.map((video) => (
                <VideoButton
                  key={video.url}
                  video={video}
                  dictionary={dictionary}
                  className="w-full"
                />
              ))}
            </div>
          </section>
        ) : null}

        {galleryImages.length > 0 ? (
          <ProjectStorySection
            id="gallery"
            title={texts.galleryTitle}
            layout="wide"
          >
            <ProjectGallery images={galleryImages} labels={galleryLabels} />
          </ProjectStorySection>
        ) : null}

        <ProjectStorySection id="results" title={sectionTitles.results}>
          <ProjectStoryList items={localizeEach(project.results)} />
        </ProjectStorySection>

        <ProjectStorySection id="role" title={sectionTitles.role}>
          <p className="max-w-prose">{localize(project.role, locale)}</p>
          <div className="mt-4">
            <ProjectFacts
              project={project}
              locale={locale}
              dictionary={dictionary}
            />
          </div>
        </ProjectStorySection>

        <ProjectTechnicalDetails
          title={sectionTitles.technicalDetails}
          hint={texts.technicalDetailsHint}
          parts={[
            {
              id: "how-it-works",
              title: sectionTitles.howItWorks,
              paragraphs: localizeEach(project.howItWorks ?? []),
            },
            {
              id: "decisions",
              title: sectionTitles.decisions,
              items: localizeEach(project.decisions ?? []),
            },
            {
              id: "next-steps",
              title: sectionTitles.nextSteps,
              paragraphs: project.nextSteps
                ? [localize(project.nextSteps, locale)]
                : [],
            },
          ]}
        />
      </article>

      {/* The sales close: a royal panel asking for a site like this one on WhatsApp,
          with a message that already says which site the visitor saw. */}
      <div className="mb-12 rounded-media bg-accent-fill px-6 py-10 text-on-accent sm:px-10 lg:mb-16 lg:px-14 lg:py-14">
        <p className="max-w-[20em] font-display text-title font-bold text-balance">
          {texts.ctaTitle}
        </p>
        <p className="mt-3 max-w-prose text-on-accent-muted">{texts.ctaText}</p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
          <ButtonLink
            href={buildWhatsAppUrl(
              locale,
              texts.ctaMessage(
                project.client ?? localize(project.name, locale),
              ),
            )}
            target="_blank"
            rel="noopener noreferrer"
            variant="whatsapp"
            leadingIcon={<WhatsAppLogoIcon />}
            className="max-sm:w-full"
          >
            {dictionary.hero.writeOnWhatsApp}
            <span className="sr-only"> ({dictionary.opensInNewTab})</span>
          </ButtonLink>
          <Link
            href={`/${locale}/services`}
            className="group inline-flex min-h-11 items-center gap-1.5 font-bold text-on-accent underline-offset-[0.2em]"
          >
            {dictionary.contact.servicesLink}
            <ArrowRightIcon className="size-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </>
  );
}
