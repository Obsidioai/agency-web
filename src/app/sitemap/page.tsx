import type { Metadata } from "next";
import Link from "next/link";

const PAGES: Array<{ label: string; href: string; description: string }> = [
  { label: "Home", href: "/", description: "Overview of our services and featured work." },
  { label: "Services", href: "/services", description: "Detailed breakdown of our advisory and implementation offers." },
  { label: "Case Studies", href: "/case-studies", description: "Selected client projects and outcomes." },
  { label: "Resources", href: "/resources", description: "Guides, articles, and tools for operators." },
  { label: "Blog", href: "/blog", description: "Thoughts on automation and growth in the DACH region." },
  { label: "About", href: "/about", description: "Team values, working style, and mission." },
  { label: "Contact", href: "/contact", description: "Ways to reach Obsidio for new engagements." },
  { label: "Privacy Policy", href: "/privacy", description: "Details on how we handle personal data." },
  { label: "Terms of Use", href: "/terms", description: "Legal terms governing use of our website." },
  { label: "Cookie Preferences", href: "/cookies", description: "Options and notes on cookie usage." },
  { label: "Responsible Disclosure", href: "/responsible-disclosure", description: "Guidelines for reporting security issues." },
  { label: "Impressum", href: "/impressum", description: "Legal disclosure required in Austria." }
];

export const metadata: Metadata = {
  title: "Sitemap - Obsidio",
  description: "Structured overview of the main content sections available on obsidio.com."
};

export default function SitemapPage() {
  return (
    <main className="bg-[#F6F8FB] text-neutral-900">
      <section className="px-6 pt-10 md:px-10 md:pt-16">
        <div className="mx-auto max-w-4xl rounded-[28px] bg-white px-6 py-8 shadow-lg ring-1 ring-black/5 md:px-10 md:py-12">
          <span className="text-xs font-semibold uppercase tracking-wide text-neutral-600">Sitemap</span>
          <h1 className="mt-3 text-3xl font-extrabold tracking-tight md:text-4xl">Find your way around Obsidio</h1>
          <p className="mt-3 max-w-3xl text-sm text-neutral-700 md:text-base">
            Explore every publicly available section of our site from a single index.
          </p>
        </div>
      </section>

      <section className="px-6 pb-16 md:px-10">
        <div className="mx-auto max-w-4xl rounded-2xl border border-neutral-200 bg-white px-6 py-8 shadow-sm md:px-8">
          <ul className="space-y-5">
            {PAGES.map((page) => (
              <li key={page.href} className="border-b border-neutral-200 pb-5 last:border-b-0 last:pb-0">
                <Link href={page.href} className="text-lg font-semibold text-neutral-900 hover:underline">
                  {page.label}
                </Link>
                <p className="mt-1 text-sm text-neutral-600">{page.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
