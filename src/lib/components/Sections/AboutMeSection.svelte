<script lang="ts">
	import { PUBLIC_ABOUT_ME_LINK, PUBLIC_CONTACT_ME_LINK } from '$env/static/public';
	import { SectionHeadline, Button } from '$lib';
	import image from '$assets/about-me.jpg';
	import { goto } from '$app/navigation';

	function onclick() {
		goto(PUBLIC_CONTACT_ME_LINK);
	}
</script>

<section class="about-me mt-m mb-l">
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
		</div>
	</div>
</section>

<style>
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
		margin-left: 20px;
	}
</style>
