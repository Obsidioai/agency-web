import Link from 'next/link';

export default function ServicesHero() {
  return (
    <section className="relative overflow-hidden">
      <div aria-hidden className="motion-ambient pointer-events-none absolute inset-0"
           style={{background:'radial-gradient(900px 450px at 80% -10%, rgba(110,74,226,.18), transparent 60%)'}} />
      <div className="relative mx-auto max-w-6xl px-6 py-14">
        <h1 className="text-4xl md:text-5xl font-semibold">What we do</h1>
        <p className="mt-3 text-lg text-muted max-w-2xl">
          Practical AI for SMBsâ€”built for results, not hype.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/mini-evaluation"
             className="rounded-2xl px-5 py-3 bg-[#4B64F3] text-white shadow-[0_1px_2px_rgba(0,0,0,.25)]
                        transition-transform duration-[120ms] ease-[cubic-bezier(.2,0,0,1)]
                        hover:-translate-y-0.5 motion-hover:lift
                        focus-visible:outline-none focus-visible:shadow-[0_0_0_6px_rgba(75,100,243,0.25)] motion-focus:glow">
            Book Free Mini-Evaluation
          </Link>
          <Link href="/case-studies"
             className="rounded-2xl px-5 py-3 border border-[#4B64F3] text-[#4B64F3] hover:bg-[#4B64F3]/10 transition">
            See Case Studies
          </Link>
        </div>
      </div>
    </section>
  );
}

