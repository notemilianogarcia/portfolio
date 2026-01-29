import { SectionBand } from "@/components/SectionBand";
import { getProjectBySlug, getAllProjects } from "@/lib/content";
import { MDXRemote } from "next-mdx-remote/rsc";
import { components as MDXComponents } from "@/components/mdx/MDXComponents";
import remarkGfm from "remark-gfm";
import { ExpandableTags } from "@/components/ExpandableTags";

export async function generateStaticParams() {
  const projects = await getAllProjects();
  return projects.map((project: any) => ({
    slug: project.slug,
  }));
}

export default async function ProjectCasePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);
  if (!project) return <div>Not found</div>;
  return (
    <main>
      <SectionBand theme="dark" variant="panel">
        <div className="prose max-w-3xl mx-auto">
          {project.metadata.tags && project.metadata.tags.length > 0 && (
            <div className="mb-8 pb-8 border-b border-border not-prose">
              <ExpandableTags tags={project.metadata.tags} expandable={false} />
            </div>
          )}
          <MDXRemote source={project.content} components={MDXComponents} options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }} />
        </div>
      </SectionBand>
    </main>
  );
}
