import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Infografik: AI-Automation für KMUs",
  description:
    "Visueller Leitfaden für KMUs in der DACH-Region: Vorteile, Workflows und Einsparpotenziale durch KI-Automatisierung.",
};

export default function Page() {
  return (
    <>
      <Script src="https://cdn.jsdelivr.net/npm/chart.js" strategy="afterInteractive" />
      <Script id="savings-chart" strategy="afterInteractive">
        {`
          (function () {
            function initChart() {
              if (typeof window === "undefined") {
                return;
              }
              var canvas = document.getElementById("savingsChart");
              if (!canvas || canvas.dataset.initialized === "true") {
                return;
              }
              var ctx = canvas.getContext("2d");
              if (!ctx || !window.Chart) {
                return;
              }
              canvas.dataset.initialized = "true";
              var savingsData = {
                labels: ["FAQs beantworten", "Lead-Weiterleitung", "Dateneingabe"],
                manualHours: [10, 4, 6],
                aiHours: [0.5, 0, 1],
              };

              new window.Chart(ctx, {
                type: "bar",
                data: {
                  labels: savingsData.labels,
                  datasets: [
                    {
                      label: "Manuelle Stunden pro Woche",
                      data: savingsData.manualHours,
                      backgroundColor: "#BBDEFB",
                      borderColor: "#64B5F6",
                      borderWidth: 1,
                    },
                    {
                      label: "KI-Automatisierte Stunden",
                      data: savingsData.aiHours,
                      backgroundColor: "#1976D2",
                      borderColor: "#0D47A1",
                      borderWidth: 1,
                    },
                  ],
                },
                options: {
                  responsive: true,
                  maintainAspectRatio: false,
                  scales: {
                    y: {
                      beginAtZero: true,
                      title: { display: true, text: "Stunden / Woche" },
                    },
                  },
                  plugins: {
                    legend: { position: "top" },
                    tooltip: {
                      callbacks: {
                        title: function (tooltipItems) {
                          var item = tooltipItems[0];
                          var label = item.chart.data.labels[item.dataIndex];
                          if (Array.isArray(label)) {
                            return label.join(" ");
                          }
                          return label;
                        },
                      },
                    },
                  },
                },
              });
            }

            function ensureChartReady(attempt) {
              if (typeof window === "undefined") {
                return;
              }
              if (window.Chart) {
                initChart();
                return;
              }
              if (attempt > 10) {
                return;
              }
              setTimeout(function () {
                ensureChartReady(attempt + 1);
              }, 100);
            }

            function onReady() {
              ensureChartReady(0);
            }

            if (document.readyState === "loading") {
              document.addEventListener("DOMContentLoaded", onReady);
            } else {
              onReady();
            }
          })();
        `}
      </Script>
      <div className="bg-[#f8fafc] text-gray-800">
        <div className="container mx-auto px-6 py-12">
          <header className="mb-16 text-center">
            <h1 className="mb-4 text-4xl font-extrabold text-[#0D47A1] md:text-5xl">
              AI-Automation: Ihr Weg zu mehr Effizienz
            </h1>
            <p className="mx-auto max-w-3xl text-lg text-gray-600 md:text-xl">
              Ein visueller Leitfaden für kleine und mittlere Unternehmen in der DACH-Region, die wachsen und in der neuen digitalen Ära erfolgreich sein wollen.
            </p>
          </header>

          <section id="hook" className="mb-20 text-center">
            <h2 className="mb-2 text-3xl font-bold">Die digitale Tsunami ist da. Reiten Sie die Welle?</h2>
            <p className="mx-auto mb-8 max-w-2xl text-gray-600">
              Die Arbeitswelt verändert sich rasant durch KI-Automation. Dies ist der neue Standard für den Geschäftsbetrieb. Wer jetzt nicht handelt, riskiert, den Anschluss zu verlieren.
            </p>
          </section>

          <section id="what-is-ai" className="mb-20">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold text-[#0D47A1]">Was genau ist AI-Automation?</h2>
              <p className="mt-4 text-lg text-gray-600">
                Es ist der Einsatz von intelligenten Werkzeugen, um sich wiederholende, regelbasierte Aufgaben zu erledigen, die normalerweise menschliches Eingreifen erfordern.
              </p>
            </div>
            <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
              <div className="rounded-xl border-t-4 border-gray-300 bg-white p-8 shadow-lg">
                <h3 className="mb-4 text-center text-2xl font-bold">Traditionelle Automation</h3>
                <ul className="list-none space-y-3 text-gray-700">
                  <li>
                    <strong className="text-gray-900">Logik:</strong> Streng regelbasiert. Wenn X passiert, mache Y.
                  </li>
                  <li>
                    <strong className="text-gray-900">Datentyp:</strong> Nur strukturierte Daten (Tabellen, Formulare).
                  </li>
                  <li>
                    <strong className="text-gray-900">Beispiel:</strong> Automatischer Versand einer Bestätigungs-E-Mail nach einem Kauf.
                  </li>
                </ul>
              </div>
              <div className="rounded-xl bg-[#1976D2] p-8 text-white shadow-2xl">
                <h3 className="mb-4 text-center text-2xl font-bold">AI-Automation (Die neue Welle)</h3>
                <ul className="space-y-3">
                  <li>
                    <strong>Logik:</strong> Intelligent &amp; anpassungsfähig. Lernt Muster und trifft Entscheidungen.
                  </li>
                  <li>
                    <strong>Datentyp:</strong> Unstrukturierte Daten (E-Mails, Notizen, Sprachaufnahmen).
                  </li>
                  <li>
                    <strong>Beispiel:</strong> KI liest eine E-Mail, versteht die Anfrage, klassifiziert sie als dringend und formuliert eine Antwort.
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section id="benefits" className="mb-20">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold text-[#0D47A1]">Die entscheidenden Vorteile für Ihr Unternehmen</h2>
              <p className="mt-4 text-lg text-gray-600">
                Jede Minute, die für manuelle Aufgaben aufgewendet wird, ist eine Minute, die nicht in Wachstum investiert wird.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-lg border-t-4 border-[#2196F3] bg-white p-6 text-center shadow-md">
                <div className="mb-4 text-5xl">{"\u23F1\uFE0F"}</div>
                <h3 className="mb-2 text-xl font-bold">Massive Zeitersparnis</h3>
                <p className="text-gray-600">Befreien Sie Ihr Team von bis zu 80% des administrativen Aufwands.</p>
              </div>
              <div className="rounded-lg border-t-4 border-[#2196F3] bg-white p-6 text-center shadow-md">
                <div className="mb-4 text-5xl">{"\uD83D\uDCB8"}</div>
                <h3 className="mb-2 text-xl font-bold">Kostensenkung</h3>
                <p className="text-gray-600">Automatisierung ist günstiger als die Einstellung neuer Mitarbeiter für repetitive Aufgaben.</p>
              </div>
              <div className="rounded-lg border-t-4 border-[#2196F3] bg-white p-6 text-center shadow-md">
                <div className="mb-4 text-5xl">{"\u2705"}</div>
                <h3 className="mb-2 text-xl font-bold">Keine Fehler</h3>
                <p className="text-gray-600">Maschinen arbeiten mit 100%iger Präzision und machen keine Tippfehler.</p>
              </div>
              <div className="rounded-lg border-t-4 border-[#2196F3] bg-white p-6 text-center shadow-md">
                <div className="mb-4 text-5xl">{"\u23F3"}</div>
                <h3 className="mb-2 text-xl font-bold">24/7-Verfügbarkeit</h3>
                <p className="text-gray-600">Ihre KI-Tools arbeiten rund um die Uhr, ohne Pausen.</p>
              </div>
            </div>
          </section>

          <section id="workflows" className="mb-20">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold text-[#0D47A1]">Workflows in Aktion</h2>
              <p className="mt-4 text-lg text-gray-600">So sehen automatisierte Prozesse in der Praxis aus.</p>
            </div>
            <div className="space-y-12">
              <div className="rounded-lg bg-white p-8 shadow-lg">
                <h3 className="mb-4 text-2xl font-bold">Kundenservice: Der 24/7 Agent</h3>
                <div className="grid items-center gap-4 text-center md:grid-cols-3">
                  <div className="rounded-lg bg-red-100 p-4">
                    <h4 className="font-semibold">Problem</h4>
                    <p>Team beantwortet ständig dieselben FAQs, was zu langen Wartezeiten führt.</p>
                  </div>
                  <div className="text-4xl text-[#1976D2]">&rarr;</div>
                  <div className="rounded-lg bg-green-100 p-4">
                    <h4 className="font-semibold">AI-Lösung</h4>
                    <p>KI versteht Anfragen, beantwortet sie sofort oder leitet komplexe Fälle an den richtigen Spezialisten weiter.</p>
                  </div>
                </div>
              </div>
              <div className="rounded-lg bg-white p-8 shadow-lg">
                <h3 className="mb-4 text-2xl font-bold">Marketing: Die Content-Maschine</h3>
                <div className="grid items-center gap-4 text-center md:grid-cols-3">
                  <div className="rounded-lg bg-red-100 p-4">
                    <h4 className="font-semibold">Problem</h4>
                    <p>Die Erstellung von Social-Media-Inhalten ist langsam und inkonsistent.</p>
                  </div>
                  <div className="text-4xl text-[#1976D2]">&rarr;</div>
                  <div className="rounded-lg bg-green-100 p-4">
                    <h4 className="font-semibold">AI-Lösung</h4>
                    <p>KI erstellt, plant und veröffentlicht Beiträge automatisch zu optimalen Zeiten für maximales Engagement.</p>
                  </div>
                </div>
              </div>
              <div className="rounded-lg bg-white p-8 shadow-lg">
                <h3 className="mb-4 text-2xl font-bold">Finanzen &amp; HR: Der Admin-Terminator</h3>
                <div className="grid items-center gap-4 text-center md:grid-cols-3">
                  <div className="rounded-lg bg-red-100 p-4">
                    <h4 className="font-semibold">Problem</h4>
                    <p>Manuelle Bearbeitung von Rechnungen und Dateneingabe in die Buchhaltung.</p>
                  </div>
                  <div className="text-4xl text-[#1976D2]">&rarr;</div>
                  <div className="rounded-lg bg-green-100 p-4">
                    <h4 className="font-semibold">AI-Lösung</h4>
                    <p>KI liest Rechnungen aus, erfasst die Daten automatisch und versendet bei Bedarf Zahlungserinnerungen.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="savings" className="mb-20 rounded-xl bg-white p-8 shadow-xl md:p-12">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold text-[#0D47A1]">Visualisieren Sie Ihre Ersparnis</h2>
              <p className="mx-auto mt-4 max-w-3xl text-lg text-gray-600">
                Die Zahlen lügen nicht. So transformiert schon ein einziger KI-Workflow Ihre Arbeitszeit.
              </p>
            </div>
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div>
                <h3 className="mb-2 text-2xl font-bold">Wochenstunden: Manuell vs. KI</h3>
                <p className="mb-6 text-gray-600">
                  Diese Grafik zeigt die drastische Reduzierung der wöchentlich aufgewendeten Stunden für typische administrative Aufgaben nach der Implementierung von KI-Automatisierung.
                </p>
                <div className="relative mx-auto h-[350px] w-full max-w-[800px] md:h-[450px]">
                  <canvas id="savingsChart" />
                </div>
              </div>
              <div className="text-center">
                <h3 className="mb-2 text-2xl font-bold">Jährliche Zeitersparnis</h3>
                <p className="mb-6 text-gray-600">
                  Diese eingesparten Stunden summieren sich im Laufe eines Jahres zu einem enormen Wert.
                </p>
                <div className="text-[6rem] font-extrabold leading-none text-[#1976D2]">925</div>
                <div className="text-3xl font-bold text-gray-700">Stunden</div>
                <p className="mt-4 text-lg text-gray-600">
                  Das entspricht mehr als der halben Jahresarbeitskapazität eines Vollzeitmitarbeiters!
                </p>
              </div>
            </div>
          </section>

          <footer id="cta" className="text-center">
            <h2 className="mb-4 text-3xl font-bold text-[#0D47A1]">Ihr nächster Schritt</h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-600">
              KI-Automation ist keine Zukunftsmusik, sondern ein entscheidender Wettbewerbsvorteil. Fangen Sie jetzt an, identifizieren Sie Ihre größten Zeitfresser und lassen Sie sich von Experten auf Ihrem Weg in eine effizientere Zukunft begleiten.
            </p>
            <button className="rounded-lg bg-gradient-to-r from-[#1976D2] to-[#2196F3] px-10 py-4 text-lg font-bold text-white transition-shadow duration-300 hover:shadow-xl">
              Starten Sie Ihre Transformation
            </button>
          </footer>
        </div>
      </div>
    </>
  );
}
