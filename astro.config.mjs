import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

export default defineConfig({
  integrations: [react()],
  site: 'https://ashandcompany.github.io',
  base: 'cat-astrophe-le-site-web',
});
