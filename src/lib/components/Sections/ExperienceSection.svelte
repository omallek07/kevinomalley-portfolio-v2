<script lang="ts">
	import { ExperienceTable } from '$lib';

	import type { ProcessedWorkExperience } from '$lib/types/sanity';

	interface Props {
		workExperience: ProcessedWorkExperience[];
	}

	let { workExperience }: Props = $props();
</script>

<section class="pt-m pb-m bg-white">
	<ExperienceTable {workExperience} />
</section>
