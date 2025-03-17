<script lang="ts">
	import { goto } from '$app/navigation';

	import { PUBLIC_MY_PROJECTS_LINK } from '$env/static/public';

	import { PortableText, Button } from '$lib';

	const { data } = $props();
	$inspect(data);
	const { company, name, dateAccomplished, stack, projectImageUrl, content } = data.project;
	$inspect(content);

	function handleGoBack() {
		goto(PUBLIC_MY_PROJECTS_LINK);
	}
</script>

<svelte:head>
	<title>{name}</title>
</svelte:head>

<main class="project-page">
	<div class="default-margin project-container">
		<h4>{company}</h4>
		<div class="underscore"></div>
		<div class="name-container flex mb-s">
			<h2 class="project-name">{name}</h2>
			<Button className="small-btn" onclick={handleGoBack}>Go Back</Button>
		</div>
		<img src={projectImageUrl} alt={name} class="project-image" />
		<div class="project-lower-container mt-m">
			<div class="meta-data">
				<h3 class="semi-bold">Date</h3>
				<p>{dateAccomplished.slice(0, 7)}</p>
				<h3 class="semi-bold mt-m">Tech Stack</h3>
				{#each stack as skill}
					<li>{skill}</li>
				{/each}
			</div>
			<div class="project-text">
				<PortableText value={content} />
			</div>
		</div>
	</div>
	<div class="circles-container">
		<ul class="circles">
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
		</ul>
	</div>
</main>

<style>
	.project-page {
		background:
			radial-gradient(farthest-side at top left, var(--dark-grey), transparent),
			radial-gradient(farthest-side at bottom left, var(--white), transparent),
			radial-gradient(farthest-corner at bottom right, #d6dee4, transparent) #ebf3f9;
		background-attachment: fixed;
		background-size: 100vw 100vh;
		overflow: hidden;
		position: relative;
	}

	.project-container {
		position: relative;
		z-index: 2;
	}

	.flex {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.project-page {
		padding-top: 3rem;
		padding-bottom: 3rem;
	}

	.name-container {
		margin-bottom: 2rem;
	}

	h2,
	h3 {
		color: var(--white);
		-webkit-filter: drop-shadow(0 0 0.25rem black);
		filter: drop-shadow(0 0 0.25rem black);
	}
	.project-image {
		width: 100%;
		max-height: 45rem;
		object-fit: cover;
		border-radius: 6px;
		border: 1px solid black;
	}
	.project-lower-container {
		display: flex;
	}
	.meta-data {
		min-width: 12rem;
	}
	.circles-container {
		display: none;
	}

	@media (min-width: 768px) {
		.project-page {
			padding-top: 4rem;
			padding-bottom: 10rem;
		}
		.meta-data {
			min-width: 15rem;
		}

		.circles-container {
			z-index: 1;
			display: block;
			position: absolute;
			right: 0;
			top: 0;
			width: 40%;
			height: 100%;
		}
	}

	@media (min-width: 1024px) {
		.project-page {
			padding-top: 6rem;
			padding-bottom: 14rem;
		}
		.meta-data {
			min-width: 20rem;
		}
		.circles-container {
			width: 50%;
		}
	}

	.circles li {
		position: absolute;
		display: block;
		list-style: none;
		width: 20px;
		height: 20px;
		background: var(--green);
		animation: circles 25s linear infinite;
		bottom: -200px;
	}

	.circles li:nth-child(1) {
		left: 25%;
		width: 80px;
		height: 80px;
		animation-delay: 0s;
	}

	.circles li:nth-child(2) {
		left: 10%;
		width: 20px;
		height: 20px;
		animation-delay: 2s;
		animation-duration: 12s;
	}

	.circles li:nth-child(3) {
		left: 70%;
		width: 20px;
		height: 20px;
		animation-delay: 4s;
	}

	.circles li:nth-child(4) {
		left: 40%;
		width: 60px;
		height: 60px;
		animation-delay: 0s;
		animation-duration: 18s;
	}

	.circles li:nth-child(5) {
		left: 65%;
		width: 20px;
		height: 20px;
		animation-delay: 0s;
	}

	.circles li:nth-child(6) {
		left: 75%;
		width: 110px;
		height: 110px;
		animation-delay: 3s;
	}

	.circles li:nth-child(7) {
		left: 35%;
		width: 150px;
		height: 150px;
		animation-delay: 7s;
	}

	.circles li:nth-child(8) {
		left: 50%;
		width: 25px;
		height: 25px;
		animation-delay: 15s;
		animation-duration: 45s;
	}

	.circles li:nth-child(9) {
		left: 20%;
		width: 15px;
		height: 15px;
		animation-delay: 2s;
		animation-duration: 35s;
	}

	.circles li:nth-child(10) {
		left: 85%;
		width: 150px;
		height: 150px;
		animation-delay: 0s;
		animation-duration: 11s;
	}

	@keyframes circles {
		0% {
			transform: translateY(0) rotate(0deg);
			opacity: 1;
			border-radius: 0;
		}

		100% {
			transform: translateY(-1500px) rotate(720deg);
			opacity: 0;
			border-radius: 50%;
		}
	}
</style>
