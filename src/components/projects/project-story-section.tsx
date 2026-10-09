import type { ReactNode } from "react";

interface ProjectStorySectionProps {
  id: string;
  title: string;
  children: ReactNode;
}

/** One part of a case study (problem, solution, role...): an h2 and its text. */
export function ProjectStorySection({
  id,
  title,
  children,
}: ProjectStorySectionProps) {
  const titleId = `${id}-title`;

  return (
    <section aria-labelledby={titleId} className="max-w-prose">
      <h2 id={titleId} className="font-display text-subtitle font-bold">
        {title}
      </h2>
      <div className="mt-3 flex flex-col gap-4">{children}</div>
    </section>
  );
}

/** Bulleted list for highlights, results and decisions. */
export function ProjectStoryList({ items }: { items: string[] }) {
  return (
    <ul className="flex list-disc flex-col gap-3 pl-5 marker:text-muted">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}
