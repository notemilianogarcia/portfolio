"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown, Calendar, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";
import { TagChip } from "./TagChip";
import Image from "next/image";

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  location: string;
  period: string;
  description: string[];
  tags: string[];
  logo?: string;
}

interface ExperienceAccordionProps {
  items: ExperienceItem[];
  className?: string;
}

export function ExperienceAccordion({ items, className }: ExperienceAccordionProps) {
  return (
    <Accordion.Root
      type="single"
      collapsible
      className={cn("flex flex-col gap-4", className)}
    >
      {items.map((item) => (
        <Accordion.Item
          key={item.id}
          value={item.id}
          className="group overflow-hidden rounded-2xl border border-border bg-surface-2 transition-all hover:border-accent/30"
        >
          <Accordion.Header className="flex">
            <Accordion.Trigger className="flex flex-1 items-center justify-between p-6 text-left outline-none">
              <div className="flex items-center gap-4">
                <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-xl bg-surface border border-border flex items-center justify-center">
                  {item.logo ? (
                    <Image
                      src={item.logo}
                      alt={item.company}
                      fill
                      className="object-contain p-2"
                    />
                  ) : (
                    <span className="text-xl font-bold text-accent">
                      {item.company.charAt(0)}
                    </span>
                  )}
                </div>
                <div>
                  <h3 className="font-heading text-lg font-bold text-text">
                    {item.role}
                  </h3>
                  <p className="text-sm font-medium text-text-2">
                    {item.company}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="hidden md:flex flex-col items-end text-right">
                  <div className="flex items-center gap-1.5 text-xs text-text-2">
                    <Calendar size={12} />
                    {item.period}
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-text-2">
                    <MapPin size={12} />
                    {item.location}
                  </div>
                </div>
                <ChevronDown
                  className="text-text-2 transition-transform duration-300 group-data-[state=open]:rotate-180"
                  size={20}
                />
              </div>
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
            <div className="px-6 pb-6 pt-0">
              <div className="mb-6 h-px w-full bg-border/50" />
              <ul className="mb-6 space-y-2">
                {item.description.map((bullet, idx) => (
                  <li key={idx} className="flex gap-3 text-sm text-text-2 leading-relaxed">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    {bullet}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag) => {
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
              </div>
            </div>
          </Accordion.Content>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
}
