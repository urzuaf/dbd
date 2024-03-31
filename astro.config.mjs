import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  integrations: [mdx(), sitemap(), svelte()],
    site: 'https://urzuaf.github.io',
  base: 'dbd',
});