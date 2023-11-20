import { defineConfig } from 'astro/config'

import tailwind from '@astrojs/tailwind'

import sitemap from '@astrojs/sitemap'

// https://astro.build/config
export default defineConfig({
	site: 'https://shortcut-production.com',
	integrations: [sitemap(), tailwind()]
})
