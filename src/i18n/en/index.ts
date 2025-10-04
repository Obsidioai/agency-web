import common from './common.json';
import homeV2 from './home-v2.json';

// Merge common at top-level and mount Home V2 under the "homeV2" namespace.
export const messages = {
  ...common,
  homeV2
} as const;
