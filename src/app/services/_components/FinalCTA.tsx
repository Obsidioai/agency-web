import Link from "next/link";

const commitments = [
  "30-minuetiges Erstgespraech mit einem Automation Lead",
  "Skizze einer Roadmap mit 2 bis 3 schnellen Erfolgen",
  "Security- und Compliance-Check abgestimmt auf Ihren Stack"
];

export default function FinalCTA() {
  return (
    <section className="px-6 pb-20 pt-16 md:px-10">
      <div className="mx-auto max-w-5xl overflow-hidden rounded-[32px] border border-white/70 bg-gradient-to-br from-[#0F172A] via-[#111C3A] to-[#17314D] text-white shadow-xl">
        <div className="grid gap-10 px-8 py-10 md:grid-cols-[1.2fr_1fr] md:px-12 md:py-12">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white/80">
              Naechster Schritt
            </span>
            <h2 className="mt-5 text-3xl font-bold tracking-tight md:text-4xl">
              Gemeinsam planen wir Ihren ersten (oder naechsten) KI-Erfolg
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/80 md:text-base">
              Teilen Sie Ihre groesste Herausforderung, wir bringen den Bauplan mit. Nach einem kurzen Erstgespraech erhalten Sie einen massgeschneiderten Aktionsplan, eine Aufwandsschaetzung und Leitplanken, die Stakeholder sichern.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-white/85">
              {commitments.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-[#4B64F3]" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-neutral-900 shadow-md transition hover:-translate-y-0.5 hover:bg-neutral-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4B64F3]/40"
              >
                Erstgespraech buchen
              </Link>
            </div>
          </div>

          <aside className="flex flex-col justify-between rounded-[24px] border border-white/10 bg-white/5 p-6 backdrop-blur">
            <div>
              <h3 className="text-lg font-semibold text-white md:text-xl">So arbeiten wir zusammen</h3>
              <p className="mt-2 text-base text-white/80 md:text-lg">
                Wir richten uns an gemeinsamen Zielen aus, definieren Messpunkte fuer Wirkung und planen das Change Management parallel zum Build.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
