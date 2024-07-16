<script lang="ts">
	import '../app.css'; // Keep this import for CSS processing
	import Nav from '$lib/Nav.svelte';
	import FontPreload from '$lib/FontPreload.svelte';
	import { seo, config, jsonLd, socialMeta } from '$lib/global';
	import { onMount } from 'svelte';

	let mounted = false;

	onMount(() => {
		mounted = true;
	});
</script>

<svelte:head>
	<meta charset="utf-8" />
	<title>{seo.title}</title>
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<meta name="description" content={seo.description} />
	<meta name="keywords" content={seo.keywords} />
	<link rel="canonical" href={config.siteUrl} />
	<link rel="icon" href="./fav-icon.png" />

	<meta property="og:title" content={socialMeta.ogTitle} />
	<meta property="og:description" content={socialMeta.ogDescription} />
	<meta property="og:image" content={config.logoUrl} />
	<meta property="og:url" content={config.siteUrl} />
	<meta property="og:type" content="website" />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={socialMeta.twitterTitle} />
	<meta name="twitter:description" content={socialMeta.twitterDescription} />
	<meta name="twitter:image" content={config.logoUrl} />

	<script type="application/ld+json">
	  {JSON.stringify(jsonLd)}
	</script>

	{#if mounted}
		<style>
			@import url('../app.css');
		</style>
	{/if}
</svelte:head>

<FontPreload href="/Fonts/Noto/NotoSans-VariableFont_wdth,wght.ttf" crossorigin="anonymous" />
<FontPreload
	href="/Fonts/Noto/NotoSans-Italic-VariableFont_wdth,wght.ttf"
	crossorigin="anonymous"
/>
<Nav />
<slot />
