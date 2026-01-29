"use client";

import Link from "next/link";
import { TagChip } from "./TagChip";
import { ExpandableTags } from "./ExpandableTags";
import { ArrowUpRight } from "lucide-react";

export interface Project {
  slug: string;
  title: string;
  summary: string;
  tags?: string[];
  featured?: boolean;
}

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="relative flex flex-col overflow-hidden rounded-2xl border border-border bg-surface-2 p-6 transition-all hover:border-accent/50 hover:shadow-lg">
      <Link
        href={`/projects/${project.slug}`}
        className="group/link block"
      >
        <div className="mb-4 flex items-start justify-between">
          <h3 className="font-heading text-xl font-bold text-text transition-colors group-hover/link:text-accent">
            {project.title}
          </h3>
          <ArrowUpRight className="text-text-2 transition-colors group-hover/link:text-accent" size={20} />
        </div>
        <p className="text-sm text-text-2 leading-relaxed mb-6">{project.summary}</p>
      </Link>

      {(project.tags ?? []).length > 0 && (
        <div className="pt-4 mt-4 border-t border-border">
          <ExpandableTags id={project.slug} tags={project.tags} expandable={true} maxInitialTags={3} />
        </div>
      )}
    </div>
  );
}
