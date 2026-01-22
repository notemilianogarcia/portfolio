import { SectionBand } from "@/components/SectionBand";
import { getPublicationBySlug } from "@/lib/content";
import { MDXRemote } from "next-mdx-remote/rsc";
import * as MDXComponents from "@/components/mdx/MDXComponents";

export default async function PublicationDetailPage({ params }: { params: { slug: string } }) {
  const publication = await getPublicationBySlug(params.slug);
  if (!publication) return <div>Not found</div>;
  return (
    <main>
      <SectionBand theme="light" variant="panel" title={publication.metadata.title}>
        <div className="prose max-w-2xl mx-auto">
          <MDXRemote source={publication.content} components={MDXComponents} />
        </div>
      </SectionBand>
    </main>
  );
}
