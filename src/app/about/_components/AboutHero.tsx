import Link from 'next/link';

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden">
      <div aria-hidden className="motion-ambient pointer-events-none absolute inset-0"
           style={{background:'radial-gradient(900px 450px at 85% -10%, rgba(110,74,226,.18), transparent 60%)'}} />
      <div className="relative mx-auto max-w-6xl px-6 pt-14 pb-10">
        <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
          Wir gestalten.<br/>We craft.
        </h1>
        <p className="mt-3 text-lg text-muted max-w-2xl">
          We’re dedicated to delivering **practical, new-generation digital solutions** that help
          small and medium businesses win in competitive markets—clear strategy, reliable
          automations, and lean software that ships fast.
        </p>
        <div className="mt-7 flex flex-wrap gap-3">
          <Link href="/contact"
             className="rounded-2xl px-5 py-3 bg-primary text-white shadow-[0_1px_2px_rgba(0,0,0,.25)]
                        transition-transform duration-[120ms] ease-[cubic-bezier(.2,0,0,1)]
                        hover:-translate-y-0.5 motion-hover:lift
                        focus-visible:outline-none focus-visible:shadow-[0_0_0_6px_rgba(0,245,160,.18)] motion-focus:glow">
            Start a Project
          </Link>
          <Link href="/case-studies"
             className="rounded-2xl px-5 py-3 border border-accent text-accent hover:bg-[rgba(0,245,160,.06)] transition">
            Explore our Work
          </Link>
        </div>
      </div>
    </section>
  );
}
