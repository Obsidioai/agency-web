export type Lang = 'en' | 'de';
export type ResourceType = 'video' | 'guide' | 'template';
export type Topic = 'automation' | 'lead-gen' | 'consulting' | 'saas' | 'branding';

export interface ResourceItem {
  id: string;
  type: ResourceType;
  title: string;
  title_de?: string;
  desc: string;
  desc_de?: string;
  lang: Lang;
  topic: Topic;
  duration?: string; // for videos
  pages?: number;    // for guides/templates
  url: string;
  featured?: boolean;
  thumb?: string;    // placeholder image path
}

export interface BlogPost {
  id: string;
  title: string;
  title_de?: string;
  excerpt: string;
  excerpt_de?: string;
  date: string; // ISO
  lang: Lang;
  url: string;
  thumb?: string;
  tags?: string[];
}
