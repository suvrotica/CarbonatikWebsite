<script lang="ts">
	import '../app.css';
	import Nav from '$lib/Nav.svelte';
	import FontPreload from '$lib/FontPreload.svelte';
</script>

<FontPreload href="/Fonts/Noto/NotoSans-VariableFont_wdth,wght.ttf" crossorigin="anonymous" />
<FontPreload
	href="/Fonts/Noto/NotoSans-Italic-VariableFont_wdth,wght.ttf"
	crossorigin="anonymous"
/>
<Nav />
<slot />
