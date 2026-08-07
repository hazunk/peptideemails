"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

export type BlogCard = {
  slug: string;
  title: string;
  description: string;
  cluster?: string;
  date: string;
  readingMinutes: number;
  keywords?: string[];
};

function formatDate(d: string) {
  return new Date(d).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogExplorer({ posts }: { posts: BlogCard[] }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");

  const categories = useMemo(() => {
    const set = new Set<string>();
    posts.forEach((p) => p.cluster && set.add(p.cluster));
    return ["All", ...Array.from(set).sort()];
  }, [posts]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return posts.filter((p) => {
      const inCategory = category === "All" || p.cluster === category;
      if (!inCategory) return false;
      if (!q) return true;
      const haystack = [
        p.title,
        p.description,
        p.cluster ?? "",
        ...(p.keywords ?? []),
      ]
        .join(" ")
        .toLowerCase();
      return haystack.includes(q);
    });
  }, [posts, query, category]);

  return (
    <div>
      {/* Search */}
      <div className="relative mb-5">
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search articles — platforms, flows, compliance…"
          aria-label="Search articles"
          className="w-full border-2 border-border bg-white px-5 py-3 pr-12 text-base text-ink outline-none transition focus:border-green"
        />
        <svg
          className="pointer-events-none absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-neutral-400"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          aria-hidden
        >
          <circle cx="11" cy="11" r="7" />
          <path d="m21 21-4.3-4.3" />
        </svg>
      </div>

      {/* Category filters */}
      {categories.length > 1 && (
        <div className="mb-10 flex flex-wrap gap-2">
          {categories.map((c) => {
            const active = c === category;
            return (
              <button
                key={c}
                type="button"
                onClick={() => setCategory(c)}
                aria-pressed={active}
                className={`border-2 px-4 py-1.5 font-mono text-xs font-semibold uppercase tracking-wider transition ${
                  active
                    ? "border-ink bg-ink text-white"
                    : "border-border bg-white text-neutral-600 hover:border-ink hover:text-ink"
                }`}
              >
                {c}
              </button>
            );
          })}
        </div>
      )}

      {/* Results */}
      {filtered.length === 0 ? (
        <p className="py-10 text-neutral-500">
          No articles match “{query}”{category !== "All" ? ` in ${category}` : ""}.
        </p>
      ) : (
        <ul className="divide-y divide-neutral-200">
          {filtered.map((post) => (
            <li key={post.slug} className="py-8">
              <Link href={`/${post.slug}`} className="group block">
                {post.cluster && (
                  <span className="font-mono text-xs font-semibold uppercase tracking-widest text-green">
                    {post.cluster}
                  </span>
                )}
                <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-ink transition group-hover:text-green">
                  {post.title}
                </h2>
                <p className="mt-2 text-neutral-600">{post.description}</p>
                <p className="mt-3 text-sm text-neutral-500">
                  {formatDate(post.date)} · {post.readingMinutes} min read
                </p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
