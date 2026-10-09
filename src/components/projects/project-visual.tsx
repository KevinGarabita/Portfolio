import Image from "next/image";

import { AppWindowIcon, WorkflowIcon } from "@/components/ui/icons";
import type { Locale } from "@/i18n/locales";
import { localize } from "@/i18n/localize";
import { joinClassNames } from "@/lib/class-names";
import type { Project } from "@/types/content";

import { FlowPreview } from "./flow-diagram";

interface ProjectVisualProps {
  project: Project;
  locale: Locale;
  /** next/image `sizes` for the screenshot, matching the card's width. */
  sizes: string;
}

/**
 * The media area of a project card:
 * - the first screenshot, when the project has one (desktop screenshots fill the frame
 *   from the top; phone screenshots are shown whole);
 * - otherwise the tools of its automation flow, when it has one;
 * - otherwise an icon (an automation for Kobler work, a web application for the rest).
 * Never a made-up screenshot. The icon shrinks on narrow cards and, when a flow
 * follows, is dropped below 20rem so the flow always fits (container query on the frame).
 * It fills the card's media frame (absolutely positioned),
 * so a tall phone screenshot never stretches the card.
 */
export function ProjectVisual({ project, locale, sizes }: ProjectVisualProps) {
  const [firstImage] = project.images;

  if (firstImage) {
    const isPhoneScreenshot = firstImage.viewport === "mobile";
    return (
      <Image
        src={firstImage.src}
        alt={localize(firstImage.alt, locale)}
        width={firstImage.width}
        height={firstImage.height}
        sizes={sizes}
        className={joinClassNames(
          "absolute inset-0 size-full",
          isPhoneScreenshot ? "object-contain p-4" : "object-cover object-top",
        )}
      />
    );
  }

  const isAutomation = project.category === "kobler";
  const VisualIcon = isAutomation ? WorkflowIcon : AppWindowIcon;

  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-[radial-gradient(60%_70%_at_50%_45%,var(--tint-accent),transparent)]"
    >
      <span className="grid-texture grid-texture-centered absolute inset-0" />
      <span
        className={joinClassNames(
          "gradient-ring relative flex size-14 shrink-0 items-center justify-center rounded-section border border-transparent bg-page shadow-(--glow-accent-soft) [--ring-opacity:1] @min-[22rem]:size-20",
          project.flowDiagram?.length ? "@max-[20rem]:hidden" : undefined,
        )}
      >
        <VisualIcon className="size-7 text-accent @min-[22rem]:size-10" />
      </span>
      {project.flowDiagram?.length ? (
        <FlowPreview steps={project.flowDiagram} className="relative" />
      ) : (
        <span className="relative px-6 text-center">
          <span className="block font-display text-subtitle font-bold text-heading">
            {project.client}
          </span>
          <span className="mt-1 block font-mono text-small text-muted">
            {project.stack.slice(0, 3).join(" · ")}
          </span>
        </span>
      )}
    </div>
  );
}
