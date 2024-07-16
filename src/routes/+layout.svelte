<script lang="ts">
	import '../app.css';
	import Nav from '$lib/Nav.svelte';
	import FontPreload from '$lib/FontPreload.svelte';
	import { seo, config, jsonLd } from '$lib/global';
</script>

<FontPreload href="/Fonts/Noto/NotoSans-VariableFont_wdth,wght.ttf" crossorigin="anonymous" />
<FontPreload
	href="/Fonts/Noto/NotoSans-Italic-VariableFont_wdth,wght.ttf"
	crossorigin="anonymous"
/>
<svelte:head>
	<link rel="icon" href="https://fav.farm/🪫" />
	<title>{seo.title}</title>
	<meta name="description" content={seo.description} />
	<meta property="og:title" content={seo.title} />
	<meta property="og:description" content={seo.description} />
	<meta property="og:image" content={config.logoUrl} />
	<meta property="og:url" content={config.siteUrl} />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={seo.title} />
	<meta name="twitter:description" content={seo.description} />
	<meta name="twitter:image" content={config.logoUrl} />
	<script type="application/ld+json">
        {JSON.stringify(jsonLd)}
	</script>
</svelte:head>
<Nav />
<slot />
