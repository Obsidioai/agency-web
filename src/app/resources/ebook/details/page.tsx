import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "KI für Unternehmer:innen | E-Book im Detail",
  description:
    "Für wen unser KI für Unternehmer:innen E-Book gedacht ist, welche Inhalte es abdeckt und wie KMU davon profitieren.",
};

const heroBullets = [
  "Verstehen Sie KI-Grundlagen ohne Buzzwords oder Hype.",
  "Erfahren Sie, wo KMU bereits KI einsetzen und welche Ergebnisse möglich sind.",
  "Nutzen Sie sofort einsatzbereite Workflows und Prompts für einen sicheren Start.",
];

const audience = [
  "Eigentümerinnen, Eigentümer und Führungskräfte, die einen praxisnahen KI-Überblick suchen.",
  "Entrepreneur:innen und Operations-Teams, die wiederkehrende Arbeit automatisieren wollen.",
  "Berater:innen, die schnelle Kennzahlen und Vorlagen für Mandanten benötigen.",
];

const takeaways = [
  {
    title: "Adoption beschleunigt sich",
    description:
      "Mehr als 13% der EU-Unternehmen nutzen bereits KI, bei Großunternehmen liegt der Anteil bei 41% - die Lücke für KMU schließt sich rasant.",
  },
  {
    title: "Nutzen und Leitplanken",
    description:
      "Der Leitfaden kombiniert Effizienzgewinne mit Datenschutz, Compliance und Change-Management, damit Teams verantwortungsvoll bleiben.",
  },
  {
    title: "Konkrete nächste Schritte",
    description:
      "Checklisten, Budget-Hinweise und kuratierte Prompts helfen, vom Impuls zum Pilotprojekt zu kommen, ohne ins Stocken zu geraten.",
  },
];

