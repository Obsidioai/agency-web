'use client';

import Image from 'next/image';
import Link from 'next/link';
import {usePathname} from 'next/navigation';

const navLinks = [
  {label: 'Resources', href: '/resources'},
  {label: 'Case Studies', href: '/case-studies'},
  {label: 'Services', href: '/services'},
  {label: 'About', href: '/about'},
  {label: 'Blog', href: '/blog'},
  {label: 'Contact', href: '/contact'}
];

function isHomePath(pathname: string) {
  if (!pathname) return true;
  return pathname === '/' || pathname === '/en' || pathname === '/de';
}

export default function Header() {
  const pathname = usePathname();
  const isHome = isHomePath(pathname);

  const logoSrc = isHome ? '/brand/logo.svg' : '/brand/logo2.svg';
  const headerClasses = isHome
    ? 'absolute inset-x-0 top-0 z-50 w-full border-b border-transparent bg-transparent'
    : 'relative z-50 w-full bg-white';
  const navTextClass = isHome ? 'text-white' : 'text-black';

  return (
    <header className={headerClasses}>
      <div className="flex h-20 items-center justify-between px-4 sm:px-6 md:px-10">
        <Link href="/" aria-label="Home" className="group/logo flex items-center gap-2">
          <Image
            src={logoSrc}
            alt="obsidio"
            width={140}
            height={40}
            className="w-36 object-contain transition-transform duration-150 ease-[cubic-bezier(.2,0,0,1)] group-hover/logo:scale-105"
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

        <div className="flex items-center">
          <Link
            href="/contact"
            className="rounded-2xl bg-primary px-4 py-2 text-white shadow-[0_1px_2px_rgba(0,0,0,.25)] transition duration-150 ease-[cubic-bezier(.2,0,0,1)] hover:-translate-y-0.5 focus-visible:outline-none focus-visible:shadow-[0_0_0_6px_rgba(0,245,160,.18)]"
          >
            Gespraech vereinbaren
          </Link>
        </div>
      </div>
    </header>
  );
}
