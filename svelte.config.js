import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),

  kit: {
    adapter: adapter(),
    csp: {
      mode: 'auto',
      directives: {
        'style-src': ['self', 'unsafe-inline']
      }
    }
  }
};

export default config;