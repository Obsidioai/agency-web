import type {Metadata} from 'next';
import {getLocale, getTranslations} from 'next-intl/server';
import Footer from '@/app/_components/Footer';
import ServicesHero from '@/app/_components/home-v2/ServicesHero';
import ServicesIconsRow from '@/app/_components/home-v2/ServicesIconsRow';
import FeaturedCaseStudy from '@/app/_components/home-v2/FeaturedCaseStudy';
import WhyUsChips from '@/app/_components/home-v2/WhyUsChips';
import ResourcesShowcase from '@/app/_components/home-v2/ResourcesShowcase';

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const t = await getTranslations({locale, namespace: 'homeV2'});
  const meta = t.raw('meta') as {title: string; description: string};
  return {title: meta.title, description: meta.description};
}

export default async function HomePage() {
  const locale = await getLocale();
  const t = await getTranslations({locale, namespace: 'homeV2'});

  const hero = t.raw('servicesHero') as {
    eyebrow?: string;
    title: string;
    subtitle: string;
    bgSrc: string;
    bgAlt: string;
  };

  const services = t.raw('servicesIcons') as {
    title: string;
    subtitle?: string;
    items: {title: string; desc: string; icon?: string}[];
  };

  const caseStudy = t.raw('caseStudy') as {
    sectionTitle: string;
    eyebrow: string;
    title: string;
    problem: string;
    solution: string;
    result: string;
    ctaLabel: string;
    ctaHref: string;
    imageSrc: string;
    imageAlt: string;
  };

  const whyUs = t.raw('whyUs') as {title: string; items: string[]};

  const resources = t.raw('resources') as {
    left: {
      date: string;
      title: string;
      desc: string;
      bullets: string[];
      previewIntro?: string;
      previewLink?: {label: string; href: string};
      primaryCta: {label: string; href: string};
      coverSrc: string;
      coverAlt: string;
    };
    right: Array<
      | {kind: 'post'; title: string; href: string; meta: string}
      | {kind: 'video'; title: string; videoId: string; meta?: string}
    >;
  };

  const footerLocale = locale === 'de' ? 'de' : 'en';

  return (
    <>
      <main className="bg-white text-slate-900">
        <ServicesHero {...hero} />

        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-6 md:px-10">
            <ServicesIconsRow {...services} />
          </div>
        </section>

        <section className="py-8 md:py-12">
          <div className="mx-auto max-w-7xl px-6 md:px-10">
            <FeaturedCaseStudy {...caseStudy} />
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="mx-auto max-w-7xl px-6 md:px-10">
            <WhyUsChips {...whyUs} />
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-6 md:px-10">
            <ResourcesShowcase {...resources} />
          </div>
        </section>
      </main>

      <Footer locale={footerLocale} />
    </>
  );
}
