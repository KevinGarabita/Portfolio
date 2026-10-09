import type { ReactNode } from "react";

import { joinClassNames } from "@/lib/class-names";
import type { HomeSectionId } from "@/lib/home-sections";

import { Container } from "./container";

/** Vertical room by how much the section carries, so the page keeps a varied rhythm. */
type SectionSpacing = "spacious" | "regular" | "compact";

type SectionSurface = "page" | "inverse";

const spacingClassNames: Record<SectionSpacing, string> = {
  spacious: "pt-12 pb-20 lg:pt-16 lg:pb-28",
  regular: "pt-10 pb-16 lg:pt-14 lg:pb-20",
  compact: "pt-8 pb-12 lg:pt-10 lg:pb-14",
};

interface PageSectionProps {
  id: HomeSectionId;
  title: string;
  children: ReactNode;
  spacing?: SectionSpacing;
  /** "inverse" turns the section into the ink block (surface-inverse). */
  surface?: SectionSurface;
}

/**
 * The layout every home section shares: the heading in a narrow label column and the
 * content beside it on large screens; stacked on small ones. Sections on the page
 * background are separated by a hairline.
 */
export function PageSection({
  id,
  title,
  children,
  spacing = "regular",
  surface = "page",
}: PageSectionProps) {
  const titleId = `${id}-title`;

  return (
    <section
      id={id}
      aria-labelledby={titleId}
      className={surface === "inverse" ? "surface-inverse" : undefined}
    >
      <Container>
        <div
          className={joinClassNames(
            "grid gap-y-8 lg:grid-cols-12 lg:gap-x-10",
            surface === "page" && "border-t border-hairline",
            spacingClassNames[spacing],
          )}
        >
          <h2
            id={titleId}
            className="font-display text-title font-bold lg:sticky lg:top-10 lg:col-span-4 lg:self-start"
          >
            {title}
          </h2>
          <div className="lg:col-span-8">{children}</div>
        </div>
      </Container>
    </section>
  );
}
