import { SectionBand } from "@/components/SectionBand";
import { getAllPosts } from "@/lib/content";
import { ExpandableTags } from "@/components/ExpandableTags";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description: "Read Emiliano Garcia Ochoa's blog posts on machine learning, software engineering, evaluation, and technical insights.",
  alternates: {
    canonical: "/blog",
  },
};

export default async function BlogPage() {
  const posts = await getAllPosts();
  
  // Custom order for blog posts
  const postOrder = ["coming-right-up-explainable-medical", "rag-benchmark-service", "pocketguide-evaluation-first", "where-are-my-publications", "building-this-portfolio", "about-me"];
  const orderedPosts = postOrder
    .map(slug => posts.find((p: any) => p.slug === slug))
    .filter(Boolean)
    .concat(posts.filter((p: any) => !postOrder.includes(p.slug)));
  
  return (
    <main>
      <SectionBand theme="light" variant="panel" title="Blog">
        <div className="flex flex-col gap-8">
          {orderedPosts.map((post: any) => (
            <div
              key={post.slug}
              className="rounded-xl border border-border bg-surface-2 p-6 transition-all hover:border-accent/40 hover:shadow-lg"
            >
              <a
                href={`/blog/${post.slug}`}
                className="group/link block"
              >
                <h3 className="font-heading text-lg font-bold text-text mb-2 transition-colors group-hover/link:text-accent">
                  {post.title}
                </h3>
                <p className="text-sm text-text-2 mb-2">{post.summary}</p>
              </a>
              <div className="mt-4 pt-4 border-t border-border">
                <ExpandableTags tags={post.tags ?? []} expandable={true} maxInitialTags={5} />
              </div>
            </div>
          ))}
        </div>
      </SectionBand>
    </main>
  );
}
