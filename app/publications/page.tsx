import { SectionBand } from "@/components/SectionBand";
import { PublicationList } from "@/components/PublicationList";
import { getAllPublications } from "@/lib/content";

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
