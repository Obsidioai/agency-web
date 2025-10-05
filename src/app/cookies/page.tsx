import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Cookie-Einstellungen - Obsidio",
  description:
    "Erfahren Sie, wie Obsidio derzeit Cookies nutzt, wie sich die Kategorien unterscheiden und wie Sie Ihre Einstellungen jetzt und in Zukunft verwalten können.",
};

const LAST_UPDATED = "24. September 2025";

export default function CookiePreferencesPage() {
  return (
    <main className="bg-[#F6F8FB] text-neutral-900">
      <section className="px-6 pt-10 md:px-10 md:pt-16">
        <div
          className="mx-auto max-w-4xl rounded-[28px] bg-white px-6 py-8 shadow-lg ring-1 ring-black/5 md:px-10 md:py-12"
          style={{ background: "linear-gradient(135deg, rgba(184,167,255,0.35), rgba(127,216,190,0.35))" }}
        >
          <span className="text-xs font-semibold uppercase tracking-wide text-neutral-600">
            Cookie-Einstellungen
          </span>
          <h1 className="mt-3 text-3xl font-extrabold tracking-tight md:text-4xl">
            Ihre Cookie-Auswahl auf Obsidio.com
          </h1>
          <p className="mt-3 max-w-3xl text-sm text-neutral-700 md:text-base">
            Erfahren Sie, was Cookies sind, welche wir derzeit einsetzen (ausschließlich notwendige) und wie Sie künftige
            Kategorien steuern können, sobald wir unser Angebot erweitern.
          </p>
          <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-neutral-600">
            Zuletzt aktualisiert: {LAST_UPDATED}
          </p>
        </div>
      </section>

      <section className="px-6 pb-16 md:px-10">
        <div className="mx-auto max-w-4xl space-y-10">
          <Section title="Ihre Privatsphäre und Cookie-Einstellungen">
            <p>
              Obsidio verpflichtet sich, ein hervorragendes Nutzererlebnis zu bieten und gleichzeitig Ihre Privatsphäre zu
              schützen. Auf dieser Seite erfahren Sie, was Cookies sind, wie wir sie aktuell nur in minimalem Umfang einsetzen
              und wie Sie künftig einzelne Kategorien selbst verwalten können.
            </p>
          </Section>

          <Section title="Was sind Cookies?">
            <p>
              Cookies sind kleine Textdateien, die Websites an Ihren Browser senden und auf Ihrem Gerät speichern. Sie helfen
              Websites, effizient zu funktionieren, sich Einstellungen zu merken und Nutzungsinformationen zu sammeln. Cookies
              können von der besuchten Seite selbst (First-Party-Cookies) oder von eingebundenen Drittanbietern gesetzt werden.
              Jedes Cookie erfüllt einen Zweck – einige sind für die grundlegende Funktion unerlässlich, andere unterstützen
              Personalisierung, Analysen oder Werbung.
            </p>
          </Section>

          <Section title="Unsere aktuelle Cookienutzung">
            <p>
              Derzeit verwendet Obsidio ausschließlich Cookies, die für den Betrieb der Website unbedingt erforderlich sind.
              Wir setzen keine Analyse-, Werbe- oder anderen optionalen Cookies ein und verfolgen Ihr Verhalten daher nicht für
              Statistik- oder Marketingzwecke. Abgesehen von eventuell notwendigen Cookies, die Kernfunktionen ermöglichen, wird
              ohne Ihre Zustimmung nichts auf Ihrem Gerät gespeichert. Deshalb sehen Sie derzeit auch keinen Hinweis für
              optionale Cookies. Sobald wir zusätzliche Kategorien einführen (beispielsweise Analytics, um die Performance zu
              verstehen), aktualisieren wir diese Seite und unsere Einwilligungsprozesse entsprechend (cambridge.org).
            </p>
          </Section>

          <Section title="Cookie-Kategorien">
            <p>
              Cookies werden in der Regel in Kategorien gruppiert, die Sie einzeln verwalten können. So verstehen Sie, was jede
              Kategorie bedeutet und wie Obsidio künftig damit umgeht:
            </p>
            <article className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold">Unbedingt erforderliche Cookies (immer aktiv)</h3>
                <p>
                  Sie sind für die grundlegende Funktionalität und Sicherheit der Website unverzichtbar und können in unseren
                  Systemen nicht deaktiviert werden (cambridge.org). Sie reagieren auf Aktionen wie das Absenden eines
                  Kontaktformulars oder das Aufrechterhalten einer Sitzung. Sie speichern keine personenbezogenen Informationen
                  über das für ihren Zweck notwendige Maß hinaus. Wenn Sie sie in Ihrem Browser blockieren, können Teile der
                  Seite nicht mehr richtig funktionieren. Aktueller Stand: Wir setzen gegebenenfalls einen minimalen
                  Sitzungs-Identifikator, jedoch keine weiteren Cookies.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Funktionale Cookies</h3>
                <p>
                  Diese Cookies ermöglichen erweiterte Funktionen oder Personalisierung, zum Beispiel das Merken von
                  Spracheinstellungen oder Layouts. Sie können von uns oder von eingebetteten Drittanbietern gesetzt werden. Wenn
                  Sie sie deaktivieren, verringert sich der Komfort oder bestimmte Funktionen stehen nicht zur Verfügung.
                  Aktueller Stand: nicht im Einsatz. Sollten wir sie einführen, bleiben sie optional und erfordern Ihre
                  Zustimmung.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Analyse- / Performance-Cookies</h3>
                <p>
                  Analyse-Cookies sammeln aggregierte, anonyme Informationen darüber, wie Besucher die Seite nutzen - etwa
                  beliebte Seiten oder Fehlerraten -, damit wir Inhalte und Leistung verbessern können. Sie sind optional und
                  werden nur gesetzt, wenn Sie ausdrücklich zustimmen (cambridge.org). Aktueller Stand: Derzeit nicht im Einsatz.
                  Vor Einführung entsprechender Tools fragen wir nach Ihrer Einwilligung.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Marketing- / Werbe-Cookies</h3>
                <p>
                  Sie dienen dazu, relevantere Werbung bereitzustellen und den Erfolg von Kampagnen zu messen. Diese Cookies
                  werden meist von Werbepartnern gesetzt und verfolgen das Surfverhalten über mehrere Websites hinweg. Sie sind
                  optional und werden nur mit Ihrer expliziten Zustimmung aktiviert. Aktueller Stand: werden derzeit nicht
                  verwendet.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Weitere Drittanbieter-Cookies</h3>
                <p>
                  Einzelne Funktionen wie eingebettete Videos oder Social-Sharing-Tools können zusätzliche Cookies setzen, die in
                  die obigen Kategorien fallen. Sie werden nur ausgelöst, wenn Sie die Funktion nutzen, und wir informieren Sie im
                  Voraus klar über Zweck und Einwilligungsoptionen.
                </p>
              </div>
            </article>
          </Section>

          <Section title="Ihre Cookie-Einstellungen verwalten">
            <p>
              Sobald wir nicht notwendige Cookies einführen, sehen Sie ein Einwilligungsbanner, mit dem Sie jede Kategorie - mit
              Ausnahme der unbedingt erforderlichen Cookies - aktivieren oder deaktivieren können. Zusätzlich finden Sie
              jederzeit einen Link "Cookie-Einstellungen" (typischerweise im Footer), um Ihre Auswahl anzupassen. Wir
              respektieren Ihre Entscheidung, indem wir nur die Kategorien laden, denen Sie zugestimmt haben.
            </p>
            <p>
              <strong>Browser-Steuerung:</strong> Sie können Cookies auch über die Datenschutzeinstellungen Ihres Browsers verwalten (pwc.com).
              Öffnen Sie dazu die Einstellungen Ihres bevorzugten Browsers und passen Sie dort Cookies nach Ihren Bedürfnissen
              an. Die meisten Browser erlauben es, Cookies generell oder für einzelne Websites zu blockieren oder zu löschen.
              Bedenken Sie, dass das Blockieren aller Cookies grundlegende Funktionen beeinträchtigen kann - einschließlich
              unserer Möglichkeit, Ihre Präferenzen zu speichern -, weil auch das auf einem notwendigen Cookie beruht. Erlauben
              Sie daher idealerweise essentielle Cookies und blockieren Sie andere, bis Sie Ihre Zustimmung erteilen.
            </p>
            <p>
              <strong>Do-Not-Track-Signale:</strong> Manche Browser senden ein Do-Not-Track-Signal, doch es gibt keinen Branchenstandard für die
              Auslegung. Angesichts unserer minimalen Cookie-Nutzung werden Sie derzeit faktisch nicht verfolgt. Sollten wir
              Tracking-Technologien einführen, haben die von Ihnen im Einwilligungstool gesetzten Präferenzen Vorrang, und wir
              aktualisieren diese Seite, falls sich unser Vorgehen ändert.
            </p>
          </Section>

          <Section title="Zukünftige Aktualisierungen und weitere Informationen">
            <p>
              Wir aktualisieren diese Seite, sobald sich unsere Cookie-Praxis ändert - etwa wenn wir Analytics implementieren
              oder Werbekampagnen mit Cookies starten. Über zukünftige Änderungen informieren wir Sie umgehend; das Datum
              "Zuletzt aktualisiert" spiegelt jede Anpassung wider. Wir empfehlen, die Seite regelmäßig zu prüfen.
            </p>
            <p>
              Nützliche Ressourcen:
            </p>
            <ul className="list-disc space-y-3 pl-5">
              <li>
                <a href="https://www.aboutcookies.org" className="text-[#4B64F3] hover:underline">
                  AllAboutCookies (aboutcookies.org)
                </a>
                - Anleitungen zum Verwalten von Cookies in gängigen Browsern (pwc.com).
              </li>
              <li>
                <a href="https://www.youronlinechoices.eu" className="text-[#4B64F3] hover:underline">
                  YourOnlineChoices.eu
                </a>
                - EU-weites Opt-out-Portal für zahlreiche Werbe-Cookies.
              </li>
              <li>
                <a href="https://optout.networkadvertising.org" className="text-[#4B64F3] hover:underline">
                  Network Advertising Initiative opt-out
                </a>
                - Zusätzliche Kontrollmöglichkeiten für zielgruppenbasierte Werbenetzwerke.
              </li>
            </ul>
            <p>
              Hinweis: Durch die Nutzung dieser Dienste wird eventuell ein Opt-out-Cookie gesetzt. Wenn Sie Cookies löschen,
              müssen Sie den Vorgang möglicherweise wiederholen.
            </p>
          </Section>

          <Section title="Kontakt">
            <p>
              Fragen zu unserer Cookienutzung oder zu Ihren Einstellungen? Schreiben Sie uns an
              <a href="mailto:privacy@obsidio.com" className="text-[#4B64F3] hover:underline">privacy@obsidio.com</a>, wir helfen Ihnen gern
              weiter.
            </p>
            <p>
              Vielen Dank, dass Sie sich Zeit für unsere Cookie-Einstellungen genommen haben. Während Obsidio wächst, führen wir
              Analyse- oder Personalisierungsfunktionen mit Bedacht ein und geben Ihnen jederzeit transparente Kontrolle über
              Ihre Daten.
            </p>
            <p>Viel Freude beim Surfen - mit oder ohne Cookies!</p>
          </Section>
        </div>
      </section>
    </main>
  );
}

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <article className="rounded-2xl border border-neutral-200 bg-white px-6 py-6 shadow-sm md:px-8 md:py-7">
      <h2 className="text-xl font-bold md:text-2xl">{title}</h2>
      <div className="mt-4 space-y-4 text-sm text-neutral-700 md:text-base">{children}</div>
    </article>
  );
}
