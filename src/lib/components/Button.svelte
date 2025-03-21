<script lang="ts">
	import type { Snippet } from 'svelte';
	interface ButtonProps {
		children: Snippet;
		onclick: ((e: MouseEvent) => void) | (() => void);
		className?: string;
	}

	let { children, className = '', ...props }: ButtonProps = $props();
</script>

<button class={`btn ${className}`} {...props}>
	<span class="btn-bar"></span>
	<span class="btn-label">
		{@render children()}
	</span>
</button>

<style>
	.btn {
		font-family: 'Inter Tight', sans-serif;
		font-weight: 500;
		color: black;
		background-color: white;
		font-size: clamp(1.5rem, 3vw, 2.2rem);
		padding: 1rem 2rem;
		border-radius: 6px;
		overflow: hidden;
		position: relative;
		border: 1px solid rgba(0, 0, 0, 0.4);
	}

	.btn:focus-visible {
		outline: 2px solid var(--red);
	}

	.small-btn {
		padding: 0.75rem 2rem;
	}

	@media (min-width: 1024px) {
		.btn {
			padding: 1.5rem 4rem;
			border-radius: 6px;
		}

		.btn:hover .btn-label {
			color: white;
			position: relative;
		}

		.btn:hover .btn-bar {
			transform: translateY(0px);
		}

		.btn-bar {
			background-color: var(--green);
			transform: translateY(52px);
			position: absolute;
			top: 0;
			left: 0;
			bottom: 0;
			right: 0;
			transition: transform 300ms cubic-bezier(0.4, 0, 0.2, 1);
			border: 2px solid var(--green);
			box-shadow: 0px 1px 0px 1px var(--green);
		}

		.btn-label {
			transition: color 300ms cubic-bezier(0.4, 0, 0.2, 1);
			color: black;
		}

		.small-btn {
			padding: 1rem 2.5rem;
			font-size: 2rem;
		}

		.small-btn .btn-bar {
			transform: translateY(40px);
		}

		.go-back .btn-bar {
			transform: translateY(0px) translateX(100%);
			box-shadow: none;
		}
		.go-back:hover .btn-bar {
			transform: translateX(0px);
		}
	}
</style>
