// Central site + organization config. Used for metadata, canonicals, and JSON-LD.
export const siteConfig = {
  name: "PeptideEmails",
  legalName: "PeptideEmails.com",
  // Production URL. Change here if the blog deploys to a subdomain (e.g. https://blog.peptideemails.com).
  url: "https://peptideemails.com",
  description:
    "Done-for-you, FDA-compliant email marketing for peptide and GLP-1 brands. Built on self-hosted FluentCRM and Sendlane to survive where Klaviyo and Mailchimp ban you.",
  // Path the blog lives under. "/blog" => peptideemails.com/blog/<slug>.
  blogBasePath: "/blog",
  ogImage: "/og-default.png",
  booking:
    "https://api.leadconnectorhq.com/widget/booking/kr41Zw1TjlYl3qhCScnu",
  sameAs: [
    // Add real profiles as they go live so Google links the entity.
    // "https://www.linkedin.com/company/peptideemails",
    // "https://x.com/peptideemails",
  ],
  author: {
    name: "PeptideEmails",
    // Per-post author can override; this is the default publisher/author entity.
  },
} as const;

export const absoluteUrl = (path: string) =>
  `${siteConfig.url}${path.startsWith("/") ? "" : "/"}${path}`;

export const postUrl = (slug: string) =>
  absoluteUrl(`${siteConfig.blogBasePath}/${slug}`);

// Public assets (in /public) are served under the basePath because of Multi-Zones.
// withBase -> relative src for <img>; assetUrl -> absolute URL for OG tags & JSON-LD.
export const withBase = (path: string) => `${siteConfig.blogBasePath}${path}`;
export const assetUrl = (path: string) =>
  absoluteUrl(`${siteConfig.blogBasePath}${path}`);
