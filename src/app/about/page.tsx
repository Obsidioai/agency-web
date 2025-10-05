import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "About - Obsidio",
  description:
    "We design pragmatic, next-gen digital solutions for SMBs: clear strategy, reliable systems, and software that ships fast.",
};

const BELIEFS = [
  { label: "Klarheit", accent: "#7FD8BE" },
  { label: "Können", accent: "#4B64F3" },
  { label: "Schubkraft", accent: "#B8A7FF" },
  { label: "Vertrauen", accent: "#00A881" },
];

const STEPS = [
  { step: "01", title: "Genau zuhören", blurb: "Wir kartieren Ziele, Leitplanken und gewünschte Ergebnisse." },
  { step: "02", title: "Schnell planen", blurb: "Wir skizzieren einen schlanken Weg zum ersten messbaren Erfolg." },
  { step: "03", title: "Fokussiert bauen", blurb: "Wir liefern in kurzen Schleifen und halten Feedback offen." },
  { step: "04", title: "Sicher skalieren", blurb: "Wir befähigen Teams und planen das nächste Experiment." },
];

export default function AboutPage() {
  return (
    <main className="bg-white text-neutral-900">
      <Hero />
      <MissionBeliefsAndWork />
      <BottomCTA />
    </main>
  );
}

function Hero() {
  return (
    <section className="px-6 pt-10 md:px-10 md:pt-14">
      <div
        className="mx-auto max-w-5xl rounded-[28px] px-6 py-8 shadow-lg ring-1 ring-black/5 md:px-10 md:py-12"
        style={{
          background: "linear-gradient(135deg, rgba(184,167,255,0.35), rgba(127,216,190,0.35))",
          backdropFilter: "blur(8px)",
        }}
      >
        <h1 className="text-3xl font-extrabold tracking-tight md:text-5xl">Wir gestalten. Wir liefern.</h1>
        <p className="mt-3 max-w-3xl text-sm text-neutral-700 md:text-base">
          Wir verbinden Design, Strategie und verlässliche Softwarebereitstellung, damit KMU-Teams schneller und mit weniger Risiko vorankommen.
        </p>

        <div className="mt-5 flex flex-wrap gap-3">
          <Link
            href="/contact"
            className="inline-flex items-center rounded-xl bg-neutral-900 px-5 py-3 text-sm font-semibold text-white hover:opacity-90"
          >
            Projekt anfragen
          </Link>
        </div>
      </div>
    </section>
  );
}

function MissionBeliefsAndWork() {
  return (
    <section className="px-6 py-16 md:px-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-16">
        <div className="rounded-[32px] border border-neutral-200 bg-white p-8 shadow-xl md:p-12">
          <div className="grid gap-10 md:grid-cols-[1.1fr,1fr] md:items-start">
            <div className="text-center md:text-left">
              <h2 className="text-3xl font-bold tracking-tight text-neutral-900 md:text-4xl">Unsere Mission</h2>
              <p className="mt-4 text-base font-semibold text-neutral-700 md:text-lg">
                Wir helfen DACH-KMU, praktische KI schnell und ohne Chaos einzuführen. Von Prozess-Audits über Automatisierung, Chatbots und Dashboards bis zu leichtgewichtigem SaaS liefern wir messbare Erfolge—EU-gehostet, DSGVO-bewusst und in Ihrem Besitz.
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-2 text-xs font-semibold uppercase tracking-wide text-neutral-600 md:justify-start">
                <Chip>Handwerk</Chip>
                <Chip>Pragmatismus</Chip>
                <Chip>Wirkung</Chip>
              </div>
            </div>

            <div className="text-center md:text-left">
              <h3 className="text-2xl font-semibold tracking-tight text-neutral-900 md:text-3xl">Woran wir glauben</h3>
              <p className="mt-3 text-sm font-semibold text-neutral-700 md:text-base">
                Vier Leitgedanken, die jede Zusammenarbeit prägen.
              </p>
              <div className="mt-6 grid w-full gap-4 sm:grid-cols-2">
                {BELIEFS.map((belief) => (
                  <BeliefBeam key={belief.label} {...belief} />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-5xl text-center">
          <h3 className="text-3xl font-bold tracking-tight text-neutral-900 md:text-4xl">So arbeiten wir</h3>
          <p className="mt-3 text-base font-semibold text-neutral-700 md:text-lg">
            Ein Vier-Schritte-Rhythmus, der Tempo hält, ohne Qualität zu verlieren.
          </p>
        </div>

        <div className="mx-auto mt-0 max-w-6xl rounded-[28px] border border-neutral-200 bg-white py-8 shadow-lg">
          <div className="grid gap-6 px-6 text-center md:grid-cols-4 md:text-left">
            {STEPS.map((item) => (
              <StepGlyph key={item.step} {...item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function BottomCTA() {
  return (
    <section className="px-6 pb-20 md:px-10">
      <div
        className="mx-auto max-w-4xl rounded-[24px] px-6 py-8 text-center shadow-lg ring-1 ring-black/5 md:px-10 md:py-10"
        style={{
          background: "linear-gradient(135deg, rgba(184,167,255,0.35), rgba(127,216,190,0.35))",
          backdropFilter: "blur(8px)",
        }}
      >
        <p className="text-sm text-neutral-700">Aus Wien, mit Fokus.</p>
        <h3 className="mt-1 text-2xl font-extrabold md:text-3xl">Bereit, klar durchzustarten?</h3>
        <p className="mt-2 text-sm text-neutral-700 md:text-base">
          Buchen Sie ein 30-minütiges Gespräch. Gemeinsam definieren wir den mutigsten ersten Schritt.
        </p>
        <div className="mt-5">
          <Link
            href="/contact"
            className="inline-flex items-center rounded-xl bg-neutral-900 px-5 py-3 text-sm font-semibold text-white hover:opacity-90"
          >
            Gespräch vereinbaren
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ---------- components ---------- */

function Chip({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-neutral-200 bg-white px-3 py-1 text-xs font-semibold text-neutral-700 shadow-sm">
      {children}
    </span>
  );
}

function BeliefBeam({ label, accent }: { label: string; accent: string }) {
  return (
    <div className="relative overflow-hidden rounded-[22px] bg-white shadow-sm ring-1 ring-neutral-200 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-200 hover:opacity-100"
        style={{ background: "linear-gradient(135deg, rgba(127,216,190,0.15), rgba(184,167,255,0.15))" }}
        aria-hidden
      />
      <div className="relative flex items-center justify-between px-5 py-4">
        <span className="text-base font-semibold text-neutral-900">{label}</span>
        <span className="h-3 w-12 rounded-full" style={{ backgroundColor: accent }} aria-hidden />
      </div>
    </div>
  );
}

function StepGlyph({ step, title, blurb }: { step: string; title: string; blurb: string }) {
  return (
    <div className="group flex flex-col items-center gap-3 text-center md:items-start md:text-left">
      <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-neutral-900 text-sm font-semibold text-white shadow-lg transition-transform duration-200 group-hover:-translate-y-1">
        {step}
      </span>
      <div>
        <h4 className="text-sm font-semibold text-neutral-900">{title}</h4>
        <p className="mt-1 text-sm text-neutral-600">{blurb}</p>
      </div>
      <div className="h-px w-full origin-center scale-x-0 bg-gradient-to-r from-[#4B64F3] via-[#7FD8BE] to-transparent transition-transform duration-300 group-hover:scale-x-100" aria-hidden />
    </div>
  );
}


