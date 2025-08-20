import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

import mdx from "@astrojs/mdx";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: 'https://react-chessboard-ui.dev',
  integrations: [react(), mdx(), sitemap()],
  devToolbar: {
    enabled: false
  },
  outDir: './build',
});
