import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://useandkeep.com',
  compressHTML: true,
  integrations: [],
  vite: {
    ssr: {
      external: ["svgo"]
    }
  }
});
