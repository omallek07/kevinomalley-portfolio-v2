<script lang="ts">
	import IntersectionObserver from 'svelte-intersection-observer';
	const stringLength = 17;

	const heroLabels: Record<string, string>[] = [
		{
			label: "Kevin O'Malley",
			color: 'light-grey'
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
	}
	.hero {
		overflow: auto;
		background-size: 100% 100%;
		background-position:
			0px 0px,
			0px 0px,
			0px 0px,
			0px 0px,
			0px 0px;
		background-image: repeating-linear-gradient(315deg, #00ffff2e 92%, #073aff00 100%),
			repeating-radial-gradient(75% 75% at 238% 218%, #00ffff12 30%, #073aff14 39%),
			radial-gradient(99% 99% at 109% 2%, #6e8f89 0%, #073aff00 100%),
			radial-gradient(99% 99% at 21% 78%, #6e8f89 0%, #073aff00 100%),
			radial-gradient(160% 154% at 711px -303px, #3c415b 0%, #3c415b 100%);
		padding: 1.5rem 0;
	}

	/* Larger screens */
	@media (min-width: 768px) {
		.hero {
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
