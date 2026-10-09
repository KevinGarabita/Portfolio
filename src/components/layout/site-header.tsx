import Link from "next/link";

import { profile } from "@/content/profile";
import { getCurrentLocale, getDictionary } from "@/i18n/request-locale";

import { LanguageSwitcher } from "./language-switcher";

export async function SiteHeader() {
  const locale = await getCurrentLocale();
  const dictionary = await getDictionary();
  const navigation = dictionary.siteNavigation;

  return (
    <header>
      <Link href={`/${locale}`}>{profile.displayName}</Link>
      <nav aria-label={navigation.label}>
        <ul>
          <li>
            <Link href={`/${locale}#projects`}>{navigation.projects}</Link>
          </li>
          <li>
            <Link href={`/${locale}#experience`}>{navigation.experience}</Link>
          </li>
          <li>
            <Link href={`/${locale}#about`}>{navigation.about}</Link>
          </li>
          <li>
            <Link href={`/${locale}#contact`}>{navigation.contact}</Link>
          </li>
        </ul>
      </nav>
      <LanguageSwitcher
        currentLocale={locale}
        label={dictionary.languageSwitcher.label}
        otherLanguageName={dictionary.languageSwitcher.otherLanguage}
      />
    </header>
  );
}
