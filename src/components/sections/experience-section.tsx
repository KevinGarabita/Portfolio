import { education } from "@/content/education";
import { workExperience } from "@/content/experience";
import { localize } from "@/i18n/localize";
import { getCurrentLocale, getDictionary } from "@/i18n/request-locale";
import { formatDateRange, formatYearMonth } from "@/lib/format-date";

/** Work history followed by education. */
export async function ExperienceSection() {
  const locale = await getCurrentLocale();
  const dictionary = await getDictionary();

  return (
    <section id="experience" aria-labelledby="experience-title">
      <h2 id="experience-title">{dictionary.experience.sectionTitle}</h2>
      {workExperience.map((job) => (
        <article key={job.id}>
          <h3>
            {localize(job.role, locale)} · {job.organization}
          </h3>
          <p>
            {localize(job.location, locale)} ·{" "}
            {formatDateRange(job.period, locale, dictionary.experience.present)}
          </p>
          <ul>
            {job.highlights.map((highlight) => (
              <li key={highlight.es}>{localize(highlight, locale)}</li>
            ))}
          </ul>
        </article>
      ))}

      <h2>{dictionary.education.sectionTitle}</h2>
      {education.map((studies) => (
        <article key={studies.id}>
          <h3>
            {localize(studies.degree, locale)} · {studies.institution}
          </h3>
          <p>
            {localize(studies.location, locale)} ·{" "}
            {formatDateRange(
              studies.period,
              locale,
              dictionary.experience.present,
            )}
            {studies.note ? ` · ${localize(studies.note, locale)}` : null}
          </p>
          {studies.expectedGraduation ? (
            <p>
              {dictionary.education.expectedGraduation}:{" "}
              {formatYearMonth(studies.expectedGraduation, locale)}
            </p>
          ) : null}
        </article>
      ))}
    </section>
  );
}
