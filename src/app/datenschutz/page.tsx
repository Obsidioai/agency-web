import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "DatenschutzerklÃ¤rung - Obsidio",
  description:
    "Erfahren Sie, welche personenbezogenen Daten Obsidio verarbeitet, zu welchen Zwecken wir sie nutzen und welche Rechte Sie nach DSGVO besitzen.",
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
          <span className="text-xs font-semibold uppercase tracking-wide text-neutral-600">
            DatenschutzerklÃ¤rung
          </span>
          <h1 className="mt-3 text-3xl font-extrabold tracking-tight md:text-4xl">
            Wie wir mit Ihren personenbezogenen Daten umgehen
          </h1>
          <p className="mt-3 max-w-3xl text-sm text-neutral-700 md:text-base">
            Obsidio verarbeitet nur so viele Daten wie nÃ¶tig, hÃ¤lt sie aktuell und geschÃ¼tzt und gibt Ihnen klare
            MÃ¶glichkeiten, Ihre Rechte nach der DSGVO wahrzunehmen.
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
              Obsidio ("wir" oder "uns"), ein in Wien, Ã–sterreich ansÃ¤ssiges AI-Digitalunternehmen, nimmt den Schutz Ihrer
              persÃ¶nlichen Daten sehr ernst. In dieser DatenschutzerklÃ¤rung informieren wir Sie gemÃ¤ÃŸ der
              Datenschutz-Grundverordnung (DSGVO) und dem Ã¶sterreichischen Datenschutzgesetz darÃ¼ber, welche
              personenbezogenen Daten wir auf unserer Website erheben, wie wir diese verarbeiten und welche Rechte Ihnen in
              Bezug auf Ihre Daten zustehen. Unsere Datenschutzpraktiken orientieren sich an den Grundprinzipien der DSGVO
              - wir verarbeiten Daten nur auf rechtmÃ¤ÃŸige und transparente Weise fÃ¼r legitime Zwecke, erheben nicht mehr
              Daten als nÃ¶tig, halten die Daten richtig und aktuell, speichern sie nicht lÃ¤nger als erforderlich und
              schÃ¼tzen sie angemessen (ironcladapp.com). Durch die Nutzung dieser Website erklÃ¤ren Sie sich mit dieser
              DatenschutzerklÃ¤rung einverstanden.
            </p>
          </Section>

          <Section title="Verantwortlicher">
            <p>
              Verantwortlich fÃ¼r die Datenverarbeitung im Sinne der DSGVO ist Obsidio, Wien, Ã–sterreich. Wenn Sie Fragen
              oder Anliegen zum Datenschutz haben, kÃ¶nnen Sie uns jederzeit unter {" "}
              <a href="mailto:privacy@obsidio.com" className="text-[#4B64F3] hover:underline">
                privacy@obsidio.com
              </a>{" "}
              kontaktieren.
            </p>
          </Section>

          <Section title="Welche Daten wir verarbeiten">
            <p>Wir verarbeiten auf unserer Website nur so wenige personenbezogene Daten wie mÃ¶glich. Im Wesentlichen betrifft dies:</p>
            <ul className="list-disc space-y-3 pl-5">
              <li>
                <strong>E-Mail-Adressen:</strong> Wenn Sie auf unserer Website Ihre E-Mail-Adresse eingeben, um unser kostenloses E-Book zu
                erhalten, erheben wir Ihre E-Mail-Adresse, um Ihnen das E-Book zusenden zu kÃ¶nnen. Ebenso erfassen wir Ihre
                E-Mail-Adresse, wenn Sie uns Ã¼ber unser Kontaktformular anschreiben, damit wir Ihnen antworten kÃ¶nnen.
                ZusÃ¤tzlich zur E-Mail kÃ¶nnen Sie freiwillig weitere Kontaktdaten angeben (zum Beispiel Namen oder
                Telefonnummer), die wir entsprechend verarbeiten, um Ihre Anfrage zu bearbeiten.
              </li>
              <li>
                <strong>Nachrichteninhalte:</strong> Im Kontaktformular kÃ¶nnen Sie eine Nachricht an uns senden. Wir verarbeiten den Inhalt Ihrer
                Nachricht und etwaige darin enthaltene personenbezogene Informationen, um Ihr Anliegen zu verstehen und zu
                beantworten. Bitte Ã¼bermitteln Sie im Nachrichtenfeld nur Informationen, die fÃ¼r Ihre Anfrage relevant sind,
                und keine sensiblen Daten, die wir nicht benÃ¶tigen.
              </li>
              <li>
                <strong>Technische Nutzungsdaten:</strong> Bei jedem Zugriff auf unsere Website werden automatisch bestimmte technische Daten
                erfasst - dazu kÃ¶nnen die IP-Adresse des anfragenden GerÃ¤ts, Datum und Uhrzeit des Zugriffs, der verwendete
                Browsertyp und das Betriebssystem gehÃ¶ren. Diese Informationen werden in Server-Logfiles gespeichert. Wir
                nutzen diese technischen Daten ausschlieÃŸlich fÃ¼r den Betrieb und die Sicherheit der Website (zum Beispiel zur
                Abwehr von Angriffsversuchen) und nicht, um RÃ¼ckschlÃ¼sse auf Ihre Person zu ziehen. Dennoch gelten auch
                IP-Adressen unter UmstÃ¤nden als personenbezogene Daten im Sinne der DSGVO (europa.eu). Wir behandeln daher
                auch diese Protokolldaten vertraulich und kombinieren sie nicht mit anderen DatenbestÃ¤nden.
              </li>
              <li>
                <strong>Keine besonderen Kategorien von Daten:</strong> Wir erheben keine besonderen Kategorien personenbezogener Daten gemÃ¤ÃŸ
                Art. 9 DSGVO (wie zum Beispiel Gesundheitsdaten, ethnische Herkunft oder politische Meinungen). Unsere
                Website richtet sich an GeschÃ¤ftsleute und erfordert weder die Erstellung von Benutzerkonten noch die Eingabe
                sensibler Informationen. Bitte Ã¼bermitteln Sie uns auch keine solchen Daten Ã¼ber das Kontaktformular.
              </li>
              <li>
                <strong>Keine Nutzungsprofile oder Tracking:</strong> Wir setzen derzeit keine Tracking-Technologien (wie Google Analytics oder
                Werbecookies) ein, um Ihr Nutzerverhalten auf unserer Website auszuwerten. Wir verwenden nur unbedingt
                erforderliche technische Cookies, sofern solche fÃ¼r den Betrieb der Seite nÃ¶tig sind (siehe Abschnitt Cookies
                weiter unten). Es findet kein Profiling statt, und es werden keine Nutzungsprofile von Ihnen erstellt.
              </li>
            </ul>
          </Section>

          <Section title="Zwecke und Rechtsgrundlagen der Verarbeitung">
            <p>
              Wir verarbeiten Ihre personenbezogenen Daten ausschlieÃŸlich zu den in dieser ErklÃ¤rung genannten Zwecken und
              auf Basis der jeweils einschlÃ¤gigen Rechtsgrundlagen der DSGVO:
            </p>
            <ul className="list-disc space-y-3 pl-5">
              <li>
                <strong>Anforderung eines E-Books (Einwilligung):</strong> Wenn Sie uns Ihre E-Mail-Adresse geben, um ein kostenloses E-Book zu
                erhalten, verarbeiten wir diese Daten, um Ihnen das gewÃ¼nschte E-Book per E-Mail zuzusenden. ZusÃ¤tzlich
                kÃ¶nnten wir Ihnen im Anschluss gelegentlich Informationen zu unseren Dienstleistungen per E-Mail schicken,
                sofern Sie dem ausdrÃ¼cklich zugestimmt haben. Die Verarbeitung Ihrer E-Mail-Adresse fÃ¼r den Versand des
                E-Books (und eventueller nachfolgender Infomails) erfolgt auf Grundlage Ihrer Einwilligung gemÃ¤ÃŸ Art. 6 Abs.
                1 lit. a DSGVO. Durch die Eingabe Ihrer E-Mail-Adresse und das Absenden des Formulars willigen Sie in die
                genannte Datenverarbeitung ein. Sie kÃ¶nnen diese Einwilligung jederzeit mit Wirkung fÃ¼r die Zukunft widerrufen
                (zum Beispiel Ã¼ber einen Abmeldelink in unseren E-Mails oder durch Mitteilung an uns), woraufhin wir Ihre
                E-Mail nicht weiter fÃ¼r derartige Zwecke nutzen werden.
              </li>
              <li>
                <strong>Bearbeitung von Kontaktanfragen (berechtigtes Interesse):</strong> Wenn Sie uns Ã¼ber das Kontaktformular oder per E-Mail
                anfragen, verarbeiten wir die von Ihnen angegebenen Kontaktdaten (wie E-Mail oder Name) und den Inhalt Ihrer
                Anfrage, um mit Ihnen in Kontakt zu treten und Ihre Anfrage zu beantworten. Dies erfolgt auf Grundlage unseres
                berechtigten Interesses gemÃ¤ÃŸ Art. 6 Abs. 1 lit. f DSGVO, da es erforderlich ist, Anfragen potenzieller Kunden
                zu bearbeiten und zu beantworten. Dieses Interesse ist angemessen, da Sie in Erwartung einer Antwort aktiv
                Kontakt zu uns aufgenommen haben. Sofern Ihre Kontaktaufnahme auf den Abschluss eines Vertrages abzielt (zum
                Beispiel Anfrage zu einem Angebot), kann die Datenverarbeitung auch zur DurchfÃ¼hrung vorvertraglicher
                MaÃŸnahmen nach Art. 6 Abs. 1 lit. b DSGVO erforderlich sein.
              </li>
              <li>
                <strong>Betrieb der Website und Sicherheit (berechtigtes Interesse):</strong> Die vorÃ¼bergehende Speicherung der technischen
                Zugriffsdaten (wie IP-Adressen in Logfiles) erfolgt auf Grundlage unseres berechtigten Interesses (Art. 6 Abs.
                1 lit. f DSGVO), um die Auslieferung der Website an Ihr EndgerÃ¤t zu ermÃ¶glichen und die IT-Sicherheit zu
                gewÃ¤hrleisten. Ohne diese Verarbeitung kÃ¶nnten wir die FunktionalitÃ¤t und Sicherheit unseres Webdienstes nicht
                aufrechterhalten. Dieses Interesse Ã¼berwiegt Ihre Grundrechte in der Regel nicht, da diese Daten nur zu
                technischen Zwecken kurzzeitig genutzt und nicht fÃ¼r Nutzerprofile ausgewertet werden.
              </li>
            </ul>
            <p>
              <strong>Keine Weiterverarbeitung zu neuen Zwecken:</strong> Sollten wir beabsichtigen, Ihre personenbezogenen Daten fÃ¼r einen
              anderen Zweck weiterzuverarbeiten als den, fÃ¼r den sie ursprÃ¼nglich erhoben wurden, wÃ¼rden wir Sie zuvor gemÃ¤ÃŸ
              Art. 13 Abs. 3 DSGVO darÃ¼ber informieren und - falls erforderlich - Ihre Einwilligung einholen.
            </p>
          </Section>
          <Section title="Weitergabe von Daten an Dritte">
            <p>
              Grundsatz: Ihre personenbezogenen Daten werden von uns vertraulich behandelt und wir geben sie grundsÃ¤tzlich
              nicht an Dritte weiter, es sei denn, dies ist zur ErfÃ¼llung unserer Dienstleistungen oder aus rechtlichen
              GrÃ¼nden erforderlich. Insbesondere verkaufen oder vermieten wir keine personenbezogenen Daten zu
              Marketingzwecken an Dritte.
            </p>
            <p>Im Folgenden erlÃ¤utern wir, in welchen FÃ¤llen eine Ãœbermittlung an Dritte stattfinden kann:</p>
            <ul className="list-disc space-y-3 pl-5">
              <li>
                <strong>Auftragsverarbeiter:</strong> In manchen FÃ¤llen bedienen wir uns externer Dienstleister, die in unserem Auftrag und nach
                unseren Weisungen Daten verarbeiten (sogenannte Auftragsverarbeiter gemÃ¤ÃŸ Art. 28 DSGVO). Beispiele hierfÃ¼r
                sind E-Mail-Versanddienstleister (fÃ¼r den Versand des E-Books oder Newsletter), Hosting-Provider (fÃ¼r den
                Betrieb unserer Website und Speicherung von Kontaktformular-Daten) oder Ã¤hnliche IT-Dienstleister. Mit allen
                Auftragsverarbeitern schlieÃŸen wir einen Vertrag ab, der sie auf den Schutz Ihrer Daten verpflichtet. Diese
                Dienstleister dÃ¼rfen die Ã¼bermittelten Daten ausschlieÃŸlich fÃ¼r die mit uns vereinbarten Zwecke verwenden. Wir
                wÃ¤hlen unsere Dienstleister sorgfÃ¤ltig aus und stellen sicher, dass sie angemessene technische und
                organisatorische MaÃŸnahmen zum Schutz Ihrer Daten getroffen haben.
              </li>
              <li>
                <strong>Rechts- und GesetzesgrÃ¼nde:</strong> Sollten wir gesetzlich oder per Gerichtsbeschluss verpflichtet sein, Ihre Daten
                offenzulegen, werden wir dieser Pflicht nachkommen. Dies kÃ¶nnte zum Beispiel im Rahmen von
                StrafverfolgungsmaÃŸnahmen, behÃ¶rdlichen Auskunftsersuchen oder steuerrechtlichen PrÃ¼fungen der Fall sein. In
                jedem Fall werden wir nur das Minimum an Daten weitergeben, das gesetzlich erforderlich ist, und Sie - soweit
                zulÃ¤ssig - Ã¼ber eine solche Herausgabe informieren.
              </li>
              <li>
                <strong>GeschÃ¤ftsÃ¼bertragungen:</strong> FÃ¼r den unwahrscheinlichen Fall, dass Obsidio verkauft wird, mit einem anderen Unternehmen
                fusioniert oder anderweitig umstrukturiert wird, kann es notwendig sein, Kundendaten an den neuen EigentÃ¼mer
                oder Partner zu Ã¼bertragen. In einem solchen Fall wÃ¼rden wir selbstverstÃ¤ndlich sicherstellen, dass Ihre Daten
                weiterhin in Einklang mit dieser DatenschutzerklÃ¤rung behandelt werden. Sollte eine Ãœbermittlung
                personenbezogener Daten in diesem Zusammenhang erforderlich sein, geschieht dies entweder auf Basis einer
                gesetzlichen Erlaubnis oder wir wÃ¼rden, falls nÃ¶tig, Ihre Einwilligung einholen.
              </li>
              <li>
                <strong>Eigene Dienstleistungen und Partner:</strong> Gelegentlich kann es vorkommen, dass wir in Zusammenarbeit mit Partnerfirmen
                ein gemeinsames Angebot (zum Beispiel ein Webinar oder Event) durchfÃ¼hren. Wenn Sie sich fÃ¼r ein solches
                Angebot anmelden, werden wir Sie klar darÃ¼ber informieren, welche Daten gegebenenfalls auch dem Partner zur
                VerfÃ¼gung gestellt werden. Ohne eine solche Information beziehungsweise Einwilligung teilen wir Ihre Daten aus
                einer Anfrage nicht mit Drittanbietern.
              </li>
            </ul>
            <p>
              AuÃŸer in den oben genannten FÃ¤llen geben wir Ihre Daten nur an Dritte weiter, wenn Sie uns dazu auffordern (zum
              Beispiel wenn Sie mÃ¶chten, dass wir Sie an einen unserer Kooperationspartner vermitteln und dafÃ¼r Ihre
              Kontaktdaten weitergeben sollen). In jedem Fall werden wir niemals ohne Rechtsgrundlage Daten unbefugt an Dritte
              Ã¼bermitteln.
            </p>
          </Section>

          <Section title="Internationale DatenÃ¼bermittlung">
            <p>
              GrundsÃ¤tzlich verarbeiten wir Ihre Daten in Ã–sterreich beziehungsweise innerhalb der EuropÃ¤ischen Union. Es kann
              jedoch vorkommen, dass wir Dienste von Unternehmen nutzen, die auÃŸerhalb der EU oder des EuropÃ¤ischen
              Wirtschaftsraums (EWR) ansÃ¤ssig sind (zum Beispiel ein US-amerikanischer E-Mail-Newsletter-Dienst). In solchen
              FÃ¤llen findet eine Ãœbermittlung personenbezogener Daten in DrittlÃ¤nder statt.
            </p>
            <p>
              Wir werden Ihre personenbezogenen Daten nur dann an EmpfÃ¤nger in Staaten auÃŸerhalb der EU oder des EWR
              Ã¼bermitteln, wenn fÃ¼r das betreffende Drittland ein Angemessenheitsbeschluss der EU-Kommission besteht oder wir
              garantieren, dass der EmpfÃ¤nger ein angemessenes Datenschutzniveau gewÃ¤hrleistet (zum Beispiel durch Abschluss
              der EU-Standarddatenschutzklauseln und Implementierung zusÃ¤tzlicher SchutzmaÃŸnahmen) (sunnen.eu). Vor einer
              Ãœbermittlung in die USA oder andere DrittlÃ¤nder prÃ¼fen wir sorgfÃ¤ltig, ob der EmpfÃ¤nger alle Anforderungen der
              DSGVO erfÃ¼llen kann. Unsere Auftragsverarbeiter sind vertraglich verpflichtet, entweder in der EU zu hosten oder
              - falls dies nicht mÃ¶glich ist - die Standardvertragsklauseln zu verwenden und ein Schutzniveau wie in der EU
              sicherzustellen.
            </p>
            <p>
              Beispiele: Sollte unser Server-Hosting in Zukunft in einem Rechenzentrum auÃŸerhalb Ã–sterreichs erfolgen (zum
              Beispiel in Deutschland oder einem anderen EU-Land), so ist dies innerhalb der EU unproblematisch. Falls wir
              jedoch einen Cloud-Service aus den USA nutzen wÃ¼rden, schlieÃŸen wir entsprechende VertrÃ¤ge und verpflichten den
              Dienstleister zu DSGVO-konformem Umgang (inklusive gegebenenfalls zusÃ¤tzlicher VerschlÃ¼sselungsmaÃŸnahmen usw.).
            </p>
            <p>
              Sie kÃ¶nnen bei uns jederzeit weitere Informationen Ã¼ber die konkreten Garantien fÃ¼r einen etwaigen
              Drittlandtransfer anfordern (Art. 13 Abs. 1 lit. f DSGVO). Derzeit befinden sich unsere Hauptsysteme in der EU,
              sodass keine routinemÃ¤ÃŸigen DatenÃ¼bermittlungen in unsichere DrittlÃ¤nder stattfinden.
            </p>
          </Section>
          <Section title="Speicherdauer">
            <p>
              Wir speichern personenbezogene Daten nur so lange, wie es fÃ¼r die ErfÃ¼llung der jeweiligen Verarbeitungszwecke
              erforderlich ist und - falls einschlÃ¤gig - gemÃ¤ÃŸ den gesetzlichen Aufbewahrungsfristen. Konkret:
            </p>
            <ul className="list-disc space-y-3 pl-5">
              <li>
                <strong>E-Mail-Adresse fÃ¼r E-Book oder Newsletter:</strong> Wenn Sie Ihre E-Mail-Adresse angegeben haben, um unser E-Book zu
                erhalten oder unseren Newsletter zu abonnieren, speichern wir diese Daten bis zu Ihrem Widerruf. Sollten Sie
                sich vom Newsletter abmelden oder Ihre Einwilligung widerrufen, werden wir Ihre E-Mail-Adresse auf unsere
                Sperrliste setzen, um sicherzustellen, dass Sie keine weiteren Mailings erhalten, und sie ansonsten lÃ¶schen
                (sofern keine andere Rechtsgrundlage fÃ¼r eine weitere Speicherung besteht).
              </li>
              <li>
                <strong>Kontaktdaten und Anfragen:</strong> Die im Rahmen von Anfragen Ã¼bermittelten personenbezogenen Daten (zum Beispiel
                E-Mails, Name, Anliegen) bewahren wir so lange auf, wie es nÃ¶tig ist, um Ihre Anfrage vollstÃ¤ndig zu bearbeiten
                und etwaige anschlieÃŸende Kommunikation zu fÃ¼hren. In der Regel speichern wir Kontaktanfragen fÃ¼r bis zu zwÃ¶lf
                Monate, falls sich aus der Anfrage ein weiterer Austausch oder ein Projekt ergibt. Sollte es zu einem
                VertragsverhÃ¤ltnis kommen, kÃ¶nnen die Daten im Rahmen der GeschÃ¤ftsbeziehung lÃ¤nger aufbewahrt werden (siehe
                nÃ¤chster Punkt).
              </li>
              <li>
                <strong>GeschÃ¤ftliche Unterlagen:</strong> Falls Ihre Anfrage zu einem Vertrag mit Obsidio fÃ¼hrt (zum Beispiel Sie werden unser
                Kunde), werden die relevanten personenbezogenen Daten im Rahmen der gesetzlichen kaufmÃ¤nnischen
                Aufbewahrungsfristen gespeichert. Nach Ã¶sterreichischem beziehungsweise steuerlichem Recht (zum Beispiel
                Paragraf 132 BAO - Bundesabgabenordnung) sind bestimmte Daten sieben Jahre aufzubewahren. In solchen FÃ¤llen
                speichern wir Ihre Rechnungs- und Vertragsdaten bis zum Ablauf dieser Fristen. Diese Daten verwenden wir jedoch
                nach Vertragsende nicht mehr fÃ¼r aktive Kommunikation, sondern nur noch zur ErfÃ¼llung rechtlicher Pflichten.
              </li>
              <li>
                <strong>Server-Logs:</strong> Technische Logfiles, die IP-Adressen enthalten kÃ¶nnen, werden aus SicherheitsgrÃ¼nden in der Regel nur
                fÃ¼r einige Wochen aufbewahrt. Eine lÃ¤ngere Speicherung erfolgt nur in speziellen FÃ¤llen, etwa wenn die
                Log-Daten als Beweismittel fÃ¼r sicherheitsrelevante VorfÃ¤lle dienen (dann Speicherung bis zur endgÃ¼ltigen
                KlÃ¤rung).
              </li>
            </ul>
            <p>
              Nach Ablauf der jeweiligen Aufbewahrungsfrist werden die entsprechenden Daten routinemÃ¤ÃŸig gelÃ¶scht oder
              anonymisiert, sodass eine Identifizierung Ihrer Person nicht mehr mÃ¶glich ist.
            </p>
          </Section>

          <Section title="Ihre Rechte als betroffene Person">
            <p>
              Sie haben als betroffene Person im Anwendungsbereich der DSGVO folgende Rechte hinsichtlich Ihrer
              personenbezogenen Daten, die Sie jederzeit bei uns geltend machen kÃ¶nnen:
            </p>
            <ul className="list-disc space-y-4 pl-5">
              <li>
                <strong>Recht auf Auskunft (Art. 15 DSGVO):</strong> Sie haben das Recht, von uns eine BestÃ¤tigung darÃ¼ber zu erhalten, ob wir
                personenbezogene Daten von Ihnen verarbeiten. Falls ja, kÃ¶nnen Sie Auskunft Ã¼ber diese Daten verlangen. Die
                Auskunft umfasst Informationen Ã¼ber die Verarbeitungszwecke, die Kategorien der verarbeiteten personenbezogenen
                Daten, die EmpfÃ¤nger oder Kategorien von EmpfÃ¤ngern, gegenÃ¼ber denen die Daten offengelegt wurden oder werden,
                die geplante Speicherdauer beziehungsweise die Kriterien fÃ¼r die Festlegung dieser Dauer sowie Hinweise auf
                Ihre weiteren Rechte und die Herkunft der Daten (sofern wir sie nicht direkt bei Ihnen erhoben haben)
                (europa.eu). Sie haben auÃŸerdem das Recht, eine Kopie der personenbezogenen Daten, die Gegenstand der
                Verarbeitung sind, zu erhalten.
              </li>
              <li>
                <strong>Recht auf Berichtigung (Art. 16 DSGVO):</strong> Sollten wir unrichtige oder unvollstÃ¤ndige personenbezogene Daten von Ihnen
                verarbeiten, steht Ihnen das Recht zu, unverzÃ¼glich die Berichtigung dieser Daten zu verlangen. Das umfasst
                auch das Recht auf VervollstÃ¤ndigung unvollstÃ¤ndiger Daten, zum Beispiel kÃ¶nnen Sie verlangen, dass wir eine
                unvollstÃ¤ndige Adresse ergÃ¤nzen. Wir werden Berichtigungen allen etwaigen EmpfÃ¤ngern mitteilen, sofern dies
                mÃ¶glich ist und nicht mit unverhÃ¤ltnismÃ¤ÃŸigem Aufwand verbunden ist.
              </li>
              <li>
                <strong>Recht auf LÃ¶schung (Art. 17 DSGVO):</strong> Sie kÃ¶nnen von uns die LÃ¶schung Ihrer personenbezogenen Daten verlangen, wenn
                die gesetzlichen Voraussetzungen vorliegen. Dies ist beispielsweise der Fall, wenn die Daten fÃ¼r die Zwecke,
                fÃ¼r die sie erhoben wurden, nicht mehr notwendig sind, Sie eine erteilte Einwilligung widerrufen und es an
                einer anderweitigen Rechtsgrundlage fehlt oder Sie aus persÃ¶nlichen GrÃ¼nden der Verarbeitung widersprechen und
                keine vorrangigen berechtigten GrÃ¼nde unsererseits vorliegen. Auch bei unrechtmÃ¤ÃŸiger Verarbeitung oder bei
                einer rechtlichen Verpflichtung zur LÃ¶schung (nach EU- oder nationalem Recht) mÃ¼ssen wir Ihre Daten lÃ¶schen.
                Bitte beachten Sie, dass das Recht auf LÃ¶schung in bestimmten FÃ¤llen eingeschrÃ¤nkt sein kann - etwa wenn wir
                gesetzlich zur Aufbewahrung verpflichtet sind oder die Verarbeitung zur Geltendmachung, AusÃ¼bung oder
                Verteidigung von RechtsansprÃ¼chen erforderlich ist.
              </li>
              <li>
                <strong>Recht auf EinschrÃ¤nkung der Verarbeitung (Art. 18 DSGVO):</strong> Sie haben das Recht, unter bestimmten Bedingungen die
                EinschrÃ¤nkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Dies bedeutet, dass wir Ihre Daten
                zwar weiterhin speichern, aber nur noch sehr eingeschrÃ¤nkt nutzen dÃ¼rfen. Ein solcher Fall liegt zum Beispiel
                vor, wenn Sie die Richtigkeit Ihrer Daten bestreiten - fÃ¼r die Dauer, die wir benÃ¶tigen, um die Richtigkeit zu
                Ã¼berprÃ¼fen, kÃ¶nnen Sie die EinschrÃ¤nkung verlangen. Ebenso kÃ¶nnen Sie statt einer LÃ¶schung zunÃ¤chst die
                EinschrÃ¤nkung verlangen, wenn Sie zwar ein LÃ¶schrecht haben, die Daten aber zur Geltendmachung von
                RechtsansprÃ¼chen benÃ¶tigen. Wenn die Verarbeitung eingeschrÃ¤nkt ist, dÃ¼rfen wir Ihre Daten - abgesehen von der
                Speicherung - nur mit Ihrer Einwilligung oder zur Geltendmachung von RechtsansprÃ¼chen beziehungsweise zum
                Schutz der Rechte einer anderen Person oder aus GrÃ¼nden eines wichtigen Ã¶ffentlichen Interesses verwenden. Wir
                werden Sie informieren, bevor wir eine EinschrÃ¤nkung aufheben.
              </li>
              <li>
                <strong>Recht auf DatenÃ¼bertragbarkeit (Art. 20 DSGVO):</strong> Sie haben das Recht, die personenbezogenen Daten, die Sie uns
                bereitgestellt haben, in einem strukturierten, gÃ¤ngigen und maschinenlesbaren Format (zum Beispiel CSV oder
                JSON) zu erhalten, und Sie haben das Recht, diese Daten einem anderen Verantwortlichen zu Ã¼bermitteln (beziehungsweise
                - soweit technisch machbar - von uns Ã¼bermitteln zu lassen). Dieses Recht gilt allerdings nur fÃ¼r Daten, die wir
                auf Grundlage Ihrer Einwilligung oder zur ErfÃ¼llung eines Vertrags mit Ihnen automatisiert verarbeiten. In der
                Praxis bedeutet das: Sollten Sie es wÃ¼nschen, stellen wir Ihnen beispielsweise die bei uns gespeicherten
                Kontaktdaten, die Sie uns gegeben haben, in elektronischer Form zur VerfÃ¼gung. Auf Anfrage und sofern technisch
                mÃ¶glich, kÃ¶nnen wir die Daten auch direkt an einen von Ihnen benannten Dienstleister Ã¼bertragen.
              </li>
              <li>
                <strong>Widerspruchsrecht (Art. 21 DSGVO):</strong> Soweit wir die Verarbeitung Ihrer personenbezogenen Daten auf ein berechtigtes
                Interesse stÃ¼tzen, haben Sie das Recht, aus GrÃ¼nden, die sich aus Ihrer besonderen Situation ergeben, jederzeit
                Widerspruch gegen diese Verarbeitung einzulegen. Wir werden Ihre Daten dann nicht mehr fÃ¼r diese Zwecke
                verarbeiten, es sei denn, wir kÃ¶nnen zwingende schutzwÃ¼rdige GrÃ¼nde nachweisen, die Ihre Interessen, Rechte und
                Freiheiten Ã¼berwiegen, oder die Verarbeitung dient der Geltendmachung, AusÃ¼bung oder Verteidigung von
                RechtsansprÃ¼chen (europa.eu). Wenn Sie Widerspruch einlegen, werden wir dies sorgfÃ¤ltig prÃ¼fen. In jedem Fall
                kÃ¶nnen Sie Widerspruch gegen die Verarbeitung Ihrer Daten zu Direktwerbezwecken einlegen - wir werden dann Ihre
                Daten nicht mehr fÃ¼r Werbung nutzen. Insbesondere, wenn Sie unseren Newsletter abbestellen oder dem Erhalt
                weiterer Informationen widersprechen, werden wir Ihre Kontaktdaten aus unseren Verteilerlisten fÃ¼r Marketing
                entfernen.
              </li>
              <li>
                <strong>Recht auf Widerruf der Einwilligung (Art. 7 Abs. 3 DSGVO):</strong> Wenn wir Ihre personenbezogenen Daten aufgrund Ihrer
                Einwilligung verarbeiten, haben Sie das Recht, diese Einwilligung jederzeit zu widerrufen. Ein Widerruf wirkt
                fÃ¼r die Zukunft, das heiÃŸt die RechtmÃ¤ÃŸigkeit der Datenverarbeitung bis zum Zeitpunkt des Widerrufs bleibt
                unberÃ¼hrt. Nach Widerruf werden wir die betroffenen Daten nicht weiterverarbeiten und - sofern keine andere
                Rechtsgrundlage vorliegt - lÃ¶schen. Beispielsweise kÃ¶nnen Sie eine erteilte Einwilligung zum Erhalt unseres
                Newsletters jederzeit widerrufen, indem Sie auf den Abmelde-Link in der E-Mail klicken oder uns eine
                entsprechende Nachricht senden.
              </li>
              <li>
                <strong>Beschwerderecht (Art. 77 DSGVO):</strong> Sollten Sie der Ansicht sein, dass wir bei der Verarbeitung Ihrer
                personenbezogenen Daten gegen Datenschutzrecht verstoÃŸen, haben Sie das Recht, Beschwerde bei einer
                DatenschutzaufsichtsbehÃ¶rde einzulegen. Sie kÃ¶nnen dies bei der AufsichtsbehÃ¶rde Ihres EU-Mitgliedstaates (zum
                Beispiel an Ihrem Wohnsitz oder Arbeitsplatz) tun oder bei der Ã–sterreichischen DatenschutzbehÃ¶rde als fÃ¼r uns
                zustÃ¤ndige BehÃ¶rde. Die Kontaktdaten der Ã–sterreichischen DatenschutzbehÃ¶rde lauten: Barichgasse 40-42, 1030
                Wien, Tel: +43 1 52 152-0, E-Mail: dsb@dsb.gv.at. Wir wÃ¼rden es jedoch begrÃ¼ÃŸen, wenn Sie zunÃ¤chst mit uns
                Kontakt aufnehmen, damit wir Ihr Anliegen direkt klÃ¤ren kÃ¶nnen. Ihr Recht auf Beschwerde bleibt davon
                selbstverstÃ¤ndlich unberÃ¼hrt.
              </li>
            </ul>
            <p>
              <strong>AusÃ¼bung Ihrer Rechte:</strong> Sie kÃ¶nnen Ihre Rechte jederzeit formlos (schriftlich oder elektronisch) bei uns geltend
              machen. Schreiben Sie uns dazu am besten eine E-Mail an {" "}
              <a href="mailto:privacy@obsidio.com" className="text-[#4B64F3] hover:underline">
                privacy@obsidio.com
              </a>{" "}
              mit Ihrem Anliegen. Bitte stellen Sie sicher, dass wir Sie eindeutig identifizieren kÃ¶nnen (damit keine
              unberechtigte Person Auskunft Ã¼ber Ihre Daten erhÃ¤lt, kÃ¶nnten wir zum Beispiel RÃ¼ckfragen stellen oder einen
              Nachweis verlangen). Wir werden Ihr Anliegen so schnell wie mÃ¶glich, spÃ¤testens jedoch innerhalb der gesetzlich
              vorgegebenen Frist von einem Monat bearbeiten. Sollte es in AusnahmefÃ¤llen lÃ¤nger dauern (zum Beispiel bei
              komplexen Anfragen), informieren wir Sie fristgerecht Ã¼ber die VerlÃ¤ngerung.
            </p>
            <p>
              FÃ¼r die Auskunftserteilung und ErfÃ¼llung Ihrer Rechte erheben wir grundsÃ¤tzlich keine GebÃ¼hren. Nur bei
              offenkundig unbegrÃ¼ndeten oder exzessiven (zum Beispiel repetitiven) Anfragen kÃ¶nnten wir ein angemessenes
              Entgelt verlangen oder die Bearbeitung ablehnen, gemÃ¤ÃŸ Art. 12 Abs. 5 DSGVO - dies ist allerdings der seltene
              Ausnahmefall.
            </p>
          </Section>

          <Section title="Datensicherheit">
            <p>
              Wir setzen geeignete technische und organisatorische SicherheitsmaÃŸnahmen ein, um Ihre personenbezogenen Daten
              bestmÃ¶glich vor Risiken zu schÃ¼tzen. Dazu gehÃ¶ren zum Beispiel:
            </p>
            <ul className="list-disc space-y-3 pl-5">
              <li>
                <strong>Technische MaÃŸnahmen:</strong> VerschlÃ¼sselung der Website-Verbindung (SSL/TLS - erkennbar an "https://" in der URL),
                Firewalls und Sicherheitssoftware zum Schutz vor Cyberangriffen, regelmÃ¤ÃŸige Updates und Patches fÃ¼r unsere
                Systeme, ZugriffsbeschrÃ¤nkungen (zum Beispiel Passwort- und Rollenmanagement) sowie regelmÃ¤ÃŸige Backups der
                Daten, um Datenverlust vorzubeugen.
              </li>
              <li>
                <strong>Organisatorische MaÃŸnahmen:</strong> Schulung unserer Mitarbeiter in Datenschutz und Datensicherheit, strikte Vergabe von
                Zugriffsrechten nach dem "Need-to-know"-Prinzip (nur befugte Personen erhalten Zugang zu personenbezogenen
                Daten, die sie fÃ¼r ihre Aufgabe benÃ¶tigen), Vereinbarung von Vertraulichkeit mit allen, die mit personenbezogenen
                Daten umgehen, und ÃœberprÃ¼fung unserer Dienstleister auf angemessenes Sicherheitsniveau.
              </li>
            </ul>
            <p>
              Wir verbessern unsere Sicherheitskonzepte kontinuierlich im Zuge des technischen Fortschritts. Dennoch weisen wir
              darauf hin, dass kein elektronisches Ãœbermittlungsverfahren oder keine elektronische SpeicherlÃ¶sung 100 Prozent
              absolut sicher ist (sunnen.eu). Das Restrisiko von SicherheitslÃ¼cken kann niemals vollstÃ¤ndig ausgeschlossen
              werden. Sollte es trotz aller VorsichtsmaÃŸnahmen zu einer Datenschutzverletzung (Data Breach) kommen, die ein
              hohes Risiko fÃ¼r Ihre Rechte und Freiheiten darstellt, werden wir Sie und gegebenenfalls die zustÃ¤ndige BehÃ¶rde
              entsprechend den Anforderungen der DSGVO unverzÃ¼glich informieren.
            </p>
            <p>
              Bitte helfen auch Sie mit, Ihre Daten sicher zu halten: Verwenden Sie zum Beispiel sichere PasswÃ¶rter fÃ¼r Ihre
              E-Mail-Konten und achten Sie darauf, uns vertrauliche Informationen nur Ã¼ber gesicherte KanÃ¤le zukommen zu
              lassen. Sollten Sie Anzeichen einer missbrÃ¤uchlichen Verwendung Ihrer Daten im Zusammenhang mit Obsidio
              feststellen, kontaktieren Sie uns bitte umgehend.
            </p>
          </Section>
          <Section title="Einsatz von Cookies und Ã¤hnlichen Technologien">
            <p>
              <strong>Aktuelle Situation:</strong> Unsere Website verwendet keine nicht-notwendigen Cookies und insbesondere keine Analyse-,
              Tracking- oder Werbecookies, die eine Einwilligung erfordern wÃ¼rden. Wir haben uns bewusst entschieden, zum
              jetzigen Zeitpunkt keine Tools wie Google Analytics oder Social Media Plugins einzubinden, um Ihre PrivatsphÃ¤re
              zu wahren. Das bedeutet, dass beim Besuch unserer Seiten - abgesehen von technisch erforderlichen Cookies - keine
              Dateien auf Ihrem GerÃ¤t gespeichert werden, um Ihr Verhalten nachzuverfolgen.
            </p>
            <p>
              <strong>Technisch notwendige Cookies:</strong> Falls unsere Website Cookies verwendet, dann ausschlieÃŸlich solche, die fÃ¼r den
              Betrieb der Seite unbedingt erforderlich sind (zum Beispiel um Ihre Cookie-Einstellungen zu speichern oder die
              FunktionalitÃ¤t des Kontaktformulars zu ermÃ¶glichen). Diese unbedingt erforderlichen Cookies beinhalten keine
              persÃ¶nlich identifizierenden Informationen und kÃ¶nnen in unseren Systemen nicht deaktiviert werden, da sie die
              Kernfunktionen bereitstellen (cambridge.org). Sie basieren auf unserem berechtigten Interesse gemÃ¤ÃŸ Paragraf 96
              Abs. 3 TKG beziehungsweise Art. 6 Abs. 1 lit. f DSGVO, da ohne sie die Website nicht ordnungsgemÃ¤ÃŸ funktionieren
              wÃ¼rde. Beispiele: Ein Session-Cookie, das Ihre Sitzung wÃ¤hrend Ihres Besuchs aufrechterhÃ¤lt, oder ein Cookie, das
              speichert, dass Sie den Cookie-Hinweis geschlossen haben, damit dieser nicht auf jeder Seite erneut erscheint.
            </p>
            <p>
              <strong>ZukÃ¼nftige Ã„nderungen (Vorabinformation):</strong> Obsidio behÃ¤lt sich vor, in Zukunft Cookies oder Tracking-Tools einzusetzen,
              um zum Beispiel die Nutzung der Website zu analysieren und unser Angebot zu verbessern. Falls wir dies tun,
              werden wir selbstverstÃ¤ndlich vorab Ihre Einwilligung einholen, sofern es sich nicht um weiterhin technisch
              erforderliche Cookies handelt (cambridge.org). Sie wÃ¼rden dann beim ersten Besuch der Seite (nach EinfÃ¼hrung
              neuer Cookies) eine Cookie-Banner-Benachrichtigung sehen, in der Sie auswÃ¤hlen kÃ¶nnen, welche Cookies Sie
              akzeptieren mÃ¶chten (zum Beispiel "Statistik", "Marketing" usw.). Ohne Ihre Zustimmung bleiben alle nicht
              notwendigen Cookies deaktiviert. Diese DatenschutzerklÃ¤rung wÃ¼rde in diesem Fall entsprechend aktualisiert und
              die verwendeten Cookies und Tools wÃ¼rden hier im Detail beschrieben werden (inklusive Anbieter, Funktionsweise
              und Speicherdauer).
            </p>
            <p>
              <strong>Ihre Kontrolle:</strong> Sie haben zudem jederzeit die MÃ¶glichkeit, Cookies Ã¼ber die Einstellungen Ihres Browsers zu
              verwalten. Sie kÃ¶nnen bereits gesetzte Cookies lÃ¶schen oder den Browser so konfigurieren, dass das Speichern von
              Cookies generell oder fÃ¼r bestimmte Websites verhindert wird. Allerdings weisen wir darauf hin, dass das
              Blockieren aller Cookies die Nutzung mancher Websites (gegebenenfalls auch unserer) beeintrÃ¤chtigen kann -
              essentielle Funktionen kÃ¶nnten nicht mehr funktionieren (pwc.com). Informationen zum Anpassen der
              Cookie-Einstellungen finden Sie in der Hilfefunktion Ihres jeweiligen Browsers. Weitere Details zur eventuell
              zukÃ¼nftigen Cookie-Nutzung finden Sie auf unserer separaten Cookie-Einstellungsseite (sofern verfÃ¼gbar), wo Sie
              auch Ihre Einwilligung verwalten kÃ¶nnen.
            </p>
          </Section>

          <Section title="Datensicherheit bei externen Links">
            <p>
              Unsere Website kann Links zu anderen Websites enthalten (zum Beispiel zu Partnerunternehmen, Social-Media-Profilen
              oder erwÃ¤hnten Quellen). Diese externen Websites werden von Dritten betrieben und unterliegen nicht dieser
              DatenschutzerklÃ¤rung. Wenn Sie auf einen externen Link klicken und unsere Website verlassen, haben wir keinen
              Einfluss mehr darauf, wie der jeweilige Drittanbieter Ihre Daten verarbeitet. Wir empfehlen Ihnen, die
              DatenschutzerklÃ¤rungen der verlinkten Websites zu lesen. Wir Ã¼bernehmen keine Verantwortung fÃ¼r den Datenschutz
              und die Inhalte externer Websites.
            </p>
          </Section>

          <Section title="Kinder und MinderjÃ¤hrige">
            <p>
              Unser Angebot richtet sich an GeschÃ¤ftskunden und Erwachsene. Wir gehen davon aus, dass Nutzer unserer Website
              volljÃ¤hrig sind. Personen unter 14 Jahren (beziehungsweise unter 16 Jahren, je nach anwendbarem lokalen Recht
              fÃ¼r EinwilligungsfÃ¤higkeit bei Online-Diensten) sollten uns ohne Zustimmung der Eltern oder Erziehungsberechtigten
              keine personenbezogenen Daten Ã¼bermitteln. Wir fordern niemals wissentlich Kinder auf, personenbezogene Daten
              bereitzustellen. Sollten wir feststellen, dass uns dennoch personenbezogene Daten von Kindern Ã¼bermittelt wurden,
              werden wir diese umgehend lÃ¶schen. Eltern oder Sorgeberechtigte kÃ¶nnen uns kontaktieren, wenn sie vermuten, dass
              ein MinderjÃ¤hriger Daten an uns Ã¼bermittelt hat, damit wir die Daten entfernen kÃ¶nnen.
            </p>
          </Section>
          <Section title="Ihre Ansprechperson / Kontakt">
            <p>
              FÃ¼r Anliegen zum Datenschutz (zum Beispiel Auskunftsersuchen, Widerruf einer Einwilligung oder sonstige
              Betroffenenrechte) stehen wir Ihnen jederzeit zur VerfÃ¼gung. Bitte richten Sie Ihr Anliegen an:
            </p>
            <address className="not-italic text-sm text-neutral-700 md:text-base">
              Obsidio - Datenschutz
              <br />
              1234 MusterstraÃŸe, 1010 Wien (Beispieladresse)
              <br />
              E-Mail: {" "}
              <a href="mailto:privacy@obsidio.com" className="text-[#4B64F3] hover:underline">
                privacy@obsidio.com
              </a>
            </address>
            <p>
              Wir werden Ihr Anliegen schnellstmÃ¶glich bearbeiten und Ihnen spÃ¤testens innerhalb der gesetzlichen Fristen
              antworten.
            </p>
          </Section>

          <Section title="Ã„nderungen dieser DatenschutzerklÃ¤rung">
            <p>
              Wir behalten uns vor, diese DatenschutzerklÃ¤rung bei Bedarf zu aktualisieren, um Ã„nderungen an unseren
              Datenverarbeitungsprozessen oder geÃ¤nderten Rechtslagen Rechnung zu tragen. Die aktuelle Fassung ist jeweils auf
              unserer Website unter der Rubrik "Datenschutz" verfÃ¼gbar. Bei wesentlichen Ã„nderungen (zum Beispiel EinfÃ¼hrung
              neuer Services oder Tools, die eine Beschreibung erfordern) werden wir Sie auf unserer Website deutlich darauf
              hinweisen und - falls erforderlich - erneut um Einwilligung bitten. Der Hinweis "Letzte Aktualisierung" am
              Anfang dieser ErklÃ¤rung gibt an, wann die letzte Ã„nderung vorgenommen wurde.
            </p>
            <p>
              Bitte prÃ¼fen Sie gelegentlich diese DatenschutzerklÃ¤rung, um auf dem neuesten Stand zu bleiben, wie wir Ihre
              Daten schÃ¼tzen. Sollten wir Ã„nderungen vornehmen, die Ihre Einwilligung erfordern, werden wir Sie
              selbstverstÃ¤ndlich vorher kontaktieren.
            </p>
            <p>(Stand dieser DatenschutzerklÃ¤rung: September 2025)</p>
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
