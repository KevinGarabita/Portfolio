import type { Metadata } from "next";

import { AboutSection } from "@/components/sections/about-section";
import { ContactSection } from "@/components/sections/contact-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { HeroSection } from "@/components/sections/hero-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { getCurrentLocale } from "@/i18n/request-locale";
import { buildLanguageAlternates } from "@/lib/metadata";

export async function generateMetadata(): Promise<Metadata> {
  return {
    alternates: buildLanguageAlternates("/", await getCurrentLocale()),
  };
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ProjectsSection />
      <ExperienceSection />
      <AboutSection />
      <ContactSection />
    </>
  );
}
