<script lang="ts">
	import '../app.css';
	import Nav from '$lib/Nav.svelte';
	import FontPreload from '$lib/FontPreload.svelte';
	import { seo, config, jsonLd, socialMeta } from '$lib/global';
</script>

<svelte:head>
	<meta charset="utf-8" />
	<title>{seo.title}</title>
	<meta name="description" content={seo.description} />
	<meta name="keywords" content={seo.keywords} />
	<link rel="canonical" href={config.siteUrl} />

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
</svelte:head>

<FontPreload href="/Fonts/Noto/NotoSans-VariableFont_wdth,wght.ttf" crossorigin="anonymous" />
<FontPreload
	href="/Fonts/Noto/NotoSans-Italic-VariableFont_wdth,wght.ttf"
	crossorigin="anonymous"
/>
<Nav />
<slot />
