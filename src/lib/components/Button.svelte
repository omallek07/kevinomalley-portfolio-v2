<script lang="ts">
	import type { Snippet } from 'svelte';
	interface ButtonProps {
		children: Snippet;
		onclick: ((e: MouseEvent) => void) | (() => void);
		className?: string;
	}

	let { children, className, ...props }: ButtonProps = $props();
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
		font-size: 24px;
		padding: 14px 40px;
		border-radius: 6px;
		overflow: hidden;
		position: relative;
		border: 1px solid rgba(0, 0, 0, 0.4);
	}

	.btn-label {
		transition: color 300ms cubic-bezier(0.4, 0, 0.2, 1);
		color: black;
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
	}

	.small-btn {
		padding: 10px 24px;
		font-size: 20px;
	}

	.small-btn .btn-bar {
		transform: translateY(40px);
	}
</style>
