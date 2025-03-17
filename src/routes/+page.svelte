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

<svelte:head>
	<title>Kevin O'Malley</title>
</svelte:head>

<HeroSection />
<AboutMeSection />
<ExperienceSection {workExperience} />
<MyProjectsSection {projects} />
<SkillsSection {skills} />
<ContactSection />
<BackToTop />
