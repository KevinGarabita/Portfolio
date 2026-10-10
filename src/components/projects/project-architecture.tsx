import Image from "next/image";

import type { Locale } from "@/i18n/locales";
import { localize } from "@/i18n/localize";
import type { ProjectArchitecture as Architecture } from "@/types/content";

import { FlowDiagram } from "./flow-diagram";

interface ProjectArchitectureProps {
  architecture: Architecture;
  locale: Locale;
  /** "Herramienta" / "Tool": read before each technology in the diagram. */
  toolLabel: string;
}

/**
 * How a project is built, for its case study: either an exported diagram (an image at
 * the full content width, with its alt text) or its main parts drawn like the
 * automation flow (numbered steps, each with its technology).
 */
export function ProjectArchitecture({
  architecture,
  locale,
  toolLabel,
}: ProjectArchitectureProps) {
  if (architecture.kind === "diagram") {
    return (
      <FlowDiagram
        steps={architecture.parts}
        locale={locale}
        toolLabel={toolLabel}
      />
    );
  }

  const { image } = architecture;

  return (
    <Image
      src={image.src}
      alt={localize(image.alt, locale)}
      width={image.width}
      height={image.height}
      sizes="(min-width: 1280px) 1200px, 100vw"
      className="h-auto w-full rounded-media border border-hairline bg-raised-strong"
    />
  );
}
