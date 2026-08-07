import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";

// Brand header — matches peptideemails.com: white bg, bottom border, green accent, sharp CTA.
export default function BlogHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-4">
        <a
          href={siteConfig.url}
          className="text-xl font-extrabold tracking-tight text-ink"
        >
          Peptide<span className="text-green">Emails</span>
        </a>
        <nav className="flex items-center gap-5 text-sm font-semibold sm:gap-7">
          <a href={siteConfig.url} className="hidden text-neutral-600 transition hover:text-ink sm:inline">
            Home
          </a>
          <Link href="/" className="text-neutral-600 transition hover:text-ink">
            Blog
          </Link>
          <a
            href={siteConfig.booking}
            className="border-2 border-green bg-green px-4 py-2 font-bold text-ink transition hover:border-green-dark hover:bg-green-dark hover:text-white"
          >
            Book a Call
          </a>
        </nav>
      </div>
    </header>
  );
}
