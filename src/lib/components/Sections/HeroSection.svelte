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
			label: "Kevin O'Malley",
			color: '#F03819'
		},
		{
			label: 'Software Engineer',
			color: '#FFFFFF'
		}
	];

	let highlightedIndexes = $state([0, 0]);

	$effect(() => {
		const initialInterval = 1000;
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

<section class="hero-section">
	<div class="default-margin">
		{#each heroLabels as { label, color }, labelIndex}
			<div class="hero-item" aria-label={label}>
				{#each label.split('') as letter, index}
					<span
						class="hero-label"
						style="color: {index <= highlightedIndexes[labelIndex] ? color : 'inherit'}"
					>
						{letter}
					</span>
				{/each}
			</div>
		{/each}
	</div>
</section>

<style>
	.hero-section {
		padding-top: 40px;
	}
	.hero-item {
		display: flex;
		flex-wrap: nowrap;
		color: var(--dark-grey);
	}
	.hero-label {
		font-size: 8rem;
		font-weight: bold;
		white-space: nowrap;
		margin-right: 0.5rem;
		transition: color 1s ease-in-out;
	}
</style>
