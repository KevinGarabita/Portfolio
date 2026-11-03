import type { Metadata } from "next";

import { AboutSection } from "@/components/sections/about-section";
import { ContactSection } from "@/components/sections/contact-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { HeroSection } from "@/components/sections/hero-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { HomeStructuredData } from "@/components/seo/structured-data";
import { getCurrentLocale } from "@/i18n/request-locale";
import { buildHomeMetadata } from "@/lib/metadata";

export async function generateMetadata(): Promise<Metadata> {
  return buildHomeMetadata(await getCurrentLocale());
}

/**
 * Every section is server HTML: the page needs no JavaScript of its own. Order: the
 * hero (recruiters first, with a way in for clients), the featured projects, experience
 * and education, about and skills, and contact.
 */
export default function HomePage() {
  return (
    <>
      <HomeStructuredData />
      <HeroSection />
      <ProjectsSection />
      <ExperienceSection />
      <AboutSection />
      <ContactSection />
    </>
  );
}
