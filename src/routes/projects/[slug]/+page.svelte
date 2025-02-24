<script lang="ts">
	import { PortableText } from '$lib';

	const { data } = $props();
	$inspect(data);
	const { company, name, dateAccomplished, stack, projectImageUrl, content } = data.project;
	$inspect(content);
</script>

<main class="default-margin project-page">
	<h4>{company}</h4>
	<div class="underscore"></div>
	<h2 class="mb-s">{name}</h2>
	<img src={projectImageUrl} alt={name} class="project-image" />
	<div class="project-container mt-m">
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
</main>

<style>
	img {
		border-radius: 20px;
	}
	.project-page {
		padding-top: 80px;
		padding-bottom: 140px;
	}
	.project-image {
		width: 100%;
		max-height: 450px;
		object-fit: cover;
	}
	.content-image {
		width: 100%;
	}
	.project-container {
		display: flex;
	}
	.meta-data {
		min-width: 200px;
	}
	.project-text p {
		font-size: 20px;
	}
</style>
