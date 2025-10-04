'use client';
import {useEffect, useRef, useState} from 'react';

const steps = [
  {n:'01', t:'Discovery', d:'We start by listening—vision, goals, constraints, data.'},
  {n:'02', t:'Strategy & Design', d:'Plan, data, tools, governance. Clear scope and metrics.'},
  {n:'03', t:'Development', d:'Clean, efficient builds. Integrations. Measurable outcomes.'},
  {n:'04', t:'Launch & Iterate', d:'Ship, observe, and improve. Handover & enablement.'},
];

export default function HowWeWork() {
  const [active, setActive] = useState('01');
  const refs = useRef<Record<string, HTMLDivElement | null>>({});

  useEffect(() => {
    const nodes = steps.map(s => refs.current[s.n]).filter(Boolean) as Element[];
    if (!nodes.length) return;
    const io = new IntersectionObserver(entries => {
      const vis = entries.filter(e => e.isIntersecting).sort((a,b)=>b.intersectionRatio-a.intersectionRatio)[0];
      if (vis) setActive((vis.target as HTMLElement).dataset.step!);
    }, { rootMargin: '-30% 0% -50% 0%', threshold: [0.25, 0.6] });
    nodes.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <section className="relative mx-auto max-w-6xl px-6 py-12">
      <h3 className="text-center text-xl font-semibold mb-8">How We Work</h3>

      {/* spine */}
      <div className="timeline-line hidden lg:block" aria-hidden />

      <div className="space-y-10">
        {steps.map((s, i) => {
          const left = i % 2 === 0; // alternate
          return (
            <div key={s.n}
                 data-step={s.n}
                 ref={(el: HTMLDivElement | null) => { refs.current[s.n] = el; }}
                 className="relative grid gap-6 lg:grid-cols-2 items-start">
              {/* node */}
              <span aria-hidden
                className={`hidden lg:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
                            h-3 w-3 rounded-full border border-border bg-bg0 transition
                            ${active===s.n ? 'bg-primary shadow-[0_0_0_6px_rgba(110,74,226,.18)]' : ''}`} />
              {/* text blocks */}
              <div className={`${left ? 'lg:order-1 text-right pr-8' : 'lg:order-2 pl-8'}`}>
                <div className="text-sm text-muted">{s.n}. {s.t}</div>
                <p className="mt-1 text-sm">{s.d}</p>
              </div>
              <div className={`${left ? 'lg:order-2 pl-8' : 'lg:order-1 text-right pr-8'}`}>
                {/* empty mirror to balance layout; keep spacing symmetric */}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
