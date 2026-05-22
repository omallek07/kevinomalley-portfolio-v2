<script lang="ts">
	import IntersectionObserver from 'svelte-intersection-observer';

	import { Icons } from '$lib';
	let element: HTMLDivElement | undefined = $state();
	let intersecting: boolean = $state(false);
</script>

{#snippet mobileLayout()}
	<h1 class="mobile hero-label gradient-color">Kevin O'Malley</h1>
{/snippet}

{#snippet laptopLayout()}
	<div class="laptop hero-container">
		<h1 class="hero-label gradient-color">Kevin O'Malley</h1>
		<Icons />
	</div>
{/snippet}

<IntersectionObserver once {element} bind:intersecting>
	<section class="hero">
		<div bind:this={element} class="default-margin pt-m pb-m" class:fade-in={intersecting}>
			{@render mobileLayout()}
			{@render laptopLayout()}
		</div>
	</section>
</IntersectionObserver>

<style>
	.fade-in {
		animation: fadeIn 1.5s 1 ease;
	}

	.hero {
		background-color: var(--dark-surface);
		padding: 4rem 0 1rem 0;
		text-align: center;
	}
	.hero-label {
		font-size: 3.25rem;
		font-weight: semi-bold;
		color: var(--dark-text-primary);
		text-transform: uppercase;
		letter-spacing: 4px;
	}

	/* Larger screens */
	@media (min-width: 768px) {
		.hero {
			padding: 2rem 0;
		}
		.hero-label {
			font-size: 5rem;
		}
	}

	@media (min-width: 1024px) {
		.hero-container {
			display: flex;
			justify-content: space-between;
			align-items: center;
		}

		.hero {
			padding: 0;
		}
		.hero-label {
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
