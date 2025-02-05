<script lang="ts">
	import type { ProcessedWorkExperience } from '$lib/types/sanity';

	interface Props {
		workExperience: ProcessedWorkExperience[];
	}

	let { workExperience }: Props = $props();
</script>

<section class="default-margin work-experience mt-m">
	<ul class="work-experience-list">
		{#each workExperience as job}
			<li class="work-item">
				<article>
					<h3 class="semi-bold mb-xs">
						{job.jobTitle}
					</h3>
					<div class="company-and-date">
						<a href={job.companyLink}>
							<div class="company-description">
								<img src={job.companyImageUrl} alt={job.company} />
								<p>{job.company}</p>
							</div>
						</a>
						<p class="dark-grey">
							{job.startDate.slice(0, 7)}
							{#if job.endDate}
								/ {job.endDate.slice(0, 7)}
							{:else}
								/ present
							{/if}
						</p>
					</div>
				</article>
			</li>
		{/each}
	</ul>
	<h2 class="headline">Past work <br /> <span class="dark-grey">Experience</span></h2>
</section>

<style>
	.work-experience {
		display: flex;
		justify-content: space-between;
		width: 100%;
	}
	.work-experience-list {
		width: 50%;
	}
	.headline {
		text-align: right;
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
	.company-and-date {
		display: flex;
		justify-content: space-between;
	}
	.company-description {
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.company-description img {
		width: 30px;
		height: 30px;
		border-radius: 20px;
		object-fit: cover;
		cursor: pointer;
		margin-right: 8px;
	}
</style>
