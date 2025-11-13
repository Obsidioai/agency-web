import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum - Obsidio",
  description: "Pflichtangaben und Kontaktinformationen von Alexander Ripco e. U."
};

export default function ImpressumPage() {
  return (
    <main className="bg-[#F6F8FB] text-neutral-900">
      <section className="px-6 py-16 md:px-10">
        <div className="mx-auto max-w-2xl rounded-[28px] bg-white px-6 py-8 shadow-lg ring-1 ring-black/5 md:px-10 md:py-12">
          <span className="text-xs font-semibold uppercase tracking-wide text-neutral-600">Impressum</span>
          <h1 className="mt-3 text-3xl font-extrabold tracking-tight md:text-4xl">Alexander Ripco e. U.</h1>
          <div className="mt-6 space-y-4 text-sm text-neutral-700 md:text-base">
            <p>
              Adresse: Schenkendorfgasse 3{"\u2013"}5, 1210 Wien
            </p>
            <p className="flex flex-wrap items-center gap-2">
              <span>Kontakt:</span>
              <a className="font-semibold text-[#4B64F3] hover:underline" href="mailto:support@obsidioai.com">
                support@obsidioai.com
              </a>
              <span aria-hidden="true" className="text-neutral-300">{"\u2022"}</span>
              <a className="font-semibold text-[#4B64F3] hover:underline" href="tel:+436605823948">
                +43 660 5823948
              </a>
            </p>
            <div className="space-y-2">
              <p>
                <strong>Mitgliedschaften:</strong> Wirtschaftskammer {"\u00d6"}sterreich (WKO), Wirtschaftskammer Wien
              </p>
              <p>
                <strong>Zust{"\u00e4"}ndige Beh{"\u00f6"}rde:</strong> Gewerbebeh{"\u00f6"}rde der Stadt Wien (Magistrat)
              </p>
              <p>
                <strong>Anwendbare Vorschriften:</strong> Gewerbeordnung 1994 (RIS)
              </p>
              <p>
                <strong>GISA-Zahl:</strong> 38944772
              </p>
            </div>
            <div className="rounded-2xl border border-neutral-200 bg-[#F9FAFB] px-5 py-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-neutral-500">
                Offenlegung gem. {"\u00a7"} 25 Abs. 5 MedienG
              </p>
              <p className="mt-2">
                <span className="font-semibold">Medieninhaber:</span> Alexander Ripco
                <span aria-hidden="true" className="px-2 text-neutral-300">{"\u2022"}</span>
                <span className="font-semibold">Unternehmensgegenstand:</span> Entwicklung von KI-L{"\u00f6"}sungen & Automatisierung
                <span aria-hidden="true" className="px-2 text-neutral-300">{"\u2022"}</span>
                <span className="font-semibold">Wohnort/Sitz:</span> Wien
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
