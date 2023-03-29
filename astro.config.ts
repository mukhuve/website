import { defineConfig } from 'astro/config'
import compress from 'astro-compress'
import mdx from '@astrojs/mdx'
import tailwind from '@astrojs/tailwind'
import astroI18next from 'astro-i18next'

// https://astro.build/config
export default defineConfig({
  site: 'https://mukhuve.github.io',
  // base: '/website',
  integrations: [astroI18next(), compress(), mdx(), tailwind()],
})
