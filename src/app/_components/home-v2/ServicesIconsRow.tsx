'use client';

import { useState } from 'react';
import Link from 'next/link';
import { MonitorCog, Rocket, Share2, Workflow, BadgeDollarSign, Shapes, ChevronDown } from 'lucide-react';

const ICON_MAP: Record<string, React.ReactNode> = {
  automation: <Workflow className="h-6 w-6" />,
  lead: <Share2 className="h-6 w-6" />,
  saas: <Rocket className="h-6 w-6" />,
  branding: <Shapes className="h-6 w-6" />,
  ops: <MonitorCog className="h-6 w-6" />,
  roi: <BadgeDollarSign className="h-6 w-6" />
};

type Item = { title: string; desc?: string; icon?: string; href?: string };
type Props = { title: string; subtitle?: string; items: Item[] };

export default function ServicesIconsRow({ title, subtitle, items }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold tracking-tight md:text-4xl">{title}</h2>
      {subtitle ? <p className="mt-2 text-base text-muted-foreground md:text-lg">{subtitle}</p> : null}

      <div className="mt-10 grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6">
        {items.map((it, i) => {
          const iconNode = it.icon && ICON_MAP[it.icon] ? ICON_MAP[it.icon] : ICON_MAP.automation;
          const href = it.href ?? '';
          const isOpen = openIndex === i;

          let headline = '';
          let detailText = '';
          if (it.desc) {
            const hyphenIndex = it.desc.indexOf(' - ');
            const colonIndex = it.desc.indexOf(': ');

            if (hyphenIndex !== -1) {
              headline = it.desc.slice(0, hyphenIndex);
              detailText = it.desc.slice(hyphenIndex + 3);
            } else if (colonIndex !== -1) {
              headline = it.desc.slice(0, colonIndex);
              detailText = it.desc.slice(colonIndex + 2);
            } else {
              detailText = it.desc;
            }
          }

          return (
            <button
              type="button"
              key={i}
              onClick={() => setOpenIndex((current) => (current === i ? null : i))}
              aria-expanded={isOpen}
              className="group relative flex h-full w-full flex-col items-center gap-4 rounded-2xl bg-card p-6 text-center shadow-sm transition-transform duration-200 ease-out hover:scale-105 hover:shadow-md focus-visible:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2 focus-visible:ring-offset-white md:p-7"
            >
              <ChevronDown
                className={`absolute right-4 top-4 h-4 w-4 text-muted-foreground transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                aria-hidden
              />

              <div className="relative rounded-full p-[2px] transition-transform duration-200 ease-out group-hover:scale-105">
                <div className="rounded-full bg-gradient-to-br from-violet-200 to-teal-200 p-[2px]">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-card text-foreground/80 shadow-sm transition-colors duration-200 ease-out group-hover:bg-white">
                    {iconNode}
                  </div>
                </div>
              </div>

              <div className="text-lg font-semibold text-foreground md:text-xl">{it.title}</div>

              <div
                className={`grid w-full overflow-hidden text-left transition-[grid-template-rows] duration-200 ease-in-out ${isOpen ? 'grid-rows-[1fr] pt-2' : 'grid-rows-[0fr]'}`}
              >
                <div className="overflow-hidden space-y-2 text-sm leading-relaxed text-muted-foreground md:text-base">
                  {headline ? <p className="font-semibold text-foreground">{headline}</p> : null}
                  {detailText ? <p>{detailText}</p> : null}
                  {!headline && !detailText && it.desc ? <p>{it.desc}</p> : null}
                  {href ? (
                    <span className="block text-sm font-semibold text-primary underline-offset-4 hover:underline">
                      <Link href={href} onClick={(event) => event.stopPropagation()}>
                        Mehr erfahren
                      </Link>
                    </span>
                  ) : null}
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}