export default function EbookDetailsPage() {
  return (
    <main className="bg-[#F6F8FB] text-neutral-900">
      <section className="relative overflow-hidden px-6 py-14 md:px-10">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(900px 500px at 10% 0%, rgba(184,167,255,0.18), transparent 70%), radial-gradient(800px 400px at 90% 10%, rgba(127,216,190,0.18), transparent 70%)",
          }}
        />
        <div className="relative mx-auto max-w-4xl text-center">
          <h1 className="text-3xl font-extrabold tracking-tight md:text-4xl">
            KI für Unternehmer:innen - Ein Blick ins E-Book
          </h1>
          <p className="mt-3 text-sm leading-relaxed text-neutral-700 md:text-base">
            Ein kompakter Leitfaden, der KMU-Teams zeigt, wie sie aus KI-Neugier konkrete Ergebnisse erzielen - mit Kennzahlen, Vorlagen und Prompts für einen sicheren Start.
          </p>
          <ul className="mx-auto mt-6 max-w-2xl space-y-2 text-left text-sm text-neutral-700">
            {heroBullets.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <CheckSmall className="mt-0.5 text-emerald-500" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="mx-auto mt-6 flex max-w-2xl flex-wrap justify-start gap-3">
            <Link
              href="/resources/ebook"
              className="inline-flex items-center rounded-xl bg-[#4B64F3] px-5 py-3 text-sm font-semibold text-white shadow-md transition hover:-translate-y-0.5 hover:opacity-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4B64F3]/40"
            >
              E-Book erhalten
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl border border-neutral-200 bg-white px-5 py-3 text-sm font-semibold text-neutral-900 transition hover:bg-neutral-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-300/60"
            >
              Mit unserem Team sprechen
              <ArrowIcon className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="px-6 pb-14 md:px-10">
        <div className="mx-auto max-w-4xl space-y-5 rounded-[24px] border border-white/70 bg-white/95 p-8 shadow-md">
          <h2 className="text-2xl font-bold tracking-tight">Das finden Sie im E-Book</h2>
          <p className="text-sm leading-relaxed text-neutral-700">
            Der Leitfaden bleibt bei verständlicher Sprache. Sie erhalten einen Überblick über KI-Grundlagen, die wichtigsten Technologien in Europa und den Auslöser für den aktuellen Aufschwung.
          </p>
          <p className="text-sm leading-relaxed text-neutral-700">
            Jedes Kapitel verbindet Zahlen mit konkreten Schritten: Wo Sie KI zuerst einsetzen, wie Sie Aufsichtsbehörden zufriedenzustellen und welche Workflows sich mit wenig Aufwand automatisieren lassen.
          </p>
          <div className="grid gap-4 text-sm text-neutral-700 md:grid-cols-3">
            <Highlight label="Kennzahlen" value="Eurostat- und Forbes-Insights" />
            <Highlight label="Workflows" value="Handel, Dienstleistungen, Gesundheitswesen" />
            <Highlight label="Prompts" value="45 Copy-and-Paste-Vorlagen" />
          </div>
        </div>
      </section>

      <section className="px-6 pb-14 md:px-10">
        <div className="mx-auto max-w-4xl rounded-[24px] border border-white/70 bg-white/95 p-8 shadow-md">
          <h2 className="text-2xl font-bold tracking-tight">Für wen geeignet</h2>
          <p className="mt-3 text-sm text-neutral-700">
            Der Ton bleibt ermutigend und pragmatisch. Ideal für Teams, die experimentieren wollen, ohne sofort die komplette Organisation umzubauen.
          </p>
          <ul className="mt-5 space-y-3 text-sm text-neutral-700">
            {audience.map((item) => (
              <li key={item} className="flex items-start gap-3 rounded-2xl border border-neutral-200/70 bg-neutral-50 px-4 py-3 shadow-sm">
                <Dot />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="px-6 pb-16 md:px-10">
        <div className="mx-auto max-w-4xl rounded-[24px] border border-white/70 bg-[#10152D] p-8 text-white shadow-md">
          <h2 className="text-2xl font-bold tracking-tight">Zentrale Erkenntnisse</h2>
          <p className="mt-3 text-sm text-white/75">
            Teilen Sie diese Punkte mit Stakeholdern, wenn Sie zeigen möchten, warum jetzt der richtige Zeitpunkt für KI ist.
          </p>
          <div className="mt-6 space-y-4">
            {takeaways.map(({ title, description }) => (
              <div key={title} className="rounded-2xl border border-white/15 bg-white/5 p-5 backdrop-blur">
                <h3 className="text-sm font-semibold uppercase tracking-wide text-[#7FD8BE]">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/85">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-20 md:px-10">
        <div className="mx-auto max-w-4xl rounded-[24px] border border-white/70 bg-white/95 p-8 text-center shadow-md">
          <h2 className="text-2xl font-bold tracking-tight">Bereit für den nächsten Schritt?</h2>
          <p className="mt-3 text-sm text-neutral-700">
            Nutzen Sie den Leitfaden, um Ihr nächstes Experiment zu planen, und melden Sie sich, wenn Sie Unterstützung bei Konzeption oder Umsetzung wünschen.
          </p>
          <div className="mt-5 flex flex-wrap justify-center gap-3">
            <Link
              href="/resources/ebook"
              className="inline-flex items-center rounded-xl bg-[#4B64F3] px-5 py-3 text-sm font-semibold text-white shadow-md transition hover:-translate-y-0.5 hover:opacity-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4B64F3]/40"
            >
              E-Book erhalten
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 rounded-xl border border-neutral-200 bg-white px-5 py-3 text-sm font-semibold text-neutral-900 transition hover:bg-neutral-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-300/60"
            >
              Services entdecken
              <ArrowIcon className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

function Highlight({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-left shadow-sm">
      <div className="text-xs font-semibold uppercase tracking-wide text-neutral-500">{label}</div>
      <div className="mt-1 text-sm text-neutral-800">{value}</div>
    </div>
  );
}

function Dot() {
  return <span className="mt-1 inline-flex h-2 w-2 min-w-[0.5rem] rounded-full bg-[#4B64F3]" />;
}

function CheckSmall({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" className={["h-4 w-4", className].filter(Boolean).join(" ")} fill="currentColor" aria-hidden>
      <path d="M8.793 13.293a1 1 0 0 1-1.414 0L4.5 10.414l1.414-1.414L8 11.086l5.086-5.086 1.414 1.414z" />
    </svg>
  );
}

function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" className={className} fill="currentColor" aria-hidden>
      <path d="M6 4h8v8h-2V7.414l-6.293 6.293-1.414-1.414L10.586 6H6z" />
    </svg>
  );
}
