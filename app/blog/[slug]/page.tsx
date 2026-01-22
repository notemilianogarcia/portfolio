import { SectionBand } from "@/components/SectionBand";
import { getPostBySlug } from "@/lib/content";
import { MDXRemote } from "next-mdx-remote/rsc";
import { components as MDXComponents } from "@/components/mdx/MDXComponents";
import remarkGfm from "remark-gfm";

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return <div>Not found</div>;
  return (
    <main>
      <SectionBand theme="light" variant="panel">
        <div className="prose max-w-2xl mx-auto">
          <MDXRemote source={post.content} components={MDXComponents} options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }} />
        </div>
      </SectionBand>
    </main>
  );
}
