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
  /**
   * Preload the screenshot with high priority instead of loading it lazily. Only for the
   * card whose image is the page's largest paint (LCP): the first card of the projects
   * page and, on the home page, the lead project (the LCP on phones).
   */
  preload?: boolean;
}

/**
 * Aspect ratio of the card's media frame (aspect-video in ProjectCard, every variant).
 * 16:9 is the widest screenshot the site has, so a desktop screenshot is never cut at
 * the sides, where text starts: a 16:9 one fits exactly and a 16:10 one keeps its full
 * width and loses only a strip at the bottom (object-top). With a 16:10 frame, the 16:9
 * captures of the Appolo workshop lost 5% on each side and the first letters of their
 * titles.
 */
const mediaFrameRatio = 16 / 9;

/**
 * A screenshot wider than the frame would fill it with object-cover and be drawn wider
 * than the card: every width in `sizes` would grow by that factor, so the browser
 * still picked a sharp file. With today's screenshots (16:9 and 16:10) the factor is 1.
 */
function scaleSizes(sizes: string, factor: number): string {
  if (factor <= 1.01) return sizes;
  return sizes
    .split(",")
    .map((entry) => {
      const [, condition = "", length = ""] =
        /^\s*(\([^)]*\)\s*)?(.+)$/.exec(entry) ?? [];
      return `${condition}calc(${length.trim()} * ${factor.toFixed(3)})`;
    })
    .join(", ");
}

/**
 * The media area of a project card:
 * - the first screenshot, when the project has one (desktop screenshots fill the frame
 *   from the top, at full width; phone screenshots are shown whole);
 * - otherwise the tools of its automation flow, when it has one;
 * - otherwise an icon (an automation for Kobler work, a web application for the rest).
 * Never a made-up screenshot. The icon shrinks on narrow cards and, when a flow
 * follows, is dropped below 20rem so the flow always fits (container query on the frame).
 * It fills the card's media frame (absolutely positioned), so a tall phone screenshot
 * never stretches the card. The frame and the zoom on hover come from ProjectCard.
 */
export function ProjectVisual({
  project,
  locale,
  sizes,
  preload = false,
}: ProjectVisualProps) {
  const [firstImage] = project.images;

  if (firstImage) {
    const isPhoneScreenshot = firstImage.viewport === "mobile";
    return (
      <Image
        src={firstImage.src}
        alt={localize(firstImage.alt, locale)}
        width={firstImage.width}
        height={firstImage.height}
        preload={preload}
        fetchPriority={preload ? "high" : undefined}
        sizes={
          isPhoneScreenshot
            ? sizes
            : scaleSizes(
                sizes,
                firstImage.width / firstImage.height / mediaFrameRatio,
              )
        }
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
      <span
        className={joinClassNames(
          "gradient-ring relative flex size-14 shrink-0 items-center justify-center rounded-section border shadow-(--glow-accent-soft) [--ring-fill:var(--color-page)] [--ring-opacity:1] @min-[22rem]:size-20",
          project.flowDiagram?.length ? "@max-[20rem]:hidden" : undefined,
        )}
      >
        <VisualIcon className="size-7 text-accent @min-[22rem]:size-10" />
      </span>
      {project.flowDiagram?.length ? (
        <FlowPreview steps={project.flowDiagram} className="relative" />
      ) : (
        <span className="relative px-6 text-center font-display text-subtitle font-bold text-heading">
          {project.client}
        </span>
      )}
    </div>
  );
}
