import { profile } from "@/content/profile";
import { localize } from "@/i18n/localize";
import { getCurrentLocale } from "@/i18n/request-locale";

/** Placeholder structure; the hero gets its real design in phase 3. */
export async function HeroSection() {
  const locale = await getCurrentLocale();

  return (
    <section aria-labelledby="hero-title">
      <h1 id="hero-title">{profile.displayName}</h1>
      <p>{localize(profile.role, locale)}</p>
      <p>{localize(profile.headline, locale)}</p>
    </section>
  );
}
