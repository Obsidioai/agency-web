const items = [
  {t:'Clarity', d:'We value clear communication and transparent processes.'},
  {t:'Craftsmanship', d:'We obsess over quality—simple, reliable systems.'},
  {t:'Collaboration', d:'We partner closely to reach shared outcomes.'},
  {t:'Courage', d:'We challenge the status quo to find better ways.'},
];

export default function Beliefs() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-8">
      <h3 className="text-center text-xl font-semibold mb-5">What We Believe</h3>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {items.map(x => (
          <div key={x.t}
            className="rounded-2xl bg-bg2 border border-border p-5 shadow-[0_1px_2px_rgba(0,0,0,.25)]
                       transition duration-150 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(0,0,0,.35)] motion-hover:lift">
            <div className="font-medium">{x.t}</div>
            <p className="mt-1 text-sm text-muted">{x.d}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
