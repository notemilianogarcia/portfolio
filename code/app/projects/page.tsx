import { SectionBand } from "@/components/SectionBand";
import { ProjectGrid } from "@/components/ProjectGrid";
import { getAllProjects } from "@/lib/content";

export default async function ProjectsPage() {
  const projects = await getAllProjects();
  return (
    <main>
      <SectionBand theme="dark" variant="panel" title="Projects">
        <ProjectGrid projects={projects} />
      </SectionBand>
    </main>
  );
}
