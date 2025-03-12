<script lang="ts">
	import IntersectionObserver from 'svelte-intersection-observer';
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

	let hoveredProject = $state('');
	let element: HTMLDivElement | undefined = $state();
	let intersecting: boolean = $state(false);

	function handleHoveredProject(projectName: string, isMouseOver: boolean) {
		hoveredProject = isMouseOver ? projectName : '';
	}
</script>

{#snippet projectDisplay(project: ProcessedProject, isMainProject: boolean = false)}
	<article
		class:shrink={!isMainProject && hoveredProject && project.name !== hoveredProject}
		class={`${isMainProject ? 'main-project' : 'project'} card`}
	>
		<a
			href={`/projects/${project.slug}`}
			onfocus={() => handleHoveredProject(project.name, true)}
			onblur={() => handleHoveredProject(project.name, false)}
			onmouseover={() => handleHoveredProject(project.name, true)}
			onmouseleave={() => handleHoveredProject(project.name, false)}
		>
			<img src={project.projectImageUrl} alt={project.name} />
			<div class="project-info">
				<div class="title-and-company">
					<h3 class="semi-bold">{project.name}</h3>
					<p class="company dark-grey">{project.company}</p>
				</div>
				<button class="btn-to-article">→</button>
			</div>
		</a>
	</article>
{/snippet}

<IntersectionObserver {element} bind:intersecting>
	<section class="my-projects-section section bg-dark">
		<SectionHeadline headline="My Projects" id={PUBLIC_MY_PROJECTS_LINK.slice(2)} />
		<div
			bind:this={element}
			class:fade-in={intersecting}
			class="default-margin projects-container mt-s"
		>
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
</IntersectionObserver>

<style>
	img {
		width: 100%;
		object-fit: cover;
		cursor: pointer;
	}

	.fade-in {
		animation: fadeIn 2s 1;
	}
	.more-projects-container {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
	}

	.more-projects-container img {
		height: 25rem;
	}
	.main-project img {
		max-height: 35rem;
	}
	.project {
		width: 100%;
	}

	.card {
		overflow: hidden;
		background: var(--white);
		transition:
			transform 600ms ease,
			box-shadow 1s ease;
		outline: 1px solid var(--red);
		border-radius: 5px;
		margin-bottom: 3rem;
	}
	.card:not(.main-project):last-child {
		margin-bottom: 0;
	}
	.card:hover {
		transform: scale(1.1);
		box-shadow: 0px 7px 6px -2px hsl(from var(--red) h s l / 60%);
	}
	.card.shrink {
		transform: scale(0.9);
	}

	.project-info {
		display: flex;
		justify-content: space-between;
		align-items: center;
		border-radius: 5px;
		padding: 1.5rem 2rem;
	}
	.btn-to-article {
		display: block;
		font-family: inherit;
		font-size: 4rem;
		transition: all 300ms ease;
	}
	.card:hover .btn-to-article {
		transform: scale(1.2);
	}
	.company {
		font-size: 1.8rem;
		margin-bottom: 0;
	}
	@media (min-width: 1024px) {
		.card.main-project {
			margin-bottom: 3rem;
		}
		.card:not(.main-project),
		.card:not(.main-project):last-of-type {
			margin-top: 2rem;
			margin-bottom: 0rem;
		}
		.project {
			width: 40%;
		}
	}

	@keyframes fadeIn {
		0% {
			opacity: 0;
		}

		100% {
			opacity: 100%;
		}
	}
</style>
