// @ts-check
import sitemap from '@astrojs/sitemap';
import { defineConfig, fontProviders } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	// Update once the domain is purchased.
	site: 'https://talesfromtheballpark.com',
	integrations: [sitemap()],
	fonts: [
		{
			// Calibri can't be embedded on the web; Carlito is its free, metric-compatible twin.
			provider: fontProviders.google(),
			name: 'Carlito',
			cssVariable: '--font-body',
			weights: [400, 700],
			styles: ['normal', 'italic'],
			fallbacks: ['Calibri', 'sans-serif'],
		},
		{
			provider: fontProviders.google(),
			name: 'Roboto Slab',
			cssVariable: '--font-display',
			weights: [400, 700],
			styles: ['normal'],
			fallbacks: ['Rockwell', 'Georgia', 'serif'],
		},
		{
			provider: fontProviders.google(),
			name: 'Courier Prime',
			cssVariable: '--font-mono',
			weights: [400, 700],
			styles: ['normal'],
			fallbacks: ['Courier New', 'monospace'],
		},
	],
});
