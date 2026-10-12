import type { ReactNode } from "react";

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
