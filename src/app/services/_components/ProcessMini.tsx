import { Compass, Gauge, Handshake, Sparkles } from "lucide-react";

const phases = [
  {
    title: "Discovery Sprint",
    summary: "We map your processes, tech stack, and constraints to uncover high-impact AI opportunities.",
    points: [
      "Stakeholder workshops to align goals and guardrails",
      "Workflow walk-throughs with data access check"
    ],
    icon: Compass
  },
  {
    title: "Rapid Prototype",
    summary: "Executable concepts in days, not months, so teams can see and feel the value early.",
    points: [
      "Low-risk sandboxes with human-in-the-loop controls",
      "Feedback loops that iterate on copy, tone, and UX"
    ],
    icon: Sparkles
  },
  {
    title: "Pilot & Enable",
    summary: "Deploy to a core team, monitor outcomes, and build the playbooks that keep quality high.",
    points: [
      "Success metrics layered into live dashboards",
      "Role-based training and support documentation"
    ],
    icon: Gauge
  },
  {
    title: "Scale & Support",
    summary: "Roll out with confidence, keeping compliance, adoption, and iteration in sync.",
    points: [
      "Change management routines and office hours",
      "Optional managed ops for ongoing optimisation"
    ],
    icon: Handshake
  }
];

export default function ProcessMini() {
  return (
    <section className="relative isolate overflow-hidden px-6 py-16 md:px-10">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(900px 500px at 10% 0%, rgba(184,167,255,0.16), transparent 70%), radial-gradient(600px 400px at 80% 20%, rgba(75,100,243,0.18), transparent 75%)"
        }}
      />
      <div className="relative mx-auto max-w-6xl">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[#4B64F3] shadow-sm">
            How we partner
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-neutral-900 md:text-4xl">
            A collaborative path from idea to measurable lift
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-neutral-700 md:text-base">
            Every engagement is built to show value fast while keeping risk low. We guide stakeholders through a repeatable arcfrom discovery to scaled operationsso AI becomes a trusted part of the business.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {phases.map(({ title, summary, points, icon: Icon }) => (
            <article
              key={title}
              className="group flex h-full flex-col justify-between rounded-[24px] border border-white/70 bg-white/95 p-6 shadow-sm transition hover:-translate-y-1 hover:border-[#4B64F3]/40 hover:shadow-xl"
            >
              <div>
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#4B64F3]/10 text-[#4B64F3] shadow-inner">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-neutral-900">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600">{summary}</p>
              </div>
              <ul className="mt-4 space-y-2 text-sm text-neutral-700">
                {points.map((point) => (
                  <li key={point} className="flex items-start gap-2">
                    <span className="mt-1 inline-flex h-1.5 w-1.5 rounded-full bg-[#4B64F3]" aria-hidden />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 rounded-[20px] border border-white/70 bg-white/90 px-6 py-5 text-sm text-neutral-700 shadow-sm">
          <span className="font-semibold text-neutral-900">Average timeline: 48 weeks from discovery to pilot</span>
          <span className="inline-flex items-center gap-2 text-neutral-600">
            <span className="inline-flex h-2 w-2 rounded-full bg-[#4B64F3]" aria-hidden />
            Weekly syncs and async updates included
          </span>
        </div>
      </div>
    </section>
  );
}

