<script lang="ts">
	import { goto } from '$app/navigation';
	import { Button, CirclesBg } from '$lib';

	function handleGoBack() {
		goto('/');
	}
</script>

<main class="error-page">
	<div class="error-container stack default-margin">
		<h1>Page Not Found!</h1>
		<div class="btn-container">
			<Button onclick={handleGoBack}>Go Back Home</Button>
		</div>
	</div>
	<CirclesBg />
</main>

<style>
	.error-page {
		background:
			radial-gradient(farthest-side at top left, var(--dark-grey), transparent),
			radial-gradient(farthest-side at bottom left, var(--white), transparent),
			radial-gradient(farthest-corner at bottom right, #d6dee4, transparent) #ebf3f9;
		background-attachment: fixed;
		background-size: 100vw 100vh;
		overflow: hidden;
		position: relative;
		display: flex;
		justify-content: center;
		min-height: 100vh;
	}

	h1 {
		font-size: 6rem;
		margin-bottom: 2rem;
		color: #fff;
		-webkit-filter: drop-shadow(0 0 0.1rem black);
		filter: drop-shadow(0 0 0.1rem black);
	}
	.error-container {
		display: flex;
		justify-content: center;
		z-index: 2;
	}
	.stack {
		display: flex;
		flex-direction: column;
	}
	.btn-container {
		display: flex;
		justify-content: center;
		padding-top: 2rem;
	}
</style>
