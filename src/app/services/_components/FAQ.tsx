import { Mail, ShieldCheck, Timer, Rocket } from "lucide-react";

const faqs = [
  {
    question: "Wie starten wir?",
    answer:
      "Kickoff-Call -> Discovery-Sprint -> erster ausgelieferter Gewinn. Ab Tag eins sehen Sie einen einfachen Plan, klare Verantwortlichkeiten und Messgroessen.",
    icon: Rocket
  },
  {
    question: "Wie schnell koennen wir starten?",
    answer:
      "Ein Discovery-Sprint kann innerhalb einer Woche beginnen. Die meisten Teams sehen ihre erste Automatisierung oder ein Enablement-Asset innerhalb von 2-4 Wochen nach dem Kickoff.",
    icon: Timer
  },
  {
    question: "Daten & Sicherheit?",
    answer:
      "Wir folgen DSGVO-Best Practices, schliessen Auftragsverarbeitungsvertraege (DPAs) und koennen innerhalb EU-gebundener Infrastruktur deployen. Zugriffe sind fuer jedes Engagement klar abgegrenzt und protokolliert.",
    icon: ShieldCheck
  },
  {
    question: "Schulen Sie unsere Teams?",
    answer:
      "Ja. Jedes Projekt umfasst Playbooks, Dokumentation und Live-Enablement. Auf Wunsch fuehren wir Follow-up-Sessions durch, um die neuen Workflows zu verankern.",
    icon: Mail
  }
];

export default function FAQ() {
  return (
    <section className="relative isolate overflow-hidden px-6 pb-16 pt-14 md:px-10">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(700px 400px at 20% 0%, rgba(75,100,243,0.16), transparent 70%), radial-gradient(700px 400px at 80% 10%, rgba(184,167,255,0.14), transparent 70%)"
        }}
      />
      <div className="relative mx-auto max-w-5xl rounded-[28px] border border-white/60 bg-white/95 p-8 shadow-lg">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#4B64F3]/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[#4B64F3]">
            FAQs
          </span>
          <h2 className="mt-4 text-2xl font-bold tracking-tight text-neutral-900 md:text-3xl">
            Antworten, bevor wir loslegen
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-neutral-600 md:text-base">
            Klare Erwartungen beschleunigen jedes Projekt. Das sind die haeufigsten Fragen von Gründerinnen, Operatoren und Marketing-Leads.
          </p>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {faqs.map(({ question, answer, icon: Icon }) => (
            <article
              key={question}
              className="flex h-full flex-col gap-3 rounded-[20px] border border-neutral-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-[#4B64F3]/30 hover:shadow-lg"
            >
              <div className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#4B64F3]/15 text-[#4B64F3]">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="text-base font-semibold text-neutral-900">{question}</h3>
              <p className="text-sm leading-relaxed text-neutral-600">{answer}</p>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}





