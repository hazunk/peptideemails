import type { Metadata } from "next";
import { getAllPosts } from "@/lib/blog";
import { siteConfig, absoluteUrl } from "@/lib/siteConfig";
import { blogListingGraph } from "@/lib/schema";
import JsonLd from "@/components/JsonLd";
import BlogExplorer, { type BlogCard } from "@/components/BlogExplorer";

export const metadata: Metadata = {
  title: `Blog | ${siteConfig.name}`,
  description:
    "Email marketing, deliverability, and FDA compliance for peptide, GLP-1, and high-risk supplement brands.",
  alternates: { canonical: absoluteUrl(siteConfig.blogBasePath) },
  openGraph: {
    type: "website",
    url: absoluteUrl(siteConfig.blogBasePath),
    title: `Blog | ${siteConfig.name}`,
    description:
      "Email marketing, deliverability, and FDA compliance for peptide and GLP-1 brands.",
    siteName: siteConfig.name,
  },
};

export default function BlogIndexPage() {
  const posts = getAllPosts();
  const cards: BlogCard[] = posts.map((p) => ({
    slug: p.slug,
    title: p.title,
    description: p.description,
    cluster: p.cluster,
    date: p.date,
    readingMinutes: p.readingMinutes,
    keywords: p.keywords,
  }));

  return (
    <main className="mx-auto max-w-4xl px-5 py-14">
      <JsonLd data={blogListingGraph(posts)} />

      <header className="mb-10">
        <p className="mb-3 font-mono text-xs font-semibold uppercase tracking-widest text-green">
          The PeptideEmails Blog
        </p>
        <h1 className="text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">
          Growing peptide &amp; GLP-1 brands with email that survives.
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-neutral-600">
          Platform comparisons, compliant email flows, deliverability, and the FDA rules that keep
          your account — and your payment processor — alive.
        </p>
      </header>

      <BlogExplorer posts={cards} />
    </main>
  );
}
