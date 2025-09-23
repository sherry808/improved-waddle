export const FONT_CONFIG = {

  preload: {
    monthis: {
      href: '/fonts/monthis.otf',
      type: 'font/otf',
      as: 'font',
      crossOrigin: 'anonymous' as const,
    },
    nats: {
      href: '/fonts/nats.ttf',
      type: 'font/ttf',
      as: 'font',
      crossOrigin: 'anonymous' as const,
    },
  },
  
  // Font display strategy
  display: 'swap' as const,
  
  // Unicode ranges for better font loading
  unicodeRange: 'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD',
  
  // Cache configuration
  cache: {
    maxAge: 31536000, // 1 year
    immutable: true,
  },
};

export function generateFontPreloadLinks() {
  return [
    {
      rel: 'preload',
      href: FONT_CONFIG.preload.monthis.href,
      as: FONT_CONFIG.preload.monthis.as,
      type: FONT_CONFIG.preload.monthis.type,
      crossOrigin: FONT_CONFIG.preload.monthis.crossOrigin,
    },
    {
      rel: 'preload',
      href: FONT_CONFIG.preload.nats.href,
      as: FONT_CONFIG.preload.nats.as,
      type: FONT_CONFIG.preload.nats.type,
      crossOrigin: FONT_CONFIG.preload.nats.crossOrigin,
    },
  ];
}


