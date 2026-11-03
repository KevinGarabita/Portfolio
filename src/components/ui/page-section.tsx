import type { ReactNode } from "react";

import type { HomeSectionId } from "@/lib/home-sections";

import { Container } from "./container";

/**
 * "split": the h2 in a narrow column on the left and the content beside it from lg up
 * (stacked below lg), like the parts of a case study. A hairline above it separates it
 * from the section before. For the contact section.
 * "stacked": the h2 above the content at full width. A hairline above it unless it is
 * the first section after the hero (`rule={false}`). For the projects and the
 * experience ledger, which need the whole width.
 */
type SectionLayout = "split" | "stacked";

interface PageSectionProps {
  id: HomeSectionId;
  title: string;
  children: ReactNode;
  layout?: SectionLayout;
  /** The hairline above the section; off for the section right after the hero. */
  rule?: boolean;
}

/**
 * A home page section: a plain heading (no label above it) and its content. Nothing
 * fades in on scroll: the content is simply there. An anchor link lands on the top of
 * the section; scroll-padding-top keeps it below the header.
 */
export function PageSection({
  id,
  title,
  children,
  layout = "split",
  rule = true,
}: PageSectionProps) {
  const titleId = `${id}-title`;
  const heading = (
    <h2 id={titleId} className="font-display text-title font-bold">
      {title}
    </h2>
  );

  return (
    <section id={id} aria-labelledby={titleId}>
      <Container>
        {rule ? <div aria-hidden="true" className="h-px bg-hairline" /> : null}
        {layout === "split" ? (
          <div className="grid gap-6 py-14 lg:grid-cols-12 lg:gap-10 lg:py-24">
            <div className="lg:col-span-4">{heading}</div>
            <div className="min-w-0 lg:col-span-8">{children}</div>
          </div>
        ) : (
          <div className={rule ? "py-14 lg:py-24" : "pb-14 lg:pb-24"}>
            <div className="mb-8 lg:mb-12">{heading}</div>
            {children}
          </div>
        )}
      </Container>
    </section>
  );
}
