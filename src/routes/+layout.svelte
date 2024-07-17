<script lang="ts">
	import '../app.css';
	import Nav from '$lib/Nav.svelte';
	import Navbar from '$lib/Navbar.svelte';
	import Footer from '$lib/Footer.svelte';
	import Divider from '$lib/Divider.svelte';
	import FontPreload from '$lib/FontPreload.svelte';
</script>

<FontPreload href="/Fonts/Noto/NotoSans-VariableFont_wdth,wght.ttf" crossorigin="anonymous" />
<FontPreload
	href="/Fonts/Noto/NotoSans-Italic-VariableFont_wdth,wght.ttf"
	crossorigin="anonymous"
/>
<!-- <Nav /> -->
<Navbar />
<Divider icon={false} />
<slot />
<Divider icon={false} />
<Footer />
