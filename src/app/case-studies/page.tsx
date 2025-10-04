import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { caseStudies } from "@/data/case-studies";

export const metadata: Metadata = {
  title: "Case Studies | obsidio",
  description:
    "How operators across distribution, healthcare, and fintech partner with obsidio to design responsible, outcome-driven AI.",
};

export default function CaseStudiesPage() {
  const [featured, ...restCases] = caseStudies;
  const [highlight, ...others] = restCases;

  return (
    <main className="bg-white text-slate-900">
      <section className="border-b border-slate-200 bg-slate-50/60">
        <div className="mx-auto max-w-5xl px-6 py-16 md:px-10 md:py-24">
          <p className="text-sm font-semibold uppercase tracking-widest text-slate-500">Fallstudien</p>
          <h1 className="mt-4 text-4xl font-semibold leading-tight text-slate-900 md:text-5xl">
            Ergebnisse, die Ihre Operator:innen spüren
          </h1>
          <p className="mt-6 max-w-3xl text-base text-slate-600 md:text-lg">
            Erfahren Sie, wie Teams verantwortungsvolle Automatisierungen mit co-designten Workflows, prüfbaren Guardrails und messbaren Geschäftsergebnissen skalieren.
          </p>
        </div>
      </section>

      {featured ? (
        <section className="py-16 md:py-20">
          <div className="mx-auto max-w-6xl px-6 md:px-10">
            <Link
              href={`/case-studies/${featured.slug}`}
              className="group block overflow-hidden rounded-3xl bg-gradient-to-r from-rose-600 via-rose-500 to-slate-900 p-[1px] shadow-lg shadow-rose-200 transition-transform duration-300 ease-out hover:-translate-y-1"
            >
              <div className="grid gap-10 rounded-[calc(theme(borderRadius.3xl)-2px)] bg-white/95 p-10 backdrop-blur md:p-14 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
                <div className="flex flex-col justify-between">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.25em] text-rose-500">
                      {featured.industry}
                    </p>
                    <h2 className="mt-4 text-3xl font-semibold text-slate-900 transition-colors duration-200 group-hover:text-rose-600 md:text-4xl">
                      {featured.title}
                    </h2>
                    <p className="mt-4 text-base text-slate-600 md:text-lg">{featured.summary}</p>
                  </div>

                  <div className="mt-10 flex flex-wrap gap-4">
                    {featured.outcomes.slice(0, 2).map((outcome) => (
                      <div
                        key={`${featured.slug}-metric-${outcome.label}`}
                        className="min-w-[160px] rounded-2xl bg-slate-900 px-5 py-4 text-white shadow-md"
                      >
                        <dt className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-200/80">
                          {outcome.label}
                        </dt>
                        <dd className="mt-2 text-2xl font-semibold">{outcome.value}</dd>
                        {outcome.description ? (
                          <p className="mt-1 text-xs text-slate-200/70">{outcome.description}</p>
                        ) : null}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col justify-between gap-8">
                  {featured.image ? (
                    <div className="overflow-hidden rounded-3xl border border-rose-100 shadow-sm">
                      <Image
                        src={featured.image.src}
                        alt={featured.image.alt}
                        width={720}
                        height={540}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                      />
                    </div>
                  ) : null}

                  <div className="flex items-center justify-between rounded-2xl border border-rose-100 bg-rose-50/60 px-6 py-5 text-sm font-medium text-rose-900">
                    <span>Read the MöbelKlar playbook</span>
                    <span className="text-base">→</span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </section>
      ) : null}

      {highlight ? (
        <section className="pb-12">
          <div className="mx-auto max-w-6xl px-6 md:px-10">
            <Link
              href={`/case-studies/${highlight.slug}`}
              className="group block overflow-hidden rounded-3xl bg-gradient-to-r from-slate-900 via-slate-800 to-sky-500 p-[1px] shadow-lg shadow-slate-300 transition-transform duration-300 ease-out hover:-translate-y-1"
            >
              <div className="grid gap-10 rounded-[calc(theme(borderRadius.3xl)-2px)] bg-white/95 p-10 backdrop-blur md:p-14 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
                <div className="flex flex-col justify-between">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
                      {highlight.industry}
                    </p>
                    <h2 className="mt-4 text-3xl font-semibold text-slate-900 transition-colors duration-200 group-hover:text-sky-600 md:text-4xl">
                      {highlight.title}
                    </h2>
                    <p className="mt-4 text-base text-slate-600 md:text-lg">{highlight.summary}</p>
                  </div>

                  <div className="mt-10 flex flex-wrap gap-4">
                    {highlight.outcomes.slice(0, 2).map((outcome) => (
                      <div
                        key={`${highlight.slug}-metric-${outcome.label}`}
                        className="min-w-[160px] rounded-2xl bg-slate-900 px-5 py-4 text-white shadow-md"
                      >
                        <dt className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-200/80">
                          {outcome.label}
                        </dt>
                        <dd className="mt-2 text-2xl font-semibold">{outcome.value}</dd>
                        {outcome.description ? (
                          <p className="mt-1 text-xs text-slate-200/70">{outcome.description}</p>
                        ) : null}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col justify-between gap-8">
                  {highlight.image ? (
                    <div className="overflow-hidden rounded-3xl border border-slate-200/80 shadow-sm">
                      <Image
                        src={highlight.image.src}
                        alt={highlight.image.alt}
                        width={720}
                        height={540}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                      />
                    </div>
                  ) : null}

                  <div className="flex items-center justify-between rounded-2xl border border-slate-200/80 bg-slate-100/80 px-6 py-5 text-sm font-medium text-slate-900">
                    <span>Explore the KMU AI pillars</span>
                    <span className="text-base">→</span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </section>
      ) : null}

      <section className="pb-16 md:pb-24">
        <div className="mx-auto max-w-6xl space-y-14 px-6 md:px-10">
          {others.map((study) => {
            const headingId = `case-study-${study.slug}`;
            const summaryId = `${headingId}-summary`;

            return (
              <article
                key={study.slug}
                aria-labelledby={headingId}
                aria-describedby={summaryId}
                className="rounded-3xl border border-slate-200/80 bg-white shadow-sm shadow-slate-100 transition duration-200 ease-out hover:shadow-md hover:shadow-slate-200"
              >
                <div className="grid gap-8 p-8 md:p-12 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">{study.industry}</p>
                    <h2 id={headingId} className="mt-3 text-2xl font-semibold text-slate-900 md:text-3xl">
                      {study.title}
                    </h2>
                    <p id={summaryId} className="mt-4 text-base text-slate-600 md:text-lg">
                      {study.summary}
                    </p>

                    <div className="mt-8 space-y-6 text-sm text-slate-600 md:text-base">
                      <section aria-label="Challenge" className="space-y-2">
                        <h3 className="text-sm font-semibold uppercase tracking-widest text-slate-500">Challenge</h3>
                        <p>{study.challenge}</p>
                      </section>

                      <section aria-label="Approach" className="space-y-3">
                        <h3 className="text-sm font-semibold uppercase tracking-widest text-slate-500">Approach</h3>
                        <ul className="list-disc space-y-2 pl-5">
                          {study.approach.map((step, index) => (
                            <li key={index} className="marker:text-primary">
                              {step}
                            </li>
                          ))}
                        </ul>
                      </section>
                    </div>
                  </div>

                  <aside className="flex flex-col gap-6 lg:border-l lg:border-slate-200 lg:pl-8">
                    {study.image ? (
                      <div className="overflow-hidden rounded-2xl border border-slate-200/80">
                        <Image
                          src={study.image.src}
                          alt={study.image.alt}
                          width={640}
                          height={480}
                          className="h-full w-full object-cover"
                        />
                      </div>
                    ) : null}

                    <dl className="grid gap-4 sm:grid-cols-2" aria-label="Key outcomes">
                      {study.outcomes.map((outcome) => (
                        <div key={`${study.slug}-${outcome.label}`} className="rounded-2xl bg-slate-50 p-4">
                          <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                            {outcome.label}
                          </dt>
                          <dd className="mt-2 text-xl font-semibold text-slate-900">{outcome.value}</dd>
                          {outcome.description ? (
                            <p className="mt-2 text-xs text-slate-500">{outcome.description}</p>
                          ) : null}
                        </div>
                      ))}
                    </dl>

                    {study.testimonial ? (
                      <figure className="rounded-2xl bg-slate-900 p-6 text-slate-100">
                        <blockquote className="text-sm leading-relaxed md:text-base">
                          "{study.testimonial.quote}"
                        </blockquote>
                        <figcaption className="mt-4 text-xs font-medium uppercase tracking-[0.2em] text-slate-400">
                          {study.testimonial.name}
                          <span className="block text-slate-500">{study.testimonial.role}</span>
                        </figcaption>
                      </figure>
                    ) : null}
                  </aside>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </main>
  );
}
