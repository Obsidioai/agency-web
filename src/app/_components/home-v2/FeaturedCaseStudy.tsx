"use client";

import Image from "next/image";
import Link from "next/link";

const arrow = "→";

type Props = {
  sectionTitle: string;
  eyebrow: string;
  title: string;
  problem: string;
  solution: string;
  result: string;
  ctaLabel: string;
  ctaHref: string;
  imageSrc: string;
  imageAlt: string;
};

const DETAIL_ORDER: Array<{ label: string; key: keyof Pick<Props, "problem" | "solution" | "result"> }> = [
  { label: "Challenge", key: "problem" },
  { label: "Approach", key: "solution" },
  { label: "Impact", key: "result" }
];

export default function FeaturedCaseStudy(props: Props) {
  return (
    <div className="relative overflow-hidden rounded-[32px] border bg-white/70 shadow-[0_18px_60px_rgba(15,23,42,0.08)] backdrop-blur">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-emerald-50 via-white to-slate-50" />

      <div className="relative grid gap-10 p-6 md:grid-cols-[1.35fr_1fr] md:p-10">
        <div className="space-y-5 md:space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-100/80 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-emerald-700">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            {props.eyebrow}
          </div>
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">{props.sectionTitle}</p>
            <h3 className="text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">{props.title}</h3>
            <p className="text-sm text-slate-600 md:text-base">
              We partnered closely with the operator to understand the bottlenecks and design an automation journey that felt
              natural for their teams.
            </p>
          </div>

          <dl className="grid gap-4 md:grid-cols-3">
            {DETAIL_ORDER.map(({ label, key }) => (
              <div
                key={label}
                className="rounded-2xl border border-emerald-100 bg-white/80 p-4 shadow-sm transition hover:border-emerald-200 hover:shadow-md"
              >
                <dt className="text-xs font-semibold uppercase tracking-wide text-emerald-700">{label}</dt>
                <dd className="mt-1 text-sm text-slate-700 md:text-base">
                  {props[key]}
                </dd>
              </div>
            ))}
          </dl>

          <Link
            href={props.ctaHref}
            className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-3 text-sm font-medium text-white shadow-sm transition hover:bg-slate-800"
          >
            {props.ctaLabel}
            <span aria-hidden>{arrow}</span>
          </Link>
        </div>

        <aside className="flex flex-col justify-between gap-6">
          <div className="overflow-hidden rounded-3xl border border-slate-100 bg-white/80 p-6 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Outcome snapshot</p>
            <p className="mt-3 text-lg font-semibold text-slate-900">{props.result}</p>
            <p className="mt-2 text-sm text-slate-600">
              Teams saw measurable uplift within the first 60 days — and the playbook is now the template for future rollouts.
            </p>
          </div>

          <div className="overflow-hidden rounded-3xl border border-slate-100 shadow-md">
            <Image
              src={props.imageSrc}
              alt={props.imageAlt}
              width={720}
              height={540}
              sizes="(min-width: 1024px) 400px, (min-width: 768px) 50vw, 100vw"
              className="h-full w-full object-cover"
              priority
            />
          </div>
        </aside>
      </div>
    </div>
  );
}

