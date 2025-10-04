export type LogoKey =
  | 'openai'
  | 'azure-ai'
  | 'google-cloud'
  | 'aws'
  | 'n8n'
  | 'zapier'
  | 'make'
  | 'power-automate'
  | 'microsoft-365'
  | 'google-workspace'
  | 'shopify'
  | 'hubspot';

export const trustedLogos: Record<LogoKey, { src: string; width: number; height: number }> = {
  'openai': { src: '/logos/trusted/openai.svg', width: 96, height: 32 },
  'azure-ai': { src: '/logos/trusted/azure-ai.svg', width: 96, height: 32 },
  'google-cloud': { src: '/logos/trusted/google-cloud.svg', width: 96, height: 32 },
  'aws': { src: '/logos/trusted/aws.svg', width: 96, height: 32 },
  'n8n': { src: '/logos/trusted/n8n.svg', width: 96, height: 32 },
  'zapier': { src: '/logos/trusted/zapier.svg', width: 96, height: 32 },
  'make': { src: '/logos/trusted/make.svg', width: 96, height: 32 },
  'power-automate': { src: '/logos/trusted/power-automate.svg', width: 96, height: 32 },
  'microsoft-365': { src: '/logos/trusted/microsoft-365.svg', width: 96, height: 32 },
  'google-workspace': { src: '/logos/trusted/google-workspace.svg', width: 96, height: 32 },
  'shopify': { src: '/logos/trusted/shopify.svg', width: 96, height: 32 },
  'hubspot': { src: '/logos/trusted/hubspot.svg', width: 96, height: 32 }
}; 

export type TrustedLogoKey = keyof typeof trustedLogos;
