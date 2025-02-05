<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>

<div class="layout">
	{@render children()}
</div>

<style>
	.layout {
		width: 100%;
		height: 100%;
	}
</style>
