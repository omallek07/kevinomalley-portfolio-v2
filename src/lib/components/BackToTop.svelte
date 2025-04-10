<script lang="ts">
	const showOnPx = 400;
	let showBtn = $state(false);

	function onClick() {
		window.scrollTo({ top: 1, behavior: 'smooth' });
	}

	function scrollContainer() {
		return document.documentElement || document.body;
	}

	function handleOnScroll() {
		if (!scrollContainer()) {
			return;
		}

		if (scrollContainer().scrollTop > showOnPx) {
			showBtn = true;
		} else {
			showBtn = false;
		}
	}
</script>

<svelte:window on:scroll={handleOnScroll} />

{#if showBtn}
	<button onclick={onClick} class="backToTop"> &#8679; </button>
{/if}

<style>
	.backToTop {
		display: none;
	}
	@media screen and (min-width: 1024px) {
		.backToTop {
			display: block;
			position: fixed;
			bottom: 2rem;
			right: 2rem;
			font-size: 5rem;
			z-index: 10;
			background: var(--green);
			opacity: 0.4;
			color: white;
			cursor: pointer;
			background: none;
			border: none;
			transition: all 500ms ease;
		}

		.backToTop:hover {
			opacity: 1;
			color: var(--green);
		}
	}
</style>
