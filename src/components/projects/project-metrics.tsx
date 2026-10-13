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
 * Before/after figures of a case study, each under a hairline and without a panel (two
 * per row from sm up, like the key points). Each one is a definition list, so screen
 * readers hear which value is before and which after; the two values sit side by side
 * once there is room (container query) and stack otherwise. The "after" value is bold.
 */
export function ProjectMetrics({
  metrics,
  locale,
  labels,
}: ProjectMetricsProps) {
  return (
    <ul className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
      {metrics.map((metric) => (
        <li
          key={metric.label.es}
          className="@container border-t border-hairline pt-4"
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
              <dt className="text-small text-muted">{labels.after}</dt>
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
