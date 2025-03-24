<script>
	import {
		HeroSection,
		AboutMeSection,
		MyProjectsSection,
		ExperienceSection,
		SkillsSection,
		ContactSection,
		BackToTop,
		LoadSplash
	} from '$lib';

	const { data } = $props();
	let { workExperience, projects, skills } = data;

	let showLoadSplash = $state(true);

	$effect(() => {
		setTimeout(() => (showLoadSplash = false), 1000);
	});
</script>

<svelte:head>
	<title>Kevin O'Malley</title>
</svelte:head>

{#if showLoadSplash}
	<LoadSplash />
{:else}
	<HeroSection />
	<AboutMeSection />
	<ExperienceSection {workExperience} />
	<MyProjectsSection {projects} />
	<SkillsSection {skills} />
	<ContactSection />
	<BackToTop />
{/if}
