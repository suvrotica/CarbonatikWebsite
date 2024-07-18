import { mdsvex } from 'mdsvex'

const config = {
  extensions: ['.svelte', '.svx', '.md'],
  preprocess: [
    mdsvex({
      extensions: ['.svelte', '.svx', '.md']
    })
  ]
}

export default config