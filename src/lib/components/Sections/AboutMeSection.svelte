<script lang="ts">
	import IntersectionObserver from 'svelte-intersection-observer';

	import { PUBLIC_ABOUT_ME_LINK, PUBLIC_CONTACT_ME_LINK } from '$env/static/public';
	import { SectionHeadline, Icons, Button } from '$lib';
	import image from '$assets/about-me.jpg';
	import { goto } from '$app/navigation';

	let element: HTMLDivElement | undefined = $state();
	let intersecting: boolean = $state(false);

	function onclick() {
		goto(PUBLIC_CONTACT_ME_LINK);
	}
</script>

<IntersectionObserver once {element} bind:intersecting>
	<section class="section about-me">
		<SectionHeadline headline="About Me" id={PUBLIC_ABOUT_ME_LINK.slice(2)} />

		<div bind:this={element} class="content-container default-margin" class:fade-in={intersecting}>
			<div class="image-container">
				<img src={image} alt="About Me" class="image" />
			</div>
			<div class="text flow">
				<p>
					Thank you for stopping by! I'm Kevin, a software engineer with expertise in Full Stack
					JavaScript development and a passion for creating.
				</p>
				<p>
					Over the past 8 years, I pivoted from a career in psychology into the world of technology.
					My journey started with a complete immersion of JavaScript in <a
						class="link"
						href="https://www.fullstackacademy.com/"
						target="_blank">Fullstack Academy</a
					> and has led me through a variety of professional fields - international e-commerce, trivia
					entertainment, and billing and insurance in the Healthcare industry.
				</p>
				<p>
					When I'm not coding, you can find me spending my free time with my two boys, Liam and
					Charlie, or continuously expanding my knowledge in software development through personal
					projects and online courses. For example, to better learn <a
						class="link"
						href="https://svelte.dev/"
						target="_blank">Svelte</a
					>, I built my
					<a
						class="link"
						target="_blank"
						href="https://github.com/omallek07/kevinomalley-portfolio-v2">portfolio</a
					> with it!
				</p>
				<div class="flex mt-m">
					<Button {onclick}>Contact Me</Button>
					<Icons />
				</div>
			</div>
		</div>
		<div class="wave"></div>
		<div class="wave"></div>
		<div class="wave"></div>
	</section>
</IntersectionObserver>

<style>
	/* Mobile-first (default styles) */
	.about-me {
		overflow: hidden;
		position: relative;
	}

	.link {
		text-decoration: none;
	}

	.link:hover {
		text-decoration: underline;
	}

	.image-container {
		width: 10rem;
		height: 125px;
		border-radius: 0.5rem;
		object-fit: cover;
		float: left;
		margin-right: 1rem;
		overflow: hidden;
		border: 1px solid var(--red);
	}

	.image {
		height: 100%;
		width: 100%;
		object-fit: cover;
	}

	.content-container {
		position: relative;
	}
	.fade-in {
		animation: fadeIn 1s 1 ease-out;
	}

	.flex {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.wave {
		background: rgb(255 255 255 / 25%);
		border-radius: 1000% 1000% 0 0;
		position: absolute;
		width: 200%;
		height: 15em;
		animation: wave 10s -3s linear infinite;
		transform: translate3d(0, 0, 0);
		opacity: 0.8;
		bottom: 0;
		left: 0;
		z-index: -1;
	}

	/* Larger screens */
	@media (min-width: 768px) {
		.image-container {
			width: 200px;
			height: 200px;
			border: 1px solid var(--dark-grey);
		}

		.content-container {
			justify-content: space-between;
			align-items: stretch;
		}

		.wave {
			width: 150%;
		}
	}

	@media (min-width: 1024px) {
		.content-container {
			display: flex;
		}
		.text {
			text-align: left;
			width: 70%;
			margin-left: 5rem;
		}
		.image-container {
			width: 30%;
			height: auto;
			border-radius: 2rem;

			-webkit-filter: drop-shadow(0 0 3rem rgba(0, 0, 0, 0.25));
			filter: drop-shadow(0 0 3rem rgba(0, 0, 0, 0.25));
			float: none;
			margin-right: 0;
			border: none;
		}
		.wave {
			width: 200%;
		}
	}

	.wave:nth-of-type(2) {
		bottom: -1.25em;
		animation: wave 18s linear reverse infinite;
		opacity: 0.8;
	}

	.wave:nth-of-type(3) {
		bottom: -2.5em;
		animation: wave 20s -1s reverse infinite;
		opacity: 0.9;
	}

	@keyframes wave {
		2% {
			transform: translateX(0);
		}

		25% {
			transform: translateX(-25%);
		}

		50% {
			transform: translateX(-50%);
		}

		75% {
			transform: translateX(-25%);
		}

		100% {
			transform: translateX(1);
		}
	}

	@keyframes fadeIn {
		0% {
			opacity: 0;
			transform: translateX(45%);
		}

		100% {
			opacity: 100%;
			transform: translateX(0);
		}
	}
</style>
