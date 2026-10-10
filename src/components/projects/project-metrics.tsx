import type { Locale } from "@/i18n/locales";
import { localize } from "@/i18n/localize";
import type { ProjectMetric } from "@/types/content";

interface ProjectMetricsProps {
  metrics: ProjectMetric[];
  locale: Locale;
  /** "Antes" and "Después", in the page's language. */
  labels: { before: string; after: string };
}

/**
 * Before/after figures of a case study, one panel each (two per row from sm up, like
 * the key points). Each panel is a definition list, so screen readers hear which value
 * is before and which after; the two values sit side by side once the panel is wide
 * enough (container query) and stack otherwise.
 */
export function ProjectMetrics({
  metrics,
  locale,
  labels,
}: ProjectMetricsProps) {
  return (
    <ul className="grid gap-4 sm:grid-cols-2 lg:gap-6">
      {metrics.map((metric) => (
        <li
          key={metric.label.es}
          className="@container rounded-section border border-hairline bg-raised p-6 sm:last:odd:col-span-2"
        >
          <p className="font-bold text-heading">
            {localize(metric.label, locale)}
          </p>
          <dl className="mt-4 grid gap-4 @xs:grid-cols-2">
            <div>
              <dt className="text-small text-muted">{labels.before}</dt>
              <dd className="mt-1">{localize(metric.before, locale)}</dd>
            </div>
            <div className="border-t border-hairline pt-4 @xs:border-t-0 @xs:border-l @xs:pt-0 @xs:pl-4">
              <dt className="text-small font-bold text-accent">
                {labels.after}
              </dt>
              <dd className="mt-1 font-bold text-heading">
                {localize(metric.after, locale)}
              </dd>
            </div>
          </dl>
        </li>
      ))}
    </ul>
  );
}
