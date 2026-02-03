"use client";

import { useState } from "react";
import { TagChip } from "./TagChip";
import { ChevronDown } from "lucide-react";

interface TagWithType {
  tag: string;
  skillType: string;
}

interface TagsByColor {
  [key: string]: TagWithType[];
}

interface ExpandableTagsProps {
  tags?: string[];
  expandable?: boolean;
  maxInitialTags?: number;
  id?: string;
}

export function ExpandableTags({ tags = [], expandable = true, maxInitialTags = 5, id }: ExpandableTagsProps) {
  const [expanded, setExpanded] = useState(false);

  const tagsByColor: TagsByColor = { ml: [], backend: [], language: [], frontend: [], ops: [], other: [] };
  
  tags.forEach((tag) => {
    let skillType = "other";
    const tagLower = tag.toLowerCase();
    if (["ml", "machine learning", "ai", "pytorch", "jax", "rag", "information retrieval", "bm25", "faiss", "evaluation", "ml engineering", "mlops", "deep learning", "data generation", "speech", "cnn", "clustering", "multimodal", "health tech", "alzheimer's", "llm", "transformers", "clinical data", "fine-tuning", "structured outputs", "explainability", "medical ai", "xai", "trustworthy ml", "uncertainty estimation"].includes(tagLower)) skillType = "ml";
    else if (["backend", "langgraph", "server", "api", "fastapi", "data pipelines", "sql", "postgresql", "redis", "oracle"].includes(tagLower)) skillType = "backend";
    else if (["language", "typescript", "python"].includes(tagLower)) skillType = "language";
    else if (["frontend", "react", "next.js", "ui", "ux", "tailwind", "mdx"].includes(tagLower)) skillType = "frontend";
    else if (["ops", "docker", "devops", "infra", "infrastructure", "cuda", "automation", "data processing", "production engineering"].includes(tagLower)) skillType = "ops";
    else skillType = "other";
    const bucket = tagsByColor[skillType as keyof typeof tagsByColor] ?? tagsByColor.other;
    bucket.push({ tag, skillType });
  });

  // Order tags by importance: technical skills first, then soft skills/other
  const colorOrder = ["ml", "backend", "language", "frontend", "ops", "other"];
  const allColorGroups = colorOrder
    .map(color => [color, tagsByColor[color as keyof typeof tagsByColor]] as [string, TagWithType[]])
    .filter(([, groupTags]) => groupTags.length > 0);
  const allTags = allColorGroups.flatMap(([, groupTags]) => groupTags);
  const totalTags = allTags.length;
  const shouldShowExpand = expandable && totalTags > maxInitialTags;
  
  let displayTags: TagWithType[] = [];
  let remainingCount = 0;
  
  if (!expandable) {
    // Show all tags when not expandable
    displayTags = allTags;
  } else if (shouldShowExpand && !expanded) {
    let count = 0;
    for (const [, groupTags] of allColorGroups) {
      for (const tagWithType of groupTags) {
        if (count < maxInitialTags) {
          displayTags.push(tagWithType);
          count++;
        } else {
          remainingCount++;
        }
      }
    }
  } else if (shouldShowExpand && expanded) {
    displayTags = allTags.slice(0, maxInitialTags);
    remainingCount = allTags.length - maxInitialTags;
  } else {
    displayTags = allTags;
  }

  return (
    <div className="flex flex-wrap gap-2">
      {displayTags.map(({ tag, skillType }) => (
        <TagChip key={tag} variant="skill" skillType={skillType}>
          {tag}
        </TagChip>
      ))}
      {shouldShowExpand && !expanded && remainingCount > 0 && (
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setExpanded(true);
          }}
          className="inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-medium text-text-2 hover:text-text transition-colors cursor-pointer"
        >
          <span>+{remainingCount}</span>
          <ChevronDown size={12} />
        </button>
      )}
      {expanded && shouldShowExpand && remainingCount > 0 && (
        <>
          {allTags.slice(maxInitialTags).map(({ tag, skillType }) => (
            <TagChip key={tag} variant="skill" skillType={skillType}>
              {tag}
            </TagChip>
          ))}
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setExpanded(false);
            }}
            className="inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-medium text-text-2 hover:text-text transition-colors cursor-pointer"
          >
            <span>Show less</span>
            <ChevronDown size={12} className="rotate-180" />
          </button>
        </>
      )}
    </div>
  );
}
