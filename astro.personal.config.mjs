import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static',
  site: 'https://treppmann.de',
  srcDir: './src-personal',
  outDir: './personal-dist',
});
