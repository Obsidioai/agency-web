import type { Metadata } from 'next';
import Link from 'next/link';

import EbookDownloadForm from '../_components/EbookDownloadForm';

export const metadata: Metadata = {
  title: 'AI for Business Owners – Free E-Book Download',
  description:
    'Get the beginner-friendly "AI for Business Owners" playbook. Share your email to receive the download link straight to your inbox.'
};

export default function EbookDownloadPage() {
  return (
    <main className="bg-[#F6F8FB] text-neutral-900">
      <section className="px-6 py-12 md:px-10 md:py-16">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[1.05fr_0.95fr] md:items-start">
          <div className="rounded-[28px] border border-black/5 bg-white/90 p-6 shadow-lg backdrop-blur md:p-8">
            <span className="inline-flex items-center rounded-full bg-[#EEF2FF] px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[#4B64F3]">
              New for Q4 2025
            </span>
            <h1 className="mt-5 text-3xl font-extrabold tracking-tight md:text-4xl">
              AI for Business Owners (Beginner&apos;s Guide)
            </h1>
            <p className="mt-3 text-base text-neutral-700 md:text-lg">
              A practical roadmap to spot high-ROI use cases, deploy AI safely, and stay compliant with the EU AI Act.
            </p>

            <div className="mt-6 rounded-2xl bg-[#F5F3FF] p-5 text-sm text-neutral-700">
              <h2 className="text-base font-semibold text-neutral-900">Inside the 48-page guide:</h2>
              <ul className="mt-3 space-y-2">
                <li className="flex items-start gap-2">
                  <Bullet />
                  <span>5-step framework to map processes and pick the first AI pilots.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Bullet />
                  <span>10+ annotated workflows for sales, operations, and client success.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Bullet />
                  <span>GDPR & EU AI Act compliance checklist with practical templates.</span>
                </li>
              </ul>
            </div>

            <div className="mt-6 space-y-3 text-sm text-neutral-600">
              <p>
                Provide your email, and we&apos;ll send the PDF straight to your inbox. No spam – just this resource and an optional follow-up.
              </p>
              <p>
                Want to preview the content first?{' '}
                <Link href="/resources/ebook/details" className="font-semibold text-[#4B64F3] hover:underline">
                  Read the chapter summaries
                </Link>
                .
              </p>
            </div>
          </div>

          <div className="md:pl-4">
            <EbookDownloadForm />
            <div className="mt-4 rounded-2xl border border-black/5 bg-white/70 p-4 text-sm text-neutral-600">
              <p className="font-semibold text-neutral-800">How it works</p>
              <ol className="mt-2 space-y-1">
                <li>1. Share your email address.</li>
                <li>2. Check your inbox for a message from our team.</li>
                <li>3. Download the PDF with one click.</li>
              </ol>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function Bullet() {
  return (
    <span
      aria-hidden
      className="mt-1 inline-block h-2.5 w-2.5 shrink-0 rounded-full bg-[#4B64F3]/30 ring-2 ring-[#4B64F3]/60"
    />
  );
}

