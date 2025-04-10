<script lang="ts">
	import { PUBLIC_MY_EXPERIENCES_LINK } from '$env/static/public';
	import { SectionHeadline, ExperienceTable, CirclesBg } from '$lib';

	import type { ProcessedWorkExperience } from '$lib/types/sanity';

	interface Props {
		workExperience: ProcessedWorkExperience[];
	}

	let { workExperience }: Props = $props();
</script>

<section class="experience-section section bg-white box-shadow-both">
	<SectionHeadline headline="Work Experience" id={PUBLIC_MY_EXPERIENCES_LINK.slice(2)} />

	<ExperienceTable {workExperience} />
	<CirclesBg />
</section>

<style>
	.experience-section {
		position: relative;
		overflow: hidden;
		padding-bottom: 3rem;
	}

	@media (min-width: 1024px) {
		.experience-section {
			padding-bottom: 0;
		}
	}
</style>
