<script>
	import FeatureSection from '$lib/components/FeatureSection.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import HeroSection from '$lib/components/HeroSection.svelte';
	import Pricing from '$lib/components/Pricing.svelte';
	import Testimonials from '$lib/components/Testimonials.svelte';
	import { Workflow } from 'lucide-svelte';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>
<div>
	<HeroSection />
	<Pricing />
	<FeatureSection />
	<Workflow />

	<Testimonials />
	<Footer />
</div>
