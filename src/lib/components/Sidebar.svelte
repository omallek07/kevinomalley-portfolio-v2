<script lang="ts">
	import { goto } from '$app/navigation';

	import {
		PUBLIC_ABOUT_ME_LINK,
		PUBLIC_MY_PROJECTS_LINK,
		PUBLIC_CONTACT_ME_LINK
	} from '$env/static/public';

	interface Props {
		sidebarOpen: boolean;
		toggleSidebar: () => void;
	}

	function handleLinkClick(href: string) {
		goto(href);
		toggleSidebar();
	}

	const { sidebarOpen, toggleSidebar }: Props = $props();
</script>

<aside class:open={sidebarOpen}>
	<nav>
		<ul>
			<li class="list-item list-item-one">
				<button
					data-text="About Me"
					onclick={() => handleLinkClick(PUBLIC_ABOUT_ME_LINK)}
					class="nav-link"
				>
					About Me
				</button>
			</li>
			<li class="list-item list-item-two">
				<button
					data-text="Projects"
					onclick={() => handleLinkClick(PUBLIC_MY_PROJECTS_LINK)}
					class="nav-link"
				>
					Projects
				</button>
			</li>
			<li class="list-item list-item-three">
				<button
					data-text="Contact Me"
					onclick={() => handleLinkClick(PUBLIC_CONTACT_ME_LINK)}
					class="nav-link"
				>
					Contact Me
				</button>
			</li>
		</ul>
	</nav>
</aside>

<style>
	aside {
		position: absolute;
		top: 0;
		right: 0;
		z-index: 15;
		min-width: 100vw;
		min-height: 100vh;
		background: #f7f7f7;
		opacity: 0.97;
		right: -100%;
		transition: right 0.3s ease-in-out;
	}

	aside.open {
		/* slide on screen */
		right: 0;
	}

	nav {
		padding-top: 14rem;
		padding-bottom: 4rem;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.nav-link {
		font-size: 5rem;
	}

	.list-item {
		position: relative;
		margin-bottom: 3rem;
	}

	.list-item::before {
		position: absolute;
		content: '';
		top: 0;
		left: -1.5rem;
		width: 0.5rem;
		height: 100%;
		transition: 0.6s;
	}

	.list-item button {
		position: relative;
		transition: background-size 0.45s 0.04s;
	}

	.list-item button::before {
		color: var(--dark-grey);
		position: absolute;
		content: attr(data-text);
		z-index: -1;
	}

	.list-item:hover::before {
		left: calc(100% + 1rem);
	}

	.list-item:hover button {
		background-size: 100%;
	}

	.list-item-one::before {
		background: var(--red);
	}
	.list-item-one button {
		background: linear-gradient(var(--red) 0 100%) left / 0 no-repeat;
		color: transparent;
		background-clip: text;
		-webkit-background-clip: text;
		font-family:
			'Inter Tight',
			system-ui,
			-apple-system,
			BlinkMacSystemFont,
			'Segoe UI',
			Roboto,
			Oxygen,
			Ubuntu,
			Cantarell,
			'Open Sans',
			'Helvetica Neue',
			sans-serif;
	}

	.list-item-two::before {
		background: var(--green);
	}
	.list-item-two button {
		background: linear-gradient(var(--green) 0 100%) left / 0 no-repeat;
		color: transparent;
		background-clip: text;
		-webkit-background-clip: text;
	}

	.list-item-three::before {
		background: var(--yellow);
	}
	.list-item-three button {
		background: linear-gradient(var(--yellow) 0 100%) left / 0 no-repeat;
		color: transparent;
		background-clip: text;
		-webkit-background-clip: text;
	}

	@media (min-width: 1024px) {
		aside {
			display: none;
		}
	}
</style>
