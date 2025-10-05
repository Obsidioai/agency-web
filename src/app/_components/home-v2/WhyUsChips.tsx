"use client";

type Props = { title: string; items: string[] };

const AccentBadge = ({ index }: { index: number }) => (
  <span className="grid h-10 w-10 shrink-0 place-content-center rounded-full bg-emerald-100 text-sm font-semibold text-emerald-700">
    {index.toString().padStart(2, "0")}
  </span>
);

export default function WhyUsChips({ title, items }: Props) {
  return (
    <div className="relative overflow-hidden rounded-[28px] border bg-white/70 p-8 shadow-[0_18px_60px_rgba(15,23,42,0.05)]">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white via-emerald-50/60 to-white" />

      <div className="relative space-y-8">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-600">Unser 4-Schritte-Ethos</p>
          <h3 className="mt-2 text-2xl font-semibold text-slate-900 md:text-3xl">{title}</h3>
          <p className="mt-3 text-sm text-slate-600 md:text-base">
            Wir bauen schnell, liefern sicher und beweisen früh Mehrwert. Kein Blabla – nur Ergebnisse, die Ihr Team sieht.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {items.map((label, index) => (
            <div
              key={index}
              className="group flex h-full items-start gap-4 rounded-3xl border border-emerald-100/70 bg-white/80 p-5 shadow-sm transition hover:-translate-y-1 hover:border-emerald-200 hover:shadow-lg"
            >
              <AccentBadge index={index + 1} />
              <div className="space-y-2">
                <div className="h-1 w-12 rounded-full bg-emerald-200 transition group-hover:bg-emerald-400" />
                <p className="text-sm font-medium leading-relaxed text-slate-700 md:text-base">{label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}