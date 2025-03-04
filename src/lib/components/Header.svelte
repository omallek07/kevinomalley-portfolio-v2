<script>
	import { goto } from '$app/navigation';

	import {
		PUBLIC_ABOUT_ME_LINK,
		PUBLIC_MY_PROJECTS_LINK,
		PUBLIC_CONTACT_ME_LINK
	} from '$env/static/public';
	import Button from './Button.svelte';

	function goToContactForm() {
		goto(PUBLIC_CONTACT_ME_LINK);
	}
</script>

<nav class="navbar box-shadow-bottom">
	<div class="navbar-wrapper default-margin">
		<a href="/" class="logo">KO</a>
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
	.navbar-wrapper {
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex-wrap: wrap;
		gap: 1rem;
	}
	.logo {
		font-size: 3.5rem;
		font-weight: bold;
	}
	.navbar-links {
		display: flex;
		align-items: center;
		flex-wrap: wrap;
		gap: 1.5rem 2rem;
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
		.nav-link-bar {
			transform: translateY(36px);
			position: absolute;
			top: 0;
			left: 0;
			bottom: 0;
			right: 0;
			transition: transform 300ms cubic-bezier(0.4, 0, 0.2, 1);
		}
		.navbar-links {
			gap: 1rem 3rem;
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
</style>
