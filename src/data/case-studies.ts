export type CaseStudy = {
  slug: string;
  title: string;
  industry: string;
  summary: string;
  challenge: string;
  approach: string[];
  outcomes: {label: string; value: string; description?: string}[];
  testimonial?: {quote: string; name: string; role: string};
  image?: {src: string; alt: string};
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "moebelklar-lead-optimierung",
    title: "400% höhere Conversion-Rate mit KI-gestütztem Lead-Scoring",
    industry: "E-Commerce (Möbelhandel)",
    summary:
      "Bewertet 5.000 monatliche Leads automatisch, rückt die Top 20% in den Fokus und gibt dem Vertrieb Playbooks für den perfekten Touchpoint.",
    challenge:
      "Das Vertriebsteam der MöbelKlar GmbH verlor 80% seiner Zeit an Leads ohne Kaufabsicht, weil Excel-Listen manuell abgearbeitet wurden.",
    approach: [
      "Bereinigte 12 Monate Lead-Historie und kennzeichnete Conversions, um ein verlässliches Trainingsdatenset aufzubauen.",
      "Implementierte ein Echtzeit-Scoring (1-100) auf Basis von 15 Signalen inklusive Web-Verhalten, Produktinteresse und Region.",
      "Routete nur Leads mit Score > 80 an den Vertrieb und versorgte sie mit personalisierten Outreach-Vorlagen.",
    ],
    outcomes: [
      {label: "Conversion-Rate", value: "↗︎ 10%", description: "zuvor 2,5% über alle Leads"},
      {label: "Zeitersparnis je Lead", value: "7 Min.", description: "Vertrieb fokussiert sich auf kaufbereite Kontakte"},
      {label: "Qualifizierte Leads", value: "+300%", description: "125 → 500 Leads mit Score > 80 in 6 Monaten"},
    ],
    testimonial: {
      quote:
        "Wir sehen sofort, welche Leads wirklich kaufen wollen. Unser Team nutzt die Zeit endlich für Beratung statt Qualifying.",
      name: "Leitung Vertrieb",
      role: "MöbelKlar GmbH",
    },
    image: {
      src: "/images/michael-niessl-nuvaRAeaMdc-unsplash.jpg",
      alt: "Vertriebsmitarbeitende betrachten Leistungsmetriken auf einem Dashboard",
    },
  },
  {
    slug: "kmu-ki-drei-saeulen",
    title: "Die drei KI-Erfolgssäulen für DACH-KMUs",
    industry: "KMU-Transformation",
    summary:
      "Zeigt, wie mittelständische Teams mit Prozess-Automatisierung, CX-Optimierung und Datenprognosen schnellen ROI erzielen.",
    challenge:
      "Geschäftsführungen sehen zwar KI-Potenzial, wissen aber nicht, in welchen Anwendungsfällen die ersten Investitionen den größten Effekt liefern.",
    approach: [
      "Kartierte bestehende Prozesse und identifizierte Aufgaben mit hohem manuellen Aufwand.",
      "Priorisierte Kundenkontaktpunkte, an denen KI den Service spürbar beschleunigt.",
      "Verknüpfte Excel-Historien mit Planungsdaten, um Forecasts und Dashboards aufzubauen.",
    ],
    outcomes: [
      {label: "Investition in Automatisierung", value: "45%", description: "Budget-Fokus im ersten Jahr"},
      {label: "Zeitersparnis Administration", value: "-40%"},
      {label: "Prognosegenauigkeit", value: "+25%"},
    ],
    testimonial: {
      quote:
        "Mit drei klaren Säulen konnten wir unsere Roadmap endlich priorisieren – ohne Großkonzern-Budget.",
      name: "Geschäftsführer",
      role: "DACH-Mittelstand",
    },
    image: {
      src: "/images/michael-niessl-nuvaRAeaMdc-unsplash.jpg",
      alt: "Beratungsteam analysiert Automatisierungsdaten auf einem Dashboard",
    },
  },
];
