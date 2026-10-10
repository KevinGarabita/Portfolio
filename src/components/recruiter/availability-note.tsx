import { Fragment } from "react";

import { availability } from "@/content/availability";
import type { Dictionary } from "@/i18n/dictionaries/spanish";
import { regionalLocaleTags, type Locale } from "@/i18n/locales";
import { joinClassNames } from "@/lib/class-names";
import { formatYearMonth } from "@/lib/format-date";

interface AvailabilityNoteProps {
  locale: Locale;
  dictionary: Dictionary;
  className?: string;
}

/**
 * Kevin's availability in one line, from src/content/availability.ts: the status, the
 * work arrangements he accepts and from when ("Abierto a ofertas de empleo · Remoto o
 * híbrido · Disponible desde noviembre de 2026"). Renders nothing while the status is
 * empty; the arrangements and the date are optional. The orange dot is decorative and
 * the separators are hidden from screen readers, which hear commas instead.
 */
export function AvailabilityNote({
  locale,
  dictionary,
  className,
}: AvailabilityNoteProps) {
  const { status, modalities, availableFrom } = availability;
  if (!status) return null;

  const labels = dictionary.recruiter.availability;
  const languageTag = regionalLocaleTags[locale];
  const details: string[] = [];

  if (modalities.length > 0) {
    const arrangements = new Intl.ListFormat(languageTag, {
      type: "disjunction",
    }).format(modalities.map((modality) => labels.modality[modality]));
    details.push(
      arrangements.charAt(0).toLocaleUpperCase(languageTag) +
        arrangements.slice(1),
    );
  }
  if (availableFrom) {
    details.push(labels.availableFrom(formatYearMonth(availableFrom, locale)));
  }

  return (
    <p
      className={joinClassNames(
        "flex items-start gap-2.5 text-small text-body",
        className,
      )}
    >
      <span
        aria-hidden="true"
        className="mt-[0.45em] size-2 shrink-0 rounded-full bg-accent shadow-[0_0_0.75rem_var(--color-accent)]"
      />
      <span>
        <strong className="font-bold text-heading">
          {labels.status[status]}
        </strong>
        {details.map((detail) => (
          <Fragment key={detail}>
            <span aria-hidden="true"> · </span>
            <span className="sr-only">, </span>
            {detail}
          </Fragment>
        ))}
      </span>
    </p>
  );
}
