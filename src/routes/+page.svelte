<script lang="ts">
	import Hero from '$lib/Hero.svelte';
	import { generateMetadata } from '$lib/global';

	const metadata = generateMetadata({
		title: 'About Us',
		description: `Learn about Carbonatik's sustainable mining practices and global operations.`
	});
</script>

<svelte:head>
	<title>{metadata.title}</title>
	<meta name="description" content={metadata.description} />
	<meta property="og:title" content={metadata.openGraph.title} />
	<meta property="og:description" content={metadata.openGraph.description} />
	<meta name="twitter:title" content={metadata.twitter.title} />
	<meta name="twitter:description" content={metadata.twitter.description} />
</svelte:head>

<h1>About Carbonatik</h1>

<Hero />
