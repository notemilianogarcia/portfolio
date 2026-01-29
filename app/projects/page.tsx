import { SectionBand } from "@/components/SectionBand";
import { ProjectGrid } from "@/components/ProjectGrid";
import { getAllProjects } from "@/lib/content";

export default async function ProjectsPage() {
  const projects = await getAllProjects();
  
  // Custom order for projects
  const projectOrder = ["rag-benchmark-service", "pocket-guide", "portfolio-website"];
  const orderedProjects = projectOrder
    .map(slug => projects.find((p: any) => p.slug === slug))
    .filter(Boolean)
    .concat(projects.filter((p: any) => !projectOrder.includes(p.slug)));
  
  return (
    <main>
      <SectionBand theme="dark" variant="panel" title="Projects">
        <ProjectGrid projects={orderedProjects} />
      </SectionBand>
    </main>
  );
}
