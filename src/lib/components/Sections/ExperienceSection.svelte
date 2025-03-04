<script lang="ts">
	import { PUBLIC_MY_EXPERIENCES_LINK } from '$env/static/public';
	import { SectionHeadline, ExperienceTable } from '$lib';

	import type { ProcessedWorkExperience } from '$lib/types/sanity';

	interface Props {
		workExperience: ProcessedWorkExperience[];
	}

	let { workExperience }: Props = $props();
</script>

<section class="section bg-white box-shadow-both box-shadow-bottom">
	<SectionHeadline headline="Work Experience" id={PUBLIC_MY_EXPERIENCES_LINK.slice(2)} />
	<ExperienceTable {workExperience} />
</section>
