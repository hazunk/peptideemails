import type { Metadata } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { siteConfig, absoluteUrl, assetUrl } from "@/lib/siteConfig";
import { siteGraph } from "@/lib/schema";
import JsonLd from "@/components/JsonLd";
import BlogHeader from "@/components/BlogHeader";

// Brand fonts — matched to the main site (peptideemails.com): Plus Jakarta Sans everywhere,
// JetBrains Mono for eyebrow/labels.
const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const jetmono = JetBrains_Mono({
  variable: "--font-jet",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `Blog | ${siteConfig.name}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  alternates: { canonical: absoluteUrl(siteConfig.blogBasePath) },
  openGraph: {
    type: "website",
    url: absoluteUrl(siteConfig.blogBasePath),
    siteName: siteConfig.name,
    images: [{ url: assetUrl(siteConfig.ogImage) }],
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jakarta.variable} ${jetmono.variable} antialiased`}>
      <body className="min-h-screen font-body">
        <JsonLd data={siteGraph()} />
        <BlogHeader />
        {children}
      </body>
    </html>
  );
}
