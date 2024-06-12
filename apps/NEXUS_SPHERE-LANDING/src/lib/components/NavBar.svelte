<script>
	import logo from '$lib/assets/logo.png';

	let mobileDrawerOpen = false;
	const navItems = [
		{ label: 'FEATURES', href: '#' },
		{ label: 'PROJECT', href: '#' },
		{ label: 'RESOURCES', href: '#' },
		{ label: 'ABOUT', href: '#' }
	];

	const toggleNavbar = () => (mobileDrawerOpen = !mobileDrawerOpen);
</script>

<nav class="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
	<div class="container px-4 mx-auto relative lg:text-sm">
		<div class="flex justify-between items-center">
			<div class="flex items-center flex-shrink-0">
				<img class="h-20 w-30 mr-2" src={logo} alt="Logo" />
				<span
					class="text-5xl tracking-tight bg-gradient-to-r from-violet-400 to-violet-800 text-transparent bg-clip-text"
					>NEXUS SPHERE</span
				>
			</div>
			<ul class="hidden lg:flex ml-14 space-x-12">
				{#each navItems as item (item.label)}
					<li>
						<a href="#top">{item.label}</a>
					</li>
				{/each}
			</ul>
			<div class="hidden lg:flex justify-center space-x-12 items-center">
				<a
					href="https://forms.gle/8ZU7acbdsidMKcvr9"
					class="bg-gradient-to-r from-violet-400 to-violet-800 py-2 px-3 rounded-md"
				>
					Join our Waitlist
				</a>
			</div>
			<div class="lg:hidden md:flex flex-col justify-end">
				<button on:click={toggleNavbar}>
					{mobileDrawerOpen ? 'Close' : 'Menu'}
				</button>
			</div>
		</div>
		{#if mobileDrawerOpen}
			<div
				class="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden"
			>
				<ul>
					{#each navItems as item (item.label)}
						<li class="text-3xl py-4">
							<a href="#top">{item.label}</a>
						</li>
					{/each}
				</ul>
			</div>
		{/if}
	</div>
</nav>

<style lang="postcss">
	nav {
		background-color: #333; /* #333 */
		color: #fff;
		padding: 1rem;
	}

	ul {
		list-style: none;
		display: flex;
		gap: 1rem;
	}

	a {
		color: #fff;
		text-decoration: none;
	}

	a:hover {
		text-decoration: underline;
	}
</style>
