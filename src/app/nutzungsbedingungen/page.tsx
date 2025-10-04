import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Nutzungsbedingungen - Obsidio",
  description:
    "Verstehen Sie die Regeln für die Nutzung der Obsidio-Website und welche Pflichten und Rechte daraus entstehen.",
};

const LAST_UPDATED = "24. September 2025";

export default function NutzungsbedingungenPage() {
  return (
    <main className="bg-[#F6F8FB] text-neutral-900">
      <section className="px-6 pt-10 md:px-10 md:pt-16">
        <div
          className="mx-auto max-w-4xl rounded-[28px] bg-white px-6 py-8 shadow-lg ring-1 ring-black/5 md:px-10 md:py-12"
          style={{ background: "linear-gradient(135deg, rgba(184,167,255,0.35), rgba(127,216,190,0.35))" }}
        >
          <span className="text-xs font-semibold uppercase tracking-wide text-neutral-600">
            Nutzungsbedingungen
          </span>
          <h1 className="mt-3 text-3xl font-extrabold tracking-tight md:text-4xl">
            Die Regeln für Ihren Besuch auf unserer Website
          </h1>
          <p className="mt-3 max-w-3xl text-sm text-neutral-700 md:text-base">
            Diese Nutzungsbedingungen erklären, wie Sie unsere Inhalte verwenden dürfen, welche Pflichten Sie als Nutzer
            haben und wo die Grenzen unserer Verantwortlichkeit liegen.
          </p>
          <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-neutral-600">
            Letzte Aktualisierung: {LAST_UPDATED}
          </p>
        </div>
      </section>

      <section className="px-6 pb-16 md:px-10">
        <div className="mx-auto max-w-4xl space-y-10">
          <Section title="Geltungsbereich und Zustimmung zur Nutzungsbedingung">
            <p>
              Der Zugriff auf und die Nutzung dieser Website ("Website") der Obsidio (nachfolgend "Obsidio" oder "wir")
              erfolgen auf Grundlage der in diesem Dokument aufgeführten Nutzungsbedingungen. Bitte lesen Sie diese
              Bedingungen sorgfältig durch. Mit der Nutzung unserer Website erklären Sie sich mit diesen
              Nutzungsbedingungen einverstanden. Falls Sie nicht einverstanden sind, nutzen Sie unsere Website bitte nicht
              (clarityn.at).
            </p>
            <p>
              Diese Nutzungsbedingungen gelten für alle Besucher und Nutzer der Obsidio-Website. Sie regeln den erlaubten
              Gebrauch der Inhalte und Funktionen und legen die Rechte und Pflichten zwischen Ihnen als Nutzer und uns als
              Betreiber fest. Ergänzend gelten unsere Datenschutzerklärung sowie die im Impressum genannten Bestimmungen.
            </p>
            <p>
              Wir behalten uns das Recht vor, diese Nutzungsbedingungen jederzeit zu ändern oder zu aktualisieren, um
              rechtliche Änderungen oder Anpassungen unseres Angebots abzubilden. Änderungen treten in Kraft, sobald sie auf
              dieser Website veröffentlicht wurden. Bei wesentlichen Änderungen werden wir Sie durch einen Hinweis auf der
              Website darauf aufmerksam machen. Bitte prüfen Sie die Nutzungsbedingungen regelmäßig bei Ihren Besuchen, um
              über den aktuellen Stand informiert zu sein. Die weitere Nutzung der Website nach Veröffentlichung von
              Änderungen bedeutet, dass Sie die geänderten Bedingungen akzeptieren.
            </p>
          </Section>

          <Section title="Diensteangebot und Inhalte auf unserer Website">
            <p>
              Obsidio ist eine in Wien ansässige Agentur für KI-Beratung, Automatisierung, Workflow-Design,
              SaaS-Entwicklung und Chatbot-Integration. Unsere Website dient dazu, Ihnen Informationen über unser Unternehmen,
              unsere Leistungen und Themen aus dem Bereich künstliche Intelligenz bereitzustellen. Alle Inhalte auf dieser
              Website, wie Texte, Bilder, Grafiken oder Downloads (zum Beispiel E-Books), werden ohne Gewährleistung auf
              Vollständigkeit oder Richtigkeit bereitgestellt (clarityn.at). Sie stellen keine verbindlichen Angebote dar,
              sondern sollen einen ersten Überblick ermöglichen. Verträge über unsere Dienstleistungen kommen ausschließlich
              individuell – außerhalb der Website – zustande.
            </p>
            <p>
              Die Informationen auf der Website stellen auch keine Beratung dar. Insbesondere ersetzen technische Artikel
              oder Blog-Beiträge keine professionelle Beratung, die auf Ihre individuelle Situation zugeschnitten ist. Bei
              konkreten Anliegen empfehlen wir, direkten Kontakt mit uns aufzunehmen oder fachkundigen Rat einzuholen.
            </p>
          </Section>

          <Section title="Nutzungsregeln und Verantwortlichkeit des Nutzers">
            <h3 className="text-lg font-semibold">Zulässige Nutzung</h3>
            <p>
              Sie dürfen unsere Website nur im gesetzlichen Rahmen und gemäß diesen Nutzungsbedingungen verwenden. Gestattet
              ist der Aufruf der Seiten zum Zwecke der Information über Obsidio und unsere Dienstleistungen sowie zur
              Kontaktaufnahme.
            </p>
            <p>
              Erlaubt ist insbesondere: das Lesen von Inhalten, das Herunterladen von ausdrücklich bereitgestellten
              Materialien (zum Beispiel unseres kostenlosen E-Books), das Ausdrucken von Seiten für den eigenen Bedarf sowie
              die Kontaktaufnahme über bereitgestellte Kommunikationswege – dies alles ausschließlich für eigene,
              nicht-kommerzielle Zwecke beziehungsweise zur Anbahnung einer geschäftlichen Zusammenarbeit mit Obsidio.
            </p>
            <h3 className="mt-8 text-lg font-semibold">Verbotene Handlungen</h3>
            <p>Unzulässige Nutzungen der Website sind insbesondere (aber nicht abschließend):</p>
            <ul className="list-disc space-y-3 pl-5">
              <li>
                <strong>Gesetzeswidrige Nutzung:</strong> Jede Nutzung, die gegen geltende Gesetze oder Vorschriften verstößt, ist untersagt.
                Unterlassen Sie insbesondere Inhalte, die Persönlichkeitsrechte verletzen oder verleumderisch, obszön,
                beleidigend, hetzerisch oder sonst rechtswidrig sind.
              </li>
              <li>
                <strong>Störung der Website-Funktion:</strong> Maßnahmen, die die Website übermäßig belasten oder den ordnungsgemäßen Betrieb
                stören könnten, sind verboten. Dazu zählen die Verbreitung von Schadsoftware, Versuche des unautorisierten
                Zugriffs auf Server oder Datenbanken sowie jede Gefährdung der Sicherheit der Website. Technische Angriffe
                (zum Beispiel Denial-of-Service) werden rechtlich verfolgt.
              </li>
              <li>
                <strong>Automatisiertes Auslesen (Scraping):</strong> Der Einsatz automatisierter Systeme oder Software (Bots, Crawler,
                Scraping-Tools) zum Auslesen von Website-Daten ist ohne unsere ausdrückliche schriftliche Genehmigung nicht
                gestattet. Unsere Inhalte sind urheberrechtlich geschützt.
              </li>
              <li>
                <strong>Unzutreffende Angaben / Identitätsdiebstahl:</strong> Bei der Nutzung von Formularen müssen Sie wahrheitsgemäße Angaben
                machen und dürfen keine falschen Identitäten verwenden oder die Herkunft von Informationen verschleiern.
              </li>
              <li>
                <strong>Missbrauch von Kommunikationsfunktionen:</strong> Interaktive Bereiche (zum Beispiel Kommentare oder Chats) dürfen nicht
                für Spam, unerwünschte Werbung, Kettenbriefe oder das Hochladen unberechtigter Inhalte genutzt werden.
              </li>
            </ul>
            <p>
              Bei Verstößen behalten wir uns vor, den Zugriff zu sperren, rechtliche Schritte einzuleiten und Schadenersatz zu
              fordern. Als Nutzer haften Sie für sämtliche Schäden, die aus einer Missachtung dieser Nutzungsbedingungen
              resultieren.
            </p>
          </Section>

          <Section title="Geistiges Eigentum und Urheberrechte">
            <h3 className="text-lg font-semibold">Urheberrecht an Website-Inhalten</h3>
            <p>
              Der gesamte Inhalt unserer Website – einschließlich Texte, Bilder, Grafiken, Logos, Videos, Audiomaterial und
              Designelemente – ist urheberrechtlich geschützt. Soweit nicht anders gekennzeichnet, liegen die Urheberrechte
              bei Obsidio oder bei Dritten, die uns entsprechende Nutzungsrechte eingeräumt haben.
            </p>
            <p>
              Obsidio behält sich sämtliche Rechte an den Inhalten vor. Es werden keine Eigentums- oder Verwertungsrechte an
              Sie übertragen, außer in dem unten genannten eingeschränkten Umfang.
            </p>
            <h3 className="mt-8 text-lg font-semibold">Einräumung eines beschränkten Nutzungsrechts</h3>
            <p>Wir gestatten Ihnen, die Inhalte dieser Website unter folgenden Bedingungen zu verwenden:</p>
            <ul className="list-disc space-y-3 pl-5">
              <li>
                <strong>Nicht-kommerzielle Verwendung:</strong> Inhalte dürfen ausschließlich zu informativen Zwecken im Zusammenhang mit einer
                möglichen Geschäftsbeziehung mit Obsidio oder für den Eigenbedarf verwendet werden.
              </li>
              <li>
                <strong>Keine Veränderung:</strong> Inhalte dürfen nicht bearbeitet, verändert oder teilweise entnommen werden. Zitate müssen
                vollständig und unverfälscht wiedergegeben werden, inklusive zugehöriger Bilder oder Quellenangaben
                (clarityn.at).
              </li>
              <li>
                <strong>Urhebervermerke:</strong> Auf allen Vervielfältigungen müssen vorhandene Urheberrechts- und Markenhinweise unverändert
                übernommen werden.
              </li>
            </ul>
            <p>
              Materialien wie unser kostenloses E-Book dürfen Sie für den eigenen Gebrauch speichern, aber nicht online
              weiterveröffentlichen oder systematisch weiterverteilen. Für weitergehende Nutzungen kontaktieren Sie uns bitte
              unter info@obsidio.com, damit wir eine schriftliche Genehmigung prüfen können.
            </p>
            <h3 className="mt-8 text-lg font-semibold">Marken und Kennzeichen</h3>
            <p>
              Alle auf der Website genannten Marken, Logos und geschäftlichen Bezeichnungen von Obsidio sind – soweit nicht
              anders angegeben – markenrechtlich geschützt. Das Obsidio-Logo und der Name "Obsidio" dürfen ohne vorherige
              schriftliche Zustimmung nicht verwendet werden. Andere Produkt- und Firmennamen können Marken der jeweiligen
              Inhaber sein. Die unbefugte Nutzung solcher Marken oder Logos ist untersagt und kann Schutzrechte verletzen
              (clarityn.at).
            </p>
          </Section>

          <Section title="Haftungsausschluss">
            <h3 className="text-lg font-semibold">Inhaltliche Richtigkeit und Aktualität</h3>
            <p>
              Obsidio hat die Inhalte dieser Website mit größtmöglicher Sorgfalt erstellt und bemüht sich um regelmäßige
              Aktualisierung. Dennoch können wir keine Gewähr für die Richtigkeit, Vollständigkeit und Aktualität der
              Informationen übernehmen (clarityn.at). Die Nutzung der Inhalte erfolgt auf eigene Verantwortung und Gefahr des
              Nutzers.
            </p>
            <h3 className="mt-8 text-lg font-semibold">Technische Verfügbarkeit</h3>
            <p>
              Wir bemühen uns um eine durchgehende Verfügbarkeit der Website, übernehmen jedoch keine Garantie für eine
              unterbrechungsfreie Nutzung. Wartungen, technische Störungen oder höhere Gewalt können zu Ausfällen führen.
              Obsidio haftet nicht für Schäden, die aus einer temporären Nichtverfügbarkeit entstehen.
            </p>
            <h3 className="mt-8 text-lg font-semibold">Links und fremde Inhalte</h3>
            <p>
              Unsere Website kann Links zu externen Websites Dritter enthalten. Wir übernehmen keine Haftung für deren
              Inhalte, da wir darauf keinen Einfluss haben (clarityn.at). Für verlinkte Seiten sind ausschließlich die
              Betreiber verantwortlich. Bei Kenntnis rechtswidriger Inhalte entfernen wir entsprechende Links umgehend.
            </p>
            <p>
              Fremde Inhalte machen wir uns nicht zu eigen. Meinungen oder Ratschläge Dritter spiegeln nicht zwingend die
              Ansicht von Obsidio wider. Für Schäden, die aus der Nutzung solcher Informationen entstehen, übernehmen wir
              keine Haftung.
            </p>
            <h3 className="mt-8 text-lg font-semibold">Haftungsumfang</h3>
            <p>
              Obsidio haftet für Schäden – gleich aus welchem Rechtsgrund – nur bei Vorsatz und grober Fahrlässigkeit. Bei
              leichter Fahrlässigkeit haften wir lediglich für Schäden aus Verletzung von Leben, Körper oder Gesundheit oder
              bei Verletzung wesentlicher Vertragspflichten. In diesen Fällen ist die Haftung auf den vorhersehbaren,
              typischerweise eintretenden Schaden begrenzt.
            </p>
            <p>
              Soweit gesetzlich zulässig, schließen wir die Haftung für mittelbare Schäden oder Folgeschäden aus, insbesondere
              für entgangenen Gewinn, Betriebsunterbrechung, Verlust von Daten oder Ansprüche Dritter. Zwingende gesetzliche
              Haftung – etwa nach dem Produkthaftungsgesetz – bleibt unberührt.
            </p>
            <p>
              Nutzer sind verpflichtet, angemessene Maßnahmen zur Schadensabwehr und -minderung zu treffen, insbesondere durch
              Schutz des eigenen IT-Systems.
            </p>
          </Section>

          <Section title="Freistellung (Schad- und Klagloshaltung)">
            <p>
              Der Nutzer verpflichtet sich, Obsidio sowie unsere Mitarbeiter und Beauftragten von allen Ansprüchen Dritter
              freizustellen, die aufgrund einer rechtswidrigen Verwendung der Website, eines Verstoßes gegen diese
              Nutzungsbedingungen oder einer Verletzung von Rechten Dritter durch übermittelte Inhalte entstehen. Dazu gehört
              auch die Übernahme angemessener Rechtsverfolgungskosten auf Seiten von Obsidio.
            </p>
            <p>
              Wir informieren den Nutzer unverzüglich über geltend gemachte Ansprüche. Der Nutzer unterstützt uns bei der
              Abwehr und stellt alle notwendigen Informationen bereit. Weitergehende Rechte von Obsidio bleiben unberührt.
            </p>
          </Section>

          <Section title="Änderung und Einstellung der Website">
            <p>
              Obsidio behält sich das Recht vor, den Inhalt der Website jederzeit zu ändern, zu ergänzen, zu kürzen oder
              einzustellen. Funktionen können vorübergehend oder dauerhaft deaktiviert werden. Hieraus lassen sich keine
              Ansprüche gegenüber Obsidio ableiten; insbesondere besteht kein Anspruch auf dauerhafte Verfügbarkeit
              bestimmter Inhalte oder Funktionen.
            </p>
          </Section>

          <Section title="Anwendbares Recht und Gerichtsstand">
            <p>
              Für alle Streitigkeiten im Zusammenhang mit der Nutzung dieser Website gilt österreichisches Recht unter
              Ausschluss der Verweisungsnormen des internationalen Privatrechts. Die Anwendung des UN-Kaufrechts (CISG) wird
              ausdrücklich ausgeschlossen (clarityn.at).
            </p>
            <p>
              Ist der Nutzer Unternehmer im Sinne des UGB, ist ausschließlicher Gerichtsstand Wien, Österreich. Verbraucher mit
              Wohnsitz in der EU können Klagen in Wien oder vor dem Gericht ihres Wohnsitzstaates erheben. Gesetzlich
              zwingende Gerichtsstände bleiben unberührt.
            </p>
          </Section>

          <Section title="Salvatorische Klausel">
            <p>
              Sollten einzelne Bestimmungen dieser Nutzungsbedingungen unwirksam, nichtig oder undurchführbar sein, bleibt die
              Wirksamkeit der übrigen Bestimmungen unberührt. Anstelle der unwirksamen Klausel gilt eine Regelung als
              vereinbart, die dem wirtschaftlichen Zweck am nächsten kommt. Gleiches gilt für Regelungslücken.
            </p>
          </Section>

          <Section title="Kein Verzicht">
            <p>
              Wenn wir in einem Fall auf die Durchsetzung einer Bestimmung verzichten, bedeutet dies keinen Verzicht auf das
              Recht, diese oder andere Bestimmungen künftig durchzusetzen. Das Unterlassen der Geltendmachung eines Rechts
              stellt keinen Verzicht auf dieses Recht dar.
            </p>
          </Section>

          <Section title="Kontakt und Impressum">
            <p>
              Herausgeber dieser Website und verantwortlich für den Inhalt ist:
            </p>
            <address className="not-italic text-sm text-neutral-700 md:text-base">
              Obsidio
              <br />
              1234 Musterstraße, 1010 Wien, Österreich (Beispielanschrift)
              <br />
              E-Mail: {" "}
              <a href="mailto:contact@obsidio.com" className="text-[#4B64F3] hover:underline">
                contact@obsidio.com
              </a>
              <br />
              Telefon: +43-1-23456789 (Beispieltelefonnummer)
            </address>
            <p>
              Weitere Pflichtangaben entnehmen Sie bitte unserem Impressum. Für Fragen oder Anmerkungen zu diesen
              Nutzungsbedingungen stehen wir Ihnen jederzeit zur Verfügung. Vielen Dank für Ihren Besuch.
            </p>
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