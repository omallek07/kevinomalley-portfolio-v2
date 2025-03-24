<script>
	import { fade } from 'svelte/transition';

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
		setTimeout(() => (showLoadSplash = false), 300);
	});
</script>

<svelte:head>
	<title>Kevin O'Malley</title>
</svelte:head>

{#if showLoadSplash}
	<div transition:fade>
		<LoadSplash />
	</div>
{/if}
<HeroSection />
<AboutMeSection />
<ExperienceSection {workExperience} />
<MyProjectsSection {projects} />
<SkillsSection {skills} />
<ContactSection />
<BackToTop />
