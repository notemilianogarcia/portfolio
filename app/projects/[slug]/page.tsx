import { SectionBand } from "@/components/SectionBand";
import { getProjectBySlug } from "@/lib/content";
import { MDXRemote } from "next-mdx-remote/rsc";
import * as MDXComponents from "@/components/mdx/MDXComponents";

export default async function ProjectCasePage({ params }: { params: { slug: string } }) {
  const project = await getProjectBySlug(params.slug);
  if (!project) return <div>Not found</div>;
  return (
    <main>
      <SectionBand theme="dark" variant="panel" title={project.metadata.title}>
        <div className="prose max-w-3xl mx-auto">
          <MDXRemote source={project.content} components={MDXComponents} />
        </div>
      </SectionBand>
    </main>
  );
}
