<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		children: Snippet;
		sectionName: string;
	}

	let { children, sectionName }: Props = $props();
</script>

<div class="default-margin" id={sectionName}>
	<h2>{@render children()}</h2>
	<div class="underscore"></div>
</div>
