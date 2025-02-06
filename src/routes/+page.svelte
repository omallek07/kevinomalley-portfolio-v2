<script>
	import { HeroSection, AboutMeSection, MyWorkSection, SkillsSection } from '$lib';

	const { data } = $props();
	let { workExperience, projects, skills } = data;

	$inspect(workExperience);
	$inspect(projects);
	$inspect(skills);
</script>

<HeroSection />
<AboutMeSection {workExperience} />
<MyWorkSection {projects} />
<SkillsSection {skills} />
