import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import { siteConfig, postUrl, withBase, assetUrl } from "@/lib/siteConfig";
import { articleGraph } from "@/lib/schema";
import JsonLd from "@/components/JsonLd";

// Pre-render every post at build time.
export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export const dynamicParams = false;

function ogImage(image?: string) {
  if (!image) return assetUrl(siteConfig.ogImage);
  return image.startsWith("http") ? image : assetUrl(image);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  const url = postUrl(post.slug);
  const image = ogImage(post.image);
  return {
    title: `${post.title} | ${siteConfig.name}`,
    description: post.description,
    keywords: post.keywords,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      title: post.title,
      description: post.description,
      siteName: siteConfig.name,
      publishedTime: post.date,
      modifiedTime: post.updated || post.date,
      images: [{ url: image, alt: post.imageAlt || post.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [image],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const dateLabel = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <main className="mx-auto max-w-3xl px-5 py-14">
      <JsonLd data={articleGraph(post)} />

      {/* Breadcrumb (mirrors BreadcrumbList schema) */}
      <nav aria-label="Breadcrumb" className="mb-8 text-sm text-neutral-500">
        <ol className="flex flex-wrap items-center gap-1.5">
          <li>
            <a href={siteConfig.url} className="hover:text-green">
              Home
            </a>
          </li>
          <li aria-hidden>/</li>
          <li>
            <Link href="/" className="hover:text-green">
              Blog
            </Link>
          </li>
        </ol>
      </nav>

      <article>
        <header className="mb-10">
          {post.cluster && (
            <p className="mb-3 font-mono text-xs font-semibold uppercase tracking-widest text-green">
              {post.cluster}
            </p>
          )}
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-ink sm:text-5xl">
            {post.title}
          </h1>
          <p className="mt-4 text-lg text-neutral-600">{post.description}</p>
          <p className="mt-4 text-sm text-neutral-500">
            <time dateTime={post.date}>{dateLabel}</time>
            {" · "}
            {post.readingMinutes} min read
          </p>
        </header>

        {post.image && (
          <figure className="mb-10">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={post.image.startsWith("http") ? post.image : withBase(post.image)}
              alt={post.imageAlt || post.title}
              className="w-full rounded-xl"
              loading="eager"
            />
            {post.imageCredit && (
              <figcaption className="mt-2 text-xs text-neutral-400">
                {post.imageCredit}
              </figcaption>
            )}
          </figure>
        )}

        <div
          className="prose-blog"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />

        {post.faq?.length ? (
          <section className="mt-16" aria-labelledby="faq-heading">
            <h2 id="faq-heading" className="text-2xl font-extrabold tracking-tight text-ink">
              Frequently asked questions
            </h2>
            <dl className="mt-6 divide-y divide-neutral-200">
              {post.faq.map((f) => (
                <div key={f.q} className="py-5">
                  <dt className="font-semibold text-ink">{f.q}</dt>
                  <dd className="mt-2 text-neutral-600">{f.a}</dd>
                </div>
              ))}
            </dl>
          </section>
        ) : null}

        {/* Conversion CTA */}
        <aside className="mt-16 border-2 border-ink bg-ink p-8 text-center text-white">
          <h2 className="text-2xl font-extrabold tracking-tight">
            Want us to build this for your brand?
          </h2>
          <p className="mx-auto mt-3 max-w-md text-neutral-300">
            Done-for-you, FDA-compliant email systems for peptide and GLP-1 brands — built on
            self-hosted FluentCRM and Sendlane.
          </p>
          <a
            href={siteConfig.booking}
            className="mt-6 inline-block border-2 border-green bg-green px-8 py-3 font-bold text-ink transition hover:bg-green-dark hover:text-white"
          >
            Book a Free Consultation
          </a>
        </aside>
      </article>
    </main>
  );
}
