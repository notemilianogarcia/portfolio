import { SectionBand } from "@/components/SectionBand";
import { PublicationList } from "@/components/PublicationList";
import { getAllPublications } from "@/lib/content";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Publications",
  description: "View Emiliano Garcia Ochoa's research publications and academic work in machine learning, evaluation, and applied AI.",
  alternates: {
    canonical: "/publications",
  },
};

export default async function PublicationsPage() {
  const publications = await getAllPublications();
  return (
    <main>
      <SectionBand theme="light" variant="panel" title="Publications">
        <PublicationList publications={publications} />
      </SectionBand>
    </main>
  );
}
