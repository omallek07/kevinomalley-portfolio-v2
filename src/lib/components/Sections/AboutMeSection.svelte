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
			<div class="text-container">
				<div class="flow text">
					<p>
						Thank you for stopping by! I'm Kevin, a software engineer with expertise in Full-Stack
						JavaScript development and a passion for creating.
					</p>
					<p>
						Over the past 8 years, I pivoted from a career in psychology into the world of
						technology. My journey started with a complete immersion of JavaScript in <a
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
				</div>
				<div class="button-container flex">
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

	.content-container {
		display: flex;
		position: relative;
	}

	.image-container {
		width: 100px;
		height: auto;
		border-radius: 2rem;
		-webkit-filter: drop-shadow(0 0 1rem rgba(0, 0, 0, 0.3));
		filter: drop-shadow(0 0 1rem rgba(0, 0, 0, 0.3));
		overflow: hidden;
		position: absolute;
	}

	.image {
		height: 100%;
		width: 100%;
		object-fit: cover;
	}

	.text-container {
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		width: 100%;
	}
	.text p {
		margin-left: 120px;
	}

	.button-container {
		margin-top: 2rem;
	}

	.fade-in {
		animation: fadeInMobile 2s 1 ease;
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
		height: 10em;
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
			height: auto;
			width: 40%;
			position: inherit;
		}

		.image {
			object-position: initial;
		}

		.text-container {
			width: 60%;
			margin-left: 4rem;
		}

		.text p {
			margin-left: 0;
		}

		.content-container {
			display: flex;
			align-items: stretch;
		}
	}

	@media (min-width: 1024px) {
		.image-container {
			width: 30%;
			height: 100%;
		}
		.text-container {
			width: 70%;
		}
		.button-container {
			margin-top: 0;
			margin-bottom: 3.5rem;
		}
		.fade-in {
			animation: fadeIn 1.25s 1 ease;
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
			transform: translateY(70%);
		}

		100% {
			opacity: 100%;
			transform: translateY(0);
		}
	}

	@keyframes fadeInMobile {
		0% {
			opacity: 0;
			transform: translateY(40%);
		}

		100% {
			opacity: 100%;
			transform: translateY(0);
		}
	}
</style>
