<script lang="ts">
	import { CheckCircle2 } from 'lucide-svelte';

	const pricingOptions = [
		{
			title: 'FUNDING DAO',
			price:
				'A Funding DAO is a decentralized autonomous organization (DAO) designed to collectively manage and distribute funds in a transparent and democratic manner. Here are the key points:',
			features: [
				'Funding Initiatives',
				'Weighted Voting',
				'Voting History',
				'Community Engagement'
			],
			trialLink: 'https://nexusspherefindao.web.app/',
			trialText: 'DIVERSIFY YOUR PORTFOLIO!'
		},
		{
			title: 'SOCIAL DAO',
			price:
				'Social Decentralized Autonomous Organization is a decentralized collective entity focused on fostering social impact and community-driven initiatives through blockchain technology.',
			features: [
				'Transparent and accountable',
				'Decentralized governance',
				'Automated execution',
				'Globally accessible'
			],
			trialLink: 'https://nexussphere-b00bd.web.app/',
			trialText: 'MAKE YOUR VOICE HEARD!'
		}
	];
</script>

<div class="mt-20">
	<h2 class="text-3xl sm:text-5xl lg:text-6xl text-center my-8 tracking-wide">
		Our <span class="bg-gradient-to-r from-violet-400 to-violet-800 text-transparent bg-clip-text">
			Services
		</span>
	</h2>
	<div class="flex flex-wrap justify-between">
		{#each pricingOptions as option, index (index)}
			<div class="w-full sm:w-1/2 lg:w-1/2 p-4 sm:p-6 lg:p-8">
				<div class="p-10 border border-neutral-700 rounded-xl">
					<p class="text-4xl mb-8">
						{option.title}
						{#if option.title === 'Pro'}
							<span
								class="bg-gradient-to-r from-violet-400 to-red-400 text-transparent bg-clip-text text-xl mb-4 ml-2"
							>
								(Most Popular)
							</span>
						{/if}
					</p>
					<p class="mb-8">
						<span class="text-2xl mt-6 mr-2">{option.price}</span>
					</p>
					<ul>
						{#each option.features as feature, index (index)}
							<li class="mt-8 flex items-center">
								<CheckCircle2
									class="text-green-400 mx-6 bg-neutral-900 h-10 w-10 p-2 justify-center items-center rounded-full"
								/>
								<span class="ml-2">{feature}</span>
							</li>
						{/each}
					</ul>
					<a
						href={option.trialLink}
						class="inline-flex justify-center items-center text-center w-full h-12 p-5 mt-20 tracking-tight text-xl hover:bg-violet-900 border-4 border-violet-900 rounded-lg transition duration-200"
					>
						{option.trialText}
					</a>
				</div>
			</div>
		{/each}
	</div>
</div>
