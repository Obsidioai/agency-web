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

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'ok' | 'error'>('idle');
  const [errors, setErrors] = useState<Errors>({});

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('sending');
    setErrors({});

    const fd = new FormData(e.currentTarget);
    const payload = {
      name: String(fd.get('name') || ''),
      email: String(fd.get('email') || ''),
      company: String(fd.get('company') || ''),
      phone: String(fd.get('phone') || ''),
      interest: String(fd.get('interest') || ''),
      message: String(fd.get('message') || ''),
      consent: fd.get('consent') === 'on'
    };

    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    if (res.ok) {
      setStatus('ok');
      (e.target as HTMLFormElement).reset();
      return;
    }

    const data = await res.json().catch(() => ({}));
    if (data?.errors) setErrors(data.errors as Errors);
    setStatus('error');
  }

  const disabled = status === 'sending';

  return (
    <form
      onSubmit={onSubmit}
      className="w-full rounded-2xl border border-border/60 bg-white p-5 shadow-[0_14px_32px_rgba(15,23,42,.08)] sm:p-6 lg:ml-auto"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        {/* Name (required) */}
        <div>
          <label className="text-base font-semibold text-text">Name*</label>
          <input
            name="name"
            required
            className={fieldClasses}
            placeholder="Max Mustermann"
          />
          {errors.name && <p className="mt-1.5 text-sm text-danger">{errors.name[0]}</p>}
        </div>

        {/* Email (required) */}
        <div>
          <label className="text-base font-semibold text-text">E-Mail*</label>
          <input
            name="email"
            type="email"
            required
            className={fieldClasses}
            placeholder="max@unternehmen.com"
          />
          {errors.email && <p className="mt-1.5 text-sm text-danger">{errors.email[0]}</p>}
        </div>

        {/* Unternehmen (optional) */}
        <div>
          <label className="text-base font-semibold text-text">Unternehmen (optional)</label>
          <input
            name="company"
            className={fieldClasses}
            placeholder="Beispiel GmbH"
          />
        </div>

        {/* Telefon (optional) */}
        <div>
          <label className="text-base font-semibold text-text">Telefon (optional)</label>
          <input
            name="phone"
            className={fieldClasses}
            placeholder="+43 ..."
          />
        </div>

        {/* Interest (select) */}
        <div className="sm:col-span-2">
          <label className="text-base font-semibold text-text">Ich interessiere mich für</label>
          <select
            name="interest"
            className={fieldClasses}
            defaultValue=""
          >
            <option value="" disabled>
              Bitte wählen Sie eine Leistung
            </option>
            <option>KI-Automatisierung</option>
            <option>Beratung</option>
            <option>Lead-Generierung</option>
            <option>SaaS-Lösungen</option>
            <option>Branding</option>
            <option>Sonstiges</option>
          </select>
        </div>

        {/* Message (required) */}
        <div className="sm:col-span-2">
          <label className="text-base font-semibold text-text">Nachricht*</label>
          <textarea
            name="message"
            rows={4}
            required
            className={fieldClasses + ' min-h-[140px]'}
            placeholder="Beschreiben Sie kurz Ihr Unternehmen und das gewünschte Ergebnis."
          />
          {errors.message && <p className="mt-1.5 text-sm text-danger">{errors.message[0]}</p>}
        </div>

        {/* Consent */}
        <div className="sm:col-span-2 flex items-start gap-3 rounded-xl bg-bg1/70 p-3.5">
          <input
            id="consent"
            name="consent"
            type="checkbox"
            className="mt-1 h-5 w-5 rounded border-border bg-bg0"
          />
          <label htmlFor="consent" className="text-base text-muted">
            Ich stimme der Verarbeitung meiner Daten gemäß der{' '}
            <Link href="/privacy" className="font-semibold text-blue-700 hover:text-blue-800">
              Datenschutzerklärung
            </Link>{' '}
            zu.
          </label>
          {errors.consent && <p className="mt-1.5 text-sm text-danger">{errors.consent[0]}</p>}
        </div>
      </div>

      {/* Alerts */}
      {status === 'ok' && (
        <div className="mt-4 rounded-xl border border-border bg-bg1 p-4 text-base text-text">
          Vielen Dank - Ihre Nachricht ist eingegangen. Wir melden uns in Kürze.
        </div>
      )}
      {status === 'error' && (
        <div className="mt-4 rounded-xl border border-danger/40 bg-bg1 p-4 text-base text-danger">
          Etwas ist schiefgelaufen. Bitte korrigieren Sie die markierten Felder und versuchen Sie es erneut.
        </div>
      )}

      {/* Submit */}
      <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center">
        <button
          type="submit"
          disabled={disabled}
          className="rounded-2xl bg-primary px-6 py-3 text-base font-semibold text-white shadow-[0_12px_24px_rgba(110,74,226,.25)] transition-transform duration-[120ms] ease-[cubic-bezier(.2,0,0,1)] hover:-translate-y-0.5 motion-hover:lift focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/20 disabled:translate-y-0 disabled:opacity-60"
        >
          {status === 'sending' ? 'Wird gesendet...' : 'Nachricht senden'}
        </button>
        <a href="mailto:hello@youragency.com" className="text-base font-semibold text-blue-700 hover:text-blue-800">
          oder schreiben Sie uns direkt eine E-Mail
        </a>
      </div>
    </form>
  );
}


