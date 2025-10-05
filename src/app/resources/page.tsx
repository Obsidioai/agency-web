import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import type { SVGProps } from "react";
import EbookDownloadCTA from "./EbookDownloadCTA";

export const metadata: Metadata = {
  title: "Ressourcen - Obsidio",
  description:
    "Kostenlose Leitfäden, kurze Videos und kompakte Lektüre, damit KMU KI schnell, sicher und mit messbarem ROI einführen.",
};

export default function ResourcesPage() {
  return (
    <main className="bg-[#F6F8FB] text-neutral-900">
      <section className="px-6 pt-10 md:px-10 md:pt-14">
        <div
          className="mx-auto max-w-6xl rounded-[28px] p-6 shadow-lg ring-1 ring-black/5 md:p-8"
          style={{
            background:
              "linear-gradient(135deg, rgba(184,167,255,0.35), rgba(127,216,190,0.35))",
          }}
        >
          <div className="grid items-center gap-8 md:grid-cols-[1.35fr_1fr]">
            <div>
              <span className="inline-flex items-center rounded-full bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-neutral-600 ring-1 ring-black/10">
                Neu für Q4 2025
              </span>
              <h1 className="mt-4 text-3xl font-extrabold tracking-tight md:text-4xl">
                Kostenloses E-Book: KI für Unternehmerinnen und Unternehmer (Einsteigerleitfaden)
              </h1>
              <p className="mt-3 max-w-2xl text-sm text-neutral-700 md:text-base">
                Ein praxisnaher Schritt-für-Schritt-Plan, um KI schnell, sicher und DSGVO-konform einzuführen.
              </p>
              <ul className="mt-5 space-y-2 text-sm text-neutral-800">
                <li className="flex items-start gap-2">
                  <Check />
                  <span>Finden Sie passende Anwendungsfälle in unter einer Stunde.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check />
                  <span>Übernehmen Sie mehr als 10 Workflows für Vertrieb, Service und Operations.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check />
                  <span>Bleiben Sie konform mit der Checkliste für GDPR und EU AI Act.</span>
                </li>
              </ul>
              <div className="mt-6 flex flex-wrap gap-3">
                <EbookDownloadCTA />
                <Link
                  href="/resources/ebook/details"
                  className="inline-flex items-center rounded-xl border border-neutral-300 bg-white px-5 py-3 text-sm font-semibold text-neutral-900 transition hover:bg-neutral-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400/40"
                >
                  Details lesen
                </Link>
              </div>
            </div>

            <div className="mx-auto w-full max-w-sm">
              <div className="rounded-2xl bg-white p-6 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.35)]">
                <div className="relative aspect-[4/5] overflow-hidden rounded-lg ring-1 ring-black/5">
                  <Image
                    src="/images/ebook-cover.jpg"
                    alt='Titelbild des E-Books "KI für Unternehmerinnen und Unternehmer"'
                    fill
                    sizes="(min-width: 768px) 320px, 70vw"
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="mt-4 h-2 rounded-full bg-neutral-200" />
                <div className="mt-2 h-2 w-2/3 rounded-full bg-neutral-200" />
              </div>
            </div>
          </div>
        </div>

        <div
          className="mx-auto mt-4 h-10 max-w-6xl rounded-[24px]"
          style={{
            background:
              "linear-gradient(135deg, rgba(184,167,255,0.25), rgba(127,216,190,0.25))",
          }}
        />
      </section>

      <section className="px-6 py-12 md:px-10 md:py-16">
        <div className="mx-auto max-w-6xl">
          <header className="text-center">
            <h2 className="text-2xl font-extrabold tracking-tight md:text-3xl">
              Videos, Tutorials & Kurzlektüre
            </h2>
            <p className="mt-2 text-sm text-neutral-600">
              Kurze Tutorials, Tool-Durchläufe und einige schnelle Lesetipps.
            </p>
          </header>

          <div className="mt-8 grid gap-6 md:grid-cols-[1.2fr_1fr]">
            <div className="group relative overflow-hidden rounded-2xl bg-neutral-900 shadow-md ring-1 ring-black/5">
              <div className="aspect-video w-full">
                <iframe
                  className="h-full w-full"
                  src="https://www.youtube.com/embed/WXZIrXrMArM"
                  title="Die 4. Revolution: Mit KI zu mehr Umsatz (fuer KMU)"
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
              <span className="absolute bottom-3 left-4 rounded-md bg-black/70 px-2 py-1 text-xs font-semibold text-white">
                Die 4. Revolution: Mit KI zu mehr Umsatz (fuer KMU)
              </span>
            </div>

            <div className="space-y-4">
              <ArticleCard
                title="Infografik: Von Excel zu Insight mit KI"
                excerpt="Visuelle Anleitung, wie KI aus Excel-Daten automatisiert Insights, Prognosen und Alarme für Ihr KMU erzeugt."
                href="/blog/from-excel-to-insight"
              />
              <ArticleCard
                title="Lead-Generierung in DACH: Was 2025 wirklich konvertiert"
                excerpt="Infografik über Vertrauen, LinkedIn-Strategien und Lead Magnets, die 2025 in DACH funktionieren."
                href="/blog/lead-gen-dach-2025"
              />
            </div>
          </div>

          <div className="mt-6 text-center">
            <Link
              href="https://www.youtube.com/@ObsidioAI" target="_blank" rel="noopener noreferrer"
              className="text-sm font-semibold text-[#4B64F3] hover:underline"
            >
              Mehr auf unserem YouTube-Kanal und Blog entdecken
            </Link>
          </div>
        </div>
      </section>

      <section className="px-6 pb-16 md:px-10">
        <div
          className="mx-auto max-w-5xl rounded-[24px] px-6 py-10 text-center shadow-lg ring-1 ring-black/5"
          style={{
            background:
              "linear-gradient(135deg, rgba(184,167,255,0.35), rgba(127,216,190,0.35))",
          }}
        >
          <h3 className="text-2xl font-extrabold md:text-3xl">Bereit, Ihr Unternehmen auf das nächste Level zu heben?</h3>
          <p className="mt-2 text-sm text-neutral-700">Lassen Sie uns gemeinsam etwas Großartiges schaffen.</p>
          <div className="mt-5">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-neutral-900 ring-1 ring-neutral-200 transition hover:bg-neutral-50"
            >
              Kontakt aufnehmen
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

function Check(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600"
      fill="currentColor"
      {...props}
    >
      <path d="M9.2 16.2 4.9 12l-1.4 1.4 5.7 5.7L21 8.3 19.6 7l-10.4 9.2z" />
    </svg>
  );
}

function Play(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M8.5 6.8v10.4L18 12 8.5 6.8Z" />
    </svg>
  );
}

interface ArticleCardProps {
  title: string;
  excerpt: string;
  href: string;
  date?: string;
}

function ArticleCard({ date, title, excerpt, href }: ArticleCardProps) {
  return (
    <Link
      href={href}
      className="block rounded-2xl bg-white p-4 shadow-sm ring-1 ring-black/5 transition hover:shadow-md"
    >
      {date ? (
        <div className="text-[11px] font-semibold text-neutral-500">{date}</div>
      ) : null}
      <div className="mt-1 text-base font-semibold leading-snug">{title}</div>
      <p className="mt-1 text-sm text-neutral-600">{excerpt}</p>
      <span className="mt-2 inline-flex items-center text-sm font-semibold text-[#4B64F3]">
        Lesen
      </span>
    </Link>
  );
}











