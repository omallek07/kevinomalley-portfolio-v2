<script lang="ts">
	import { goto } from '$app/navigation';

	import {
		PUBLIC_ABOUT_ME_LINK,
		PUBLIC_MY_PROJECTS_LINK,
		PUBLIC_CONTACT_ME_LINK
	} from '$env/static/public';

	import Button from './Button.svelte';

	interface Props {
		sidebarOpen: boolean;
		toggleSidebar: () => void;
	}
	const { sidebarOpen, toggleSidebar }: Props = $props();

	function goToContactForm() {
		goto(PUBLIC_CONTACT_ME_LINK);
	}

	let open = $state(false);
</script>

<nav class="navbar box-shadow-bottom">
	<div class="hamburger">
		<button class="hamburger-btn" class:hamburger-btn-open={sidebarOpen} onclick={toggleSidebar}>
			<!-- svg with 3 lines -->
			<svg width="28" height="24">
				<line id="top" x1="0" y1="2" x2="28" y2="2" />
				<line id="middle" x1="0" y1="12" x2="28" y2="12" />
				<line id="bottom" x1="0" y1="22" x2="28" y2="22" />
			</svg>
		</button>
	</div>

	<div class="navbar-wrapper default-margin">
		<a href="/" class="logo">
			<span data-text="KO">KO</span>
		</a>
		<div class="navbar-links">
			<a href={PUBLIC_ABOUT_ME_LINK} class="nav-link">
				<span class="nav-link-bar"></span>
				<span class="nav-link-label semi-bold">About Me</span>
			</a>
			<a href={PUBLIC_MY_PROJECTS_LINK} class="nav-link">
				<span class="nav-link-bar"></span>
				<span class="nav-link-label semi-bold">Projects</span>
			</a>
			<Button onclick={goToContactForm} className="small-btn">Contact Me</Button>
		</div>
	</div>
</nav>

<style>
	.navbar {
		position: relative;
		padding: 2rem 0;
	}
	.hamburger {
		position: absolute;
		top: 35px;
		right: 25px;
	}

	.navbar-wrapper {
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex-wrap: wrap;
		gap: 1rem;
	}

	.logo span {
		z-index: 20;
		font-size: 4rem;
		letter-spacing: 0.25rem;
		position: relative;
		color: black;
		font-weight: bold;
		text-transform: uppercase;
	}
	.logo:hover span::before {
		content: attr(data-text);
		position: absolute;
		top: 0;
		left: 0;
		width: 0;
		height: 100%;
		color: var(--red);
		border-right: 2px solid var(--red);
		overflow: hidden;
		animation: animate 0.45s linear 1;
	}

	.navbar-links {
		display: flex;
		align-items: center;
		flex-wrap: wrap;
		gap: 1.5rem 2rem;
		display: none;
	}
	.nav-link {
		font-size: clamp(1.5rem, 3vw, 2.2rem);
	}
	.nav-link-bar {
		background-color: var(--red);
		border-radius: 4px;
	}
	.nav-link-label {
		position: relative;
	}

	@media (min-width: 1024px) {
		.hamburger {
			display: none;
		}
		.navbar-links {
			display: inherit;
			gap: 1rem 4rem;
		}
		.nav-link-bar {
			transform: translateY(38px);
			position: absolute;
			top: 0;
			left: 0;
			bottom: 0;
			right: 0;
			transition: transform 300ms cubic-bezier(0.4, 0, 0.2, 1);
		}
		.nav-link {
			overflow: hidden;
			position: relative;
			padding: 0.5rem 1rem;
			line-height: 1.5;
			border-radius: 4px;
			transition: color 300ms cubic-bezier(0.4, 0, 0.2, 1);
		}
		.nav-link:hover {
			color: white;
		}
		.nav-link:hover .nav-link-bar {
			transform: translateY(0px);
		}
	}

	.hamburger svg {
		min-height: 24px;
		transition: transform 0.3s ease-in-out;
	}

	.hamburger svg line {
		/* `currentColor` means inherit color from the text color */
		stroke: currentColor;
		stroke-width: 3;
		transition: transform 0.3s ease-in-out;
	}

	.hamburger {
		z-index: 20;
	}

	.hamburger-btn-open svg {
		transform: scale(0.8);
	}

	/* rotate the top line */
	.hamburger-btn-open #top {
		transform: translate(6px, 0px) rotate(45deg);
	}

	/* hide the middle */
	.hamburger-btn-open #middle {
		opacity: 0;
	}

	/* rotate the bottom line */
	.hamburger-btn-open #bottom {
		transform: translate(-12px, 6px) rotate(-45deg);
	}

	@keyframes animate {
		0%,
		10%,
		100% {
			width: 0;
		}
		70%,
		90% {
			width: 100%;
		}
	}
</style>
