// File-based blog: reads markdown files from content/blog/*.md, parses frontmatter,
// renders markdown to HTML, and exposes typed helpers used by the routes.
import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { marked } from "marked";

export type FaqItem = { q: string; a: string };

export interface PostFrontmatter {
  title: string;
  description: string;
  slug: string;
  date: string; // ISO, e.g. 2026-08-07
  updated?: string; // ISO
  cluster?: string; // e.g. "Platforms", "Compliance"
  primaryKeyword?: string;
  keywords?: string[];
  author?: string;
  image?: string; // hero image path or URL
  imageAlt?: string;
  imageCredit?: string; // e.g. "Photo by X on Pexels"
  faq?: FaqItem[];
  draft?: boolean;
}

export interface Post extends PostFrontmatter {
  html: string;
  readingMinutes: number;
}

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

marked.setOptions({ gfm: true, breaks: false });

function readFileNames(): string[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  return fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".md"));
}

function parseFile(fileName: string): Post {
  const raw = fs.readFileSync(path.join(BLOG_DIR, fileName), "utf8");
  const { data, content } = matter(raw);
  const fm = data as PostFrontmatter;
  const slug = fm.slug || fileName.replace(/\.md$/, "");
  const words = content.trim().split(/\s+/).length;
  return {
    ...fm,
    slug,
    html: marked.parse(content) as string,
    readingMinutes: Math.max(1, Math.round(words / 220)),
  };
}

/** All published posts (drafts excluded in production), newest first. */
export function getAllPosts(): Post[] {
  const includeDrafts = process.env.NODE_ENV !== "production";
  return readFileNames()
    .map(parseFile)
    .filter((p) => includeDrafts || !p.draft)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostSlugs(): string[] {
  return getAllPosts().map((p) => p.slug);
}

export function getPostBySlug(slug: string): Post | undefined {
  return getAllPosts().find((p) => p.slug === slug);
}
