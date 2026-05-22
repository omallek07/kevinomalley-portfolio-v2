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
			<h2 class="project-name gradient-color">{name}</h2>
			<Button className="small-btn go-back" onclick={handleGoBack}>Go Back</Button>
		</div>
		<img src={projectImageUrl} alt={name} class="project-image" />
		<div class="project-lower-container mt-m">
			<div class="meta-data">
				<div class="meta-data-row">
					<h3 class="semi-bold gradient-color">Date</h3>
					<p>{dateAccomplished.slice(0, 7)}</p>
				</div>
				<div class="meta-data-row">
					<h3 class="semi-bold mt-m gradient-color">Tech Stack</h3>
					<ul class="skills-container">
						{#each stack as skill}
							<li class="skill">{skill}</li>
						{/each}
					</ul>
				</div>
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
			radial-gradient(farthest-side at top left, var(--dark-surface), transparent),
			radial-gradient(farthest-side at bottom left, var(--dark-elevated), transparent),
			radial-gradient(farthest-corner at bottom right, var(--dark-surface), transparent)
				var(--dark-bg);
		background-attachment: fixed;
		background-size: 100vw 100vh;
		overflow: hidden;
		position: relative;
		border-top: 1px solid var(--dark-border);
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
		color: var(--dark-text-primary);
		-webkit-filter: drop-shadow(0 0 0.05rem white);
		filter: drop-shadow(0 0 0.05rem white);
	}
	.project-image {
		width: 100%;
		max-height: 45rem;
		object-fit: cover;
		border-radius: 6px;
		border: 1px solid white;
	}
	.project-lower-container {
		display: flex;
		flex-direction: column;
	}

	.meta-data {
		display: flex;
		flex-direction: column;
		margin: 1rem 0 2rem 0;
	}
	.meta-data-row {
		display: flex;
		align-items: center;
	}

	.meta-data-row h3 {
		display: none;
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

	@media (min-width: 768px) {
		.project-page {
			padding-top: 4rem;
			padding-bottom: 10rem;
		}
	}

	@media (min-width: 1024px) {
		.project-lower-container {
			flex-direction: row;
		}
		.project-page {
			padding-top: 6rem;
			padding-bottom: 14rem;
		}
		.meta-data {
			display: block;
			min-width: 20rem;
			margin: 0;
		}
		.meta-data-row h3 {
			display: block;
		}
		.meta-data-row {
			flex-direction: column;
			align-items: flex-start;
		}

		.skills-container {
			margin-top: 0;
			display: block;
		}

		.skill {
			padding: 3px 6px;
			color: var(--white);
			background-color: inherit;
			border-radius: 0;
		}
	}
</style>
