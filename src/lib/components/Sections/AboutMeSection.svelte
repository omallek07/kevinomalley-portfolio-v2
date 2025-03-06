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

<IntersectionObserver {element} bind:intersecting>
	<section class="section about-me">
		<SectionHeadline headline="About Me" id={PUBLIC_ABOUT_ME_LINK.slice(2)} />

		<div bind:this={element} class="content-container default-margin" class:fade-in={intersecting}>
			<div class="image-container">
				<img src={image} alt="About Me" class="image" />
			</div>
			<div class="text">
				<p>
					Thank you for stopping by! I'm Kevin, a JavaScript developer with a passion for creating
					web experiences.
				</p>
				<p>
					With over 7 years of experience in the industry, I've had the opportunity to work on a
					variety of projects and collaborate with talented teams. I've learned that the key to
					success is a combination of technical knowledge, creativity, and a willingness to learn
					and adapt.
				</p>
				<p>
					When I'm not coding, you can find me exploring the great outdoors, reading a good book, or
					working on my latest DIY project.
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

	.image-container {
		width: 10rem;
		height: 10rem;
		border-radius: 0.5rem;
		object-fit: cover;
		float: left;
		margin-right: 1rem;
		overflow: hidden;
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
		animation: fadeIn 1.5s 1;
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
		width: 100%;
		height: 15em;
		animation: wave 10s -3s linear infinite;
		transform: translate3d(0, 0, 0);
		opacity: 0.8;
		bottom: 0;
		left: 0;
		z-index: -1;
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

	/* Larger screens */
	@media (min-width: 768px) {
		.image-container {
			width: 200px;
			height: 200px;
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
			width: 65%;
			margin-left: 5rem;
		}
		.image-container {
			width: 35%;
			height: auto;
			border-radius: 2rem;
			-webkit-filter: drop-shadow(0 0 1rem black);
			filter: drop-shadow(0 0 1rem black);
			float: none;
			margin-right: 0;
		}
		.wave {
			width: 200%;
		}
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
			transform: translateX(33%);
		}

		100% {
			opacity: 100%;
			transform: translateX(0);
		}
	}
</style>
