<script lang="ts">
	import {
		PlugZap,
		Fingerprint,
		ShieldHalf,
		BatteryCharging,
		BotMessageSquare,
		GlobeLock
	} from 'lucide-svelte';

	export const features = [
		{
			icon: PlugZap,
			text: 'In-House Discussion Forum',
			description:
				"The discussion forum enables DAO members to engage in open, transparent discussions about proposals, ideas, and issues. It integrates with the platform's voting system, allowing members to seamlessly transition from discussion to formal proposal submissions."
		},
		{
			icon: Fingerprint,
			text: 'Informed Decision-Making',
			description:
				'DAO members who have contributed to the pool can propose investments, providing details such as description, amount (within pool limits), and recipient. Every member has the authority to approve or reject proposals, with each member having a single vote.'
		},
		{
			icon: ShieldHalf,
			text: 'Transparent Operations',
			description:
				'Proposal owners, having secured approval surpassing rejection, can execute the proposal. This leads to the transfer of the designated amount to the specified recipient. Owners also retain the option to close proposals, whether due to cancellation, publication errors, or to prevent fund disbursement.'
		},
		{
			icon: BatteryCharging,
			text: 'User agreement for deposit/progress tracking.',
			description:
				'Users agree to terms of service and can deposit collateral, with balances tracked'
		},
		{
			icon: BotMessageSquare,
			text: 'Collaborative Funding',
			description:
				'Members of a club can contribute to a common fund (pool) by depositing Ethereum, fostering a shared financial resource for investment proposals.'
		},
		{
			icon: GlobeLock,
			text: 'AI predictive analysis.',
			description:
				'Advanced AI-powered predictive analysis forecasts proposal outcomes based on historical data, community sentiment, and other factors. Predictive insights inform more strategic, data-driven governance decisions.'
		}
	];
</script>

<div class="relative mt-20 border-b border-neutral-800 min-h-[800px]">
	<div class="text-center">
		<!-- <span class="bg-neutral-900 text-violet-400 rounded-full h-6 text-sm font-medium px-2 py-1 uppercase">
        Feature
      </span> -->
		<h2 class="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide">
			Our{' '}
			<span class="bg-gradient-to-r from-violet-400 to-violet-800 text-transparent bg-clip-text">
				Features
			</span>
		</h2>
	</div>
	<div class="flex flex-wrap mt-10 lg:mt-20">
		{#each features as feature, index (index)}
			<div class="w-full sm:w-1/2 lg:w-1/3">
				<div class="flex">
					<div
						class="flex mx-6 h-10 w-10 p-2 bg-neutral-900 text-violet-700 justify-center items-center rounded-full"
					>
						<svelte:component this={feature.icon} />
					</div>
					<div>
						<h5 class="mt-1 mb-6 text-xl">{feature.text}</h5>
						<p class="text-md p-2 mb-20 text-neutral-500">
							{feature.description}
						</p>
					</div>
				</div>
			</div>
		{/each}
	</div>
</div>
