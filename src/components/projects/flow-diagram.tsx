import { Fragment } from "react";

import { ArrowRightIcon } from "@/components/ui/icons";
import type { Locale } from "@/i18n/locales";
import { localize } from "@/i18n/localize";
import { joinClassNames } from "@/lib/class-names";
import type { FlowStep } from "@/types/content";

interface FlowDiagramProps {
  steps: FlowStep[];
  locale: Locale;
  /** "Herramienta" / "Tool": read before each tool name by screen readers. */
  toolLabel: string;
}

/**
 * An automation flow as numbered steps, each with the tool involved. A real ordered
 * list, so screen readers get the order and the count. Vertical on small screens and
 * one horizontal row from lg up; the connecting line is drawn in CSS (.flow-step).
 */
export function FlowDiagram({ steps, locale, toolLabel }: FlowDiagramProps) {
  return (
    <ol className="grid gap-4 lg:auto-cols-fr lg:grid-flow-col lg:gap-8">
      {steps.map((step, index) => (
        <li
          key={step.label.es}
          className="flow-step flex gap-4 lg:flex-col lg:gap-4"
        >
          <span className="relative z-(--layer-raised) flex size-10 shrink-0 items-center justify-center rounded-full bg-accent font-bold text-on-accent ring-4 ring-page">
            {index + 1}
          </span>
          <div className="min-w-0 flex-1 rounded-media border border-hairline bg-raised p-4">
            <p className="font-bold text-heading">
              {localize(step.label, locale)}
            </p>
            {step.tool ? (
              <p className="mt-2 text-small text-muted">
                <span className="sr-only">{toolLabel}: </span>
                <span className="font-mono text-accent">{step.tool}</span>
              </p>
            ) : null}
          </div>
        </li>
      ))}
    </ol>
  );
}

interface FlowPreviewProps {
  steps: FlowStep[];
  className?: string;
}

/**
 * Compact version for project cards without screenshots: the tools of the flow in
 * order, joined by arrows (at most four). Decorative; the case study has the full
 * diagram and the card text lists the technologies.
 */
export function FlowPreview({ steps, className }: FlowPreviewProps) {
  const tools = [
    ...new Set(
      steps.map((step) => step.tool).filter((tool): tool is string => !!tool),
    ),
  ].slice(0, 4);

  if (tools.length === 0) return null;

  return (
    <div
      aria-hidden="true"
      className={joinClassNames(
        "flex flex-wrap items-center justify-center gap-x-2 gap-y-3 px-6",
        className,
      )}
    >
      {tools.map((tool, index) => (
        <Fragment key={tool}>
          {index > 0 ? <ArrowRightIcon className="size-4 text-accent" /> : null}
          <span className="rounded-tag border border-hairline bg-page px-3 py-1.5 font-mono text-small text-heading">
            {tool}
          </span>
        </Fragment>
      ))}
    </div>
  );
}
