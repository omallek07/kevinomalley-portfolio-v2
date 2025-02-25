<script lang="ts">
	import { PUBLIC_CONTACT_ME_LINK } from '$env/static/public';
	import { goto } from '$app/navigation';
	import { fade } from 'svelte/transition';
	import { Button } from '$lib';

	function onclick() {
		goto(PUBLIC_CONTACT_ME_LINK);
	}

	const heroLabels: Record<string, string>[] = [
		{
			label: "Kevin O'Malley    ",
			color: 'red'
		},
		{
			label: 'Software Engineer',
			color: 'dark-grey'
		}
	];

	let highlightedIndexes = $state([0, 0]);

	$effect(() => {
		const initialInterval = 600;
		setInterval(() => {
			highlightedIndexes.forEach(
				(_, index) =>
					(highlightedIndexes[index] =
						highlightedIndexes[index] === heroLabels[index].label.split('').length
							? 0
							: highlightedIndexes[index] + 1)
			);
		}, initialInterval);
	});
</script>

<section class="pt-l pb-l border-bt-line white-bg">
	<div class="default-margin">
		{#each heroLabels as { label, color }, labelIndex}
			<div class="hero-item" aria-label={label}>
				{#each label.split('') as letter, index}
					<span
						class="hero-label"
						style="color: {index <= highlightedIndexes[labelIndex] ? `var(--${color}` : 'inherit'}"
					>
						{letter}
					</span>
				{/each}
			</div>
		{/each}
	</div>
</section>

<style>
	.hero-item {
		display: flex;
		flex-wrap: nowrap;
		color: hsla(0, 0%, 93%, 0);
		filter: drop-shadow(0 0 0.2rem black);
	}
	.hero-label {
		font-size: 8rem;
		font-weight: bold;
		white-space: nowrap;
		margin-right: 0.5rem;
		transition: color 600ms ease-in-out;
	}
</style>
