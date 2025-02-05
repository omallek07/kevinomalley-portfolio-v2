<script>
	import { HeroSection, AboutMeSection } from '$lib';

	const { data } = $props();
	let { workExperience, projects } = data;
	$inspect(workExperience);
	$inspect(projects);
</script>

<HeroSection />
<AboutMeSection {workExperience} />
