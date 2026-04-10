<script lang="ts">
	import { goto } from '$app/navigation';
	import { Button, CirclesBg } from '$lib';
	import image from '$assets/KevinOMalleyResumeNoContacts2026.jpg';

	function handleGoBack() {
		goto('/');
	}
</script>

<main class="portfolio-page">
	<div class="portfolio-container stack default-margin">
		<div class="top-container mb-s">
			<h3>Portfolio</h3>
			<Button className="small-btn go-back" onclick={handleGoBack}>Go Back</Button>
		</div>
		<div class="image-container">
			<img src={image} alt="Portfolio" class="image" />
		</div>
	</div>
	<CirclesBg />
</main>

<style>
	.portfolio-page {
		background:
			radial-gradient(farthest-side at top left, var(--dark-surface), transparent),
			radial-gradient(farthest-side at bottom left, var(--dark-elevated), transparent),
			radial-gradient(farthest-corner at bottom right, var(--dark-surface), transparent)
				var(--dark-bg);
		background-attachment: fixed;
		background-size: 100vw 100vh;
		overflow: hidden;
		position: relative;
		display: flex;
		justify-content: center;
		margin-bottom: 1rem;
	}

	.portfolio-container {
		width: 100%;
		display: flex;
		flex-direction: column;
		z-index: 2;
	}

	.top-container {
		margin: 2rem 0;
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 4rem;
	}

	h3 {
		color: var(--dark-text-primary);
		-webkit-filter: drop-shadow(0 0 0.05rem white);
		filter: drop-shadow(0 0 0.05rem white);
	}

	.image-container {
		width: 100%;
		height: 100%;
		border-radius: 0.25rem;
		padding: 1rem;
	}

	.image {
		height: 100%;
		width: 100%;
		object-fit: cover;
		border-radius: 0.25rem;
		-webkit-filter: drop-shadow(0 0 0.15rem white);
		filter: drop-shadow(0 0 0.15rem white, 0.3);
	}

	@media (min-width: 1024px) {
		.top-container {
			padding: 0 1rem;
		}
		.portfolio-container {
			width: 70%;
			margin: 0 auto;
		}

		.image-container {
			margin-bottom: 3rem;
		}
	}
</style>
