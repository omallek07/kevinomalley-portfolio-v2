<div class="load-splash">
	<div class="logo-container">
		<div class="center">
			<div class="text">KO</div>
		</div>
	</div>
</div>

<style>
	.load-splash {
		position: fixed;
		top: 0;
		right: 0;
		z-index: 20;
		min-width: 100vw;
		min-height: 100vh;
		background: #f7f7f7;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.logo-container {
		position: relative;
		z-index: 20;
	}

	.center {
		opacity: 0.8;
		display: flex;
		align-items: center;
		justify-content: center;
		width: 13rem;
		height: 13rem;
		color: white;
		font-size: clamp(5.5rem, 3vw, 6.5rem);
		font-weight: bold;

		&::before {
			position: absolute;
			top: 0;
			right: 0;
			bottom: 0;
			left: 0;
			content: '';
			border-radius: 3rem;
			mix-blend-mode: screen;
			animation: fast 10s linear infinite;
			background: linear-gradient(315deg, var(--green) 3%, var(--red) 38%, var(--dark-grey) 68%);
		}

		&::after {
			position: absolute;
			top: 0;
			right: 0;
			bottom: 0;
			left: 0;
			content: '';
			border-radius: 3rem;
			mix-blend-mode: screen;
			animation: slow 20s linear infinite;
			background: linear-gradient(315deg, var(--green) 3%, var(--red) 38%, var(--dark-grey) 68%);
		}
	}

	.text {
		z-index: 21;
	}

	@media (min-width: 1024px) {
		.center {
			height: 14rem;
			width: 14rem;
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
