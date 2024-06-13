<script>
	import '../app.css';
	import './styles.css';
	import { SvelteToast } from '@zerodevx/svelte-toast';
</script>

<div class="app">
	<main>
		<slot></slot>
	</main>

	<footer>
		<p>visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to learn SvelteKit</p>
	</footer>
</div>

<slot></slot>

<SvelteToast />
