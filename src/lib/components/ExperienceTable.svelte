<script lang="ts">
	import IntersectionObserver from 'svelte-intersection-observer';

	import arrowUpIcon from '$assets/icons/arrow-up.svg';
	import arrowDownIcon from '$assets/icons/arrow-down.svg';

	import { slide } from 'svelte/transition';
	import { linear } from 'svelte/easing';
	import { PortableText } from '$lib';
	import type { ProcessedWorkExperience } from '$lib/types/sanity';

	interface Props {
		workExperience: ProcessedWorkExperience[];
	}
	let { workExperience }: Props = $props();

	let openedWorkDescriptionIndex = $state(-1);
	let element: HTMLSpanElement | undefined = $state();
	let intersecting: boolean = $state(false);

	let handleShowWorkDescription = (index: number) => {
		if (openedWorkDescriptionIndex === index) {
			openedWorkDescriptionIndex = -1;
		} else {
			openedWorkDescriptionIndex = index;
		}
	};
</script>

<IntersectionObserver {element} bind:intersecting>
	<section class="work-experience default-margin">
		<ul bind:this={element} class="work-experience-list">
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
							<button
								class="flex toggle-description-btn"
								onclick={() => handleShowWorkDescription(index)}
							>
								<p class="dates dark-grey">
									{job.startDate.slice(0, 7)}
									{#if job.endDate}
										/ {job.endDate.slice(0, 7)}
									{:else}
										/ present
									{/if}
								</p>
								<img
									alt="arrow"
									class="button-icon"
									class:focus={intersecting}
									src={openedWorkDescriptionIndex === index ? arrowUpIcon : arrowDownIcon}
								/>
							</button>
						</div>
						{#if job.workDescription.length}
							{#if openedWorkDescriptionIndex === index}
								<div
									transition:slide={{
										easing: linear,
										duration: 150
									}}
									class="work-description"
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
</IntersectionObserver>

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
		width: 4rem;
		height: 4rem;
		border-radius: 4px;
		object-fit: cover;
		cursor: pointer;
		margin-right: 1rem;
	}

	.toggle-description-btn {
		font-family: 'Inter Tight', sans-serif;
		position: relative;
	}
	.toggle-description-btn:hover .button-icon {
		filter: invert(48%) sepia(23%) saturate(911%) hue-rotate(288deg) brightness(91%) contrast(80%);
		transform: scale(1.2);
	}

	.dates {
		margin-right: 1.8rem;
	}

	.button-icon {
		position: absolute;
		right: -10px;
		height: 37px;
		width: 37px;
		transition: all 400ms ease;
	}

	.button-icon.focus {
		animation: shake 2s 1;
	}

	/* Larger screens */
	@media (min-width: 768px) {
		.work-experience-list {
			width: 80%;
		}

		.dates {
			margin-right: 4.2rem;
		}

		.button-icon {
			height: 50px;
			width: 50px;
		}
	}

	@media (min-width: 1024px) {
		.work-experience-list {
			width: 60%;
			margin-top: 0;
		}
		.company-description img {
			width: 5rem;
			height: 5rem;
			margin-right: 1.5rem;
		}

		.button-icon {
			font-size: 1.8rem;
		}
	}

	@keyframes shake {
		0% {
			transform: rotate(10deg);
			filter: invert(48%) sepia(23%) saturate(911%) hue-rotate(288deg) brightness(91%) contrast(80%);
		}
		25% {
			transform: rotate(-10deg);
			filter: invert(48%) sepia(23%) saturate(911%) hue-rotate(288deg) brightness(91%) contrast(80%);
		}
		50% {
			transform: rotate(20deg);
			filter: invert(48%) sepia(23%) saturate(911%) hue-rotate(288deg) brightness(91%) contrast(80%);
		}
		75% {
			transform: rotate(-5deg);
			filter: invert(48%) sepia(23%) saturate(911%) hue-rotate(288deg) brightness(91%) contrast(80%);
		}
		80% {
			transform: rotate(0deg);
			filter: none;
		}
		100% {
			transform: rotate(0deg);
			filter: none;
		}
	}
</style>
