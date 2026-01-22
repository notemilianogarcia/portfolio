import { SectionBand } from "@/components/SectionBand";
import { getProjectBySlug } from "@/lib/content";
import { MDXRemote } from "next-mdx-remote/rsc";
import { components as MDXComponents } from "@/components/mdx/MDXComponents";
import remarkGfm from "remark-gfm";

export default async function ProjectCasePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);
  if (!project) return <div>Not found</div>;
  return (
    <main>
      <SectionBand theme="dark" variant="panel">
        <div className="prose max-w-3xl mx-auto">
          <MDXRemote source={project.content} components={MDXComponents} options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }} />
        </div>
      </SectionBand>
    </main>
  );
}
