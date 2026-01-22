import { SectionBand } from "@/components/SectionBand";
import { getPublicationBySlug } from "@/lib/content";
import { MDXRemote } from "next-mdx-remote/rsc";
import { components as MDXComponents } from "@/components/mdx/MDXComponents";

export default async function PublicationDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const publication = await getPublicationBySlug(slug);
  if (!publication) return <div>Not found</div>;
  return (
    <main>
      <SectionBand theme="light" variant="panel">
        <div className="prose max-w-2xl mx-auto">
          <MDXRemote source={publication.content} components={MDXComponents} />
        </div>
      </SectionBand>
    </main>
  );
}
