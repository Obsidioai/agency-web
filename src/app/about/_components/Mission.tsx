export default function Mission() {
  const chips = ['Craftsmanship', 'Innovation', 'Impact'];
  return (
    <section className="mx-auto max-w-6xl px-6 py-6">
      <h2 className="text-center text-xl font-semibold">Our Mission</h2>
      <p className="mt-2 text-center text-muted max-w-3xl mx-auto">
        Our mission is to give SMBs an unfair advantage—freeing teams from busywork and turning data
        into growth. We ship fast, measure impact, and keep you GDPR/EU-AI-Act ready.
      </p>
      <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
        {chips.map(c => (
          <span key={c}
            className="rounded-full bg-bg2 border border-border px-3 py-1 text-sm text-muted shadow-[0_1px_2px_rgba(0,0,0,.25)]">
            {c}
          </span>
        ))}
      </div>
    </section>
  );
}
