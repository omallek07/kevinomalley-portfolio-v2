<script lang="ts">
	type Props = {
		children?: import('svelte').Snippet;
	};

	let { children }: Props = $props();
</script>

<li>{@render children?.()}</li>

<style>
	li {
		list-style: circle;
		margin: 1rem 1rem 1rem 2rem;
	}
</style>
