import Link from 'next/link';

export default function TrustAndCTA() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-6">
        <div className="rounded-2xl border border-border bg-bg2 p-5 text-center text-sm text-muted">
          <span className="inline-block mx-3">1000+ hours automated</span>
          <span className="inline-block mx-3">+23% qualified leads avg.</span>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="rounded-2xl p-8 text-center border border-border shadow-[0_1px_2px_rgba(0,0,0,.25)]
                        bg-gradient-to-r from-primary/40 via-primary/30 to-accent/30">
          <h2 className="text-xl sm:text-2xl font-semibold">Ready to elevate your business?</h2>
          <p className="mt-2 text-muted max-w-2xl mx-auto">Let’s work together to create something amazing.</p>
          <Link href="/contact"
             className="mt-5 inline-block rounded-2xl px-5 py-3 bg-bg0 text-white border border-border
                        transition-transform duration-[120ms] ease-[cubic-bezier(.2,0,0,1)]
                        hover:-translate-y-0.5 motion-hover:lift
                        focus-visible:outline-none focus-visible:shadow-[0_0_0_6px_rgba(0,245,160,.18)] motion-focus:glow">
            Schedule a Call
          </Link>
        </div>
      </section>
    </>
  );
}
