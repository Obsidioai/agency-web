"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

type Step = {
  id: string;
  title: string;
  category: string;
  value: string;
  bullets: string[];
  href: string;
};

const steps: Step[] = [
  {
    id: "automation",
    title: "AI Automation",
    category: "OPERATIONS",
    value: "Cut busywork with reliable bots & workflows.",
    bullets: ["Inbox replies", "Invoicing & reporting", "HR onboarding"],
    href: "/services/ai-automation"
  },
  {
    id: "consulting",
    title: "AI Consulting",
    category: "STRATEGY",
    value: "Strategy, roadmap, and governance to de-risk AI.",
    bullets: ["Readiness audit", "Use-case prioritization", "Compliance"],
    href: "/services/ai-consulting"
  },
  {
    id: "leadgen",
    title: "Lead Generation",
    category: "GROWTH",
    value: "Predictable pipeline with ICP-aware messaging.",
    bullets: ["Multichannel outreach", "Landing pages", "Analytics"],
    href: "/services/lead-generation"
  },
  {
    id: "saas",
    title: "SaaS Solutions",
    category: "PRODUCT",
    value: "Lightweight tools & MVPs that ship fast.",
    bullets: ["Internal tools", "Client-facing MVPs", "Integrations"],
    href: "/services/saas-solutions"
  },
  {
    id: "branding",
    title: "Branding & AI Content",
    category: "BRAND",
    value: "Consistent brand + AI-assisted content engine.",
    bullets: ["Style guide", "Templates", "Content ops"],
    href: "/services/branding"
  }
];

export default function Ladder() {
  const [active, setActive] = useState<string>(steps[0].id);
  const refs = useRef<Record<string, HTMLDivElement | null>>({});

  useEffect(() => {
    const els = steps.map((s) => refs.current[s.id]).filter(Boolean) as Element[];
    if (!els.length) return;
    const ob = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive((visible.target as HTMLElement).dataset.step!);
      },
      { rootMargin: "-30% 0% -50% 0%", threshold: [0.15, 0.4, 0.6, 0.8] }
    );
    els.forEach((el) => ob.observe(el));
    return () => ob.disconnect();
  }, []);

  return (
    <section className="relative mx-auto max-w-6xl px-6 py-6 lg:py-10">
      <div className="ladder-spine hidden lg:block" aria-hidden />

      <h2 className="mb-8 text-center text-2xl font-semibold">Ladder of Services</h2>

      <div className="space-y-10">
        {steps.map((step, i) => {
          const leftSide = i % 2 === 0;

          return (
            <div
              key={step.id}
              data-step={step.id}
              ref={(el) => {
                refs.current[step.id] = el;
              }}
              className="relative grid items-center gap-6 lg:grid-cols-2"
            >
              <span
                aria-hidden
                data-active={active === step.id}
                className={`hidden lg:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-3 w-3 rounded-full border border-border bg-bg0 transition-all duration-200 ${
                  active === step.id
                    ? "bg-[#4B64F3] shadow-[0_0_0_6px_rgba(75,100,243,0.18)]"
                    : ""
                }`}
              />

              <div className={`${leftSide ? "lg:order-1" : "lg:order-2"} flex ${leftSide ? "justify-end" : "justify-start"}`}>
                <div
                  className="h-60 w-full max-w-md rounded-2xl border border-slate-200 bg-gradient-to-br from-[#4B64F3]/18 via-[#4B64F3]/8 to-[#E4E8FF]/40 shadow-[0_1px_3px_rgba(15,23,42,0.16)] transition duration-150 hover:-translate-y-0.5 motion-hover:lift"
                  aria-label={`${step.title} illustrative visual`}
                />
              </div>

              <div className={leftSide ? "lg:order-2" : "lg:order-1"}>
                <article className="rounded-2xl border border-slate-200 bg-white/95 p-5 shadow-[0_8px_30px_rgba(15,23,42,0.08)] transition duration-150 hover:-translate-y-0.5 hover:shadow-[0_18px_36px_rgba(15,23,42,0.12)] motion-hover:lift">
                  <div className="text-[11px] uppercase tracking-wide text-[#4B64F3]">{step.category}</div>
                  <h3 className="mt-1 text-xl font-semibold text-slate-900">{step.title}</h3>
                  <p className="mt-1 text-sm text-slate-600">{step.value}</p>
                  <ul className="mt-3 space-y-2">
                    {step.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-center gap-2 text-sm text-slate-700">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#4B64F3]" aria-hidden />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 flex flex-wrap gap-3">
                    <Link
                      href={step.href}
                      className="rounded-2xl bg-[#4B64F3] px-4 py-2 text-sm font-semibold text-white transition-transform duration-150 ease-[cubic-bezier(.2,0,0,1)] hover:-translate-y-0.5 motion-hover:lift focus-visible:outline-none focus-visible:shadow-[0_0_0_6px_rgba(75,100,243,0.25)] motion-focus:glow"
                    >
                      Learn More
                    </Link>
                    <Link
                      href="/mini-evaluation"
                      className="rounded-2xl border border-[#4B64F3] px-4 py-2 text-sm font-semibold text-[#4B64F3] transition hover:bg-[#4B64F3]/10"
                    >
                      Get Mini-Evaluation
                    </Link>
                  </div>
                </article>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}