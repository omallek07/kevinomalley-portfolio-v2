<script lang="ts">
	import image from '$assets/coding-image.png';
	import IntersectionObserver from 'svelte-intersection-observer';
	import { PUBLIC_MY_PROJECTS_LINK } from '$env/static/public';
	import type { ProcessedProject } from '$lib/types/sanity';
	import SectionHeadline from '$lib/components/SectionHeadline.svelte';
	import ActivityCalendar from '$lib/components/ActivityCalendar.svelte';

	interface Props {
		projects: ProcessedProject[];
	}

	let { projects }: Props = $props();

	const mainProjectName = 'Cleverdocs';
	const mainProject = $derived(projects.find((project) => project.name === mainProjectName));
	const additionalProjects = $derived(
		projects.filter((project) => project.name !== mainProjectName)
	);

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
					<h3
						class:gradient-color={hoveredProject && project.name === hoveredProject}
						class="semi-bold"
					>
						{project.name}
					</h3>
					<p class="company">{project.company}</p>
					<div class="meta-data">
						<ul class="skills-container">
							{#each project.stack as skill}
								<li class="skill">{skill}</li>
							{/each}
						</ul>
					</div>
				</div>
				<div class="mobile">
					<button class="btn-to-article gradient-color">→</button>
				</div>
				<div class="laptop">
					<button
						class:gradient-color={hoveredProject && project.name === hoveredProject}
						class="btn-to-article">→</button
					>
				</div>
			</div>
		</a>
	</article>
{/snippet}

{#snippet calendarWidget()}
	<article
		class:shrink={hoveredProject && hoveredProject !== 'calendar-widget'}
		class="project card calendar-widget-card"
		onfocus={() => handleHoveredProject('calendar-widget', true)}
		onblur={() => handleHoveredProject('calendar-widget', false)}
		onmouseover={() => handleHoveredProject('calendar-widget', true)}
		onmouseleave={() => handleHoveredProject('calendar-widget', false)}
	>
		<img class="calendar-widget-image" src={image} alt={'Github Calendar'} />
		<div class="project-info calendar-widget">
			<div class="title-and-company">
				<h3
					class:gradient-color={hoveredProject && 'calendar-widget' === hoveredProject}
					class="semi-bold"
				>
					My GitHub Activity
				</h3>
				<p class="company">Kevin O'Malley</p>
			</div>
		</div>
		<div class="calendar-widget-container">
			<ActivityCalendar />
		</div>
	</article>
{/snippet}

<IntersectionObserver once {element} bind:intersecting>
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
				{@render calendarWidget()}
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
		background: var(--dark-elevated);
		transition:
			transform 600ms ease,
			box-shadow 1s ease;
		outline: 1px solid var(--dark-border);
		border-radius: 5px;
		margin-bottom: 3rem;
	}

	.card.calendar-widget-card {
		background: var(--dark-surface);
	}

	.card:not(.main-project):last-child {
		margin-bottom: 0;
	}
	.card:hover {
		transform: scale(1.05);
	}
	.card.shrink {
		transform: scale(0.95);
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
		color: white;
		font-size: 4rem;
		transition: all 300ms ease;
		margin-left: 1rem;
	}
	.card:hover .btn-to-article {
		transform: scale(1.2);
	}
	.company {
		color: var(--dark-text-secondary);
		font-size: 1.4rem;
		margin-bottom: 0;
	}

	.meta-data * {
		font-size: 1.25rem;
	}

	.skills-container {
		margin-top: 10px;
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
	}

	.skill {
		padding: 3px 6px;
		color: var(--dark-text-secondary);
		background-color: var(--dark-border);
		border-radius: 5px;
	}

	.calendar-widget-image {
		cursor: default;
	}

	.calendar-widget-container {
		margin-top: -1rem;
		margin-bottom: 2rem;
	}

	@media (min-width: 768px) {
		.card:hover {
			transform: scale(1.1);
		}
		.card.shrink {
			transform: scale(0.9);
		}
		.meta-data {
			margin-top: 1rem;
		}
		.meta-data * {
			font-size: 1.5rem;
		}
		.skill-container {
			gap: 1rem;
		}
		.skill {
			padding: 4px 6px;
		}
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
			width: 45%;
		}
		.company {
			font-size: 1.8rem;
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
