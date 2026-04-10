<script lang="ts">
	import IntersectionObserver from 'svelte-intersection-observer';

	let element: HTMLDivElement | undefined = $state();
	let intersecting: boolean = $state(false);
</script>

<IntersectionObserver once {element} bind:intersecting>
	<section class="hero">
		<div bind:this={element} class="default-margin pt-m pb-m" class:fade-in={intersecting}>
			<h1 class="hero-label">Kevin O'Malley</h1>
		</div>
	</section>
</IntersectionObserver>

<style>
	.fade-in {
		animation: fadeIn 1.5s 1 ease;
	}

	.hero {
		background-color: var(--dark-surface);
		padding: 3rem 0;
	}
	.hero-label {
		font-size: 3.25rem;
		font-weight: semi-bold;
		color: var(--dark-text-primary);
		text-transform: uppercase;
		letter-spacing: 4px;
		background: linear-gradient(to right, #4acfee, #53f8c9, #6070fd, #5bbdff, #4acfee);
		background-size: 200%;
		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		animation: animate-gradient 4s linear infinite;
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

	@keyframes animate-gradient {
		to {
			background-position: 200%;
		}
	}
</style>
