'use client';

import Link from 'next/link';
import {Menu, X} from 'lucide-react';
import {useEffect, useState} from 'react';
import {usePathname} from 'next/navigation';

const NAV_LINKS = [
  {label: 'Services', slug: 'services'},
  {label: 'Case Studies', slug: 'case-studies'},
  {label: 'About', slug: 'about'},
  {label: 'Blog', slug: 'blog'},
  {label: 'Contact', slug: 'contact'}
];

export function Header({locale = 'en'}: {locale?: 'en' | 'de'}) {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!isMenuOpen) return;

    const {body} = document;
    const previousOverflow = body.style.overflow;
    body.style.overflow = 'hidden';

    const handleKeydown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeydown);

    return () => {
      body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeydown);
    };
  }, [isMenuOpen]);

  const otherLocale = locale === 'en' ? 'de' : 'en';
  const headerBase = scrolled
    ? 'bg-bg1 shadow-skin1 h-16'
    : 'bg-bg0 h-20';

  return (
    <header className={`sticky top-0 z-50 border-b border-border transition-all duration-base ease-standard ${headerBase}`}>
      <div className="mx-auto flex h-full max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href={`/${locale}`} className="font-semibold text-base md:text-lg">
          [Agency Name]
        </Link>

        <nav className="hidden gap-6 text-sm md:flex">
          {NAV_LINKS.map((item) => (
            <Link key={item.slug} href={`/${locale}/${item.slug}`} className="relative group">
              <span>{item.label}</span>
              <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-primary transition-all duration-fast ease-standard group-hover:w-full" />
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Link href={`/${otherLocale}`} className="text-muted">
            {locale.toUpperCase()}
          </Link>
          <Link
            href={`/${locale}/contact`}
            className="button-primary rounded-2xl bg-primary px-4 py-2 text-white shadow-[var(--shadow-skin1)] transition duration-fast ease-standard hover:-translate-y-0.5 focus-visible:outline-none focus-visible:shadow-[var(--shadow-glowAccent)]"
          >
            Schedule a Call
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setIsMenuOpen((current) => !current)}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-locale-nav"
          className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-border bg-bg0 text-foreground shadow-sm transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 md:hidden"
        >
          <span className="sr-only">{isMenuOpen ? 'Close menu' : 'Open menu'}</span>
          {isMenuOpen ? <X className="h-5 w-5" aria-hidden /> : <Menu className="h-5 w-5" aria-hidden />}
        </button>
      </div>

      {isMenuOpen ? (
        <div className="fixed inset-0 z-[60] md:hidden">
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setIsMenuOpen(false)} aria-hidden />
          <div className="absolute inset-y-0 right-0 flex w-full max-w-xs flex-col bg-white shadow-xl">
            <div className="flex items-center justify-between px-6 pb-4 pt-6">
              <Link href={`/${locale}`} className="text-lg font-semibold" onClick={() => setIsMenuOpen(false)}>
                [Agency Name]
              </Link>
              <button
                type="button"
                onClick={() => setIsMenuOpen(false)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-neutral-200 bg-white text-neutral-900 shadow-sm transition hover:bg-neutral-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
              >
                <span className="sr-only">Close menu</span>
                <X className="h-5 w-5" aria-hidden />
              </button>
            </div>

            <nav id="mobile-locale-nav" className="flex-1 overflow-y-auto px-6 pb-6">
              <ul className="space-y-2">
                {NAV_LINKS.map((item) => (
                  <li key={`mobile-${item.slug}`}>
                    <Link
                      href={`/${locale}/${item.slug}`}
                      onClick={() => setIsMenuOpen(false)}
                      className="block rounded-xl px-4 py-3 text-base font-semibold text-neutral-900 transition hover:bg-neutral-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="border-t border-neutral-200 px-6 py-5">
              <Link
                href={`/${locale}/contact`}
                onClick={() => setIsMenuOpen(false)}
                className="flex w-full items-center justify-center rounded-xl bg-primary px-4 py-3 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
              >
                Schedule a Call
              </Link>
            </div>

            <div className="border-t border-neutral-200 px-6 py-4 text-sm">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-neutral-700">Language</span>
                <Link
                  href={`/${otherLocale}`}
                  onClick={() => setIsMenuOpen(false)}
                  className="rounded-lg border border-neutral-200 px-3 py-2 font-semibold text-neutral-900 transition hover:bg-neutral-100"
                >
                  {otherLocale.toUpperCase()}
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
