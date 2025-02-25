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

<nav class="navbar border-bt-line">
	<div class="navbar-container default-margin">
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
			<Button onclick={goToContactForm} className="nav-bar">Contact Me</Button>
		</div>
	</div>
</nav>

<style>
	.navbar {
		padding: 20px 0;
	}
	.navbar-container {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.logo {
		font-size: 35px;
		font-weight: bold;
	}
	.navbar-links {
		display: flex;
		align-items: center;
		gap: 60px;
	}
	.nav-link {
		overflow: hidden;
		position: relative;
		padding: 4px 10px;
		line-height: 1.5;
		border-radius: 4px;
		font-size: 22px;
	}
	.nav-link-bar {
		background-color: var(--red);
		transform: translateY(36px);
		border-radius: 4px;
		position: absolute;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		transition: transform 300ms cubic-bezier(0.4, 0, 0.2, 1);
	}
	.nav-link-label {
		position: relative;
	}
	.nav-link:hover .nav-link-bar {
		transform: translateY(0px);
	}
</style>
