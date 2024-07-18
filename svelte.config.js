import { mdsvex } from 'mdsvex'
import adapter from '@sveltejs/adapter-vercel';

const config = {
  extensions: ['.svelte', '.svx', '.md'],
  preprocess: [
    mdsvex({
      extensions: ['.svelte', '.svx', '.md']
    })
  ],
  kit: {
		adapter: adapter({
			// see below for options that can be set here
		})
	}
}

export default config