import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/blog";
import { siteConfig, absoluteUrl, postUrl } from "@/lib/siteConfig";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts();
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: siteConfig.url, changeFrequency: "weekly", priority: 1 },
    { url: absoluteUrl(siteConfig.blogBasePath), changeFrequency: "daily", priority: 0.9 },
  ];
  const postRoutes: MetadataRoute.Sitemap = posts.map((p) => ({
    url: postUrl(p.slug),
    lastModified: new Date(p.updated || p.date),
    changeFrequency: "monthly",
    priority: 0.7,
  }));
  return [...staticRoutes, ...postRoutes];
}
