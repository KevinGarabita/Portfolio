import { SparklesIcon } from "@/components/ui/icons";
import type { Dictionary } from "@/i18n/dictionaries/spanish";
import type { BuildMethod } from "@/types/content";

interface ProjectBuildBadgeProps {
  buildMethod: BuildMethod;
  dictionary: Dictionary;
}

/**
 * How the code was written ("Vibe coded" or "Hecho a mano"), as a small pill with the
 * gradient ring. The tooltip and screen readers get the one-line explanation.
 */
export function ProjectBuildBadge({
  buildMethod,
  dictionary,
}: ProjectBuildBadgeProps) {
  const texts = dictionary.projects.buildMethod[buildMethod];

  return (
    <span
      title={texts.description}
      className="gradient-ring inline-flex shrink-0 items-center gap-1.5 rounded-tag border px-2.5 py-0.5 text-small leading-snug font-bold whitespace-nowrap text-heading [--ring-fill:var(--color-page)] [--ring-opacity:1]"
    >
      {buildMethod === "ai-assisted" ? (
        <SparklesIcon className="size-4 text-accent" />
      ) : null}
      {texts.label}
      <span className="sr-only">: {texts.description}</span>
    </span>
  );
}
