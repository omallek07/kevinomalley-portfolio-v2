<script>
	import {
		HeroSection,
		AboutMeSection,
		MyProjectsSection,
		ExperienceSection,
		SkillsSection,
		ContactSection,
		BackToTop
	} from '$lib';

	const { data } = $props();
	let { workExperience, projects, skills } = data;
</script>

<HeroSection />
<AboutMeSection />
<ExperienceSection {workExperience} />
<MyProjectsSection {projects} />
<SkillsSection {skills} />
<ContactSection />
<BackToTop />
