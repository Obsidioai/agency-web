'use client';

import Link from 'next/link';
import Image from 'next/image';
import {useRef} from 'react';

export default function EbookFeature() {
  const ref = useRef<HTMLDivElement>(null);

  function onMove(e: React.MouseEvent) {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width;   // 0..1
    const y = (e.clientY - r.top) / r.height;   // 0..1
    const ROT = 6; // degrees
    const rx = (0.5 - y) * ROT; // vertical -> rotateX
    const ry = (x - 0.5) * ROT; // horizontal -> rotateY
    el.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg) translateZ(0)`;
  }
  function onLeave() {
    const el = ref.current;
    if (!el) return;
    el.style.transform = 'rotateX(0) rotateY(0)';
  }

  return (
    <section className="relative overflow-hidden">
      {/* ambient gradient, non-blocking */}
      <div aria-hidden className="motion-ambient pointer-events-none absolute inset-0"
           style={{background:'radial-gradient(900px 450px at 80% -10%, rgba(110,74,226,.18), transparent 60%)'}} />
      <div className="mx-auto max-w-6xl px-6 py-12 relative">
        <div className="grid gap-8 md:grid-cols-[1.2fr_1fr] items-center rounded-2xl border border-border bg-bg2 p-6 shadow-[0_1px_2px_rgba(0,0,0,.25)]">
          {/* left copy */}
          <div>
            <h1 className="text-3xl sm:text-4xl font-semibold">
              Free E-Book: AI for Business Owners (Beginnerâ€™s Guide)
            </h1>
            <p className="mt-3 text-lg text-muted">
              A practical step-by-step guide to implement AI fast, safely, and GDPR-ready.
            </p>
            <ul className="mt-4 space-y-1 text-sm text-muted">
              <li>â€¢ Identify quick-win use cases</li>
              <li>â€¢ Tools & workflows you can copy</li>
              <li>â€¢ GDPR / EU AI Act checklist</li>
            </ul>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/resources/ai-beginners"
                className="rounded-2xl px-5 py-3 bg-primary text-white shadow-[0_1px_2px_rgba(0,0,0,.25)]
                           transition-transform duration-[120ms] ease-[cubic-bezier(.2,0,0,1)]
                           hover:-translate-y-0.5 motion-hover:lift
                           focus-visible:outline-none focus-visible:shadow-[0_0_0_6px_rgba(0,245,160,.18)] motion-focus:glow"
              >
                Download Free E-Book
              </Link>
              <Link href="/resources/ai-beginners" className="rounded-2xl px-4 py-2 border border-accent text-accent
                          hover:bg-[rgba(0,245,160,.06)] transition duration-150">
                Read details â†’
              </Link>
            </div>
          </div>

          {/* right visual with hover tilt */}
          <div className="justify-self-end w-full max-w-sm perspective-1000">
            <div
              ref={ref}
              onMouseMove={onMove}
              onMouseLeave={onLeave}
              className="tilt relative overflow-hidden rounded-xl border border-border bg-white shadow-[0_8px_24px_rgba(0,0,0,.35)]"
              style={{height: 340}}
              aria-label="E-Book cover: AI for Business Owners"
            >
              <Image
                src="/images/ebook-cover.jpg"
                alt="AI for Business Owners ebook cover"
                fill
                sizes="(min-width: 768px) 320px, 80vw"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
