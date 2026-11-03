import type { ReactNode } from "react";

import { ChevronDownIcon } from "@/components/ui/icons";
import { joinClassNames } from "@/lib/class-names";

interface ProjectStorySectionProps {
  id: string;
  title: string;
  children: ReactNode;
  /**
   * "split" (default): the h2 in a narrow column and the text beside it from lg up, like
   * the sections of the home page. "wide": the h2 above content that needs the whole
   * width, such as the automation flow or the architecture.
   */
  layout?: "split" | "wide";
}

/**
 * One part of a case study (problem, solution, role...), separated from the one before
 * by a hairline. Stacked on smaller screens. Nothing fades in on scroll: the content is
 * simply there.
 */
export function ProjectStorySection({
  id,
  title,
  children,
  layout = "split",
}: ProjectStorySectionProps) {
  const titleId = `${id}-title`;
  const isSplit = layout === "split";

  return (
    <section
      aria-labelledby={titleId}
      className={joinClassNames(
        "border-t border-hairline py-12 lg:py-16",
        isSplit && "grid gap-5 lg:grid-cols-12 lg:gap-10",
      )}
    >
      <h2
        id={titleId}
        className={joinClassNames(
          "font-display text-title font-bold",
          isSplit ? "lg:col-span-4" : "mb-8",
        )}
      >
        {title}
      </h2>
      <div
        className={joinClassNames(
          "flex min-w-0 flex-col gap-4",
          isSplit && "lg:col-span-8",
        )}
      >
        {children}
      </div>
    </section>
  );
}

/** Bulleted list for results, decisions and failure handling. */
export function ProjectStoryList({ items }: { items: string[] }) {
  return (
    <ul className="flex max-w-prose flex-col gap-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <span
            aria-hidden="true"
            className="mt-[0.6em] size-1.5 shrink-0 rotate-45 bg-accent"
          />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

/**
 * Key points: short paragraphs, two per row from sm up, each under a hairline. A plain
 * list, not numbered: the points are not steps.
 */
export function ProjectKeyPoints({ items }: { items: string[] }) {
  return (
    <ul className="grid gap-x-10 gap-y-6 sm:grid-cols-2">
      {items.map((item) => (
        <li key={item} className="border-t border-hairline pt-4">
          {item}
        </li>
      ))}
    </ul>
  );
}

/**
 * One of the three parts of "At a glance" (problem, solution, results): a small heading
 * under a hairline and a sentence or two, so the whole case reads in one screen.
 */
export function ProjectOverviewPart({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="border-t border-hairline pt-4">
      <h3 className="font-display text-subtitle font-bold">{title}</h3>
      <div className="mt-3">{children}</div>
    </div>
  );
}

export interface TechnicalDetailsPart {
  id: string;
  title: string;
  /** Plain paragraphs, e.g. how it works. */
  paragraphs?: string[];
  /** A bulleted list, e.g. the technical decisions. */
  items?: string[];
}

interface ProjectTechnicalDetailsProps {
  title: string;
  /** What is inside, under the title, so a visitor knows whether to open it. */
  hint: string;
  parts: TechnicalDetailsPart[];
}

/**
 * The deep technical story of a case study (how it works, decisions, failure handling,
 * next steps), collapsed by default in a native <details>: it works without
 * JavaScript, opens with Enter or Space, and its text stays in the HTML, so search
 * engines still read it. The summary holds the h2 (allowed: a summary may hold one
 * heading) and a short line saying what is inside; the round button only shows the
 * state. Parts without content are skipped, and so is the whole block when none has.
 */
export function ProjectTechnicalDetails({
  title,
  hint,
  parts,
}: ProjectTechnicalDetailsProps) {
  const filledParts = parts.filter(
    (part) => (part.paragraphs?.length ?? 0) + (part.items?.length ?? 0) > 0,
  );
  if (filledParts.length === 0) return null;

  return (
    <section
      aria-labelledby="technical-details-title"
      className="border-t border-hairline py-12 lg:py-16"
    >
      <details className="group">
        <summary className="grid cursor-pointer list-none grid-cols-[minmax(0,1fr)_auto] items-center gap-x-6 rounded-media outline-offset-4 [&::-webkit-details-marker]:hidden">
          <h2
            id="technical-details-title"
            className="font-display text-title font-bold"
          >
            {title}
          </h2>
          <span
            aria-hidden="true"
            className="row-span-2 inline-flex size-11 items-center justify-center rounded-full border border-control-border transition-colors group-hover:border-accent"
          >
            <ChevronDownIcon className="size-5 text-accent transition-transform group-open:rotate-180" />
          </span>
          <span className="mt-2 text-muted">{hint}</span>
        </summary>

        <div className="mt-10 flex flex-col gap-10">
          {filledParts.map((part) => (
            <div
              key={part.id}
              id={part.id}
              className="grid gap-4 border-t border-hairline pt-6 lg:grid-cols-12 lg:gap-10"
            >
              <h3 className="font-display text-subtitle font-bold lg:col-span-4">
                {part.title}
              </h3>
              <div className="flex min-w-0 flex-col gap-4 lg:col-span-8">
                {part.paragraphs?.map((paragraph) => (
                  <p key={paragraph} className="max-w-prose">
                    {paragraph}
                  </p>
                ))}
                {part.items?.length ? (
                  <ProjectStoryList items={part.items} />
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </details>
    </section>
  );
}
