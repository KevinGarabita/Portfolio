import type { ReactNode } from "react";

interface ProjectStorySectionProps {
  id: string;
  title: string;
  children: ReactNode;
}

/**
 * One part of a case study (problem, solution, role...): the h2 in a narrow column
 * and the text beside it from lg up, stacked on smaller screens, separated by a
 * hairline. Fades in when it scrolls into view.
 */
export function ProjectStorySection({
  id,
  title,
  children,
}: ProjectStorySectionProps) {
  const titleId = `${id}-title`;

  return (
    <section
      aria-labelledby={titleId}
      data-reveal
      className="grid gap-4 border-t border-hairline py-10 lg:grid-cols-12 lg:gap-10 lg:py-14"
    >
      <h2
        id={titleId}
        className="font-display text-title font-bold lg:col-span-4"
      >
        {title}
      </h2>
      <div className="flex min-w-0 flex-col gap-4 lg:col-span-8">
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

/** Key points as numbered panels, two per row from sm up. */
export function ProjectKeyPoints({ items }: { items: string[] }) {
  return (
    <ol className="grid gap-4 sm:grid-cols-2 lg:gap-6">
      {items.map((item, index) => (
        <li
          key={item}
          className="rounded-section border border-hairline bg-raised p-6 sm:last:odd:col-span-2"
        >
          <span
            aria-hidden="true"
            className="font-mono text-small font-bold text-accent"
          >
            {String(index + 1).padStart(2, "0")}
          </span>
          <p className="mt-3">{item}</p>
        </li>
      ))}
    </ol>
  );
}
