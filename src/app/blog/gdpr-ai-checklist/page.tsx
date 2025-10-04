import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Infografik: DSGVO & KI Checkliste für KMUs",
  description:
    "Schritt-für-Schritt-Infografik für KMUs in der DACH-Region, um KI-Tools DSGVO-konform einzuführen.",
};

export default function Page() {
  return (
    <>
      <Script src="https://cdn.jsdelivr.net/npm/chart.js" strategy="afterInteractive" />
      <Script id="risk-chart" strategy="afterInteractive">
        {`
          (function () {
            function initChart() {
              if (typeof window === "undefined") {
                return;
              }
              var canvas = document.getElementById("riskChart");
              if (!canvas || canvas.dataset.initialized === "true") {
                return;
              }
              var ctx = canvas.getContext("2d");
              if (!ctx || !window.Chart) {
                return;
              }
              canvas.dataset.initialized = "true";
              new window.Chart(ctx, {
                type: "doughnut",
                data: {
                  labels: [
                    "Niedriges Risiko (z.B. Chatbot)",
                    "Hohes Risiko (z.B. HR-Analyse-Tool)",
                  ],
                  datasets: [
                    {
                      label: "Risikolevel",
                      data: [70, 30],
                      backgroundColor: ["#2196F3", "#D32F2F"],
                      borderColor: "#ffffff",
                      borderWidth: 4,
                    },
                  ],
                },
                options: {
                  responsive: true,
                  maintainAspectRatio: false,
                  plugins: {
                    legend: {
                      position: "bottom",
                      labels: {
                        boxWidth: 20,
                        padding: 20,
                      },
                    },
                    title: {
                      display: true,
                      text: "Wann ist eine DSFA nötig?",
                      padding: { bottom: 15 },
                    },
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
                  cutout: "60%",
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
              DSGVO &amp; KI: Die Praktische Checkliste für KMUs
            </h1>
            <p className="mx-auto max-w-3xl text-lg text-gray-600 md:text-xl">
              Ein visueller Leitfaden, um KI-Tools legal und sicher in Ihrem Unternehmen zu nutzen – einfach erklärt und praktisch anwendbar.
            </p>
          </header>

          <main>
            <section id="foundation" className="mb-20">
              <div className="mb-12 text-center">
                <h2 className="text-3xl font-bold text-[#0D47A1]">
                  1. Die Grundlage: Das Daten-Fundament
                </h2>
                <p className="mt-4 text-lg text-gray-600">
                  Bevor Sie eine KI nutzen, die personenbezogene Daten verarbeitet, müssen diese vier Punkte geklärt sein.
                </p>
              </div>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                <div className="rounded-lg border-t-4 border-[#2196F3] bg-white p-6 shadow-md">
                  <div className="mb-4 text-5xl">📊</div>
                  <h3 className="mb-2 text-xl font-bold">Datentyp</h3>
                  <p className="text-gray-600">
                    <strong>Frage:</strong> Welche Daten füttert die KI?
                    <br />
                    <strong>Ziel:</strong> Risiko einschätzen. Nur notwendige Daten verwenden.
                  </p>
                </div>
                <div className="rounded-lg border-t-4 border-[#2196F3] bg-white p-6 shadow-md">
                  <div className="mb-4 text-5xl">⚖️</div>
                  <h3 className="mb-2 text-xl font-bold">Rechtsgrundlage</h3>
                  <p className="text-gray-600">
                    <strong>Frage:</strong> Dürfen wir die Daten für diesen Zweck verwenden?
                    <br />
                    <strong>Ziel:</strong> Eine klare Rechtsgrundlage (Art. 6 DSGVO) dokumentieren.
                  </p>
                </div>
                <div className="rounded-lg border-t-4 border-[#2196F3] bg-white p-6 shadow-md">
                  <div className="mb-4 text-5xl">🎯</div>
                  <h3 className="mb-2 text-xl font-bold">Zweckbindung</h3>
                  <p className="text-gray-600">
                    <strong>Frage:</strong> Bleibt die KI beim ursprünglichen Zweck?
                    <br />
                    <strong>Ziel:</strong> Datenmissbrauch für neue, nicht kommunizierte Zwecke verhindern.
                  </p>
                </div>
                <div className="rounded-lg border-t-4 border-[#2196F3] bg-white p-6 shadow-md">
                  <div className="mb-4 text-5xl">🤝</div>
                  <h3 className="mb-2 text-xl font-bold">Auftragsverarbeiter</h3>
                  <p className="text-gray-600">
                    <strong>Frage:</strong> Ist der KI-Anbieter extern?
                    <br />
                    <strong>Ziel:</strong> Einen Auftragsverarbeitungsvertrag (AVV) abschließen.
                  </p>
                </div>
              </div>
            </section>

            <section id="implementation" className="mb-20 rounded-xl bg-[#E3F2FD] p-8 md:p-12">
              <div className="mb-12 text-center">
                <h2 className="text-3xl font-bold text-[#0D47A1]">
                  2. Die KI-Implementierung: Transparenz und Kontrolle
                </h2>
                <p className="mt-4 text-lg text-gray-600">
                  Die DSGVO fordert Fairness. Besonders bei "Black-Box"-Entscheidungen der KI ist das entscheidend.
                </p>
              </div>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                <div className="rounded-lg bg-white p-6 shadow-md">
                  <div className="mb-4 text-5xl">🔍</div>
                  <h3 className="mb-2 text-xl font-bold">Transparenz</h3>
                  <p className="text-gray-600">
                    <strong>Frage:</strong> Werden Kunden über den KI-Einsatz informiert?
                    <br />
                    <strong>Ziel:</strong> Klare Erklärungen in die Datenschutzerklärung aufnehmen.
                  </p>
                </div>
                <div className="rounded-lg bg-white p-6 shadow-md">
                  <div className="mb-4 text-5xl">🤖</div>
                  <h3 className="mb-2 text-xl font-bold">Automatisierte Entscheidungen</h3>
                  <p className="text-gray-600">
                    <strong>Frage:</strong> Trifft die KI Entscheidungen mit negativen Folgen für Kunden?
                    <br />
                    <strong>Ziel:</strong> Eine Option für menschliche Aufsicht sicherstellen.
                  </p>
                </div>
                <div className="rounded-lg bg-white p-6 shadow-md">
                  <div className="mb-4 text-5xl">❓</div>
                  <h3 className="mb-2 text-xl font-bold">Auskunftsrecht</h3>
                  <p className="text-gray-600">
                    <strong>Frage:</strong> Können wir erklären, wie die KI zu einem Ergebnis kam?
                    <br />
                    <strong>Ziel:</strong> Die Logik grob erklären können, um Betroffenenrechten nachzukommen.
                  </p>
                </div>
                <div className="rounded-lg bg-white p-6 shadow-md">
                  <div className="mb-4 text-5xl">🗑️</div>
                  <h3 className="mb-2 text-xl font-bold">Löschkonzept</h3>
                  <p className="text-gray-600">
                    <strong>Frage:</strong> Wie löscht die KI Daten auf Verlangen?
                    <br />
                    <strong>Ziel:</strong> Nachvollziehbare Löschung aus dem genutzten Datensatz sicherstellen.
                  </p>
                </div>
              </div>
            </section>

            <section id="risk-management" className="mb-20">
              <div className="mb-12 text-center">
                <h2 className="text-3xl font-bold text-[#0D47A1]">
                  3. Risikomanagement: Tests und Audits
                </h2>
                <p className="mt-4 text-lg text-gray-600">
                  Ein höheres Risiko erfordert bessere Dokumentation. Hier sehen Sie, worauf Sie achten müssen.
                </p>
              </div>
              <div className="grid items-start gap-8 lg:grid-cols-3">
                <div className="grid gap-8 md:grid-cols-2 lg:col-span-2">
                  <div className="rounded-lg border-t-4 border-[#1976D2] bg-white p-6 shadow-md">
                    <div className="mb-4 text-5xl">🔐</div>
                    <h3 className="mb-2 text-xl font-bold">Sicherheit</h3>
                    <p className="text-gray-600">
                      <strong>Frage:</strong> Wie schützen wir die Daten während der Verarbeitung?
                      <br />
                      <strong>Ziel:</strong> Starke Verschlüsselung und Pseudonymisierung nutzen.
                    </p>
                  </div>
                  <div className="rounded-lg border-t-4 border-[#1976D2] bg-white p-6 shadow-md">
                    <div className="mb-4 text-5xl">⚙️</div>
                    <h3 className="mb-2 text-xl font-bold">Bias-Check</h3>
                    <p className="text-gray-600">
                      <strong>Frage:</strong> Liefert die KI faire und korrekte Ergebnisse?
                      <br />
                      <strong>Ziel:</strong> Diskriminierung vermeiden und Datenrichtigkeit wahren.
                    </p>
                  </div>
                </div>
                <div className="rounded-lg border-t-8 border-red-500 bg-white p-6 shadow-xl">
                  <div className="mb-4 text-5xl">📋</div>
                  <h3 className="mb-2 text-xl font-bold">Datenschutz-Folgenabschätzung (DSFA)</h3>
                  <p className="mb-4 text-gray-600">
                    <strong>Frage:</strong> Stellt die KI ein hohes Risiko dar (z.B. bei Gesundheitsdaten)?
                    <br />
                    <strong>Ziel:</strong> Bei hohem Risiko ist eine DSFA vor der Inbetriebnahme Pflicht.
                  </p>
                  <div className="chart-container relative h-[250px] w-full max-w-[400px] md:h-[300px]">
                    <canvas id="riskChart" />
                  </div>
                  <p className="mt-2 text-center text-xs text-gray-500">
                    Risikobewertung: Einfache Tools vs. komplexe Systeme
                  </p>
                </div>
              </div>
            </section>
          </main>

          <footer className="rounded-lg bg-[#1976D2] p-10 text-center text-white">
            <h2 className="mb-4 text-3xl font-bold">Keine Angst vor KI!</h2>
            <p className="mx-auto max-w-2xl text-lg">
              Wenn Sie die DSGVO bereits im Griff haben, ist der Sprung nicht groß. Konzentrieren Sie sich auf das <strong>Warum</strong> (Zweck), das <strong>Wen</strong> (AVV) und stellen Sie sicher, dass am Ende immer ein <strong>Mensch</strong> die Kontrolle behält.
            </p>
          </footer>
        </div>
      </div>
    </>
  );
}
