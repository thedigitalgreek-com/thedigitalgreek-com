// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// Old Drupal URLs → new homes, so existing links keep working.
const legacy = {
  '/portfolio': '/',
  '/about-us': '/#about',
  '/team': '/#about',
  '/contact': '/#about',
  '/node': '/',
  '/node/14': '/',
  '/node/18': '/filtermusic',
  '/littlepopup-berlin': '/',
  '/blog': '/',
  '/blog-2': '/',
  '/search': '/',
  '/search/node': '/',
  '/search/node/help': '/',
};
for (let i = 1; i <= 6; i++) {
  legacy[`/taxonomy/term/${i}`] = '/';
  legacy[`/taxonomy/term/${i}/feed`] = '/';
}

export default defineConfig({
  site: 'https://thedigitalgreek.com',
  redirects: legacy,
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
