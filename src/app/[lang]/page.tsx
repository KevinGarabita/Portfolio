import type { Metadata } from "next";

import { AboutSection } from "@/components/sections/about-section";
import { ContactSection } from "@/components/sections/contact-section";
import { EducationSection } from "@/components/sections/education-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { HeroSection } from "@/components/sections/hero-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { profile } from "@/content/profile";
import { homeDescription } from "@/content/site-metadata";
import { localize } from "@/i18n/localize";
import { getCurrentLocale } from "@/i18n/request-locale";
import { buildPageMetadata } from "@/lib/metadata";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getCurrentLocale();

  return buildPageMetadata({
    title: {
      absolute: `${profile.displayName} | ${localize(profile.role, locale)}`,
    },
    description: localize(homeDescription, locale),
    pathWithoutLocale: "/",
    locale,
    type: "website",
  });
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ProjectsSection />
      <ExperienceSection />
      <EducationSection />
      <AboutSection />
      <ContactSection />
    </>
  );
}
