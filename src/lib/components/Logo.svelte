<script lang="ts">
	interface Props {
		onclick: () => void;
	}
	const { onclick }: Props = $props();
</script>

<div class="logo-container">
	<a {onclick} href="/">
		<div class="center">
			<div class="text">KO</div>
		</div>
	</a>
</div>

<style>
	.logo-container {
		position: relative;
		z-index: 20;
	}
	.text {
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 2;
	}

	.center {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 5rem;
		height: 5rem;
		color: var(--dark-bg);
		font-size: 2.5rem;
		font-weight: bold;

		&::before {
			position: absolute;
			top: 0;
			right: 0;
			bottom: 0;
			left: 0;
			content: '';
			border-radius: calc(2rem * 0.3);
			background-color: var(--dark-text-primary);
		}

		&::after {
			position: absolute;
			top: 0;
			right: 0;
			bottom: 0;
			left: 0;
			content: '';
			border-radius: calc(2rem * 0.3);
		}
	}

	.center:hover {
		color: var(--dark-text-primary);
		&::before {
			mix-blend-mode: screen;
			animation: fast 13s linear infinite;
			background: linear-gradient(315deg, var(--green) 3%, var(--red) 38%, var(--dark-grey) 68%);
		}
		&::after {
			mix-blend-mode: screen;
			animation: slow 33s linear infinite;
			background: linear-gradient(315deg, var(--green) 3%, var(--red) 38%, var(--dark-grey) 68%);
		}
	}

	@keyframes fast {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(360deg);
		}
	}

	@keyframes slow {
		from {
			transform: rotate(360deg);
		}
		to {
			transform: rotate(0deg);
		}
	}
</style>
