import type { ReactNode } from "react";

import { joinClassNames } from "@/lib/class-names";
import type { HomeSectionId } from "@/lib/home-sections";

import { Container } from "./container";

/**
 * "split": the h2 in a narrow column on the left and the content beside it from lg up
 * (stacked below lg); the heading stays in view (sticky) while its content scrolls by.
 * A hairline above it separates it from the section before. For experience and contact.
 * "stacked": the h2 above the content at full width, without a line. For the projects,
 * which come right after the hero, and the about panel, which needs the whole width.
 */
type SectionLayout = "split" | "stacked";

interface PageSectionProps {
  id: HomeSectionId;
  title: string;
  /** A word or two above the title, in orange capitals: what the section is about. */
  eyebrow?: string;
  children: ReactNode;
  layout?: SectionLayout;
  /** A soft orange glow behind the section, so long dark stretches get some warmth. */
  glow?: "left" | "right";
}

/**
 * A home page section: a short orange label, the heading, and its content. Blocks inside
 * can rise in as they scroll into view (.reveal) where the browser supports scroll-driven
 * animations (CSS only); elsewhere, and with reduced motion, they are simply there. An
 * anchor link lands on the top of the section; scroll-padding-top keeps it below the
 * header.
 */
export function PageSection({
  id,
  title,
  eyebrow,
  children,
  layout = "split",
  glow,
}: PageSectionProps) {
  const titleId = `${id}-title`;
  const heading = (
    <hgroup>
      {eyebrow ? <p className="section-eyebrow">{eyebrow}</p> : null}
      <h2 id={titleId} className="font-display text-title font-bold">
        {title}
      </h2>
    </hgroup>
  );

  return (
    <section
      id={id}
      aria-labelledby={titleId}
      className={joinClassNames(
        "relative isolate",
        glow && `section-glow section-glow-${glow}`,
      )}
    >
      <Container>
        {layout === "split" ? (
          <>
            <div aria-hidden="true" className="h-px bg-hairline" />
            <div className="grid gap-8 py-14 lg:grid-cols-12 lg:gap-10 lg:py-24">
              <div className="lg:col-span-4">
                <div className="lg:sticky lg:top-[calc(var(--header-height)+2rem)]">
                  {heading}
                </div>
              </div>
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
