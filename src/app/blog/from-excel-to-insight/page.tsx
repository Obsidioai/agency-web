import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Infografik: Von Excel zu Insight mit KI",
  description:
    "Infografik für DACH-KMUs: Grenzen manueller Analysen, 3-stufige KI-Transformation und messbare Vorteile auf einen Blick.",
};

export default function Page() {
  return (
    <>
      <Script src="https://cdn.jsdelivr.net/npm/chart.js" strategy="afterInteractive" />
      <Script id="benefits-chart" strategy="afterInteractive">
        {`
          (function () {
            function initChart() {
              if (typeof window === "undefined") {
                return;
              }
              var canvas = document.getElementById("benefitsChart");
              if (!canvas || canvas.dataset.initialized === "true") {
                return;
              }
              var ctx = canvas.getContext("2d");
              if (!ctx || !window.Chart) {
                return;
              }
              canvas.dataset.initialized = "true";
              var benefitsData = {
                labels: [
                  "Vertrieb",
                  "Marketing",
                  "Lagerhaltung",
                  ["Kunden-Service", ""],
                ],
                beforeAI: [3, 4, 2, 5],
                afterAI: [9, 8, 9, 8],
              };

              new window.Chart(ctx, {
                type: "radar",
                data: {
                  labels: benefitsData.labels,
                  datasets: [
                    {
                      label: "Entscheidungsgüte (Manuell)",
                      data: benefitsData.beforeAI,
                      backgroundColor: "rgba(204, 41, 54, 0.2)",
                      borderColor: "#CC2936",
                      pointBackgroundColor: "#CC2936",
                      pointBorderColor: "#fff",
                      pointHoverBackgroundColor: "#fff",
                      pointHoverBorderColor: "#CC2936",
                    },
                    {
                      label: "Entscheidungsgüte (mit KI)",
                      data: benefitsData.afterAI,
                      backgroundColor: "rgba(8, 65, 92, 0.2)",
                      borderColor: "#08415C",
                      pointBackgroundColor: "#08415C",
                      pointBorderColor: "#fff",
                      pointHoverBackgroundColor: "#fff",
                      pointHoverBorderColor: "#08415C",
                    },
                  ],
                },
                options: {
                  responsive: true,
                  maintainAspectRatio: false,
                  scales: {
                    r: {
                      angleLines: { color: "rgba(0, 0, 0, 0.1)" },
                      grid: { color: "rgba(0, 0, 0, 0.1)" },
                      pointLabels: {
                        font: { size: 14, weight: "bold" },
                        color: "#333",
                      },
                      suggestedMin: 0,
                      suggestedMax: 10,
                      ticks: {
                        backdropColor: "rgba(255, 255, 255, 0.75)",
                        color: "#666",
                      },
                    },
                  },
                  plugins: {
                    legend: {
                      position: "top",
                      labels: {
                        font: { size: 14 },
                      },
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
      <div className="bg-[#F7F7F7] text-gray-800">
        <div className="container mx-auto px-6 py-12">
          <header className="mb-16 text-center">
            <h1 className="mb-4 text-4xl font-extrabold text-[#08415C] md:text-5xl">
              Von Excel zu Insight
            </h1>
            <p className="mx-auto max-w-3xl text-lg text-gray-600 md:text-xl">
              Wie KI den verborgenen Datenschatz in Ihren Tabellen hebt und in bessere Entscheidungen für Ihr KMU verwandelt.
            </p>
          </header>

          <section id="problem" className="mb-20">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold text-[#08415C]">
                Die Grenzen der manuellen Analyse
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Excel ist ein großartiges Werkzeug, aber es hat einen blinden Fleck für die tiefen Muster in Ihren Daten.
              </p>
            </div>
            <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
              <div className="rounded-xl border-t-4 border-gray-300 bg-white p-8 shadow-lg">
                <h3 className="mb-4 text-center text-2xl font-bold">Der manuelle Weg</h3>
                <ul className="list-inside list-disc space-y-3 text-gray-700">
                  <li>
                    <strong>Zeitfresser:</strong> Stundenlanges Bereinigen und Pivotieren von Daten.
                  </li>
                  <li>
                    <strong>Blinder Fleck:</strong> Verborgene Muster und Korrelationen werden übersehen.
                  </li>
                  <li>
                    <strong>Veraltet:</strong> Berichte sind oft schon bei Fertigstellung veraltet.
                  </li>
                </ul>
              </div>
              <div className="rounded-xl bg-[#08415C] p-8 text-white shadow-2xl">
                <h3 className="mb-4 text-center text-2xl font-bold">Der KI-Weg ✨</h3>
                <ul className="list-inside list-disc space-y-3">
                  <li>
                    <strong>Sekundenschnell:</strong> Daten werden automatisch bereinigt und aufbereitet.
                  </li>
                  <li>
                    <strong>Tiefenanalyse:</strong> KI entdeckt profitable Muster, die Menschen nicht sehen.
                  </li>
                  <li>
                    <strong>Echtzeit:</strong> Erkenntnisse und Alarme werden live generiert.
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section id="process" className="mb-20">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold text-[#08415C]">
                Die 3-Stufen-Transformation durch KI
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                So verwandelt KI Ihre unordentlichen Rohdaten in wertvolle, vorausschauende Erkenntnisse.
              </p>
            </div>
            <div className="mx-auto max-w-2xl text-center">
              <div className="rounded-lg bg-white p-8 shadow-lg">
                <div className="mb-2 text-5xl">🧹</div>
                <h3 className="text-2xl font-bold text-[#CC2936]">Stufe 1: Clean</h3>
                <p className="text-gray-600">
                  Die KI bereinigt automatisch Ihre Excel-Listen, korrigiert Fehler und vereinheitlicht Formate – die Grundlage für jede gute Analyse.
                </p>
              </div>
              <div className="flow-arrow my-4 text-[#F2D750]">▼</div>
              <div className="rounded-lg bg-white p-8 shadow-lg">
                <div className="mb-2 text-5xl">🔎</div>
                <h3 className="text-2xl font-bold text-[#CC2936]">Stufe 2: Analyze</h3>
                <p className="text-gray-600">
                  Die KI durchforstet die sauberen Daten und findet verborgene Muster: Welche Kundengruppen sind am profitabelsten? Wo gibt es Engpässe?
                </p>
              </div>
              <div className="flow-arrow my-4 text-[#F2D750]">▼</div>
              <div className="rounded-lg bg-white p-8 shadow-lg">
                <div className="mb-2 text-5xl">🔮</div>
                <h3 className="text-2xl font-bold text-[#CC2936]">Stufe 3: Predict</h3>
                <p className="text-gray-600">
                  Die KI nutzt historische Muster, um die Zukunft vorherzusagen: Wie hoch wird die Nachfrage sein? Welche Kunden drohen abzuwandern?
                </p>
              </div>
            </div>
          </section>

          <section id="benefits" className="mb-20 rounded-xl bg-white p-8 shadow-xl md:p-12">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold text-[#08415C]">Der direkte Gewinn für Ihr KMU</h2>
              <p className="mx-auto mt-4 max-w-3xl text-lg text-gray-600">
                KI-Analyse ist kein Luxus, sondern ein messbarer Hebel für Effizienz und Profitabilität. Diese Grafik zeigt die Steigerung der Entscheidungsgüte in vier Kernbereichen.
              </p>
            </div>
            <div className="chart-container relative mx-auto h-[400px] w-full max-w-[600px] md:h-[500px]">
              <canvas id="benefitsChart" />
            </div>
          </section>

          <footer id="cta" className="text-center">
            <h2 className="mb-4 text-3xl font-bold text-[#08415C]">
              Starten Sie jetzt, nicht morgen
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-600">
              Sie brauchen keinen Data Scientist. Moderne, benutzerfreundliche KI-Tools sind für KMUs gemacht. Beginnen Sie mit Ihrer wichtigsten Excel-Datei und entdecken Sie, was in Ihren Daten steckt.
            </p>
            <button className="rounded-lg bg-[#CC2936] px-10 py-4 text-lg font-bold text-white transition-opacity duration-300 hover:opacity-90">
              Entdecken Sie passende KI-Tools
            </button>
          </footer>
        </div>
      </div>
    </>
  );
}
