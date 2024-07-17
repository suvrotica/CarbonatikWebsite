<script lang="ts">
	import '../app.css';
	import Nav from '$lib/Nav.svelte';
	import Privacy from '$lib/Privacy.svelte';
	import Footer from '$lib/Footer.svelte';
	import Divider from '$lib/Divider.svelte';
	import FontPreload from '$lib/FontPreload.svelte';
	import Graphite from '$lib/Graphite.svelte';
</script>

<FontPreload href="/Fonts/Noto/NotoSans-VariableFont_wdth,wght.ttf" crossorigin="anonymous" />
<FontPreload
	href="/Fonts/Noto/NotoSans-Italic-VariableFont_wdth,wght.ttf"
	crossorigin="anonymous"
/>
<Nav />

<Divider icon={false} />
<slot />
<Divider icon={false} />
<Graphite />
<Divider icon={false} />

<Privacy />
<Divider icon={false} />

<Footer />
