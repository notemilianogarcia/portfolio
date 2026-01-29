import { SectionBand } from "@/components/SectionBand";
import { ExperienceAccordion } from "@/components/ExperienceAccordion";
import experience from "@/data/experience.json";
import education from "@/data/education.json";
import awards from "@/data/awards.json";

export default function AboutPage() {
  return (
    <main>
      <SectionBand theme="dark" variant="panel" title="Experience">
        <ExperienceAccordion items={experience} />
      </SectionBand>
      <SectionBand theme="light" variant="panel" title="Education">
        <div className="flex flex-col gap-6">
          {education.map((edu: any, idx: number) => (
            <div key={idx} className="rounded-xl border border-border bg-surface-2 p-6">
              <h3 className="font-heading text-lg font-bold text-text mb-1">{edu.school}</h3>
              <p className="text-sm text-text-2 mb-1">{edu.degree} ({edu.field})</p>
              <p className="text-xs text-text-2">{edu.period}</p>
            </div>
          ))}
        </div>
      </SectionBand>
      <SectionBand theme="light" variant="panel" title="Honours & Certifications">
        <ul className="flex flex-col gap-3">
          {awards.map((award: any, idx: number) => (
            <li key={idx} className="rounded-xl border border-border bg-surface-2 px-4 py-2 text-sm text-text-2">
              <span className="font-bold text-accent mr-2">{award.year}</span>
              {award.title}
            </li>
          ))}
        </ul>
      </SectionBand>
    </main>
  );
}
