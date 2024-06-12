<script lang="ts">
	const resourcesLinks = [
		{ href: 'https://nexusspheredao.netlify.app/', text: 'Getting Started' },
		{
			href: 'https://drive.google.com/drive/folders/1z0tpV9ViCcQ9yZr8PMF8JDI6Ep30fKfU?usp=sharing',
			text: 'Documentation'
		},
		{ href: 'https://www.youtube.com/@NEXUS_SPHERE_', text: 'Tutorials' },
		{ href: '#', text: 'API Reference' },
		{ href: 'https://discord.gg/8EpV46Hd', text: 'Community Forums' }
	];

	const platformLinks = [
		{ href: '#', text: 'Features' },
		{ href: '#', text: 'Supported Devices' },
		{ href: '#', text: 'System Requirements' },
		{ href: '#', text: 'Downloads' },
		{ href: '#', text: 'Release Notes' }
	];

	const communityLinks = [
		{ href: '#', text: 'Events' },
		{ href: '#', text: 'Meetups' },
		{ href: '#', text: 'Conferences' },
		{ href: '#', text: 'Hackathons' },
		{ href: '#', text: 'Jobs' }
	];
</script>

<footer class="mt-20 border-t py-10 border-neutral-700">
	<div class="grid grid-cols-2 lg:grid-cols-3 gap-4">
		<div>
			<h3 class="text-md font-semibold mb-4">Resources</h3>
			<ul class="space-y-2">
				{#each resourcesLinks as link, index (index)}
					<li>
						<a href={link.href} class="text-neutral-300 hover:text-white">
							{link.text}
						</a>
					</li>
				{/each}
			</ul>
		</div>
		<div>
			<h3 class="text-md font-semibold mb-4">Platform</h3>
			<ul class="space-y-2">
				{#each platformLinks as link, index (index)}
					<li>
						<a href={link.href} class="text-neutral-300 hover:text-white">
							{link.text}
						</a>
					</li>
				{/each}
			</ul>
		</div>
		<div>
			<h3 class="text-md font-semibold mb-4">Community</h3>
			<ul class="space-y-2">
				{#each communityLinks as link, index (index)}
					<li>
						<a href={link.href} class="text-neutral-300 hover:text-white">
							{link.text}
						</a>
					</li>
				{/each}
			</ul>
		</div>
	</div>
</footer>
