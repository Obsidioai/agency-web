'use client';

import Link from 'next/link';
import {useEffect, useState} from 'react';

export function Header({locale='en'}:{locale?: 'en'|'de'}) {
  const [scrolled,setScrolled] = useState(false);
  useEffect(()=>{
    const onScroll=()=>setScrolled(window.scrollY>16);
    window.addEventListener('scroll', onScroll);
    return ()=>window.removeEventListener('scroll', onScroll);
  },[]);
  return (
    <header className={`sticky top-0 z-50 transition-all duration-base ease-standard
      ${scrolled ? 'bg-bg1 shadow-skin1 h-16' : 'bg-bg0 h-20'} border-b border-border`}>
      <div className="mx-auto max-w-6xl flex items-center justify-between px-6 h-full">
        <Link href={`/${locale}`} className="font-semibold">[Agency Name]</Link>
        <nav className="hidden md:flex gap-6 text-sm">
          {['Services','Case Studies','About','Blog','Contact'].map(x=>(
            <Link key={x} href={`/${locale}/${x.toLowerCase().replace(' ','-')}`} className="relative group">
              <span>{x}</span>
              <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-primary transition-all duration-fast ease-standard group-hover:w-full" />
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Link href={`/${locale==='en'?'de':'en'}`} className="text-muted">{locale.toUpperCase()}</Link>
          <Link href={`/${locale}/contact`} className="button-primary rounded-2xl px-4 py-2 bg-primary text-white shadow-[var(--shadow-skin1)]
            transition duration-fast ease-standard hover:-translate-y-0.5 focus-visible:outline-none focus-visible:shadow-[var(--shadow-glowAccent)]">
            Schedule a Call
          </Link>
        </div>
      </div>
    </header>
  );
}
