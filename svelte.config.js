import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import path from 'path';

const config = {
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter(),
		alias: {
			'@componets': path.resolve('./src/componets')
		},
		paths: {
			base: process.env.NODE_ENV === 'production' ? '/top-o-the_word' : ''
		}
	}
};

export default config;
