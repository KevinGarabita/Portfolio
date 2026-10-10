import { Tag } from "@/components/ui/tag";
import type { Dictionary } from "@/i18n/dictionaries/spanish";
import type { Locale } from "@/i18n/locales";
import { localize } from "@/i18n/localize";
import type { Project, ProjectStatus as Status } from "@/types/content";

interface ProjectStatusProps {
  status: Status;
  /** Note always under the tag, so cards in a row keep their titles aligned. */
  stacked?: boolean;
  statusNote?: Project["statusNote"];
  locale: Locale;
  dictionary: Dictionary;
}

/**
 * Status tag plus its note ("since July 2026"). Only "in production" gets the orange
 * fill; the tag text, not the colour, carries the meaning. A comma that is only read
 * joins them, so the text is "In production, since July 2026" and not two glued words;
 * notes start in lowercase for that reason.
 */
export function ProjectStatus({
  status,
  statusNote,
  locale,
  dictionary,
  stacked = false,
}: ProjectStatusProps) {
  return (
    <span
      className={
        stacked
          ? "inline-flex flex-col items-start gap-y-1"
          : "inline-flex flex-wrap items-center gap-x-2 gap-y-1"
      }
    >
      <Tag tone={status === "in-production" ? "accent" : "quiet"}>
        {dictionary.projects.status[status]}
      </Tag>
      {statusNote ? (
        <>
          <span className="sr-only">, </span>
          <span className="text-small text-muted">
            {localize(statusNote, locale)}
          </span>
        </>
      ) : null}
    </span>
  );
}
