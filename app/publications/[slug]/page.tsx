import { SectionBand } from "@/components/SectionBand";
import { getPublicationBySlug, getAllPublications } from "@/lib/content";
import { MDXRemote } from "next-mdx-remote/rsc";
import { components as MDXComponents } from "@/components/mdx/MDXComponents";
import { Metadata } from "next";

export async function generateStaticParams() {
  const publications = await getAllPublications();
  return publications.map((publication: any) => ({
    slug: publication.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const publication = await getPublicationBySlug(slug);
  if (!publication) return {};
  return {
    title: publication.metadata.title,
    description: publication.metadata.summary,
    alternates: {
      canonical: `/publications/${slug}`,
    },
    openGraph: {
      title: publication.metadata.title,
      description: publication.metadata.summary,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: publication.metadata.title,
      description: publication.metadata.summary,
    },
  };
}

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
