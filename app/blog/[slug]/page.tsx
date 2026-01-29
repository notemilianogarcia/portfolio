import { SectionBand } from "@/components/SectionBand";
import { getPostBySlug, getAllPosts } from "@/lib/content";
import { MDXRemote } from "next-mdx-remote/rsc";
import { components as MDXComponents } from "@/components/mdx/MDXComponents";
import remarkGfm from "remark-gfm";
import { ExpandableTags } from "@/components/ExpandableTags";
import { Metadata } from "next";

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post: any) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.summary,
    alternates: {
      canonical: `/blog/${slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.summary,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.summary,
    },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return <div>Not found</div>;
  return (
    <main>
      <SectionBand theme="light" variant="panel">
        <div className="prose max-w-2xl mx-auto">
          {post.metadata.tags && post.metadata.tags.length > 0 && (
            <div className="mb-8 pb-8 border-b border-border not-prose">
              <ExpandableTags tags={post.metadata.tags} expandable={false} />
            </div>
          )}
          <MDXRemote source={post.content} components={MDXComponents} options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }} />
        </div>
      </SectionBand>
    </main>
  );
}
