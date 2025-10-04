 import {getRequestConfig} from 'next-intl/server';
  import {messages as en} from '../i18n/en';
  import {messages as de} from '../i18n/de';

  export const locales = ['en', 'de'] as const;
  export type Locale = (typeof locales)[number];
  export const defaultLocale: Locale = 'en';

  const supportedLocales = new Set<string>(locales);

  function isSupportedLocale(value: unknown): value is Locale {
    return typeof value === 'string' && supportedLocales.has(value);
  }

  export default getRequestConfig(async (params) => {
    const requested = params.locale ?? (await params.requestLocale);
    const locale = isSupportedLocale(requested) ? requested : defaultLocale;
    const bundle = locale === 'de' ? de : en;

    return {
      locale,
      messages: bundle
    };
  });