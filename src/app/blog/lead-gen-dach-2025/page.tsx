import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
export const metadata: Metadata = {
  title: "Infografik: Lead-Generierung in DACH 2025",
  description:
    "Visueller Leitfaden für DACH-KMUs: Vertrauen aufbauen, LinkedIn nutzen und mit hochwertigen Lead Magnets konvertieren.",
};

export default function Page() {
  return (
    <>
      <Script src="https://cdn.jsdelivr.net/npm/chart.js" strategy="afterInteractive" />
      <Script id="lead-magnet-chart" strategy="afterInteractive">
        {`
          (function () {
            function initChart() {
              if (typeof window === "undefined") {
                return;
              }
              var canvas = document.getElementById("leadMagnetChart");
              if (!canvas || canvas.dataset.initialized === "true") {
                return;
              }
              var ctx = canvas.getContext("2d");
              if (!ctx || !window.Chart) {
                return;
              }
              canvas.dataset.initialized = "true";
              var leadMagnetData = {
                labels: [
                  "Allgemeines PDF",
                  "Fallstudie",
                  "Sofort-Checkliste",
                  ["ROI-Rechner", "(Interaktives Tool)"],
                ],
                conversionRates: [8, 15, 30, 50],
              };

              new window.Chart(ctx, {
                type: "bar",
                data: {
                  labels: leadMagnetData.labels,
                  datasets: [
                    {
                      label: "Konversionsrate in %",
                      data: leadMagnetData.conversionRates,
                      backgroundColor: ["#55828B", "#33658A", "#F2D750", "#CC2936"],
                      borderColor: "#FFFFFF",
                      borderWidth: 2,
                      borderRadius: 5,
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
                      title: { display: true, text: "Besucher, die ihre E-Mail hinterlassen (%)" },
                      grid: { display: false },
                    },
                    y: {
                      grid: { display: false },
                    },
                  },
                  plugins: {
                    legend: { display: false },
                    title: {
                      display: true,
                      text: "Effektivität von Lead Magnets",
                      font: { size: 18, weight: "bold" },
                      color: "#08415C",
                      padding: { top: 10, bottom: 20 },
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
              Lead-Generierung in DACH: Was 2025 wirklich konvertiert
            </h1>
            <p className="mx-auto max-w-3xl text-lg text-gray-600 md:text-xl">
              Ein visueller Leitfaden für KMUs, der zeigt, wie Sie mit Fokus auf Qualität und Vertrauen erfolgreich neue Kunden gewinnen.
            </p>
          </header>

          <section id="intro" className="mb-20 text-center">
            <div className="mx-auto max-w-2xl rounded-xl bg-white p-8 shadow-lg">
              <h2 className="mb-4 text-2xl font-bold text-[#08415C]">
                Der Wandel ist da: Qualität vor Quantität
              </h2>
              <p className="text-lg text-gray-600">
                Für KMUs in der DACH-Region geht es 2025 nicht mehr darum, die meisten Leads zu sammeln, sondern die richtigen. Der Schlüssel liegt in einer menschlichen, vertrauensbildenden Ansprache.
              </p>
            </div>
          </section>

          <section id="foundation" className="mb-20">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold text-[#08415C]">Das Fundament: Die DACH-Mentalität</h2>
              <p className="mt-4 text-lg text-gray-600">
                Vertrauen ist Ihre wichtigste Währung. Aggressive Taktiken scheitern hier.
              </p>
            </div>
            <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
              <div className="rounded-lg border-t-4 border-[#08415C] bg-white p-6 text-center shadow-md">
                <div className="mb-4 text-5xl">🛡️</div>
                <h3 className="mb-2 text-xl font-bold">Datenschutz zuerst</h3>
                <p className="text-gray-600">
                  Transparente Kommunikation und Double Opt-In sind nicht nur legal, sondern schaffen sofort Vertrauen.
                </p>
              </div>
              <div className="rounded-lg border-t-4 border-[#08415C] bg-white p-6 text-center shadow-md">
                <div className="mb-4 text-5xl">💬</div>
                <h3 className="mb-2 text-xl font-bold">Klare Kommunikation</h3>
                <p className="text-gray-600">
                  Sagen Sie genau, was der Nutzer erhält. Keine Tricks, keine versteckte Werbung.
                </p>
              </div>
              <div className="rounded-lg border-t-4 border-[#08415C] bg-white p-6 text-center shadow-md">
                <div className="mb-4 text-5xl">📍</div>
                <h3 className="mb-2 text-xl font-bold">Lokale Relevanz</h3>
                <p className="text-gray-600">
                  Sprechen Sie spezifische Herausforderungen Ihrer lokalen Zielgruppe an, von Fachkräftemangel bis zu Regulatorien.
                </p>
              </div>
            </div>
          </section>

          <section id="linkedin" className="mb-20">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold text-[#08415C]">Der Top-Kanal: Content-Driven LinkedIn</h2>
              <p className="mt-4 text-lg text-gray-600">
                Positionieren Sie sich als Vordenker, nicht als Verkäufer. Hilfsbereitschaft konvertiert.
              </p>
            </div>
            <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
              <div className="rounded-lg bg-white p-8 shadow-lg">
                <h3 className="mb-3 text-xl font-bold text-[#CC2936]">Micro-Content</h3>
                <p className="text-gray-600">
                  Posten Sie kurze, wertvolle Beiträge zu Nischenthemen. Das baut Autorität auf und führt zu Profilbesuchen.
                </p>
              </div>
              <div className="rounded-lg bg-white p-8 shadow-lg">
                <h3 className="mb-3 text-xl font-bold text-[#CC2936]">“Dark Posting” (Anzeigen)</h3>
                <p className="text-gray-600">
                  Schalten Sie Anzeigen, die auf kostenlose Whitepaper oder Checklisten verlinken. Das liefert hochqualifizierte Leads.
                </p>
              </div>
              <div className="rounded-lg bg-white p-8 shadow-lg">
                <h3 className="mb-3 text-xl font-bold text-[#CC2936]">Regelmäßige Live-Events</h3>
                <p className="text-gray-600">
                  Monatliche, 30-minütige Webinare zu Kundenproblemen schaffen Vertrauen und direkte Interaktion.
                </p>
              </div>
            </div>
          </section>

          <section id="lead-magnets" className="mb-20 rounded-xl bg-white p-8 shadow-xl md:p-12">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold text-[#08415C]">
                Die Konversions-Maschine: High-Value Lead Magnets
              </h2>
              <p className="mx-auto mt-4 max-w-3xl text-lg text-gray-600">
                Vergessen Sie allgemeine Broschüren. Bieten Sie sofortigen, messbaren Nutzen. Interaktivität ist der Schlüssel zum Erfolg.
              </p>
            </div>
            <div className="relative mx-auto h-[350px] w-full max-w-[800px] md:h-[400px]">
              <canvas id="leadMagnetChart" />
            </div>
            <p className="mt-8 text-center text-sm text-gray-500">
              Diese Grafik zeigt die durchschnittliche Konversionsrate (Anzahl der Downloads pro 100 Besucher) für verschiedene Arten von Lead Magnets. Interaktive Tools wie ROI-Rechner übertreffen statische Formate bei weitem.
            </p>
          </section>

          <section id="conversion-funnel" className="mb-20">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold text-[#08415C]">
                Die Konversions-Formel: Von der E-Mail zum Meeting
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Ein hochwertiger Lead ist nur der Anfang. So pflegen Sie die Beziehung richtig.
              </p>
            </div>
            <div className="mx-auto max-w-md">
              <div className="space-y-4 text-center">
                <div className="rounded-xl bg-gradient-to-br from-[#08415C] to-[#33658A] p-6 text-white shadow-lg">
                  <span className="text-sm font-bold opacity-70">Schritt 1</span>
                  <h3 className="text-xl font-bold">Sofort-Kontakt</h3>
                  <p className="text-sm opacity-90">
                    Senden Sie die angeforderte Ressource sofort per E-Mail, idealerweise vom Geschäftsführer, um Autorität zu signalisieren.
                  </p>
                </div>
                <div className="text-3xl text-[#F2D750]">▼</div>
                <div className="rounded-xl bg-gradient-to-br from-[#08415C] to-[#33658A] p-6 text-white shadow-lg">
                  <span className="text-sm font-bold opacity-70">Schritt 2</span>
                  <h3 className="text-xl font-bold">Der Nurturing-Flow</h3>
                  <p className="text-sm opacity-90">
                    Senden Sie 3-4 E-Mails mit echtem Mehrwert (Tipps, Case Studies) über 4 Wochen – keine Verkaufs-Mails!
                  </p>
                </div>
                <div className="text-3xl text-[#F2D750]">▼</div>
                <div className="rounded-xl bg-gradient-to-br from-[#08415C] to-[#33658A] p-6 text-white shadow-lg">
                  <span className="text-sm font-bold opacity-70">Schritt 3</span>
                  <h3 className="text-xl font-bold">Die weiche Aufforderung</h3>
                  <p className="text-sm opacity-90">
                    Bieten Sie ein 15-minütiges Gespräch an, um ein spezifisches Problem zu lösen. Vermeiden Sie das Wort "Verkauf".
                  </p>
                </div>
              </div>
            </div>
          </section>

          <footer id="cta" className="rounded-lg bg-white p-10 text-center shadow-lg">
            <h2 className="mb-4 text-3xl font-bold text-[#08415C]">Ihr Fazit für 2025</h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-600">
              Gewinnen Sie Leads nicht durch Lautstärke, sondern durch Relevanz, Vertrauen und sofortigen, messbaren Wert. Das ist der Weg zum Erfolg in der DACH-Region.
            </p>
            <Link
              href="/contact"
              className="rounded-lg bg-[#CC2936] px-8 py-3 text-lg font-bold text-white transition-opacity duration-300 hover:opacity-90"
            >
              Starten Sie Ihre Strategie
            </Link>
          </footer>
        </div>
      </div>
    </>
  );
}




