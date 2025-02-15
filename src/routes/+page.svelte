<script>
	import {
		HeroSection,
		AboutMeSection,
		MyProjectsSection,
		SkillsSection,
		ContactSection
	} from '$lib';

	const { data } = $props();
	let { workExperience, projects, skills } = data;
</script>

<HeroSection />
<AboutMeSection {workExperience} />
<MyProjectsSection {projects} />
<SkillsSection {skills} />
<ContactSection />
