import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://iamabeltran.com',
  output: 'static',
  trailingSlash: 'always',
  integrations: [sitemap()],
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: { prefixDefaultLocale: true, redirectToDefaultLocale: false },
  },
});
