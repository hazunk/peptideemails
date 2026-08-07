// JSON-LD builders. Keep all structured-data shapes here so they stay consistent.
import { siteConfig, absoluteUrl, postUrl, assetUrl } from "./siteConfig";
import type { Post } from "./blog";

const ORG_ID = `${siteConfig.url}/#organization`;
const WEBSITE_ID = `${siteConfig.url}/#website`;

export function organizationSchema() {
  return {
    "@type": "Organization",
    "@id": ORG_ID,
    name: siteConfig.legalName,
    url: siteConfig.url,
    description: siteConfig.description,
    logo: {
      "@type": "ImageObject",
      url: assetUrl("/logo.png"),
    },
    ...(siteConfig.sameAs.length ? { sameAs: siteConfig.sameAs } : {}),
  };
}

export function websiteSchema() {
  return {
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    name: siteConfig.name,
    url: siteConfig.url,
    publisher: { "@id": ORG_ID },
  };
}

/** Sitewide graph placed in the root layout. */
export function siteGraph() {
  return { "@context": "https://schema.org", "@graph": [organizationSchema(), websiteSchema()] };
}

export function breadcrumbSchema(post: Post) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
      { "@type": "ListItem", position: 2, name: "Blog", item: absoluteUrl(siteConfig.blogBasePath) },
      { "@type": "ListItem", position: 3, name: post.title, item: postUrl(post.slug) },
    ],
  };
}

export function faqSchema(post: Post) {
  if (!post.faq?.length) return null;
  return {
    "@type": "FAQPage",
    mainEntity: post.faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function blogPostingSchema(post: Post) {
  const url = postUrl(post.slug);
  const image = post.image ? (post.image.startsWith("http") ? post.image : assetUrl(post.image)) : assetUrl(siteConfig.ogImage);
  return {
    "@type": "BlogPosting",
    "@id": `${url}#article`,
    headline: post.title,
    description: post.description,
    image,
    datePublished: post.date,
    dateModified: post.updated || post.date,
    inLanguage: "en-US",
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    author: { "@type": "Organization", name: post.author || siteConfig.author.name, url: siteConfig.url },
    publisher: { "@id": ORG_ID },
    ...(post.keywords?.length ? { keywords: post.keywords.join(", ") } : {}),
  };
}

/** Full graph for an article page: article + breadcrumb + org/site + optional FAQ. */
export function articleGraph(post: Post) {
  const graph: Record<string, unknown>[] = [
    organizationSchema(),
    websiteSchema(),
    blogPostingSchema(post),
    breadcrumbSchema(post),
  ];
  const faq = faqSchema(post);
  if (faq) graph.push(faq);
  return { "@context": "https://schema.org", "@graph": graph };
}

/** Blog index: CollectionPage + ItemList of posts. */
export function blogListingGraph(posts: Post[]) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      organizationSchema(),
      websiteSchema(),
      {
        "@type": "CollectionPage",
        "@id": `${absoluteUrl(siteConfig.blogBasePath)}#blog`,
        name: "Blog | PeptideEmails",
        url: absoluteUrl(siteConfig.blogBasePath),
        isPartOf: { "@id": WEBSITE_ID },
        about: "Email marketing, deliverability, and FDA compliance for peptide and GLP-1 brands.",
      },
      {
        "@type": "ItemList",
        itemListElement: posts.map((p, i) => ({
          "@type": "ListItem",
          position: i + 1,
          url: postUrl(p.slug),
          name: p.title,
        })),
      },
    ],
  };
}
