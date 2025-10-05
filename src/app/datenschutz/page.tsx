import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Datenschutzerklärung - Obsidio",
  description:
    "Erfahren Sie, welche personenbezogenen Daten Obsidio verarbeitet, zu welchen Zwecken wir sie nutzen und welche Rechte Sie nach der DSGVO besitzen.",
};

const LAST_UPDATED = "24. September 2025";

export default function DatenschutzPage() {
  return (
    <main className="bg-[#F6F8FB] text-neutral-900">
      <section className="px-6 pt-10 md:px-10 md:pt-16">
        <div
          className="mx-auto max-w-4xl rounded-[28px] bg-white px-6 py-8 shadow-lg ring-1 ring-black/5 md:px-10 md:py-12"
          style={{ background: "linear-gradient(135deg, rgba(184,167,255,0.35), rgba(127,216,190,0.35))" }}
        >
          <span className="text-xs font-semibold uppercase tracking-wide text-neutral-600">Datenschutzerklärung</span>
          <h1 className="mt-3 text-3xl font-extrabold tracking-tight md:text-4xl">
            Wie wir mit Ihren personenbezogenen Daten umgehen
          </h1>
          <p className="mt-3 max-w-3xl text-sm text-neutral-700 md:text-base">
            Obsidio verarbeitet nur so viele Daten wie nötig, hält sie aktuell und geschützt und bietet Ihnen transparente
            Möglichkeiten, Ihre Rechte nach der DSGVO wahrzunehmen.
          </p>
          <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-neutral-600">
            Letzte Aktualisierung: {LAST_UPDATED}
          </p>
        </div>
      </section>

      <section className="px-6 pb-16 md:px-10">
        <div className="mx-auto max-w-4xl space-y-10">
          <Section title="Einleitung">
            <p>
              Obsidio (wir oder uns), ein in Wien, Österreich ansässiges KI-Unternehmen, nimmt den Schutz Ihrer
              personenbezogenen Daten sehr ernst. Mit dieser Datenschutzerklärung informieren wir Sie gemäß der
              Datenschutz-Grundverordnung (DSGVO) und dem österreichischen Datenschutzgesetz darüber, welche
              personenbezogenen Daten wir auf unserer Website erheben, wie wir diese verarbeiten und welche Rechte Ihnen
              zustehen. Wir verarbeiten Daten ausschließlich rechtmäßig, nachvollziehbar und für festgelegte Zwecke. Dabei
              erheben wir nur so viele Daten, wie wir benötigen, halten sie aktuell, speichern sie nur so lange, wie es erforderlich
              ist und schützen sie durch angemessene technische sowie organisatorische Maßnahmen. Durch die Nutzung dieser
              Website erklären Sie sich mit dieser Datenschutzerklärung einverstanden.
            </p>
          </Section>

          <Section title="Verantwortlicher">
            <p>
              Verantwortlich für die Datenverarbeitung im Sinne der DSGVO ist Obsidio, Wien, Österreich. Wenn Sie Fragen oder
              Anliegen zum Datenschutz haben, können Sie uns jederzeit unter <a href="mailto:privacy@obsidio.com" className="text-[#4B64F3] hover:underline">privacy@obsidio.com</a> kontaktieren.
              Alternativ erreichen Sie uns über die im Abschnitt Ihre Ansprechperson / Kontakt genannten Kontaktdaten.
            </p>
          </Section>

          <Section title="Welche Daten wir verarbeiten">
            <p>Wir verarbeiten auf unserer Website nur so wenige personenbezogene Daten wie möglich. Dazu gehören insbesondere:</p>
            <ul className="list-disc space-y-3 pl-5">
              <li>
                <strong>E-Mail-Adressen:</strong> Wenn Sie auf unserer Website Ihre E-Mail-Adresse angeben, um unser kostenloses
                E-Book zu erhalten, speichern wir diese Adresse, um Ihnen das E-Book zusenden zu können. Geben Sie Ihre E-Mail-Adresse
                über das Kontaktformular an, verwenden wir sie, um Ihre Anfrage zu beantworten. Ergänzend übermittelte Kontaktdaten wie
                Ihr Name oder Ihre Telefonnummer nutzen wir ausschließlich zur Bearbeitung Ihres Anliegens.
              </li>
              <li>
                <strong>Nachrichteninhalte:</strong> Über das Kontaktformular können Sie uns eine Nachricht senden. Wir verarbeiten den
                Inhalt Ihrer Nachricht und alle darin enthaltenen personenbezogenen Informationen, um Ihr Anliegen zu verstehen und zu
                beantworten. Bitte übermitteln Sie nur Informationen, die für Ihre Anfrage erforderlich sind, und keine sensiblen Daten, die
                wir nicht benötigen.
              </li>
              <li>
                <strong>Technische Nutzungsdaten:</strong> Bei jedem Zugriff auf unsere Website werden automatisch bestimmte technische
                Daten erfasst. Dazu zählen die IP-Adresse des anfragenden Geräts, Datum und Uhrzeit des Zugriffs, der verwendete Browsertyp
                sowie das Betriebssystem. Diese Informationen werden in Server-Logfiles gespeichert und helfen uns, die Website stabil zu
                betreiben, Fehler zu analysieren und unbefugte Zugriffe zu verhindern.
              </li>
            </ul>
            <p>
              Wir verarbeiten keine besonderen Kategorien personenbezogener Daten (zum Beispiel Gesundheitsdaten). Sollten uns solche
              Informationen dennoch übermittelt werden, löschen wir sie unverzüglich, soweit keine gesetzlichen Aufbewahrungspflichten
              entgegenstehen.
            </p>
          </Section>

          <Section title="Zwecke und Rechtsgrundlagen der Verarbeitung">
            <p>Wir verarbeiten die genannten Daten ausschließlich zu folgenden Zwecken:</p>
            <ul className="list-disc space-y-3 pl-5">
              <li>Bereitstellung unserer Website, einschließlich der technischen Administration und IT-Sicherheit.</li>
              <li>Beantwortung von Kontaktanfragen und Kommunikation mit Interessenten, Kunden und Partnern.</li>
              <li>Versand angeforderter Inhalte wie unseres E-Books und Nachverfolgung der dazugehörigen Kommunikation.</li>
              <li>Wahrung berechtigter Interessen wie die Verbesserung unseres Angebots und die Abwehr von Missbrauch.</li>
            </ul>
            <p>Die Verarbeitung stützt sich je nach Situation auf die folgenden Rechtsgrundlagen gemäß Art. 6 Abs. 1 DSGVO:</p>
            <ul className="list-disc space-y-3 pl-5">
              <li>
                <strong>lit. b:</strong> Zur Erfüllung vertraglicher Pflichten oder zur Durchführung vorvertraglicher Maßnahmen, etwa wenn
                wir auf Ihre Anfrage reagieren oder Ihnen angeforderte Inhalte zur Verfügung stellen.
              </li>
              <li>
                <strong>lit. a:</strong> Auf Basis Ihrer Einwilligung, beispielsweise wenn Sie uns freiwillig zusätzliche Informationen
                mitteilen oder dem Erhalt von Informationen zustimmen.
              </li>
              <li>
                <strong>lit. f:</strong> Zur Wahrung unserer berechtigten Interessen an einem sicheren und reibungslosen Betrieb der Website,
                sofern keine überwiegenden Interessen oder Grundrechte der betroffenen Personen entgegenstehen.
              </li>
            </ul>
            <p>
              Wenn wir Ihre Daten auf Grundlage einer Einwilligung verarbeiten, können Sie diese Einwilligung jederzeit für die Zukunft
              widerrufen. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Verarbeitung bleibt davon unberührt.
            </p>
          </Section>

          <Section title="Weitergabe von Daten an Dritte">
            <p>
              Wir übermitteln Ihre personenbezogenen Daten nur an Dritte, wenn dies zur Erfüllung des jeweiligen Zwecks erforderlich ist,
              wenn wir gesetzlich dazu verpflichtet sind oder wenn wir eine Einwilligung von Ihnen erhalten haben. Zu den Empfängern können
              insbesondere IT-Dienstleister, Hosting- und Supportanbieter oder E-Mail-Dienstleister gehören, die wir sorgfältig auswählen und
              vertraglich nach Art. 28 DSGVO zur vertraulichen und sicheren Verarbeitung verpflichten.
            </p>
            <p>
              Eine weitergehende Kommerzialisierung Ihrer Daten findet nicht statt. Wir verkaufen Ihre personenbezogenen Daten nicht und geben
              sie nicht an Dritte zu Werbezwecken weiter.
            </p>
          </Section>

          <Section title="Internationale Datenübermittlung">
            <p>
              Eine Übermittlung personenbezogener Daten in Staaten außerhalb der Europäischen Union beziehungsweise des Europäischen
              Wirtschaftsraums findet derzeit nicht statt. Sollte sich dies ändern und eine Übermittlung an Dritte in sogenannten Drittländern
              erforderlich werden, informieren wir Sie vorab und stellen sicher, dass ein angemessenes Datenschutzniveau besteht, etwa durch
              den Abschluss der EU-Standardvertragsklauseln oder aufgrund eines Angemessenheitsbeschlusses der Europäischen Kommission.
            </p>
          </Section>

          <Section title="Speicherdauer">
            <p>
              Wir speichern personenbezogene Daten nur so lange, wie es für die Erfüllung der genannten Zwecke erforderlich ist oder wie es
              gesetzliche Aufbewahrungspflichten vorsehen. Sobald der Zweck entfällt und keine gesetzliche Pflicht entgegensteht, löschen wir
              die Daten oder schränken die Verarbeitung ein.
            </p>
            <ul className="list-disc space-y-3 pl-5">
              <li>
                Kontaktdaten aus Anfragen löschen wir spätestens zwölf Monate nach Abschluss der Kommunikation, sofern keine weiteren
                gesetzlichen Pflichten eine längere Speicherung erfordern.
              </li>
              <li>
                Server-Logfiles werden zur Erkennung von Störungen und aus Sicherheitsgründen in der Regel für 30 Tage gespeichert und danach
                automatisch gelöscht oder anonymisiert.
              </li>
            </ul>
            <p>
              Wenn gesetzliche Aufbewahrungsfristen (zum Beispiel nach Unternehmens- oder Steuerrecht) bestehen, bewahren wir die betreffenden
              Daten für die Dauer dieser Fristen auf und sperren sie für eine anderweitige Nutzung.
            </p>
          </Section>

          <Section title="Ihre Rechte als betroffene Person">
            <p>Sie haben im Rahmen der DSGVO folgende Rechte gegenüber Obsidio:</p>
            <ul className="list-disc space-y-3 pl-5">
              <li>
                <strong>Auskunft:</strong> Sie können Auskunft darüber verlangen, ob und welche personenbezogenen Daten wir über Sie verarbeiten
                (Art. 15 DSGVO).
              </li>
              <li>
                <strong>Berichtigung:</strong> Sie können die Berichtigung unrichtiger oder die Ergänzung unvollständiger Daten verlangen
                (Art. 16 DSGVO).
              </li>
              <li>
                <strong>Löschung:</strong> Sie können die Löschung Ihrer Daten verlangen, sofern keine gesetzlichen Aufbewahrungspflichten oder
                überwiegenden Interessen entgegenstehen (Art. 17 DSGVO).
              </li>
              <li>
                <strong>Einschränkung:</strong> Sie haben das Recht, die Verarbeitung unter bestimmten Voraussetzungen einschränken zu lassen
                (Art. 18 DSGVO).
              </li>
              <li>
                <strong>Widerspruch:</strong> Sie können aus Gründen, die sich aus Ihrer besonderen Situation ergeben, jederzeit Widerspruch gegen
                die Verarbeitung Ihrer Daten einlegen (Art. 21 DSGVO).
              </li>
              <li>
                <strong>Datenübertragbarkeit:</strong> Sie können die Herausgabe oder Übermittlung der Daten verlangen, die Sie uns bereitgestellt
                haben (Art. 20 DSGVO).
              </li>
              <li>
                <strong>Widerruf von Einwilligungen:</strong> Eine erteilte Einwilligung können Sie jederzeit mit Wirkung für die Zukunft
                widerrufen.
              </li>
            </ul>
            <p>
              Zur Ausübung Ihrer Rechte genügt eine formlose Mitteilung an die unten angegebenen Kontaktdaten. Zudem haben Sie das Recht, sich
              bei einer Datenschutzaufsichtsbehörde zu beschweren. Für Österreich ist dies die Österreichische Datenschutzbehörde.
            </p>
          </Section>

          <Section title="Datensicherheit">
            <p>
              Wir treffen umfangreiche technische und organisatorische Maßnahmen, um Ihre Daten vor Verlust, Manipulation, unbefugtem Zugriff
              und anderen Risiken zu schützen. Dazu zählen unter anderem Verschlüsselungstechnologien wie TLS, Zugriffsbeschränkungen,
              Berechtigungskonzepte und regelmäßige Überprüfungen unserer Sicherheitsmaßnahmen. Unsere Dienstleister sind verpflichtet, ein
              vergleichbares Schutzniveau einzuhalten.
            </p>
          </Section>

          <Section title="Einsatz von Cookies und ähnlichen Technologien">
            <p>
              Wir setzen derzeit nur technisch notwendige Cookies ein, die für den Betrieb der Website und die Bereitstellung der angeforderten
              Funktionen erforderlich sind. Diese Cookies speichern keine personenbezogenen Profile und werden in der Regel nach Ablauf der
              Sitzung gelöscht.
            </p>
            <p>
              Sollten wir künftig optionale Cookies (zum Beispiel für Analysen oder Marketing) einsetzen, informieren wir Sie darüber, holen
              Ihre Einwilligung ein und bieten Ihnen eine komfortable Möglichkeit, Ihre Präferenzen anzupassen. Details dazu finden Sie dann in
              einer gesonderten Cookie-Übersicht.
            </p>
            <p>
              Über Ihre Browsereinstellungen können Sie Cookies jederzeit löschen oder das Setzen von Cookies einschränken. Bitte beachten Sie,
              dass dadurch einige Funktionen unserer Website möglicherweise nur eingeschränkt verfügbar sind.
            </p>
          </Section>

          <Section title="Datensicherheit bei externen Links">
            <p>
              Unsere Website kann Links zu anderen Websites enthalten, etwa zu Partnerunternehmen, sozialen Netzwerken oder zitierten Quellen.
              Diese externen Websites werden von Dritten betrieben und unterliegen nicht dieser Datenschutzerklärung. Sobald Sie unsere Website
              verlassen, haben wir keinen Einfluss darauf, wie die jeweiligen Anbieter mit Ihren Daten umgehen. Wir empfehlen Ihnen, die
              Datenschutzerklärungen der verlinkten Websites zu lesen. Für deren Inhalte und Datenschutzmaßnahmen übernehmen wir keine Haftung.
            </p>
          </Section>

          <Section title="Kinder und Minderjährige">
            <p>
              Unser Online-Angebot richtet sich an geschäftliche Nutzerinnen und Nutzer sowie an Erwachsene. Personen unter 14 Jahren (oder
              unter 16 Jahren, wenn das jeweils anwendbare Recht dies vorsieht) sollten uns ohne Zustimmung der Erziehungsberechtigten keine
              personenbezogenen Daten übermitteln. Wir fordern Kinder nicht gezielt auf, Daten bereitzustellen. Sollten uns dennoch Daten von
              Minderjährigen bekannt werden, löschen wir diese unverzüglich. Eltern oder Sorgeberechtigte können uns kontaktieren, wenn sie
              vermuten, dass ein Minderjähriger Daten an uns übermittelt hat.
            </p>
          </Section>

          <Section title="Ihre Ansprechperson / Kontakt">
            <p>
              Für Anliegen zum Datenschutz, etwa Auskunftsersuchen, Widerrufe oder sonstige Betroffenenrechte, stehen wir Ihnen jederzeit zur
              Verfügung. Bitte richten Sie Ihr Anliegen an:
            </p>
            <address className="not-italic text-sm text-neutral-700 md:text-base">
              Obsidio - Datenschutz
              <br />
              Wien, Österreich
              <br />
              E-Mail: <a href="mailto:privacy@obsidioai.com" className="text-[#4B64F3] hover:underline">privacy@obsidioai.com</a>
            </address>
            <p>Wir bearbeiten Ihre Anfrage so rasch wie möglich und melden uns spätestens innerhalb der gesetzlichen Fristen.</p>
          </Section>

          <Section title="Änderungen dieser Datenschutzerklärung">
            <p>
              Wir behalten uns vor, diese Datenschutzerklärung anzupassen, sobald neue gesetzliche Vorgaben, technische Entwicklungen oder
              Änderungen unserer Dienstleistungen dies erforderlich machen. Die jeweils aktuelle Fassung ist jederzeit auf dieser Website unter
              der Rubrik Datenschutz verfügbar.
            </p>
            <p>
              Bei wesentlichen Änderungen informieren wir Sie deutlich auf unserer Website und holen, sofern erforderlich, Ihre erneute
              Einwilligung ein. Das Datum der letzten Aktualisierung finden Sie am Anfang dieser Erklärung.
            </p>
            <p>(Stand dieser Datenschutzerklärung: September 2025)</p>
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
