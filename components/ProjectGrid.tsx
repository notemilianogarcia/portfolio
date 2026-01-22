import { ProjectCard, Project } from "@/components/ProjectCard";

interface ProjectGridProps {
  projects: Project[];
  className?: string;
}

export function ProjectGrid({ projects, className }: ProjectGridProps) {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 ${className ?? ""}`}>
      {projects.map((project) => (
        <ProjectCard key={project.slug} project={project} />
      ))}
    </div>
  );
}
