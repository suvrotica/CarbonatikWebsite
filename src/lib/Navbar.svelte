<script>
	import { onMount } from 'svelte';
	import { base } from '$app/paths';

	let isMenuOpen = false;
	let isProfileMenuOpen = false;
	let isMobile;

	$: navClass = isMenuOpen ? 'block' : 'hidden';

	const navItems = [
		{ href: '/', text: 'Dashboard', current: true },
		{ href: '/team', text: 'Team', current: false },
		{ href: '/projects', text: 'Projects', current: false },
		{ href: '/calendar', text: 'Calendar', current: false }
	];

	const profileMenuItems = [
		{ href: '#', text: 'Your Profile' },
		{ href: '#', text: 'Settings' },
		{ href: '#', text: 'Sign out' }
	];

	function toggleMenu() {
		isMenuOpen = !isMenuOpen;
	}

	function toggleProfileMenu() {
		isProfileMenuOpen = !isProfileMenuOpen;
	}

	onMount(() => {
		const mediaQuery = window.matchMedia('(min-width: 1024px)');
		isMobile = !mediaQuery.matches;

		mediaQuery.addEventListener('change', (e) => {
			isMobile = !e.matches;
			if (!isMobile) {
				isMenuOpen = false;
			}
		});
	});
</script>

<header class="navbar">
	<div class="navbar-container">
		<div class="relative flex h-16 justify-between">
			<div class="relative z-10 flex px-2 lg:px-0">
				<div class="flex flex-shrink-0 items-center">
					<img src="{base}/logo.png" alt="Carbonatik" class="navbar-logo" />
				</div>
			</div>
			<div class="relative z-0 flex flex-1 items-center justify-center px-2 sm:absolute sm:inset-0">
				<div class="w-full sm:max-w-xs">
					<label for="search" class="sr-only">Search</label>
					<div class="relative">
						<div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
							<!-- Search icon SVG -->
						</div>
						<input
							id="search"
							name="search"
							class="navbar-search-input"
							placeholder="Search"
							type="search"
						/>
					</div>
				</div>
			</div>
			<div class="relative z-10 flex items-center lg:hidden">
				<button
					on:click={toggleMenu}
					type="button"
					class="navbar-menu-button"
					aria-controls="mobile-menu"
					aria-expanded={isMenuOpen}
				>
					<span class="absolute -inset-0.5"></span>
					<span class="sr-only">Open menu</span>
					<svg
						class={`h-6 w-6 ${isMenuOpen ? 'hidden' : 'block'}`}
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						aria-hidden="true"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
						/>
					</svg>
					<svg
						class={`h-6 w-6 ${isMenuOpen ? 'block' : 'hidden'}`}
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						aria-hidden="true"
					>
						<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
					</svg>
				</button>
			</div>
			<div class="hidden lg:relative lg:z-10 lg:ml-4 lg:flex lg:items-center">
				<button
					type="button"
					class="relative flex-shrink-0 rounded-full bg-neutral-800 p-1 text-neutral-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-neutral-800"
				>
					<span class="absolute -inset-1.5"></span>
					<span class="sr-only">View notifications</span>
					<!-- Notification icon SVG -->
				</button>

				<!-- Profile dropdown -->
				<div class="relative ml-4 flex-shrink-0">
					<div>
						<button
							on:click={toggleProfileMenu}
							type="button"
							class="navbar-profile-button"
							id="user-menu-button"
							aria-expanded={isProfileMenuOpen}
							aria-haspopup="true"
						>
							<span class="absolute -inset-1.5"></span>
							<span class="sr-only">Open user menu</span>
							<img class="h-8 w-8 rounded-full" src="{base}/joseph.png" alt="Joseph's profile" />
						</button>
					</div>

					{#if isProfileMenuOpen}
						<div
							class="navbar-profile-menu"
							role="menu"
							aria-orientation="vertical"
							aria-labelledby="user-menu-button"
							tabindex="-1"
						>
							{#each profileMenuItems as item, index}
								<a
									href={item.href}
									class="block px-4 py-2 text-sm text-neutral-700"
									role="menuitem"
									tabindex="-1"
									id="user-menu-item-{index}">{item.text}</a
								>
							{/each}
						</div>
					{/if}
				</div>
			</div>
		</div>
		<nav class="hidden lg:flex lg:space-x-8 lg:py-2" aria-label="Global">
			{#each navItems as item}
				<a
					href={item.href}
					class={`navbar-desktop-link ${
						item.current ? 'navbar-desktop-link-active' : 'navbar-desktop-link-inactive'
					}`}
					aria-current={item.current ? 'page' : undefined}
				>
					{item.text}
				</a>
			{/each}
		</nav>
	</div>

	<!-- Mobile menu, show/hide based on menu state. -->
	<nav class={`lg:hidden ${navClass}`} aria-label="Global" id="mobile-menu">
		<div class="space-y-1 px-2 pb-3 pt-2">
			{#each navItems as item}
				<a
					href={item.href}
					class={`navbar-mobile-link ${
						item.current ? 'navbar-desktop-link-active' : 'navbar-desktop-link-inactive'
					}`}
					aria-current={item.current ? 'page' : undefined}
				>
					{item.text}
				</a>
			{/each}
		</div>
		<div class="navbar-mobile-profile">
			<div class="flex items-center px-4">
				<div class="flex-shrink-0">
					<img class="h-10 w-10 rounded-full" src="{base}/joseph.png" alt="Joseph's profile" />
				</div>
				<div class="ml-3">
					<div class="navbar-mobile-profile-name">Joseph Kamalesh</div>
					<div class="navbar-mobile-profile-email">joseph@carbonatik.com</div>
				</div>
				<button
					type="button"
					class="relative ml-auto flex-shrink-0 rounded-full bg-neutral-800 p-1 text-neutral-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-neutral-800"
				>
					<span class="absolute -inset-1.5"></span>
					<span class="sr-only">View notifications</span>
					<!-- Notification icon SVG -->
				</button>
			</div>
			<div class="mt-3 space-y-1 px-2">
				{#each profileMenuItems as item}
					<a
						href={item.href}
						class="block rounded-md px-3 py-2 text-base font-medium text-neutral-400 hover:bg-neutral-700 hover:text-white"
						>{item.text}</a
					>
				{/each}
			</div>
		</div>
	</nav>
</header>
