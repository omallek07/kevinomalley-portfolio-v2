<script lang="ts">
	import { PUBLIC_MY_EXPERIENCES_LINK } from '$env/static/public';
	import { SectionHeadline, ExperienceTable } from '$lib';

	import type { ProcessedWorkExperience } from '$lib/types/sanity';

	interface Props {
		workExperience: ProcessedWorkExperience[];
	}

	let { workExperience }: Props = $props();
</script>

<section class="pt-m pb-m bg-white box-shadow-both box-shadow-bottom">
	<SectionHeadline sectionName={PUBLIC_MY_EXPERIENCES_LINK.slice(2)}
		>Work Experience</SectionHeadline
	>
	<ExperienceTable {workExperience} />
</section>
