import { SectionBand } from "@/components/SectionBand";
import { getAllPosts } from "@/lib/content";
import { TagChip } from "@/components/TagChip";

export default async function BlogPage() {
  const posts = await getAllPosts();
  return (
    <main>
      <SectionBand theme="light" variant="panel" title="Blog">
        <div className="flex flex-col gap-8">
          {posts.map((post: any) => (
            <a
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="block rounded-xl border border-border bg-surface-2 p-6 hover:border-accent/40"
            >
              <h3 className="font-heading text-lg font-bold text-text mb-2">{post.title}</h3>
              <p className="text-sm text-text-2 mb-2">{post.summary}</p>
              <div className="flex gap-2">
                {post.tags?.map((tag: string) => {
                  let skillType = "other";
                  const tagLower = tag.toLowerCase();
                  if (["ml", "machine learning", "ai", "pytorch", "jax"].includes(tagLower)) skillType = "ml";
                  else if (["backend", "langgraph", "server", "api"].includes(tagLower)) skillType = "backend";
                  else if (["language", "typescript", "python"].includes(tagLower)) skillType = "language";
                  else if (["database", "postgresql", "redis", "sql"].includes(tagLower)) skillType = "database";
                  else if (["frontend", "react", "next.js", "ui", "ux"].includes(tagLower)) skillType = "frontend";
                  else if (["ops", "docker", "devops", "infra", "infrastructure", "cuda"].includes(tagLower)) skillType = "ops";
                  else skillType = tagLower;
                  return (
                    <TagChip key={tag} variant="skill" skillType={skillType}>{tag}</TagChip>
                  );
                })}
              </div>
            </a>
          ))}
        </div>
      </SectionBand>
    </main>
  );
}
