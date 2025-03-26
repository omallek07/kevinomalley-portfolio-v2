<script lang="ts">
	import { goto } from '$app/navigation';

	import { PUBLIC_MY_PROJECTS_LINK } from '$env/static/public';

	import { PortableText, Button, CirclesBg } from '$lib';

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
			<Button className="small-btn go-back" onclick={handleGoBack}>Go Back</Button>
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
	<CirclesBg />
</main>

<style>
	.project-page {
		background:
			radial-gradient(farthest-side at top left, #abaaaa, transparent),
			radial-gradient(farthest-side at bottom left, #bec3c6, transparent),
			radial-gradient(farthest-corner at bottom right, var(--white), transparent) #ebf3f9;
		background-attachment: fixed;
		background-size: 100vw 100vh;
		overflow: hidden;
		position: relative;
		border-top: 1px solid black;
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

	@media (min-width: 768px) {
		.project-page {
			padding-top: 4rem;
			padding-bottom: 10rem;
		}
		.meta-data {
			min-width: 15rem;
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
	}
</style>
