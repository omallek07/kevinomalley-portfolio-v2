<script lang="ts">
	import type { Snippet } from 'svelte';
	import IntersectionObserver from 'svelte-intersection-observer';

	interface Props {
		children: Snippet;
		sectionName: string;
	}

	let { children, sectionName }: Props = $props();

	let element: HTMLDivElement | undefined = $state();
	let intersecting: boolean = $state(false);
	$inspect(intersecting);
</script>

<IntersectionObserver {element} bind:intersecting>
	<div class="default-margin" id={sectionName}>
		<h2 class="headline" bind:this={element} class:focus={intersecting}>{@render children()}</h2>
		<div class="underscore" class:focus={intersecting}></div>
	</div>
</IntersectionObserver>

<style>
	.underscore,
	.headline {
		transition: all 400ms ease-in;
	}
	.focus {
		color: var(--red);
	}
	.underscore.focus {
		background-color: var(--red);
		width: 100%;
	}
</style>
