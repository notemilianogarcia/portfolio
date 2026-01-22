import { SectionBand } from "@/components/SectionBand";
import { getPostBySlug } from "@/lib/content";
import { MDXRemote } from "next-mdx-remote/rsc";
import * as MDXComponents from "@/components/mdx/MDXComponents";

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug);
  if (!post) return <div>Not found</div>;
  return (
    <main>
      <SectionBand theme="light" variant="panel" title={post.metadata.title}>
        <div className="prose max-w-2xl mx-auto">
          <MDXRemote source={post.content} components={MDXComponents} />
        </div>
      </SectionBand>
    </main>
  );
}
