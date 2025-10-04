import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum - Obsidio",
  description: "Legal disclosure and company details for Obsidio as required under §5 ECG and §14 UGB."
};

export default function ImpressumPage() {
  return (
    <main className="bg-[#F6F8FB] text-neutral-900">
      <section className="px-6 pt-10 md:px-10 md:pt-16">
        <div className="mx-auto max-w-3xl rounded-[28px] bg-white px-6 py-8 shadow-lg ring-1 ring-black/5 md:px-10 md:py-12">
          <span className="text-xs font-semibold uppercase tracking-wide text-neutral-600">Impressum</span>
          <h1 className="mt-3 text-3xl font-extrabold tracking-tight md:text-4xl">Angaben gemäß §5 ECG</h1>
          <p className="mt-3 text-sm text-neutral-700 md:text-base">
            Diese Seite fasst die wesentlichen Unternehmensangaben von Obsidio zusammen. Bitte wenden Sie sich im Zweifel direkt an uns, damit wir offene Fragen sofort klären können.
          </p>
        </div>
      </section>

      <section className="px-6 pb-16 md:px-10">
        <div className="mx-auto max-w-3xl space-y-8">
          <article className="rounded-2xl border border-neutral-200 bg-white px-6 py-6 shadow-sm md:px-8">
            <h2 className="text-xl font-bold md:text-2xl">Unternehmensdaten</h2>
            <div className="mt-4 space-y-2 text-sm text-neutral-700 md:text-base">
              <p>Obsidio GmbH</p>
              <p>Example Street 12/4</p>
              <p>1010 Wien, Österreich</p>
              <p>E-Mail: <a className="text-[#4B64F3] hover:underline" href="mailto:hello@obsidio.com">hello@obsidio.com</a></p>
              <p>Website: <a className="text-[#4B64F3] hover:underline" href="https://obsidio.com" rel="noopener noreferrer">https://obsidio.com</a></p>
            </div>
          </article>

          <article className="rounded-2xl border border-neutral-200 bg-white px-6 py-6 shadow-sm md:px-8">
            <h2 className="text-xl font-bold md:text-2xl">Vertretungsberechtigte</h2>
            <div className="mt-4 space-y-2 text-sm text-neutral-700 md:text-base">
              <p>Geschäftsführung: Max Mustermann, Anna Musterfrau</p>
              <p>Firmenbuchgericht: Handelsgericht Wien</p>
              <p>Firmenbuchnummer: FN 000000x</p>
              <p>UID-Nr.: ATU00000000</p>
            </div>
          </article>

          <article className="rounded-2xl border border-neutral-200 bg-white px-6 py-6 shadow-sm md:px-8">
            <h2 className="text-xl font-bold md:text-2xl">Haftung</h2>
            <div className="mt-4 space-y-4 text-sm text-neutral-700 md:text-base">
              <p>
                Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte externer Links. Für den Inhalt verlinkter Seiten sind ausschließlich deren Betreiber verantwortlich. Wir bemühen uns, die Informationen auf unserer Website stets aktuell, inhaltlich richtig und vollständig anzubieten. Dennoch kann das Auftreten von Fehlern nicht völlig ausgeschlossen werden.
              </p>
              <p>
                Sollten Sie auf problematische oder rechtswidrige Inhalte aufmerksam werden, ersuchen wir um eine entsprechende Mitteilung, damit wir die Inhalte prüfen und gegebenenfalls entfernen können.
              </p>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
