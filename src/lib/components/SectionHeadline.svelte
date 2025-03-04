<script lang="ts">
	import IntersectionObserver from 'svelte-intersection-observer';

	interface Props {
		headline: string;
		id: string;
	}

	let { headline, id }: Props = $props();

	let element: HTMLDivElement | undefined = $state();
	let intersecting: boolean = $state(false);
</script>

<IntersectionObserver {element} bind:intersecting>
	<div class="default-margin pt-m pb-m" {id}>
		<h2 class="headline" bind:this={element} class:focus={intersecting}>
			{headline}
		</h2>
		<div class="underscore" class:focus={intersecting}></div>
	</div>
</IntersectionObserver>

<style>
	.underscore,
	.headline {
		transition: all 400ms ease-in;
	}
	.underscore.focus {
		background-color: var(--red);
		width: 100%;
	}
</style>
