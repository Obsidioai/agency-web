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
  // Zod v3: use boolean + refine (literal(true) doesn't take options)
  consent: z.boolean().refine(v => v === true, { message: 'Consent required' })
});

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

  // --- SMTP config from env ---
  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT || 587);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const to = process.env.TO_EMAIL; // where you receive messages
  const fromEmail = process.env.FROM_EMAIL || user || '';
  const fromName = process.env.FROM_NAME || 'Website Contact';

  if (!host || !user || !pass || !to || !fromEmail) {
    return NextResponse.json(
      { ok: false, error: 'Email not configured on server.' },
      { status: 500 }
    );
  }

  // Dynamic import avoids ESM/CJS type quirks
  const nodemailer = await import('nodemailer');
  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass }
  });

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

  await transporter.sendMail({
    from: `"${fromName}" <${fromEmail}>`,
    to,
    replyTo: email,
    subject: `New website contact: ${name}${interest ? ` (${interest})` : ''}`,
    text,
    html
  });

  return NextResponse.json({ ok: true });
}
