import type { ReactNode } from "react";

import { joinClassNames } from "@/lib/class-names";
import { homeSectionIds, type HomeSectionId } from "@/lib/home-sections";

import { Container } from "./container";

/** Vertical room by how much the section carries, so the page keeps a varied rhythm. */
type SectionSpacing = "spacious" | "regular" | "compact";

const spacingClassNames: Record<SectionSpacing, string> = {
  spacious: "py-20 lg:py-28",
  regular: "py-16 lg:py-24",
  compact: "py-12 lg:py-20",
};

interface PageSectionProps {
  id: HomeSectionId;
  title: string;
  children: ReactNode;
  spacing?: SectionSpacing;
  /**
   * Reveal the whole content as one block on scroll (default). Sections that reveal
   * their own items one by one (the project cards) turn it off.
   */
  revealsContentAsBlock?: boolean;
}

/** "01", "02"... from the order of homeSectionIds, which is the order of the page. */
function getSectionNumber(id: HomeSectionId): string {
  const position = Object.values(homeSectionIds).indexOf(id) + 1;
  return String(position).padStart(2, "0");
}

/**
 * The layout every home section shares: a large heading with its number in orange and
 * a gradient line running to the right edge, then the content at full width. The
 * heading and the content fade in when they scroll into view.
 */
export function PageSection({
  id,
  title,
  children,
  spacing = "regular",
  revealsContentAsBlock = true,
}: PageSectionProps) {
  const titleId = `${id}-title`;

  return (
    <section id={id} aria-labelledby={titleId}>
      <Container className={spacingClassNames[spacing]}>
        <div data-reveal className="mb-10 flex items-end gap-6 lg:mb-14">
          <h2
            id={titleId}
            className="font-display text-headline font-extrabold"
          >
            <span
              aria-hidden="true"
              className="mb-3 block font-mono text-small font-bold tracking-widest text-accent"
            >
              {getSectionNumber(id)}
            </span>
            {title}
          </h2>
          <span
            aria-hidden="true"
            className="mb-[0.6em] h-px flex-1 bg-(image:--gradient-brand) opacity-50"
          />
        </div>
        <div
          data-reveal={revealsContentAsBlock ? "" : undefined}
          className={joinClassNames(
            revealsContentAsBlock && "[--reveal-order:1]",
          )}
        >
          {children}
        </div>
      </Container>
    </section>
  );
}
