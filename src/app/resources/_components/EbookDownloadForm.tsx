'use client';

import Link from 'next/link';
import { useState } from 'react';

type Errors = Record<string, string[] | undefined>;

const fieldClasses = [
  'mt-2 w-full rounded-xl border border-border/70 bg-white px-4 py-2.5',
  'text-base font-medium text-text placeholder:text-muted/60',
  'shadow-sm transition-all duration-150 focus-visible:outline-none',
  'focus-visible:border-primary focus-visible:ring-4 focus-visible:ring-primary/20'
].join(' ');

export default function EbookDownloadForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'ok' | 'error'>('idle');
  const [errors, setErrors] = useState<Errors>({});

  const disabled = status === 'sending';

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setErrors({});
    setStatus('sending');

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: formData.get('name') ? String(formData.get('name')) : undefined,
      company: formData.get('company') ? String(formData.get('company')) : undefined,
      email: String(formData.get('email') || ''),
      consent: formData.get('consent') === 'on'
    };

    const response = await fetch('/api/resources/ebook', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    if (response.ok) {
      setStatus('ok');
      form.reset();
      return;
    }

    try {
      const data = await response.json();
      if (data?.errors) setErrors(data.errors as Errors);
    } catch (error) {
      console.error(error);
    }

    setStatus('error');
  }

  return (
    <form
      onSubmit={onSubmit}
      className="w-full rounded-2xl border border-border/60 bg-white p-5 shadow-[0_14px_32px_rgba(15,23,42,.08)] sm:p-6"
    >
      <div className="grid gap-4">
        <div>
          <label className="text-base font-semibold text-text">First name (optional)</label>
          <input
            className={fieldClasses}
            name="name"
            placeholder="Jane"
            autoComplete="given-name"
          />
          {errors.name && <p className="mt-1.5 text-sm text-danger">{errors.name[0]}</p>}
        </div>

        <div>
          <label className="text-base font-semibold text-text">Company (optional)</label>
          <input
            className={fieldClasses}
            name="company"
            placeholder="Acme GmbH"
            autoComplete="organization"
          />
          {errors.company && <p className="mt-1.5 text-sm text-danger">{errors.company[0]}</p>}
        </div>

        <div>
          <label className="text-base font-semibold text-text">Email*</label>
          <input
            className={fieldClasses}
            name="email"
            required
            type="email"
            placeholder="you@company.com"
            autoComplete="email"
          />
          {errors.email && <p className="mt-1.5 text-sm text-danger">{errors.email[0]}</p>}
        </div>

        <div className="flex items-start gap-3 rounded-xl bg-bg1/70 p-3.5">
          <input
            className="mt-1 h-5 w-5 rounded border-border bg-bg0"
            id="consent"
            name="consent"
            type="checkbox"
            required
          />
          <label htmlFor="consent" className="text-base text-muted">
            I agree to receive the e-book via email and accept the{' '}
            <Link className="font-semibold text-blue-700 hover:text-blue-800" href="/privacy">
              privacy policy
            </Link>
            .
          </label>
        </div>
        {errors.consent && <p className="-mt-2 text-sm text-danger">{errors.consent[0]}</p>}
      </div>

      {status === 'ok' && (
        <div className="mt-4 rounded-xl border border-border bg-bg1 p-4 text-base text-text">
          Check your inbox – the download link is on its way.
        </div>
      )}
      {status === 'error' && (
        <div className="mt-4 rounded-xl border border-danger/40 bg-bg1 p-4 text-base text-danger">
          Something went wrong. Please review the form and try again.
        </div>
      )}

      <button
        type="submit"
        disabled={disabled}
        className="mt-4 w-full rounded-2xl bg-primary px-6 py-3 text-base font-semibold text-white shadow-[0_12px_24px_rgba(110,74,226,.25)] transition-transform duration-[120ms] ease-[cubic-bezier(.2,0,0,1)] hover:-translate-y-0.5 motion-hover:lift focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/20 disabled:translate-y-0 disabled:opacity-60"
      >
        {status === 'sending' ? 'Sending...' : 'Email me the e-book'}
      </button>
    </form>
  );
}

