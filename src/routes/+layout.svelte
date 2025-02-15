<script lang="ts">
	import { Header, Footer } from '$lib';
	import '../app.css';
	let { children } = $props();
</script>

<div class="layout background-gradient">
	<Header />
	{@render children()}
	<Footer />
</div>

<style>
	.layout {
		width: 100%;
		height: 100%;
	}
	.background-gradient {
		background: radial-gradient(
			circle at top center,
			hsla(222, 80%, 60%, 0.5) 0%,
			hsla(222, 0%, 0%, 0) 50%,
			hsla(222, 0%, 0%, 0) 100%
		);
	}
</style>
