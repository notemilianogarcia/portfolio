import fs from "fs";
import path from "path";
import matter from "gray-matter";

// Resolve content path robustly whether the workspace root is the repo root or the `code/` folder
function resolveContentPath() {
  const cwd = process.cwd();
  const direct = path.join(cwd, "content");
  const nested = path.join(cwd, "code", "content");
  if (fs.existsSync(direct)) return direct;
  if (fs.existsSync(nested)) return nested;
  return direct; // default
}

const CONTENT_PATH = resolveContentPath();

export async function getAllContent(type: "projects" | "publications" | "blog") {
  const dirPath = path.join(CONTENT_PATH, type);
  if (!fs.existsSync(dirPath)) return [];

  const files = fs.readdirSync(dirPath);
  
  return files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => {
      const filePath = path.join(dirPath, file);
      const source = fs.readFileSync(filePath, "utf8");
      const { data } = matter(source);
      
      return {
        ...data,
        slug: file.replace(".mdx", ""),
      } as any;
    })
    .sort((a, b) => (new Date(b.date).getTime() - new Date(a.date).getTime()));
}

export async function getContentBySlug(type: "projects" | "publications" | "blog", slug: string) {
  const filePath = path.join(CONTENT_PATH, type, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const source = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(source);

  return {
    metadata: { ...data, slug },
    content,
  };
}

export const getAllProjects = () => getAllContent("projects");
export const getProjectBySlug = (slug: string) => getContentBySlug("projects", slug);

export const getAllPublications = () => getAllContent("publications");
export const getPublicationBySlug = (slug: string) => getContentBySlug("publications", slug);

export const getAllPosts = () => getAllContent("blog");
export const getPostBySlug = (slug: string) => getContentBySlug("blog", slug);
