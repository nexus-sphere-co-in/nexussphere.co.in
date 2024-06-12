<script>
	import NexusSphereLogo from './NexusSphereLogo.svelte';
	import pdfFile from '$lib/assets/user_agreement.pdf';
</script>

<div class="flex flex-col items-center mt-15 lg:mt-3">
	<NexusSphereLogo />
	<h1 class="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide mt-14">
		DAO empowering{' '}
		<span class="bg-gradient-to-r from-violet-400 to-violet-800 text-transparent bg-clip-text">
			Ethereum community with transparent decision-making
		</span>
	</h1>
	<p class="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
		Stake, rank, and decide proposals with our intuitive UI.
	</p>
	<div class="flex justify-center my-10">
		<a
			href={pdfFile}
			target="_blank"
			rel="noopener noreferrer"
			class="bg-gradient-to-r from-violet-400 to-violet-800 py-3 px-4 mx-3 rounded-md"
		>
			User Agreement
		</a>
	</div>
</div>
