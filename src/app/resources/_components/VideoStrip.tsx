export default function VideoStrip() {
  const vids = [
    { id: 'WXZIrXrMArM', title: "Die 4. Revolution: Mit KI zu mehr Umsatz (fuer KMU)" },
    { id: 'VIDEO_ID_2', title: "AI Automation Starter Kit" },
    { id: 'VIDEO_ID_3', title: "SaaS MVP in 48h (LLM + low-code)" }
  ];
  return (
    <section className="mx-auto max-w-6xl px-6 py-10">
      <h2 className="text-2xl font-semibold">Videos</h2>
      <p className="mt-1 text-muted">Short tutorials & tool walkthroughs.</p>

      <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {vids.map(v => (
          <div key={v.id}
               className="rounded-2xl border border-border bg-bg2 p-3 shadow-[0_1px_2px_rgba(0,0,0,.25)]
                          transition duration-150 hover:-translate-y-0.5 motion-hover:lift">
            <div className="aspect-video overflow-hidden rounded-xl border border-border">
              <iframe
                className="h-full w-full"
                src={`https://www.youtube.com/embed/${v.id}`}
                title={v.title}
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
            <div className="mt-2 text-sm">{v.title}</div>
          </div>
        ))}
      </div>

      <div className="mt-6 text-center">
        <a href="https://youtube.com/@YourChannel" className="rounded-2xl px-5 py-2 border border-accent text-accent hover:bg-[rgba(0,245,160,.06)] transition">
          Find more on our YouTube channel
        </a>
      </div>
    </section>
  );
}
