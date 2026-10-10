import { SparklesIcon } from "@/components/ui/icons";
import type { Dictionary } from "@/i18n/dictionaries/spanish";
import type { BuildMethod } from "@/types/content";

import { BadgeTooltip } from "./badge-tooltip";

interface ProjectBuildBadgeProps {
  buildMethod: BuildMethod;
  dictionary: Dictionary;
}

/**
 * How the code was written ("Desarrollo asistido por IA" or "Hecho a mano"), as a small
 * pill with the gradient ring. Its one-line explanation of who owns what opens in a
 * tooltip on hover, keyboard focus or tap, and screen readers always get it
 * (BadgeTooltip). On project cards the badge sits above the stretched link.
 */
export function ProjectBuildBadge({
  buildMethod,
  dictionary,
}: ProjectBuildBadgeProps) {
  const texts = dictionary.projects.buildMethod[buildMethod];

  return (
    <BadgeTooltip
      label={texts.label}
      description={texts.description}
      icon={
        buildMethod === "ai-assisted" ? (
          <SparklesIcon className="size-4 text-accent" />
        ) : null
      }
    />
  );
}
