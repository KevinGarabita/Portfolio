import { ProjectCard } from "@/components/projects/project-card";
import { getCurrentLocale, getDictionary } from "@/i18n/request-locale";
import { getAllProjects } from "@/lib/projects";

export async function ProjectsSection() {
  const locale = await getCurrentLocale();
  const dictionary = await getDictionary();

  return (
    <section id="projects" aria-labelledby="projects-title">
      <h2 id="projects-title">{dictionary.projects.sectionTitle}</h2>
      <ul>
        {getAllProjects().map((project) => (
          <li key={project.slug}>
            <ProjectCard
              project={project}
              locale={locale}
              dictionary={dictionary}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
