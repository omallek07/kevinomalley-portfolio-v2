<script lang="ts">
	import { PUBLIC_MY_PROJECTS_LINK } from '$env/static/public';
	import type { ProcessedProject } from '$lib/types/sanity';
	import SectionHeadline from '$lib/components/SectionHeadline.svelte';

	interface Props {
		projects: ProcessedProject[];
	}

	let { projects }: Props = $props();
	const mainProjectName = 'Cleverdocs';
	const mainProject = projects.find((project) => project.name === mainProjectName);
	const additionalProjects = projects.filter((project) => project.name !== mainProjectName);
</script>

{#snippet projectDisplay(project: ProcessedProject, isMainProject: boolean = false)}
	<article class={`${isMainProject ? 'main-project' : 'project'} mb-m`}>
		<a href={`/projects/${project.slug}`}>
			<img src={project.projectImageUrl} alt={project.name} />
		</a>
		<div class="project-info mt-s">
			<div class="title-and-company">
				<h3 class="semi-bold">{project.name}</h3>
				<p class="company dark-grey">{project.company}</p>
			</div>
			<a href={`/projects/${project.slug}`} class="btn-to-article">→</a>
		</div>
	</article>
{/snippet}

<section class="mt-l">
	<SectionHeadline sectionName={PUBLIC_MY_PROJECTS_LINK.slice(2)}>My Projects</SectionHeadline>
	<div class="default-margin projects-container mt-m">
		{#if mainProject}
			{@render projectDisplay(mainProject, true)}
		{/if}
		<div class="more-projects-container">
			{#each additionalProjects as project}
				{@render projectDisplay(project)}
			{/each}
		</div>
	</div>
</section>

<style>
	img {
		width: 100%;
		border-radius: 20px;
		object-fit: cover;
		cursor: pointer;
		box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 1);
		transition: all 600ms ease;
	}
	img:hover {
		transform: translateY(-15px) scale(1.04);
		box-shadow: 0px 16px 10px 0px rgba(0, 0, 0, 0.5);
	}
	.more-projects-container {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
	}
	.more-projects-container img {
		height: 250px;
	}
	.main-project img {
		max-height: 350px;
	}
	.project {
		width: 40%;
	}
	.project-info {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.btn-to-article {
		display: block;
		font-size: 40px;
		padding: 0 24px;
		transition: all 300ms ease;
	}
	.btn-to-article:hover {
		transform: scale(1.2);
	}
	.company {
		font-size: 18px;
		margin-bottom: 0;
	}
</style>
