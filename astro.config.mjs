import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://iamabeltran.com',
  output: 'static',
  trailingSlash: 'always',
  redirects: {
    '/': '/es/',
  },
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: { prefixDefaultLocale: true },
  },
});
