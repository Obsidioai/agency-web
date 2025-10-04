import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Fallstudie: MöbelKlar – KI-gestützte Lead-Optimierung",
  description:
    "Wie MöbelKlar die Conversion-Rate vervierfachte, indem KI Leads in Echtzeit scored, den Vertrieb entlastet und messbare Ergebnisse liefert.",
};

export default function Page() {
  return (
    <>
      <Script src="https://cdn.jsdelivr.net/npm/chart.js" strategy="afterInteractive" />
      <Script id="moebelklar-charts" strategy="afterInteractive">
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

              var growthCanvas = document.getElementById("growthChart");
              if (growthCanvas && growthCanvas.dataset.initialized !== "true") {
                var growthCtx = growthCanvas.getContext("2d");
                if (growthCtx) {
                  growthCanvas.dataset.initialized = "true";
                  new window.Chart(growthCtx, {
                    type: "line",
                    data: {
                      labels: ["Monat 1", "Monat 2", "Monat 3", "Monat 4", "Monat 5", "Monat 6"],
                      datasets: [
                        {
                          label: "Qualifizierte Leads (Score > 80)",
                          data: [125, 200, 310, 380, 420, 500],
                          borderColor: "#CC2936",
                          backgroundColor: "rgba(204, 41, 54, 0.12)",
                          tension: 0.4,
                          fill: true,
                          pointRadius: 5,
                        },
                      ],
                    },
                    options: {
                      responsive: true,
                      maintainAspectRatio: false,
                      plugins: {
                        legend: { position: "top" },
                        tooltip: { callbacks: { title: tooltipTitleCallback } },
                      },
                      scales: {
                        y: {
                          beginAtZero: true,
                          title: { display: true, text: "Anzahl Leads" },
                        },
                      },
                    },
                  });
                }
              }

              var efficiencyCanvas = document.getElementById("efficiencyChart");
              if (efficiencyCanvas && efficiencyCanvas.dataset.initialized !== "true") {
                var efficiencyCtx = efficiencyCanvas.getContext("2d");
                if (efficiencyCtx) {
                  efficiencyCanvas.dataset.initialized = "true";
                  new window.Chart(efficiencyCtx, {
                    type: "bar",
                    data: {
                      labels: [["Manuell (80% Waste)", ""], ["KI-gesteuert (20% Fokus)", ""]],
                      datasets: [
                        {
                          label: "Zeit für irrelevante Leads",
                          data: [800, 0],
                          backgroundColor: "#CC2936",
                        },
                        {
                          label: "Zeit für Top-Leads",
                          data: [200, 1000],
                          backgroundColor: "#08415C",
                        },
                      ],
                    },
                    options: {
                      responsive: true,
                      maintainAspectRatio: false,
                      scales: {
                        x: { stacked: true, title: { display: true, text: "Prozess" } },
                        y: {
                          stacked: true,
                          beginAtZero: true,
                          title: { display: true, text: "Minuten pro 100 Leads" },
                        },
                      },
                      plugins: {
                        legend: { position: "top" },
                        tooltip: { callbacks: { title: tooltipTitleCallback } },
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
            <h1 className="mb-4 text-4xl font-extrabold text-[#CC2936] md:text-5xl">Fallstudie: MöbelKlar</h1>
            <p className="mx-auto max-w-3xl text-lg text-gray-600 md:text-xl">
              400 % höhere Conversion-Rate durch KI-gestütztes Lead-Scoring. Einblicke für den DACH-Mittelstand.
            </p>
          </header>

          <section id="problem" className="mb-20">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold text-[#08415C]">1. Die Herausforderung: Blindflug im Lead-Trichter</h2>
              <p className="mt-4 text-lg text-gray-600">
                Die MöbelKlar GmbH (E-Commerce, 45 Mitarbeitende) generierte monatlich 5.000 Leads, doch der Vertrieb arbeitete die Liste
                manuell ab – ohne zu wissen, welche Kontakte wirklich kaufbereit waren.
              </p>
            </div>
            <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
              <div className="rounded-xl border-t-4 border-gray-300 bg-white p-8 shadow-lg">
                <h3 className="mb-4 text-center text-2xl font-bold">Der ineffiziente Status quo</h3>
                <ul className="list-inside list-disc space-y-3 text-gray-700">
                  <li>
                    <strong>Durchschnittliche Konversion:</strong> 2,5 % über alle Leads (zu niedrig).
                  </li>
                  <li>
                    <strong>Ressourcenverschwendung:</strong> 80 % der Vertriebszeit ging für Leads ohne Kaufinteresse verloren.
                  </li>
                  <li>
                    <strong>Datenquelle:</strong> Manuelle Excel-Exporte aus dem Formularsystem.
                  </li>
                </ul>
              </div>
              <div className="rounded-xl bg-[#08415C] p-8 text-white shadow-2xl">
                <h3 className="mb-4 text-center text-2xl font-bold">Das Ziel der KI-Lösung ✨</h3>
                <ul className="list-inside list-disc space-y-3">
                  <li>
                    <strong>Präzision:</strong> Identifikation der Top 20 % kaufbereiter Leads.
                  </li>
                  <li>
                    <strong>Zeitgewinn:</strong> Freigabe von bis zu 7 Minuten je Lead für hochwertige Beratung.
                  </li>
                  <li>
                    <strong>Datenbasis:</strong> Verknüpfung von Excel-Daten mit Web-Verhalten und Demografie.
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section id="process" className="mb-20">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold text-[#08415C]">2. Die Lösung: Automatisierter 3-Stufen-Prozess</h2>
              <p className="mt-4 text-lg text-gray-600">
                MöbelKlar analysierte 12 Monate Lead-Daten, trainierte darauf ein Prognosemodell und setzt seither auf Echtzeit-Scoring.
              </p>
            </div>
            <div className="mx-auto max-w-2xl text-center">
              <div className="rounded-lg bg-white p-8 shadow-lg">
                <div className="mb-2 text-5xl">🧹</div>
                <h3 className="text-2xl font-bold text-[#CC2936]">Stufe 1: Clean &amp; Train</h3>
                <p className="text-gray-600">
                  Lead-Historie wurde bereinigt, mit finalen Kaufstatus versehen und diente als Trainingsbasis für das KI-Modell.
                </p>
              </div>
              <div className="flow-arrow my-4 text-[#F2D750]">▼</div>
              <div className="rounded-lg bg-white p-8 shadow-lg">
                <div className="mb-2 text-5xl">⚡</div>
                <h3 className="text-2xl font-bold text-[#CC2936]">Stufe 2: Real-Time Scoring</h3>
                <p className="text-gray-600">
                  Neue Leads erhalten sofort einen Score (1-100) basierend auf 15 Prädiktoren. Nur Kontakte mit Score &gt; 80 gehen an den Vertrieb.
                </p>
              </div>
              <div className="flow-arrow my-4 text-[#F2D750]">▼</div>
              <div className="rounded-lg bg-white p-8 shadow-lg">
                <div className="mb-2 text-5xl">🎯</div>
                <h3 className="text-2xl font-bold text-[#CC2936]">Stufe 3: Prioritise &amp; Predict</h3>
                <p className="text-gray-600">
                  Der Vertrieb konzentriert sich auf 1.000 Top-Leads pro Monat und nutzt KI-Empfehlungen für personalisierte Ansprache.
                </p>
              </div>
            </div>
          </section>

          <section id="impact" className="mb-20 rounded-xl bg-white p-8 shadow-xl md:p-12">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold text-[#08415C]">3. Die Ergebnisse: Messbare Effizienz und Wachstum</h2>
              <p className="mx-auto mt-4 max-w-3xl text-lg text-gray-600">
                Die KI-Implementierung führte zu einer sofortigen Steigerung der Vertriebseffizienz und einer nachhaltigen Conversion-Rate.
              </p>
            </div>

            <div className="mb-12 grid gap-8 md:grid-cols-2">
              <div className="rounded-lg border-b-4 border-l-4 border-[#CC2936] p-6 text-center shadow-inner">
                <p className="text-xl font-medium text-gray-500">Conversion-Rate (Top 20 % Leads)</p>
                <h3 className="text-6xl font-extrabold text-[#CC2936]">10%</h3>
                <p className="mt-2 text-lg text-gray-600">Zuvor: 2,5 % Gesamtkonversion</p>
              </div>
              <div className="rounded-lg border-b-4 border-l-4 border-[#08415C] p-6 text-center shadow-inner">
                <p className="text-xl font-medium text-gray-500">Vertriebszeitersparnis pro Lead</p>
                <h3 className="text-6xl font-extrabold text-[#08415C]">7 Min.</h3>
                <p className="mt-2 text-lg text-gray-600">Dank Fokus auf kaufbereite Leads</p>
              </div>
            </div>

            <div className="mb-12">
              <h3 className="mb-4 text-center text-2xl font-bold text-[#08415C]">
                Wachstum der qualifizierten Leads (6 Monate)
              </h3>
              <p className="mb-6 text-center text-gray-600">
                Mehr Beratungszeit pro Kontakt führte zu stetig steigenden Abschlusschancen.
              </p>
              <div className="chart-container relative mx-auto h-[350px] w-full max-w-[600px] md:h-[450px]">
                <canvas id="growthChart" />
              </div>
            </div>

            <div>
              <h3 className="mb-4 text-center text-2xl font-bold text-[#08415C]">
                Vertriebsaufwand: Manuell vs. KI-gestützt (pro 100 Leads)
              </h3>
              <p className="mb-6 text-center text-gray-600">
                KI reduziert den Aufwand für irrelevante Kontakte drastisch und schafft Kapazität für echte Beratung.
              </p>
              <div className="chart-container relative mx-auto h-[350px] w-full max-w-[600px] md:h-[450px]">
                <canvas id="efficiencyChart" />
              </div>
            </div>
          </section>

          <footer id="cta" className="text-center">
            <h2 className="mb-4 text-3xl font-bold text-[#CC2936]">Ihr Weg zu datengesteuertem Erfolg</h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-600">
              Wie MöbelKlar zeigen auch Sie: Der Schatz liegt in Ihren Daten. Nutzen Sie Ihre Excel-Historie als Trainingsbasis für Ihre eigene KI.
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
