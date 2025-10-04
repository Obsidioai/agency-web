import Image from "next/image";
import Link from "next/link";
import type {SVGProps} from "react";

type Locale = "en" | "de";

type FooterProps = {
  locale?: Locale;
  onLocalePath?: (path: string, locale: Locale) => string;
};

const MINT = "#7FD8BE";

const NAV_ITEMS: Record<Locale, { label: string; href: string }[]> = {
  en: [
    { label: "Resources", href: "/resources" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "Services", href: "/services" },
    { label: "About", href: "/about" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" }
  ],
  de: [
    { label: "Ressourcen", href: "/resources" },
    { label: "Fallstudien", href: "/case-studies" },
    { label: "Dienstleistungen", href: "/services" },
    { label: "Ueber obsidio", href: "/about" },
    { label: "Blog", href: "/blog" },
    { label: "Kontakt", href: "/contact" }
  ]
};

const LEGAL_LINKS: Record<Locale, { label: string; href: string }[]> = {
  en: [
    { label: "COOKIE PREFERENCES", href: "/cookies" },
    { label: "DATENSCHUTZ", href: "/datenschutz" },
    { label: "NUTZUNGSBEDINGUNGEN", href: "/nutzungsbedingungen" },
    { label: "IMPRESSUM", href: "/impressum" }
  ],
  de: [
    { label: "COOKIE EINSTELLUNGEN", href: "/cookies" },
    { label: "DATENSCHUTZ", href: "/datenschutz" },
    { label: "NUTZUNGSBEDINGUNGEN", href: "/nutzungsbedingungen" },
    { label: "IMPRESSUM", href: "/impressum" }
  ]
};

const IconLinkedIn = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
    <path d="M6.94 8.5v10.5M4 4.9a2.1 2.1 0 1 0 4.2 0 2.1 2.1 0 0 0-4.2 0Z" strokeWidth="1.6" />
    <path d="M10.5 19V8.5h3.5l.1 1.6c.6-1 1.7-1.9 3.6-1.9 3 0 4.3 1.8 4.3 5.1V19" strokeWidth="1.6" />
  </svg>
);
const IconX = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
    <path d="M4 4l16 16M20 4L4 20" strokeWidth="1.6" />
  </svg>
);
const IconInstagram = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
    <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" strokeWidth="1.6" />
    <circle cx="12" cy="12" r="4.2" strokeWidth="1.6" />
    <circle cx="17.3" cy="6.7" r="1.2" fill="currentColor" />
  </svg>
);
const IconYouTube = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
    <rect x="2.5" y="6.5" width="19" height="11" rx="3" strokeWidth="1.6" />
    <path d="M11 10v4l4-2-4-2Z" fill="currentColor" stroke="none" />
  </svg>
);
const IconTikTok = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
    <path d="M14 4v8.5a3.5 3.5 0 1 1-3.5-3.5" strokeWidth="1.6" />
    <path d="M14 6c.7 1.9 2.6 3.2 4.7 3.2" strokeWidth="1.6" />
  </svg>
);

export default function Footer({ locale = "en", onLocalePath }: FooterProps) {
  const t = {
    headline: "Das Potenzial derer freisetzen, die die Welt voranbringen",
    assistTitle: "Wie k\u00f6nnen wir helfen?",
    assistBody:
      "Wir freuen uns \u00fcber Ihre Kontaktaufnahme. Senden Sie uns Ihre Anfrage - unser Team hilft gerne weiter.",
    contact: "Kontakt aufnehmen",
    follow: "FOLGEN SIE UNS"
  };

  const localeHref = (href: string) => {
    if (onLocalePath) {
      return onLocalePath(href, locale);
    }

    return href;
  };

  const navItems = NAV_ITEMS[locale];
  const navColumns = [navItems.slice(0, 3), navItems.slice(3)];
  const legalLinks = LEGAL_LINKS[locale];

  return (
    <footer className="border-t bg-[#FAF9F6] text-neutral-900">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-16 md:grid-cols-3 md:px-10">
        <div className="pr-6">
          <h2 className="text-3xl/tight font-semibold md:text-4xl">{t.headline}</h2>
        </div>

        <nav aria-label="Footer" className="grid grid-cols-2 gap-6">
          {navColumns.map((colItems, index) => (
            <ul key={index} className="space-y-3">
              {colItems.map((item) => (
                <li key={item.label}>
                  <Link href={localeHref(item.href)} className="text-base hover:opacity-80">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          ))}
        </nav>

        <div className="rounded-2xl border bg-white p-6 shadow-sm md:p-7">
          <h3 className="text-2xl font-semibold">{t.assistTitle}</h3>
          <p className="mt-3 text-sm text-neutral-600">{t.assistBody}</p>
          <div className="mt-6">
            <Link
              href={localeHref("/contact")}
              className="inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold text-black"
              style={{ backgroundColor: MINT }}
            >
              {t.contact}
              <span aria-hidden>&rarr;</span>
            </Link>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 pb-10 md:px-10">
        <div className="flex flex-col-reverse items-start justify-between gap-8 border-t pt-8 md:flex-row md:items-center">
          <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:gap-10">
            <Link href={localeHref("/")} className="shrink-0">
              <Image src="/brand/logo2.svg" alt="Obsidio" width={128} height={28} className="h-7 w-auto" />
            </Link>

            <ul className="flex flex-wrap gap-x-6 gap-y-3 text-[12px] font-semibold tracking-wide text-neutral-800">
              {legalLinks.map((link) => (
                <li key={link.label} className="whitespace-nowrap">
                  <Link href={localeHref(link.href)} className="underline-offset-4 hover:underline">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex w-full items-center justify-end gap-4 text-neutral-800 md:w-auto">
            <span className="hidden text-xs font-semibold md:inline">{t.follow}</span>
            <Link href="https://www.linkedin.com" aria-label="LinkedIn" className="p-2 hover:opacity-80">
              <IconLinkedIn className="h-5 w-5" />
            </Link>
            <Link href="https://x.com" aria-label="X" className="p-2 hover:opacity-80">
              <IconX className="h-5 w-5" />
            </Link>
            <Link href="https://instagram.com" aria-label="Instagram" className="p-2 hover:opacity-80">
              <IconInstagram className="h-5 w-5" />
            </Link>
            <Link href="https://youtube.com" aria-label="YouTube" className="p-2 hover:opacity-80">
              <IconYouTube className="h-5 w-5" />
            </Link>
            <Link href="https://tiktok.com" aria-label="TikTok" className="p-2 hover:opacity-80">
              <IconTikTok className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}