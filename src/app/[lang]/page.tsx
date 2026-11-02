import type { Metadata } from "next";

import { AboutSection } from "@/components/sections/about-section";
import { ContactSection } from "@/components/sections/contact-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { HeroSection } from "@/components/sections/hero-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { ScrollBuildProvider } from "@/components/scroll-build/scroll-build-provider";
import { HomeStructuredData } from "@/components/seo/structured-data";
import { getCurrentLocale, getDictionary } from "@/i18n/request-locale";
import { buildHomeMetadata } from "@/lib/metadata";

export async function generateMetadata(): Promise<Metadata> {
  return buildHomeMetadata(await getCurrentLocale());
}

/**
 * The sections are server HTML; ScrollBuildProvider only adds the scroll build on top
 * (components/scroll-build): the cursors, the intro and the engine that reads the
 * sections' data-build attributes.
 */
export default async function HomePage() {
  const dictionary = await getDictionary();

  return (
    <>
      <HomeStructuredData />
      <ScrollBuildProvider labels={dictionary.scrollBuild.actions}>
        <HeroSection />
        <ProjectsSection />
        <ExperienceSection />
        <AboutSection />
        <ContactSection />
      </ScrollBuildProvider>
    </>
  );
}
