<script lang="ts">
	import IntersectionObserver from 'svelte-intersection-observer';
	const stringLength = 17;

	const heroLabels: Record<string, string>[] = [
		{
			label: "Kevin O'Malley",
			color: 'red'
		},
		{
			label: 'Software Engineer',
			color: 'light-grey'
		}
	];

	let element: HTMLDivElement | undefined = $state();
	let intersecting: boolean = $state(false);
</script>

<IntersectionObserver once {element} bind:intersecting>
	<section class="hero">
		<div bind:this={element} class="default-margin pt-s pb-s" class:fade-in={intersecting}>
			{#each heroLabels as { label, color }}
				<div class="hero-item" aria-label={label}>
					{#each Array(stringLength).fill(null) as _, index}
						<span class="hero-label" style={`color: var(--${color}`}>
							{label[index] ?? ' '}
						</span>
					{/each}
				</div>
			{/each}
		</div>
	</section>
</IntersectionObserver>

<style>
	.fade-in {
		animation: fadeIn 1.5s 1 ease;
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
		transition: color 0.5s ease-in-out;
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
		padding: 1.5rem 0;
	}

	/* Larger screens */
	@media (min-width: 768px) {
		.hero {
			animation: gradient 15s ease infinite;
			padding: 1rem 0;
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

		.hero-item:first-of-type {
			margin-bottom: -0.5rem;
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

	@keyframes fadeIn {
		0% {
			opacity: 0;
			transform: translateX(-30%);
		}

		100% {
			opacity: 100%;
			transform: translateX(0);
		}
	}
</style>
