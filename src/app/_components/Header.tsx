'use client';

import Image from 'next/image';
import Link from 'next/link';
import {Menu, X} from 'lucide-react';
import {useEffect, useState} from 'react';
import {usePathname} from 'next/navigation';

const navLinks = [
  {label: 'Resources', href: '/resources'},
  {label: 'Case Studies', href: '/case-studies'},
  {label: 'Services', href: '/services'},
  {label: 'About', href: '/about'},
  {label: 'Blog', href: '/blog'},
  {label: 'Contact', href: '/contact'}
];

function isHomePath(pathname: string | null) {
  if (!pathname) return true;
  return pathname === '/' || pathname === '/en' || pathname === '/de';
}

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isHome = isHomePath(pathname);

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

  const logoSrc = isHome ? '/brand/logo.svg' : '/brand/logo2.svg';
  const headerClasses = isHome
    ? 'absolute inset-x-0 top-0 z-50 w-full border-b border-transparent bg-transparent'
    : 'relative z-50 w-full bg-white shadow-sm';
  const navTextClass = isHome ? 'text-white' : 'text-black';
  const mobileButtonClass = isHome
    ? 'border-white/40 bg-white/10 text-white backdrop-blur'
    : 'border-neutral-200 bg-white/70 text-neutral-900 backdrop-blur';

  const closeMenu = () => setIsMenuOpen(false);
  const toggleMenu = () => setIsMenuOpen((current) => !current);

  return (
    <header className={headerClasses}>
      <div className="flex h-16 items-center justify-between px-4 sm:px-6 md:h-20 md:px-10">
        <Link href="/" aria-label="Home" className="group/logo flex items-center gap-2">
          <Image
            src={logoSrc}
            alt="obsidio"
            width={140}
            height={40}
            className="w-32 object-contain transition-transform duration-150 ease-[cubic-bezier(.2,0,0,1)] group-hover/logo:scale-105 md:w-36"
            priority
          />
          <span className="sr-only">obsidio</span>
        </Link>

        <nav className="hidden gap-6 text-sm font-medium md:flex">
          {navLinks.map((item) => (
            <Link key={item.label} href={item.href} className={`group relative ${navTextClass}`}>
              <span>{item.label}</span>
              <span className="pointer-events-none absolute left-0 -bottom-1 h-1 w-0 bg-primary transition-all duration-150 ease-[cubic-bezier(.2,0,0,1)] group-hover:w-full" />
            </Link>
          ))}
        </nav>

        <div className="hidden items-center md:flex">
          <Link
            href="/contact"
            className="rounded-2xl bg-primary px-4 py-2 text-white shadow-[0_1px_2px_rgba(0,0,0,.25)] transition duration-150 ease-[cubic-bezier(.2,0,0,1)] hover:-translate-y-0.5 focus-visible:outline-none focus-visible:shadow-[0_0_0_6px_rgba(0,245,160,.18)]"
          >
            Gespräch vereinbaren
          </Link>
        </div>

        <button
          type="button"
          onClick={toggleMenu}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-nav"
          className={`inline-flex h-11 w-11 items-center justify-center rounded-2xl border text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-black md:hidden ${mobileButtonClass}`}
        >
          <span className="sr-only">{isMenuOpen ? 'Menü schließen' : 'Menü öffnen'}</span>
          {isMenuOpen ? <X className="h-5 w-5" aria-hidden /> : <Menu className="h-5 w-5" aria-hidden />}
        </button>
      </div>

      {isMenuOpen ? (
        <div className="fixed inset-0 z-[60] md:hidden">
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={closeMenu} aria-hidden />
          <div className="absolute inset-y-0 right-0 flex w-full max-w-xs flex-col bg-white shadow-xl">
            <div className="flex items-center justify-between px-6 pb-4 pt-6">
              <Link href="/" aria-label="Home" className="flex items-center gap-2" onClick={closeMenu}>
                <Image src="/brand/logo2.svg" alt="obsidio" width={128} height={32} className="h-8 w-auto" />
              </Link>
              <button
                type="button"
                onClick={closeMenu}
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-neutral-200 bg-white text-neutral-900 shadow-sm transition hover:bg-neutral-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
              >
                <span className="sr-only">Menü schließen</span>
                <X className="h-5 w-5" aria-hidden />
              </button>
            </div>
            <nav id="mobile-nav" className="flex-1 overflow-y-auto px-6 pb-8">
              <ul className="space-y-2">
                {navLinks.map((item) => (
                  <li key={`mobile-${item.label}`}>
                    <Link
                      href={item.href}
                      onClick={closeMenu}
                      className="block rounded-xl px-4 py-3 text-base font-semibold text-neutral-900 transition hover:bg-neutral-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="border-t border-neutral-200 px-6 py-6">
              <Link
                href="/contact"
                onClick={closeMenu}
                className="flex w-full items-center justify-center rounded-xl bg-primary px-4 py-3 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
              >
                Gespräch vereinbaren
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
