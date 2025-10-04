'use client';
import Image from 'next/image';
import {Card} from '@/components/ui/card';
import {ScrollArea} from '@/components/ui/scroll-area';
import {trustedLogos} from '@/lib/logos';
import {cn} from '@/lib/utils';
import type { StackItem, StacksContent } from './types';



type TrustedStacksProps = StacksContent;

function renderLogo(item: StackItem) {
  const logo = item.logoKey ? trustedLogos[item.logoKey] : undefined;

  if (!logo) {
    return (
      <span className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
        {item.name}
      </span>
    );
  }

  return (
    <Image
      src={logo.src}
      alt={item.name}
      width={logo.width}
      height={logo.height}
      loading="lazy"
      className="h-8 w-auto object-contain"
    />
  );
}

function LogoCard({item}: {item: StackItem}) {
  return (
    <Card
      className="flex h-24 items-center justify-center border-border/40 bg-bg1/80 px-4 transition duration-fast ease-standard hover:border-accent/40 hover:shadow-skin2 motion-reduce:transform-none"
    >
      <div
        className={cn(
          'flex items-center justify-center grayscale transition duration-fast ease-standard hover:grayscale-0',
          'motion-reduce:transition-none'
        )}
      >
        {renderLogo(item)}
      </div>
    </Card>
  );
}

export function TrustedStacks({title, subtitle, items}: TrustedStacksProps) {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-text md:text-3xl">{title}</h2>
          {subtitle ? (
            <p className="mt-3 text-sm text-muted md:text-base">{subtitle}</p>
          ) : null}
        </div>

        <ScrollArea className="mt-10 md:hidden">
          <div className="flex w-max gap-6 pr-6">
            {items.map((item) => (
              <LogoCard key={item.name} item={item} />
            ))}
          </div>
        </ScrollArea>
        <div className="mt-10 hidden grid-cols-2 gap-6 sm:grid md:grid-cols-4 lg:grid-cols-6">
          {items.map((item) => (
            <LogoCard key={item.name} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

