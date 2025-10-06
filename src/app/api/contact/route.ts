import { NextResponse } from 'next/server';
import { z } from 'zod';

export const runtime = 'nodejs';

const ContactSchema = z.object({
  name: z.string().min(1, 'Required'),
  email: z.string().email('Invalid email'),
  company: z.string().optional(),
  phone: z.string().optional(),
  interest: z.string().optional(),
  message: z.string().min(10, 'Please add a few more details'),
  consent: z.boolean().refine(v => v === true, { message: 'Consent required' })
});

type MailPayload = {
  fromName: string;
  fromEmail: string;
  to: string;
  replyTo: string;
  subject: string;
  text: string;
  html: string;
};

const PLACEHOLDER_VALUES = new Set([
  'smtp.yourprovider.com',
  'your_smtp_username',
  'your_smtp_password',
  'hello@youragency.com',
  'web@youragency.com'
]);

const RESEND_SANDBOX_SENDER = 'onboarding@resend.dev';
const RESEND_DOMAIN_ERRORS = [/domain[^\n]*not verified/i, /permission denied for domain/i, /unauthorised sender/i, /unauthorized sender/i, /unauthenticated sender/i];

function isResendDomainNotVerifiedError(error: unknown) {
  if (!(error instanceof Error)) return false;
  return RESEND_DOMAIN_ERRORS.some(pattern => pattern.test(error.message));
}

function sanitizeEnv(value?: string | null): string | undefined {
  if (!value) return undefined;
  const trimmed = value.trim();
  if (!trimmed) return undefined;
  if (PLACEHOLDER_VALUES.has(trimmed)) return undefined;
  return trimmed;
}

async function sendWithResend(apiKey: string, payload: MailPayload) {
  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      from: `${payload.fromName} <${payload.fromEmail}>`,
      to: [payload.to],
      reply_to: payload.replyTo,
      subject: payload.subject,
      text: payload.text,
      html: payload.html
    })
  });

  if (!response.ok) {
    const bodyText = await response.text().catch(() => '');
    throw new Error(`Resend API error ${response.status}${bodyText ? `: ${bodyText}` : ''}`);
  }
}

async function sendWithSMTP(
  config: { host: string; port: number; user: string; pass: string },
  payload: MailPayload
) {
  const nodemailer = await import('nodemailer');
  const transporter = nodemailer.createTransport({
    host: config.host,
    port: config.port,
    secure: config.port === 465,
    auth: { user: config.user, pass: config.pass }
  });

  await transporter.sendMail({
    from: `"${payload.fromName}" <${payload.fromEmail}>`,
    to: payload.to,
    replyTo: payload.replyTo,
    subject: payload.subject,
    text: payload.text,
    html: payload.html
  });
}

export async function POST(req: Request) {
  const data = await req.json().catch(() => null);
  const parsed = ContactSchema.safeParse(data);

  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, errors: parsed.error.flatten().fieldErrors },
      { status: 400 }
    );
  }

  const { name, email, company, phone, interest, message } = parsed.data;

  const host = sanitizeEnv(process.env.SMTP_HOST);
  const port = Number(process.env.SMTP_PORT || 587);
  const user = sanitizeEnv(process.env.SMTP_USER);
  const pass = sanitizeEnv(process.env.SMTP_PASS);
  const to = sanitizeEnv(process.env.TO_EMAIL) || 'obsidio@obsidioai.com';
  const fromName = sanitizeEnv(process.env.FROM_NAME) || 'Website Contact';
  const configuredFromEmail =
    sanitizeEnv(process.env.FROM_EMAIL) || (user && user.includes('@') ? user : undefined);

  const smtpConfigured = Boolean(host && user && pass && configuredFromEmail);

  const resendApiKey = sanitizeEnv(process.env.RESEND_API_KEY);
  const resendFromEmail =
    sanitizeEnv(process.env.RESEND_FROM_EMAIL) || configuredFromEmail;

  if (!smtpConfigured && !(resendApiKey && resendFromEmail)) {
    return NextResponse.json(
      {
        ok: false,
        error:
          'The contact form email service is not configured yet. Please reach out to obsidio@obsidioai.com instead.'
      },
      { status: 500 }
    );
  }

  const lines = [
    `Name: ${name}`,
    `Email: ${email}`,
    company ? `Company: ${company}` : null,
    phone ? `Phone: ${phone}` : null,
    interest ? `Interested in: ${interest}` : null,
    '',
    'Message:',
    message
  ].filter(Boolean) as string[];

  const text = lines.join('\n');
  const html =
    `<pre style="font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace; white-space: pre-wrap;">${text}</pre>`;

  const basePayload = {
    fromName,
    to,
    replyTo: email,
    subject: `New website contact: ${name}${interest ? ` (${interest})` : ''}`,
    text,
    html
  } satisfies Omit<MailPayload, 'fromEmail'>;

  let lastError: unknown;

  if (resendApiKey && resendFromEmail) {
    try {
      await sendWithResend(resendApiKey, {
        ...basePayload,
        fromEmail: resendFromEmail
      });
      return NextResponse.json({ ok: true });
    } catch (err) {
      lastError = err;
      console.error('Failed to send contact form email via Resend', err);

      if (
        resendFromEmail !== RESEND_SANDBOX_SENDER &&
        isResendDomainNotVerifiedError(err)
      ) {
        try {
          await sendWithResend(resendApiKey, {
            ...basePayload,
            fromEmail: RESEND_SANDBOX_SENDER
          });
          return NextResponse.json({ ok: true });
        } catch (retryErr) {
          lastError = retryErr;
          console.error(
            'Failed to send contact form email via Resend sandbox sender',
            retryErr
          );
        }
      }
    }
  }

  if (smtpConfigured && host && user && pass && configuredFromEmail) {
    try {
      await sendWithSMTP(
        { host, port, user, pass },
        { ...basePayload, fromEmail: configuredFromEmail }
      );
      return NextResponse.json({ ok: true });
    } catch (err) {
      lastError = err;
      console.error('Failed to send contact form email via SMTP', err);
    }
  }

  let fallbackMessage =
    "We could not send your message right now. Please email obsidio@obsidioai.com and we'll get back to you.";

  if (lastError instanceof Error && /invalid login/i.test(lastError.message)) {
    fallbackMessage =
      'The email service rejected the credentials. Please verify the configured API key or SMTP login.';
  }

  return NextResponse.json({ ok: false, error: fallbackMessage }, { status: 502 });
}

