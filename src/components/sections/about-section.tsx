import { Tag } from "@/components/ui/tag";
import { PageSection } from "@/components/ui/page-section";
import { profile } from "@/content/profile";
import { skillGroups } from "@/content/skills";
import { localize } from "@/i18n/localize";
import { getCurrentLocale, getDictionary } from "@/i18n/request-locale";
import { homeSectionIds } from "@/lib/home-sections";

/**
 * "About" text beside the skills (from lg up). Skills keep the CV's groups; each group
 * is a list of chips.
 */
export async function AboutSection() {
  const locale = await getCurrentLocale();
  const dictionary = await getDictionary();

  return (
    <PageSection
      id={homeSectionIds.about}
      title={dictionary.about.sectionTitle}
    >
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
        <div className="flex max-w-prose flex-col gap-4 text-subtitle lg:col-span-6">
          {profile.about.map((paragraph) => (
            <p key={paragraph.es}>{localize(paragraph, locale)}</p>
          ))}
        </div>

        <div className="lg:col-span-6 lg:pl-6">
          <h3 className="font-display text-subtitle font-bold">
            {dictionary.skills.sectionTitle}
          </h3>
          <dl className="mt-4 flex flex-col">
            {skillGroups.map((group) => (
              <div
                key={group.id}
                className="border-t border-hairline py-4 first:border-t-0 first:pt-0"
              >
                <dt className="text-small font-bold text-heading">
                  {localize(group.title, locale)}
                </dt>
                <dd className="mt-2">
                  <ul className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <li key={item.es}>
                        <Tag>{localize(item, locale)}</Tag>
                      </li>
                    ))}
                  </ul>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </PageSection>
  );
}
