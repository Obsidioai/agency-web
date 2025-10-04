import { Bot, Brain, CircuitBoard, Megaphone, Rocket, Target } from "lucide-react";
import ServicesShowcase from "../_components/ServicesShowcase";
import FAQ from "./_components/FAQ";
import FinalCTA from "./_components/FinalCTA";

export const metadata = {
  title: "Services | [Agency Name]",
  description: "Practical AI services for SMBs: Automation, Consulting, Lead Gen, SaaS, Branding."
};

const showcaseItems = [
  {
    icon: <Rocket className="h-6 w-6" />,
    title: "SaaS-Entwicklung & Implementierung",
    blurb:
      "Leichtgewichtige, passgenaue Tools - nahtlos integriert in Ihre bestehende Umgebung (Microsoft 365, Google Workspace, HubSpot, Shopify) inkl. sauberer Uebergabe und Dokumentation.",
    details: [
      "Wir entwickeln schlanke SaaS-Komponenten, die vorhandene Prozesse staerken statt neue Silos aufzubauen.",
      "Anbindung, Dokumentation und Wissenstransfer stellen sicher, dass Ihr Team jede Loesung eigenstaendig betreibt."
    ],
    href: "/services/saas-solutions"
  },
  {
    icon: <Brain className="h-6 w-6" />,
    title: "KI-Beratung fuer KMU",
    blurb:
      "Herstellerneutrale Einschaetzung, klare ROI-Prioritaeten und ein umsetzbarer 90-Tage-Fahrplan - ohne Hype, mit konkreten naechsten Schritten.",
    details: [
      "Wir bewerten Systeme, Datenfluesse und Risiken mit Blick auf pragmatische Quick Wins.",
      "Sie erhalten einen priorisierten Fahrplan inklusive KPIs, Budgetrahmen und Go/No-Go-Kriterien."
    ],
    href: "/services/ai-consulting"
  },
  {
    icon: <CircuitBoard className="h-6 w-6" />,
    title: "Automatisierung & Workflow-Design",
    blurb:
      "Wir ersetzen repetitive Aufgaben durch robuste Automationen (n8n/Make/Zapier + Code) mit Protokollen, Retries und Benachrichtigungen.",
    details: [
      "Von der Prozessanalyse bis zum Rollout schaffen wir Human-in-the-loop-Automationen mit klaren Eskalationspfaden.",
      "Monitoring, Logging und Alerting geben Teams Transparenz ueber jeden Lauf und jeden Fehler."
    ],
    href: "/services/ai-automation"
  },
  {
    icon: <Bot className="h-6 w-6" />,
    title: "Virtueller Helpdesk & Chatbots",
    blurb:
      "Natuerlich klingende Assistenten fuer Support, FAQs und Lead-Erfassung - angebunden an Ihre Daten, DSGVO-bewusst und auswertbar.",
    details: [
      "Wir verbinden Wissensdatenbanken, CRM und Ticket-Systeme, damit Assistenten echte Antworten liefern.",
      "Guardrails, menschliche Falluebernahme und Analytics halten Qualitaet und Compliance im Blick."
    ],
    href: "/services/ai-automation"
  },
  {
    icon: <Target className="h-6 w-6" />,
    title: "KI-Potenzialanalyse vor Ort",
    blurb:
      "Ein Tag in Ihrem Betrieb: reale Ablaeufe aufnehmen, Chancen identifizieren, priorisierte Roadmap erstellen - mit positionenweiser Preisuebersicht pro Loesung.",
    details: [
      "Wir dokumentieren Ist-Prozesse direkt am Arbeitsplatz und bewerten Potenziale nach Aufwand vs. Nutzen.",
      "Sie erhalten eine Roadmap mit belastbaren Einschaetzungen zu Kosten, Einsparungen und Verantwortlichkeiten."
    ],
    href: "/services/ai-consulting"
  },
  {
    icon: <Megaphone className="h-6 w-6" />,
    title: "Branchen-Dashboards & Lead-Systeme",
    blurb:
      "Individuelle Dashboards und Lead-Prozesse fuer z. B. Immobilien- und Versicherungsbetriebe: einheitliche KPIs, smartes Scoring und automatisierte Folgeaktionen.",
    details: [
      "Wir harmonisieren Datenquellen und bauen KPI-Frameworks, die jede Abteilung versteht.",
      "Automatisierte Scoring-Modelle und Outreach-Playbooks steigern Geschwindigkeit und Abschlussquoten."
    ],
    href: "/services/lead-generation"
  }
];

export default function ServicesPage() {
  return (
    <main>
      <ServicesShowcase
        heading="BUILD YOUR AI OPERATING ADVANTAGE"
        subheading="Modular engagements that stack wins across revenue, operations, and product."
        items={showcaseItems}
        accentHex="#4B64F3"
      />
      <FAQ />
      <FinalCTA />
    </main>
  );
}
