import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Fallstudie: KI-Anwendungen für KMUs – Die drei Säulen",
  description:
    "Praxisleitfaden für KMUs: Prozess-Automatisierung, Kundenexperience und strategische Entscheidungen mit KI visualisiert.",
};

export default function Page() {
  const investmentBreakdown = [
    { label: "Prozess-Automatisierung", value: "45%", color: "#08415C" },
    { label: "Kunden-Erfahrung (CX)", value: "30%", color: "#CC2936" },
    { label: "Strategische Entscheidungen", value: "25%", color: "#F2D750" },
  ];

  return (
    <>
      <Script src="https://cdn.jsdelivr.net/npm/chart.js" strategy="afterInteractive" />
      <Script id="kmu-pillars-charts" strategy="afterInteractive">
        {`
          (function () {
            function initCharts() {
              if (typeof window === "undefined" || !window.Chart) {
                return;
              }

              var tooltipTitleCallback = function (tooltipItems) {
                var item = tooltipItems[0];
                var label = item.chart.data.labels[item.dataIndex];
                if (Array.isArray(label)) {
                  return label.join(" ");
                }
                return label;
              };

              var investmentCanvas = document.getElementById("investmentChart");
              if (investmentCanvas && investmentCanvas.dataset.initialized !== "true") {
                var investmentCtx = investmentCanvas.getContext("2d");
                if (investmentCtx) {
                  investmentCanvas.dataset.initialized = "true";
                  new window.Chart(investmentCtx, {
                    type: "doughnut",
                    data: {
                      labels: [
                        ["Prozess-", "Automatisierung"],
                        ["Kunden-", "Erfahrung"],
                        ["Strategische", "Entscheidungen"],
                      ],
                      datasets: [
                        {
                          data: [45, 30, 25],
                          backgroundColor: ["#08415C", "#CC2936", "#F2D750"],
                          hoverBackgroundColor: ["#33658A", "#E04052", "#FFEB6F"],
                          borderColor: "#F7F7F7",
                          borderWidth: 5,
                        },
                      ],
                    },
                    options: {
                      responsive: true,
                      maintainAspectRatio: false,
                      plugins: {
                        legend: { display: false },
                        tooltip: {
                          callbacks: {
                            title: tooltipTitleCallback,
                            label: function (context) {
                              var label = context.label || "";
                              if (label) {
                                label += ": ";
                              }
                              if (context.parsed) {
                                label += context.parsed + "%";
                              }
                              return label;
                            },
                          },
                        },
                      },
                    },
                  });
                }
              }

              var kpiCanvas = document.getElementById("kpiGainsChart");
              if (kpiCanvas && kpiCanvas.dataset.initialized !== "true") {
                var kpiCtx = kpiCanvas.getContext("2d");
                if (kpiCtx) {
                  kpiCanvas.dataset.initialized = "true";
                  new window.Chart(kpiCtx, {
                    type: "bar",
                    data: {
                      labels: [
                        ["Zeitersparnis", "Administration"],
                        ["Reduktion", "Kunden-Churn"],
                        ["Steigerung", "Prognose-Genauigkeit"],
                      ],
                      datasets: [
                        {
                          label: "KPI-Verbesserung in %",
                          data: [40, 15, 25],
                          backgroundColor: ["#08415C", "#CC2936", "#33658A"],
                          borderColor: "#F7F7F7",
                          borderWidth: 1,
                        },
                      ],
                    },
                    options: {
                      indexAxis: "y",
                      responsive: true,
                      maintainAspectRatio: false,
                      scales: {
                        x: {
                          beginAtZero: true,
                          max: 50,
                          title: { display: true, text: "Prozentuale Verbesserung (%)" },
                        },
                        y: {
                          grid: { display: false },
                          ticks: {
                            font: { size: 14 },
                          },
                        },
                      },
                      plugins: {
                        legend: { display: false },
                        tooltip: {
                          callbacks: {
                            title: tooltipTitleCallback,
                          },
                        },
                      },
                    },
                  });
                }
              }
            }

            function ensureChartReady(attempt) {
              if (typeof window === "undefined") {
                return;
              }
              if (window.Chart) {
                initCharts();
                return;
              }
              if (attempt > 10) {
                return;
              }
              setTimeout(function () {
                ensureChartReady(attempt + 1);
              }, 100);
            }

            if (document.readyState === "loading") {
              document.addEventListener("DOMContentLoaded", function () {
                ensureChartReady(0);
              });
            } else {
              ensureChartReady(0);
            }
          })();
        `}
      </Script>
      <div className="bg-[#F7F7F7] text-gray-800">
        <div className="container mx-auto px-6 py-12">
          <header className="mb-16 text-center">
            <h1 className="mb-4 text-4xl font-extrabold text-[#08415C] md:text-5xl">
              KI für KMUs: Die 3 Erfolgssäulen
            </h1>
            <p className="mx-auto max-w-3xl text-lg text-gray-600 md:text-xl">
              Wie kleine und mittlere Unternehmen mit einfachen KI-Lösungen sofortige Effizienzgewinne erzielen – ohne IT-Großprojekt.
            </p>
          </header>

          <section id="pillars" className="mb-20">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold text-[#CC2936]">
                1. Die drei wichtigsten Anwendungsbereiche
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                KI ist vielseitig, aber für den Mittelstand lohnen sich diese drei Bereiche am schnellsten:
              </p>
            </div>
            <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
              <div className="rounded-xl border-t-4 border-[#08415C] bg-white p-6 shadow-xl">
                <div className="mb-3 text-4xl text-[#08415C]">⚙️</div>
                <h3 className="mb-2 text-2xl font-bold text-[#08415C]">Prozess-Automatisierung</h3>
                <p className="mb-3 text-gray-600">
                  KI übernimmt wiederkehrende, langweilige Aufgaben und entlastet Ihr Team für strategische Tätigkeiten.
                </p>
                <strong className="text-[#CC2936]">Typische Anwendungen:</strong>
                <ul className="mt-1 list-inside list-disc text-sm text-gray-700">
                  <li>Automatische Rechnungsprüfung und Dateneingabe.</li>
                  <li>Intelligentes Sortieren und Beantworten von E-Mails.</li>
                  <li>Generierung von Texten für Produktbeschreibungen.</li>
                </ul>
              </div>
              <div className="rounded-xl border-t-4 border-[#CC2936] bg-white p-6 shadow-xl">
                <div className="mb-3 text-4xl text-[#CC2936]">💬</div>
                <h3 className="mb-2 text-2xl font-bold text-[#08415C]">Kunden-Erfahrung (CX)</h3>
                <p className="mb-3 text-gray-600">
                  KI verbessert die Kommunikation, macht den Support schneller und personalisiert das Kundenerlebnis.
                </p>
                <strong className="text-[#CC2936]">Typische Anwendungen:</strong>
                <ul className="mt-1 list-inside list-disc text-sm text-gray-700">
                  <li>24/7-Chatbots für einfache Anfragen.</li>
                  <li>Personalisierte Produktempfehlungen im Webshop.</li>
                  <li>Automatische Service-Priorisierung für kritische Kunden.</li>
                </ul>
              </div>
              <div className="rounded-xl border-t-4 border-[#F2D750] bg-white p-6 shadow-xl">
                <div className="mb-3 text-4xl text-[#08415C]">📊</div>
                <h3 className="mb-2 text-2xl font-bold text-[#08415C]">Strategische Entscheidungen</h3>
                <p className="mb-3 text-gray-600">
                  KI verwandelt Ihre historischen Excel-Daten in Prognosen, damit Sie fundierter planen.
                </p>
                <strong className="text-[#CC2936]">Typische Anwendungen:</strong>
                <ul className="mt-1 list-inside list-disc text-sm text-gray-700">
                  <li>Präzise Bedarfsprognosen für die Lagerhaltung.</li>
                  <li>Upselling-Potenziale bei Bestandskunden erkennen.</li>
                  <li>Risikoanalyse von Lieferanten (Predictive Maintenance).</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="composition" className="mb-20 rounded-xl bg-white p-8 shadow-xl md:p-12">
            <h2 className="mb-4 text-center text-3xl font-bold text-[#CC2936]">
              2. Fokus der KMU-Investitionen
            </h2>
            <p className="mx-auto mb-8 max-w-3xl text-center text-lg text-gray-600">
              Wo investieren KMUs in der DACH-Region derzeit am meisten? Der Fokus liegt klar auf der sofortigen Zeitersparnis.
            </p>
            <div className="chart-container relative mx-auto h-[350px] w-full max-w-[600px] md:h-[450px]">
              <canvas id="investmentChart" />
            </div>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {investmentBreakdown.map((item) => (
                <div
                  key={item.label}
                  className="flex flex-col gap-3 rounded-lg bg-white/80 p-4 text-left shadow-md md:items-center md:text-center"
                >
                  <span
                    aria-hidden="true"
                    className="h-4 w-4 rounded-sm"
                    style={{ backgroundColor: item.color }}
                  />
                  <div className="flex flex-col">
                    <span className="text-sm font-semibold text-[#08415C]">{item.label}</span>
                    <span className="text-lg font-bold text-[#CC2936]">{item.value}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section id="impact" className="mb-20 p-8 md:p-12">
            <div className="rounded-xl bg-white p-8 shadow-xl">
              <h2 className="mb-4 text-center text-3xl font-bold text-[#08415C]">
                3. Messbarer Erfolg: Die wichtigsten KPI-Gains
              </h2>
              <p className="mx-auto mb-8 max-w-3xl text-center text-lg text-gray-600">
                Repräsentative Daten zeigen, welche prozentualen Verbesserungen in den ersten sechs Monaten nach der KI-Einführung realistisch sind.
              </p>
              <div className="chart-container relative mx-auto h-[350px] w-full max-w-[600px] md:h-[450px]">
                <canvas id="kpiGainsChart" />
              </div>
            </div>
          </section>

          <footer id="cta" className="text-center">
            <h2 className="mb-4 text-3xl font-bold text-[#CC2936]">Ihr Weg zu datengesteuertem Erfolg</h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-600">
              Wählen Sie die Säule, die in Ihrem Unternehmen den größten Schmerzpunkt darstellt – dort ist der ROI am schnellsten sichtbar.
            </p>
            <button className="rounded-lg bg-[#CC2936] px-10 py-4 text-lg font-bold text-white transition-opacity duration-300 hover:opacity-90">
              Starten Sie Ihre KI-Analyse
            </button>
          </footer>
        </div>
      </div>
    </>
  );
}
