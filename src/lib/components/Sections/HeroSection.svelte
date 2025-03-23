<script lang="ts">
	const stringLength = 17;

	const heroLabels: Record<string, string>[] = [
		{
			label: "Kevin O'Malley",
			color: 'red'
		},
		{
			label: 'Software Engineer',
			color: 'dark-grey'
		}
	];

	let highlightedIndex: number = $state(stringLength);

	$effect(() => {
		setInterval(
			() => (highlightedIndex = highlightedIndex === stringLength ? 0 : highlightedIndex + 1),
			500
		);
	});
</script>

<section class="hero">
	<div class="default-margin pt-s pb-s">
		{#each heroLabels as { label, color }, labelIndex}
			<div class="hero-item" aria-label={label}>
				{#each Array(stringLength).fill(null) as _, index}
					<span
						class="hero-label"
						style="color: {index <= highlightedIndex ? `var(--${color}` : 'inherit'}"
					>
						{label[index] ?? ' '}
					</span>
				{/each}
			</div>
		{/each}
	</div>
</section>

<style>
	.hero {
		border-top: 1px solid rgba(0, 0, 0, 0.5);
		border-bottom: 1px solid rgba(0, 0, 0, 0.5);
	}
	.hero-item {
		display: flex;
		flex-wrap: nowrap;
		color: hsla(0, 0%, 90%, 0);
		filter: drop-shadow(0 0 0.1rem black);
	}
	.hero-item:first-of-type {
		margin-bottom: 0.5rem;
	}
	.hero-label {
		font-size: 3rem;
		font-weight: bold;
		white-space: nowrap;
		margin-right: 0.5rem;
		transition: color 600ms ease-in-out;
	}
	.hero {
		overflow: auto;
		background: linear-gradient(
			315deg,
			rgb(246, 206, 7) 3%,
			rgba(60, 132, 206, 1) 38%,
			rgba(48, 238, 226, 1) 68%,
			rgb(255, 153, 89) 98%
		);
		animation: gradient 25s ease infinite;
		background-size: 400% 400%;
		background-attachment: fixed;
	}

	/* Larger screens */
	@media (min-width: 768px) {
		.hero {
			animation: gradient 15s ease infinite;
		}

		.hero-item {
			color: hsla(0, 0%, 93%, 0);
			filter: drop-shadow(0 0 0.2rem black);
			margin-bottom: 0;
		}
		.hero-label {
			min-width: 1rem;
			font-size: 5rem;
		}
	}

	@media (min-width: 1024px) {
		.hero-label {
			min-width: 2rem;
			font-size: 8rem;
		}
	}

	@keyframes gradient {
		0% {
			background-position: 0% 0%;
		}
		50% {
			background-position: 100% 100%;
		}
		100% {
			background-position: 0% 0%;
		}
	}
</style>
