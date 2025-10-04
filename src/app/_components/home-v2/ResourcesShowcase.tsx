'use client';

import Image from 'next/image';
import Link from 'next/link';

type Cta = {
  label: string;
  href: string;
};

type Left = {
  date: string;
  title: string;
  desc: string;
  bullets: string[];
  previewIntro?: string;
  previewLink?: Cta;
  primaryCta: Cta;
  coverSrc: string;
  coverAlt: string;
};

type PostCard = {
  kind: 'post';
  title: string;
  href: string;
  meta: string;
  desc?: string;
};

type VideoCard = {
  kind: 'video';
  title: string;
  videoId: string;
  meta?: string;
};

type RightCard = PostCard | VideoCard;

export default function ResourcesShowcase({ left, right }: { left: Left; right: RightCard[] }) {
  const articles = right.filter((card): card is PostCard => card.kind === 'post');
  const video = right.find((card): card is VideoCard => card.kind === 'video');

  return (
    <div className="grid gap-6 xl:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
      <div className="rounded-[28px] border border-neutral-200 bg-white/95 shadow-lg ring-1 ring-black/5">
        <div className="grid items-start gap-10 px-6 py-7 md:px-8 md:py-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
          <div>
            <span className="inline-flex items-center rounded-full bg-[#EEF2FF] px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-[#4B64F3]">
              {left.date}
            </span>
            <h3 className="mt-4 text-2xl font-bold tracking-tight md:text-3xl">{left.title}</h3>
            <p className="mt-3 text-sm text-neutral-700 md:text-base">{left.desc}</p>
            <ul className="mt-5 space-y-2 text-sm text-neutral-800">
              {left.bullets.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <CheckIcon />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href={left.primaryCta.href}
                className="inline-flex items-center rounded-xl bg-[#4B64F3] px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:opacity-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4B64F3]/40"
              >
                {left.primaryCta.label}
              </Link>
            </div>
            {left.previewIntro && left.previewLink ? (
              <p className="mt-4 text-xs text-neutral-600 md:text-sm">
                {left.previewIntro}{' '}
                <Link href={left.previewLink.href} className="font-semibold text-[#4B64F3] hover:underline">
                  {left.previewLink.label}
                </Link>
                .
              </p>
            ) : null}
          </div>

          <div className="mx-auto w-full max-w-lg md:max-w-[520px] lg:max-w-[560px]">
            <div className="rounded-[28px] border border-neutral-200 bg-white/95 p-8 shadow-[0_24px_60px_-25px_rgba(0,0,0,0.35)]">
              <div className="relative aspect-[3/4] overflow-hidden rounded-xl ring-1 ring-black/5">
                <Image
                  src={left.coverSrc}
                  alt={left.coverAlt}
                  fill
                  sizes="(min-width: 1280px) 460px, (min-width: 1024px) 400px, (min-width: 768px) 55vw, 85vw"
                  className="object-cover"
                />
              </div>
              <div className="mt-4 h-2 rounded-full bg-neutral-200" />
              <div className="mt-2 h-2 w-2/3 rounded-full bg-neutral-200" />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-5">
        {articles.length > 0 ? (
          <div className="flex-1 rounded-[28px] border border-neutral-200 bg-white/95 p-6 shadow-lg ring-1 ring-black/5">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-wide text-neutral-500">Neu im Blog</span>
              <span className="text-xs font-semibold text-[#4B64F3]">{articles.length} Empfehlungen</span>
            </div>
            <div className="mt-5 space-y-4">
              {articles.map((card) => (
                <Link
                  key={card.href}
                  href={card.href}
                  className="group relative block overflow-hidden rounded-[24px] border border-neutral-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-[#4B64F3]/50 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4B64F3]/40"
                >
                  <span className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#4B64F3] via-[#7FD8BE] to-transparent opacity-0 transition group-hover:opacity-100" aria-hidden />
                  <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-wide text-neutral-500">
                    <span>{card.meta}</span>
                    <span className="text-[#4B64F3] transition group-hover:translate-x-1">-&gt;</span>
                  </div>
                  <h4 className="mt-3 text-lg font-semibold leading-snug text-neutral-900">{card.title}</h4>
                  {card.desc ? (
                    <p className="mt-2 text-sm leading-relaxed text-neutral-600">{card.desc}</p>
                  ) : null}
                </Link>
              ))}
            </div>
          </div>
        ) : null}

        {video ? (
          <div className="flex-1 rounded-[28px] border border-neutral-200 bg-white/95 p-6 shadow-lg ring-1 ring-black/5">
            {video.meta ? (
              <div className="text-xs font-semibold uppercase tracking-wide text-neutral-500">{video.meta}</div>
            ) : null}
            <h3 className="mt-2 text-xl font-semibold text-neutral-900">{video.title}</h3>
            <div className="mt-4 aspect-[16/9] overflow-hidden rounded-3xl bg-black/5">
              <iframe
                className="h-full w-full"
                src={`https://www.youtube.com/embed/${video.videoId}`}
                title={video.title}
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500"
      fill="currentColor"
      aria-hidden
    >
      <path d="M9.2 16.2 4.9 12 3.5 13.4l5.7 5.7L21 8.3 19.6 7z" />
    </svg>
  );
}









