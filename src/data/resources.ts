import {ResourceItem} from '@/types/content';

export const resources: ResourceItem[] = [
  {
    id: 'r1',
    type: 'video',
    title: "Best ChatGPT prompts you're not using (for SMB ops)",
    title_de: 'Die besten ChatGPT-Prompts, die Sie noch nicht nutzen',
    desc: '10 prompts to automate inbox replies, scheduling, and reporting.',
    desc_de: '10 Prompts zur Automatisierung von Posteingang, Terminplanung und Reporting.',
    lang: 'en',
    topic: 'automation',
    duration: '7:42',
    url: '#',
    featured: true
  },
  {
    id: 'r2',
    type: 'guide',
    title: 'AI Automation Starter Kit (Zaps, workflows, scripts)',
    title_de: 'KI-Automatisierungs-Starterkit (Zaps, Workflows, Skripte)',
    desc: 'A step-by-step quickstart with copyable blocks.',
    desc_de: 'Schnellstart mit kopierbaren Bausteinen.',
    lang: 'de',
    topic: 'automation',
    pages: 12,
    url: '#',
    featured: true
  },
  {
    id: 'r3',
    type: 'template',
    title: 'Lead-Gen Outreach Prompts (ICP-aware)',
    title_de: 'Lead-Gen-Outreach-Prompts (ICP-basiert)',
    desc: '30 prompts for emails & LinkedIn with variables.',
    desc_de: '30 Prompts für E-Mails & LinkedIn mit Variablen.',
    lang: 'en',
    topic: 'lead-gen',
    pages: 6,
    url: '#',
    featured: true
  },
  {
    id: 'r4',
    type: 'video',
    title: 'SaaS MVP in 48h (LLM + low-code)',
    desc: 'Architecture & pitfalls to ship fast safely.',
    lang: 'en',
    topic: 'saas',
    duration: '9:15',
    url: '#'
  },
  {
    id: 'r5',
    type: 'guide',
    title: 'Branding with AI: content system',
    desc: 'How to set up an AI-assisted content engine.',
    lang: 'de',
    topic: 'branding',
    pages: 8,
    url: '#'
  }
];
