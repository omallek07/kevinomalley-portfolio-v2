<script lang="ts">
	import { PUBLIC_ABOUT_ME_LINK, PUBLIC_CONTACT_ME_LINK } from '$env/static/public';
	import { SectionHeadline, Icons, Button } from '$lib';
	import image from '$assets/about-me.jpg';
	import { goto } from '$app/navigation';

	function onclick() {
		goto(PUBLIC_CONTACT_ME_LINK);
	}
</script>

<section class="about-me pt-m pb-l">
	<SectionHeadline sectionName={PUBLIC_ABOUT_ME_LINK.slice(2)}>About Me</SectionHeadline>
	<div class="mt-m content-container default-margin">
		<img src={image} alt="About Me" class="image" />
		<div class="text">
			<p>
				Thank you for stopping by! I'm Kevin, a JavaScript developer with a passion for creating web
				experiences.
			</p>
			<p>
				With over 7 years of experience in the industry, I've had the opportunity to work on a
				variety of projects and collaborate with talented teams. I've learned that the key to
				success is a combination of technical knowledge, creativity, and a willingness to learn and
				adapt.
			</p>
			<p>
				When I'm not coding, you can find me exploring the great outdoors, reading a good book, or
				working on my latest DIY project.
			</p>
			<Button className="mt-m" {onclick}>Contact Me</Button>
			<Icons />
		</div>
	</div>
	<div class="wave"></div>
	<div class="wave"></div>
	<div class="wave"></div>
</section>

<style>
	.about-me {
		overflow: hidden;
		position: relative;
	}
	.content-container {
		display: flex;
		justify-content: space-between;
		align-items: stretch;
	}

	.image {
		width: 35%;
		border-radius: 20px;
		object-fit: cover;
		filter: drop-shadow(0 0 1rem black);
	}

	.text {
		width: 65%;
		text-align: left;
		margin-left: 5rem;
	}

	.wave {
		background: rgb(255 255 255 / 25%);
		border-radius: 1000% 1000% 0 0;
		position: absolute;
		width: 300%;
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
</style>
