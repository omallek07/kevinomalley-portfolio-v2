<script lang="ts">
	import { slide } from 'svelte/transition';
	import { linear } from 'svelte/easing';
	import { PortableText } from '$lib';
	import type { ProcessedWorkExperience } from '$lib/types/sanity';

	interface Props {
		workExperience: ProcessedWorkExperience[];
	}
	let { workExperience }: Props = $props();

	let openedWorkDescriptionIndex = $state(-1);

	let handleShowWorkDescription = (index: number) => {
		if (openedWorkDescriptionIndex === index) {
			openedWorkDescriptionIndex = -1;
		} else {
			openedWorkDescriptionIndex = index;
		}
	};

	$inspect(workExperience);
</script>

<section class="work-experience default-margin">
	<ul class="work-experience-list">
		{#each workExperience as job, index}
			<li class="work-item">
				<article>
					<h3 class="semi-bold mb-xs">
						{job.jobTitle}
					</h3>
					<div class="flex-space-between">
						<a
							href={job.companyLink}
							target="_blank"
							rel="noopener
							noreferrer"
						>
							<div class="company-description">
								<img src={job.companyImageUrl} alt={job.company} />
								<p>{job.company}</p>
							</div>
						</a>
						<button class="flex button" onclick={() => handleShowWorkDescription(index)}>
							<p class="dates dark-grey">
								{job.startDate.slice(0, 7)}
								{#if job.endDate}
									/ {job.endDate.slice(0, 7)}
								{:else}
									/ present
								{/if}
							</p>
							<span class="button-icon">{openedWorkDescriptionIndex === index ? '△' : '▽'}</span
							></button
						>
					</div>
					{#if job.workDescription.length}
						{#if openedWorkDescriptionIndex === index}
							<div
								transition:slide={{
									easing: linear,
									duration: 150
								}}
								class="work-description mt-s"
							>
								<PortableText value={job.workDescription} />
							</div>
						{/if}
					{/if}
				</article>
			</li>
		{/each}
	</ul>
</section>

<style>
	.work-experience-list {
		width: 100%;
		margin-top: 2rem;
	}
	.work-item {
		border-bottom: 1px solid #f0eded;
		padding-bottom: 12px;
	}
	.work-item:not(:first-of-type) {
		padding-top: 16px;
	}
	.work-item p {
		margin-bottom: 0;
	}
	.dates {
		margin-right: 5px;
	}
	.flex {
		display: flex;
		align-items: center;
	}
	.flex-space-between {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.company-description {
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.company-description img {
		width: 30px;
		height: 30px;
		border-radius: 4px;
		object-fit: cover;
		cursor: pointer;
		margin-right: 8px;
	}

	.button {
		font-family: 'Inter Tight', sans-serif;
	}

	.button-icon {
		font-size: 11px;
	}

	/* Larger screens */
	@media (min-width: 768px) {
		.work-experience-list {
			width: 80%;
		}
	}

	@media (min-width: 1024px) {
		.work-experience-list {
			width: 50%;
			margin-top: 0;
		}
	}
</style>
