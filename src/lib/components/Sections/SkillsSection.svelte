<script lang="ts">
	import type { SkillItem } from '$lib/types/sanity';
	import { SectionHeadline } from '$lib';

	interface Props {
		skills: SkillItem[];
	}
	let { skills }: Props = $props();
</script>

<section class="pt-m pb-m border-bt-line border-top-line white-bg">
	<SectionHeadline sectionName="skills">Skills</SectionHeadline>
	<div class="wrapper default-margin">
		<div class="skills-container mt-m">
			{#each skills as skill}
				<div class="skill-container">
					<i class={skill.iconClass}></i>
					<span>{skill.name}</span>
				</div>
			{/each}
		</div>
	</div>
</section>

<style>
	.wrapper {
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.skills-container {
		width: 90%;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		row-gap: 18px;
		column-gap: 18px;
	}

	.skill-container {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.skill-container span {
		padding-top: 3px;
	}

	i {
		font-size: 80px;
		color: black;
	}
</style>
