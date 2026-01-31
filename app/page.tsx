
import { SectionBand } from "@/components/SectionBand";
import { ExperienceAccordion } from "@/components/ExperienceAccordion";
import { ProjectGrid } from "@/components/ProjectGrid";
import { PublicationCard } from "@/components/PublicationCard";
import { TagChip } from "@/components/TagChip";
import { EmailContact } from "@/components/EmailContact";
import { getAllProjects, getAllPublications } from "@/lib/content";
import skills from "@/data/skills.json";
import experience from "@/data/experience.json";

export default async function HomePage() {
  const projects = await getAllProjects();
  const publications = await getAllPublications();
  const featuredPub = publications.find((p: any) => p.featured);

  return (
    <main>
      {/* Hero Band */}
      <SectionBand theme="dark" variant="full">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6 py-6 md:py-12">
          <div className="flex flex-col items-center md:items-start justify-center gap-4 md:gap-6 min-w-0 text-center md:text-left">
            <h1 className="font-heading text-3xl md:text-6xl font-bold text-[var(--color-text)] mb-2">
              Emiliano Garcia
            </h1>
            <p className="text-base md:text-2xl text-text-2 max-w-xl md:max-w-2xl">
              Master's of Applied Computing candidate and Software Engineering graduate, Engineer-In-Training, building AI-driven systems for research and industry. Experienced in ML, data pipelines, and applied deep learning.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mt-4 md:mt-6">
              <a href="/projects" className="min-h-11 rounded-xl bg-accent px-6 py-3 text-sm font-bold text-bg transition-transform hover:scale-105">
                View Projects
              </a>
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="min-h-11 rounded-xl border-2 border-accent px-6 py-3 text-sm font-bold text-accent bg-bg transition-transform hover:scale-105">
                Download Resume
              </a>
            </div>
          </div>
          <div className="flex items-center justify-center shrink-0 max-w-[420px] w-full">
            <img
              src="/illustration-home.svg"
              alt="Homepage illustration"
              className="illustration-home h-auto max-h-[35vh] md:max-h-[70vh] w-3/4 md:w-full rounded-2xl translate-y-12 md:translate-y-20"
              style={{ objectFit: 'contain', display: 'block' }}
            />
          </div>
        </div>
      </SectionBand>

      {/* Skills Band */}
      <SectionBand theme="dark" variant="panel" title="Skills">
        <div className="flex flex-wrap gap-3 justify-center">
          {skills.map((skill: any) => {
            // Map categories to IDE-like accent colors
            let skillType = "other";
            if (skill.category) {
              const cat = skill.category.toLowerCase();
              if (["ml", "machine learning", "ai"].includes(cat)) skillType = "ml";
              else if (["languages", "language"].includes(cat)) skillType = "language";
              else if (["database", "databases"].includes(cat)) skillType = "database";
              else if (["infra", "infrastructure", "ops", "devops"].includes(cat)) skillType = "infra";
              else if (["frontend", "ui", "ux"].includes(cat)) skillType = "frontend";
              else if (["backend", "server"].includes(cat)) skillType = "backend";
              else skillType = cat;
            }
            return (
              <TagChip
                key={skill.name}
                variant="skill"
                skillType={skillType}
              >
                {skill.name}
              </TagChip>
            );
          })}
        </div>
      </SectionBand>

      {/* Featured Experience Band */}
      <SectionBand theme="dark" variant="panel" title="Featured Experience">
        <ExperienceAccordion items={experience.slice(0, 2)} />
        <div className="mt-6 text-right">
          <a href="/about" className="text-sm text-accent underline">See all on About</a>
        </div>
      </SectionBand>

      {/* Selected Projects Band */}
      <SectionBand theme="dark" variant="panel" title="Selected Projects">
        <ProjectGrid projects={projects.slice(0, 2)} />
        <div className="mt-6 text-right">
          <a href="/projects" className="text-sm text-accent underline">See all on Projects</a>
        </div>
      </SectionBand>

      {/* Featured Publication Band (light) */}
      {featuredPub && (
        <SectionBand theme="light" variant="panel" title="Featured Publication">
          <PublicationCard publication={featuredPub} showAbstract />
          <div className="mt-4 text-right">
            <a href={`/publications/${featuredPub.slug}`} className="text-sm text-accent underline">Read full</a>
          </div>
        </SectionBand>
      )}

      {/* Contact Band */}
      <SectionBand theme="dark" variant="full" title="Contact" className="text-center">
        <div className="flex flex-col items-center gap-4">
          <EmailContact email="emiliano.gar.och@gmail.com" />
          <div className="flex gap-6">
            <a href="https://github.com/notemilianogarcia/notemilianogarcia" target="_blank" rel="noopener noreferrer" className="text-text-2 hover:text-accent">GitHub</a>
            <a href="https://www.linkedin.com/in/emiliano-garcia-ochoa/" target="_blank" rel="noopener noreferrer" className="text-text-2 hover:text-accent">LinkedIn</a>
          </div>
        </div>
      </SectionBand>
    </main>
  );
}
