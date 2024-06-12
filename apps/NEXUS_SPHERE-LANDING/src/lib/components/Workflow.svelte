<script lang="ts">
	import { CheckCircle2 } from 'lucide-svelte';
	import codeImg from '$lib/assets/mission.jpg';

	const checklistItems = [
		{
			title: 'Trusted Platform',
			description:
				'To build a DAO platform that leverages blockchain technology to address trust and security issues.'
		},
		{
			title: 'Transparent Governance',
			description:
				'To provide transparent governance through immutable records on the blockchain, allowing stakeholders to verify actions and decisions.'
		},
		{
			title: 'Secure Processes',
			description:
				'To minimize the risk of frauds and maintain the integrity of governance processes by encoding rules and protocols into smart contracts.'
		},
		{
			title: 'Inclusive Participation:',
			description:
				'To enable inclusive participation by allowing a diverse community of stakeholders to contribute to governance decisions.'
		}
	];
</script>

<div class="mt-20">
	<h2 class="text-3xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide mb-20">
		Our{' '}
		<span class="bg-gradient-to-r from-violet-400 to-violet-800 text-transparent bg-clip-text">
			Mission
		</span>
	</h2>
	<div class="flex flex-wrap justify-center">
		<div class="p-2 w-60 lg:w-1/2">
			<img src={codeImg} alt="Coding" />
		</div>
		<div class="pt-12 w-full lg:w-1/2">
			{#each checklistItems as item, index (index)}
				<div class="flex mb-12">
					<div
						class="text-green-400 mx-6 bg-neutral-900 h-10 w-10 p-2 justify-center items-center rounded-full"
					>
						<CheckCircle2 />
					</div>
					<div>
						<h5 class="mt-1 mb-2 text-xl">{item.title}</h5>
						<p class="text-md text-neutral-500">{item.description}</p>
					</div>
				</div>
			{/each}
		</div>
	</div>
</div>
