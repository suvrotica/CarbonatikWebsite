<script lang="ts">
    import { browser } from '$app/environment';
  
    type CrossOrigin = 'anonymous' | 'use-credentials' | '';
  
    let { 
      href,
      as = 'font',
      type = 'font/ttf',
      crossorigin = 'anonymous'
    } = $props<{
      href: string;
      as?: string;
      type?: string;
      crossorigin?: CrossOrigin;
    }>();
  </script>
  
  <svelte:head>
    {#if browser}
      <link rel="preload" {href} {as} {type} crossorigin={crossorigin || undefined}>
    {/if}
  </svelte:head>