import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';
import sitemap from '@astrojs/sitemap';

// Live on Cloudflare Pages at the client's custom domain.
export default defineConfig({
  site: 'https://islandshine.com.my',
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [icon(), sitemap()],
});
