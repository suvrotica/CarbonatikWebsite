<script>
	import { base } from '$app/paths';

	let isOpen = $state(false);
	let navItems = $state([
		{ href: '#about', text: 'About' },
		{ href: '#operations', text: 'Operations' },
		{ href: '#investor-relations', text: 'Investors' },
		{ href: '#contact', text: 'Contact' }
	]);

	function toggleMenu() {
		isOpen = !isOpen;
	}
</script>

<nav class="nav-container">
	<div class="nav-content">
		<a href="/" class="nav-logo">
			<img src="{base}/logo.png" alt="Carbonatik Logo" />
		</a>
		<div class="nav-menu-toggle">
			<button onclick={toggleMenu} aria-label="Toggle menu"> &#9776; </button>
		</div>
		<ul class="nav-links" class:open={isOpen}>
			{#each navItems as item}
				<li>
					<a href={item.href}>{item.text}</a>
				</li>
			{/each}
		</ul>
	</div>
</nav>
