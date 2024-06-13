import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import type { Config } from '@sveltejs/kit';

const config: Config = {
	kit: {
		// 	// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// 	// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
		// 	// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter({
			images: {
				sizes: [640, 828, 1200, 1920, 3840],
				formats: ['image/avif', 'image/webp'],
				minimumCacheTTL: 300,
				domains: ['nexus-sdao.dev.vercel.app']
			}
		}),
		alias: {
			$components: './src/lib/components',
			$lib: './src/lib',
			$stores: './src/lib/stores',
			$utils: './src/lib/utils',
			$abis: './src/lib/abis',
			$factories: './src/lib/abis/v6/factories'
		}
	},
	preprocess: vitePreprocess()
};

export default config;
