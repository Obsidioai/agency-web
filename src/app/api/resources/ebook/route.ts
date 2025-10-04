import { NextResponse } from 'next/server';
import { z } from 'zod';

export const runtime = 'nodejs';

const EbookRequestSchema = z.object({
  name: z.string().max(120).optional(),
  company: z.string().max(160).optional(),
  email: z.string().email('Invalid email address'),
  consent: z.boolean().refine(v => v === true, { message: 'Consent required' })
});

export async function POST(request: Request) {
  const payload = await request.json().catch(() => null);
  const parsed = EbookRequestSchema.safeParse(payload);

  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, errors: parsed.error.flatten().fieldErrors },
      { status: 400 }
    );
  }

  const { name, company, email } = parsed.data;

  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT || 587);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const fromEmail = process.env.FROM_EMAIL || user || '';
  const fromName = process.env.EBOOK_FROM_NAME || process.env.FROM_NAME || 'Obsidio';
  const notificationEmail = process.env.TO_EMAIL;

  if (!host || !user || !pass || !fromEmail) {
    return NextResponse.json(
      { ok: false, error: 'Email not configured on server.' },
      { status: 500 }
    );
  }

  const origin = request.headers.get('origin');
  const ebookFileName = process.env.EBOOK_FILE_NAME || 'ebook.pdf';
  const downloadUrl = process.env.EBOOK_DOWNLOAD_URL || (origin ? `${origin}/downloads/${ebookFileName}` : null);

  if (!downloadUrl) {
    return NextResponse.json(
      { ok: false, error: 'Download link not configured.' },
      { status: 500 }
    );
  }

  const nodemailer = await import('nodemailer');
  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass }
  });

  const greeting = name ? `Hi ${name},` : 'Hi there,';
  const downloadText = `Here is your copy of "AI for Business Owners (Beginner's Guide)".\n\nDownload it here: ${downloadUrl}\n\nNeed any help putting the ideas into practice? Just hit reply.\n\n- The Obsidio team`;
  const downloadHtml = `
    <p>${greeting}</p>
    <p>Here is your copy of <strong>AI for Business Owners (Beginner's Guide)</strong>.</p>
    <p><a href="${downloadUrl}">Download the e-book</a></p>
    <p>Need any help putting the ideas into practice? Just hit reply.</p>
    <p>- The Obsidio team</p>
  `;

  await transporter.sendMail({
    from: `"${fromName}" <${fromEmail}>`,
    to: email,
    subject: 'Your e-book from Obsidio',
    text: `${greeting}\n\n${downloadText}`,
    html: downloadHtml,
    replyTo: notificationEmail || fromEmail
  });

  if (notificationEmail) {
    const summaryLines = [
      `Email: ${email}`,
      name ? `Name: ${name}` : null,
      company ? `Company: ${company}` : null,
      'Consent: yes',
      `Download link sent: ${downloadUrl}`
    ].filter(Boolean) as string[];

    await transporter.sendMail({
      from: `"${fromName}" <${fromEmail}>`,
      to: notificationEmail,
      subject: `New e-book request${name ? ` from ${name}` : ''}`,
      text: summaryLines.join('\n'),
      html: `<pre style="font-family: monospace; white-space: pre-wrap;">${summaryLines.join('\n')}</pre>`
    });
  }

  return NextResponse.json({ ok: true });
}
