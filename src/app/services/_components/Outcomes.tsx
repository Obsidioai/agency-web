export default function Outcomes() {
  const items = [
    '1000+ hours automated',
    '+23% qualified leads avg.',
    '<30 days to first ROI'
  ];
  return (
    <section className="mx-auto max-w-6xl px-6 py-10">
      <h3 className="text-center text-xl font-semibold mb-4">Business Outcomes</h3>
      <div className="flex flex-wrap items-center justify-center gap-3">
        {items.map(x => (
          <div key={x}
               className="rounded-full border border-border bg-bg2 px-4 py-2 text-sm text-muted
                          shadow-[0_1px_2px_rgba(0,0,0,.25)]">
            {x}
          </div>
        ))}
      </div>
    </section>
  );
}
