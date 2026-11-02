import type { ReactNode } from "react";

import type { HomeSectionId } from "@/lib/home-sections";

import { Container } from "./container";

/**
 * "split": the h2 in a narrow column on the left and the content beside it from lg up
 * (stacked below lg), like the parts of a case study. A hairline above it separates it
 * from the section before. For the short sections after the projects.
 * "stacked": the h2 above the content at full width, without a line. For the projects,
 * which come right after the hero.
 */
type SectionLayout = "split" | "stacked";

interface PageSectionProps {
  id: HomeSectionId;
  title: string;
  children: ReactNode;
  layout?: SectionLayout;
}

/**
 * A home page section: a plain heading (no number, no label above it) and its content.
 * Nothing fades in on scroll: the content is simply there. An anchor link lands on the
 * hairline at the top of the section; scroll-padding-top keeps it below the header.
 */
export function PageSection({
  id,
  title,
  children,
  layout = "split",
}: PageSectionProps) {
  const titleId = `${id}-title`;
  const heading = (
    <h2
      id={titleId}
      data-build="type"
      data-build-tag="h2"
      className="font-display text-title font-bold"
    >
      {title}
    </h2>
  );

  return (
    <section id={id} aria-labelledby={titleId} data-build-section={id}>
      <Container>
        {layout === "split" ? (
          <>
            {/* The hairline is an element of its own so the scroll build can trace it. */}
            <div
              aria-hidden="true"
              data-build="line"
              data-build-tag="hr"
              className="h-px bg-hairline"
            />
            <div className="grid gap-6 py-14 lg:grid-cols-12 lg:gap-10 lg:py-24">
              <div className="lg:col-span-4">{heading}</div>
              <div className="min-w-0 lg:col-span-8">{children}</div>
            </div>
          </>
        ) : (
          <div className="pb-14 lg:pb-24">
            <div className="mb-8 lg:mb-10">{heading}</div>
            {children}
          </div>
        )}
      </Container>
    </section>
  );
}
