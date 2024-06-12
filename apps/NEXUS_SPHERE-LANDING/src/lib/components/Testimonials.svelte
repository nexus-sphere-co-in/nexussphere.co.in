<script lang="ts">
	const testimonials = [
		{
			user: 'Karan Palan',
			company: 'CTO and co-founder',
			image:
				'https://media.licdn.com/dms/image/D5603AQH1ct3NgdBq1A/profile-displayphoto-shrink_200_200/0/1712770824512?e=1718236800&v=beta&t=R15Ww1sTCQLORPICjbxr_qKtUX6Md_uJEGcU42iJ3tQ', // Use a placeholder image URL
			linkedin: 'https://www.linkedin.com/in/karan-palan-476472289/',
			text: "Architecting tomorrow's technology, today."
		},
		{
			user: 'Krish Gupta',
			company: 'CEO and co-founder',
			image:
				'https://media.licdn.com/dms/image/D5603AQG9vT7EMYm2wg/profile-displayphoto-shrink_200_200/0/1706681242772?e=1720051200&v=beta&t=SM8_uTLlC7ma6F5xAT5vN2kfIhl-spUMmbwSqJnb6Kk',
			linkedin: 'https://www.linkedin.com/in/krish-gupta-51637b1b8/',
			text: 'Driving vision into reality, one strategy at a time.'
		},
		{
			user: 'Shravani Wagh',
			company: 'COO and co-founder',
			image:
				'https://media.licdn.com/dms/image/D5603AQGRGEUKTCB1hg/profile-displayphoto-shrink_200_200/0/1713203509651?e=1718841600&v=beta&t=EMtgpkJtMGNnjuJX-077uH_KdERF66pPjr4fsj9L0Gw',
			linkedin: 'https://www.linkedin.com/in/shravani-wagh-20a69728a/',
			text: 'Turning chaos into order, with uncompromising precision.'
		}
	];
</script>

<div class="mt-20 tracking-wide">
	<h2 class="text-3xl sm:text-5xl lg:text-6xl text-center my-10 lg:my-20">About our Team</h2>
	<div class="flex flex-wrap justify-center">
		{#each testimonials as testimonial, index (index)}
			<div class="w-full sm:w-1/2 lg:w-1/3 px-4 py-2">
				<div
					class="bg-neutral-900 rounded-md p-6 text-md border border-neutral-800 font-thin flex items-center"
				>
					<img
						class="w-24 h-24 rounded-full border border-neutral-300 mr-6"
						src={testimonial.image}
						alt={testimonial.user}
					/>
					<div>
						<h6>{testimonial.user}</h6>
						<span class="text-sm font-normal italic text-neutral-600">
							{testimonial.company}
						</span>
						<div class="mt-2">
							<p>{testimonial.text}</p>
							<a href={testimonial.linkedin} target="_blank" rel="noopener noreferrer">
								<img
									src="https://simpleicons.org/icons/linkedin.svg"
									alt="LinkedIn"
									class="w-6 h-6 mr-2"
									style="filter: invert(100%);"
								/>
							</a>
						</div>
					</div>
				</div>
			</div>
		{/each}
	</div>
</div>
