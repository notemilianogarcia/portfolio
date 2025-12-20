import Link from "next/link";
import { TagChip } from "./TagChip";
import { ArrowUpRight } from "lucide-react";

export interface Project {
  slug: string;
  title: string;
  problem: string;
  approach: string;
  result: string;
  tags: string[];
  featured?: boolean;
}

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-surface-2 p-6 transition-all hover:border-accent/50 hover:shadow-lg"
    >
      <div className="mb-4 flex items-start justify-between">
        <h3 className="font-heading text-xl font-bold text-text group-hover:text-accent transition-colors">
          {project.title}
        </h3>
        <ArrowUpRight className="text-text-2 group-hover:text-accent transition-colors" size={20} />
      </div>
      
      <div className="mb-6 space-y-3">
        <div>
          <span className="text-[10px] font-bold uppercase tracking-wider text-accent/70">Problem</span>
          <p className="text-sm text-text-2 line-clamp-1">{project.problem}</p>
        </div>
        <div>
          <span className="text-[10px] font-bold uppercase tracking-wider text-accent/70">Approach</span>
          <p className="text-sm text-text-2 line-clamp-1">{project.approach}</p>
        </div>
        <div>
          <span className="text-[10px] font-bold uppercase tracking-wider text-accent/70">Result</span>
          <p className="text-sm text-text-2 line-clamp-1">{project.result}</p>
        </div>
      </div>

      <div className="mt-auto flex flex-wrap gap-2">
        {project.tags.slice(0, 3).map((tag) => {
          // Map tag to skillType for color
          let skillType = "other";
          const tagLower = tag.toLowerCase();
          if (["ml", "machine learning", "ai", "pytorch", "jax"].includes(tagLower)) skillType = "ml";
          else if (["backend", "langgraph", "server", "api"].includes(tagLower)) skillType = "backend";
          else if (["language", "typescript", "python"].includes(tagLower)) skillType = "language";
          else if (["database", "postgresql", "redis", "sql"].includes(tagLower)) skillType = "database";
          else if (["frontend", "react", "next.js", "ui", "ux"].includes(tagLower)) skillType = "frontend";
          else if (["ops", "docker", "devops", "infra", "infrastructure", "cuda"].includes(tagLower)) skillType = "ops";
          else skillType = tagLower;
          return (
            <TagChip key={tag} variant="skill" skillType={skillType}>
              {tag}
            </TagChip>
          );
        })}
        {project.tags.length > 3 && (
          <span className="text-[10px] text-text-2 self-center">+{project.tags.length - 3}</span>
        )}
      </div>
    </Link>
  );
}
