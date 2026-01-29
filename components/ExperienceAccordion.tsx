"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown, Calendar, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";
import { ExpandableTags } from "./ExpandableTags";

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

function getLogoForCompany(company: string): string | undefined {
  const map: Record<string, string> = {
    "Wilfrid Laurier University": "/logos/wilfrid-laurier.png",
    "Autodesk Research": "/logos/autodesk.png",
    "Thompson Rivers University": "/logos/tru.png",
    "Thompson Rivers University (Enterprise Systems)": "/logos/tru.png",
    "Lululemon": "/logos/lululemon.png",
  };
  return map[company];
}

export function ExperienceAccordion({ items, className }: ExperienceAccordionProps) {
  return (
    <Accordion.Root
      type="single"
      collapsible
      className={cn("flex flex-col gap-4", className)}
    >
      {items.map((item) => {
        const logo = getLogoForCompany(item.company);
        return (
          <Accordion.Item
            key={item.id}
            value={item.id}
            className="group overflow-hidden rounded-2xl border border-border bg-surface-2 transition-all hover:border-accent/30"
          >
            <Accordion.Header className="flex">
              <Accordion.Trigger className="flex flex-1 items-center justify-between p-6 text-left outline-none cursor-pointer">
                <div className="flex items-center gap-4">
                  <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-xl bg-surface border border-border flex items-center justify-center">
                    {logo ? (
                      <img
                        src={logo}
                        alt={`${item.company} logo`}
                        width={48}
                        height={48}
                        loading="lazy"
                        className="object-cover rounded-xl"
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
              <ExpandableTags id={item.id} tags={item.tags} expandable={false} />
            </div>
          </Accordion.Content>
        </Accordion.Item>
        );
      })}
    </Accordion.Root>
  );
}
