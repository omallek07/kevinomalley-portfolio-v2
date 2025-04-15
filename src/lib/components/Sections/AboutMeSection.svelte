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

{#snippet paragraphOne()}
	<p>
		Thank you for stopping by! I'm Kevin, a software engineer with expertise in Full-Stack
		JavaScript development and a passion for creating.
	</p>
{/snippet}

{#snippet paragraphTwo()}
	<p>
		Over the past 8 years, I pivoted from a career in psychology into the world of technology. My
		journey started with a complete immersion of JavaScript in <a
			class="link"
			href="https://www.fullstackacademy.com/"
			target="_blank">Fullstack Academy</a
		> and has led me through a variety of professional fields - international e-commerce, trivia entertainment,
		and billing and insurance in the Healthcare industry.
	</p>
{/snippet}

{#snippet paragraphThree()}
	<p>
		When I'm not coding, you can find me spending my free time with my two boys, Liam and Charlie,
		or continuously expanding my knowledge in software development through personal projects and
		online courses. For example, to better learn <a
			class="link"
			href="https://svelte.dev/"
			target="_blank">Svelte</a
		>, I built my
		<a class="link" target="_blank" href="https://github.com/omallek07/kevinomalley-portfolio-v2"
			>portfolio</a
		> with it!
	</p>
{/snippet}

{#snippet mobileLayout()}
	<div class="mobile flow text">
		{@render paragraphOne()}
		{@render paragraphTwo()}
		{@render paragraphThree()}
	</div>
	<div class="mobile">
		<div class="button-container flex">
			<Button {onclick}>Contact Me</Button>
			<Icons />
		</div>
	</div>
{/snippet}

{#snippet laptopLayout()}
	<div class="laptop text-container">
		<div class="flow text">
			{@render paragraphOne()}
			{@render paragraphTwo()}
			{@render paragraphThree()}
		</div>
		<div class="button-container flex">
			<Button {onclick}>Contact Me</Button>
			<Icons />
		</div>
	</div>
{/snippet}

<IntersectionObserver once {element} bind:intersecting>
	<section class="section about-me">
		<SectionHeadline headline="About Me" id={PUBLIC_ABOUT_ME_LINK.slice(2)} />

		<div bind:this={element} class="content-container default-margin" class:fade-in={intersecting}>
			<div class="image-container">
				<img src={image} alt="About Me" class="image" />
			</div>
			{@render mobileLayout()}
			{@render laptopLayout()}
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

	.laptop {
		display: none;
	}

	.link {
		text-decoration: none;
	}

	.link:hover {
		text-decoration: underline;
	}

	.image-container {
		width: 110px;
		height: auto;
		border-radius: 0.5rem;

		margin: 0.5rem 2rem -0.5rem 0;
		float: left;
	}

	.image {
		height: 100%;
		width: 100%;
		object-fit: cover;
		border-radius: 0.5rem;
		-webkit-filter: drop-shadow(0 0 1rem rgba(0, 0, 0, 0.3));
		filter: drop-shadow(0 0 1rem rgba(0, 0, 0, 0.3));
	}

	.button-container {
		margin-top: 2rem;
	}

	.fade-in {
		animation: fadeInMobile 1.5s 1 ease;
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

	@media (min-width: 768px) {
		.image-container {
			width: 160px;
		}
	}

	@media (min-width: 1024px) {
		.content-container {
			display: flex;
		}
		.image-container {
			width: 30%;
			height: 100%;
			margin: 0;
			float: none;
		}
		.image {
			border-radius: 2rem;
		}
		.laptop.text-container {
			width: 70%;
			display: flex;
			flex-direction: column;
			justify-content: space-around;
			margin-left: 5rem;
		}
		.button-container {
			display: flex;
			justify-content: space-between;
			margin-top: 0;
			margin-bottom: 3.5rem;
		}
		.fade-in {
			animation: fadeIn 1.5s 1 ease;
		}
		.wave {
			width: 200%;
		}
		.mobile {
			display: none;
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
			transform: translateY(30%);
		}

		100% {
			opacity: 100%;
			transform: translateY(0);
		}
	}
</style>
