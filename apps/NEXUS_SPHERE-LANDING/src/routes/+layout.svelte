<script>
	import FeatureSection from '$lib/components/FeatureSection.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import HeroSection from '$lib/components/HeroSection.svelte';
	import NavBar from '$lib/components/NavBar.svelte';
	import Pricing from '$lib/components/Pricing.svelte';
	import Testimonials from '$lib/components/Testimonials.svelte';
	import Workflow from '$lib/components/Workflow.svelte';
	import './styles.css';
</script>

<div class="app">
	<NavBar />
	<div class="max-w-7xl mx-auto pt-20 px-6">
		<HeroSection />
		<Pricing />
		<FeatureSection />
		<Workflow />

		<Testimonials />
		<Footer />
	</div>
</div>
