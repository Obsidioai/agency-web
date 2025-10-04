import type {TrustedLogoKey} from '@/lib/logos';

export type StackItem = {
  name: string;
  logoKey?: TrustedLogoKey;
  logoSrc?: string | null;
};

export type StacksContent = {
  title: string;
  subtitle?: string;
  items: StackItem[];
};
