<script lang="ts">
	function onClick() {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}
</script>

<button onclick={onClick} class="backToTop"> &#8679; </button>

<style>
	.backToTop {
		position: fixed;
		bottom: 22%;
		right: 3%;
		font-size: 50px;
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

	/**
Breakpoints:
------------
sm: min-width: 640px; //small device
md: min-width: 768px; // medium device
lg: min-width: 1024px; // large device
xl: min-width: 1280px; // extra large device
2xl: min-width: 1536px; // 2 x extra large device
**/

	/* @media screen and (min-width: 1280px) {
		.backToTop {
			background: none;
			box-shadow: none;
			bottom: 70px;
			right: 20px;
		}
	} */
</style>
