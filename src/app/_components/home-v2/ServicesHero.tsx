'use client';

import Image from 'next/image';

type Props = {
  eyebrow?: string;
  title: string;
  subtitle: string;
  bgSrc: string;
  bgAlt: string;
};

export default function ServicesHero({ eyebrow, title, subtitle, bgSrc, bgAlt }: Props) {
  return (
    <div className="relative isolate min-h-screen">
      <Image
        src={bgSrc}
        alt={bgAlt}
        fill
        priority
        sizes="100vw"
        className="object-cover object-left-bottom"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
      <div className="relative flex min-h-screen items-end justify-start">
        <section className="w-full pb-16 pt-24 md:pb-24 md:pt-32">
          <div className="px-6 md:px-12 lg:px-16">
            <div className="max-w-3xl">
              {eyebrow ? (
                <p className="text-sm font-medium uppercase tracking-wider text-white/80">{eyebrow}</p>
              ) : null}
              <h1 className="mt-3 text-left text-4xl font-semibold leading-tight tracking-tight text-white md:text-6xl">
                {title}
              </h1>
              <p className="mt-4 max-w-2xl text-left text-base text-white/80 md:text-lg">
                {subtitle}
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
