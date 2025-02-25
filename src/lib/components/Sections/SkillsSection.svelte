<script lang="ts">
	import type { SkillItem } from '$lib/types/sanity';
	import { SectionHeadline } from '$lib';

	interface Props {
		skills: SkillItem[];
	}
	let { skills }: Props = $props();

	let animatedSkills: number[] = $state([]);

	function handleAnimateSkill(idx: number) {
		if (animatedSkills.includes(idx)) return;
		animatedSkills.push(idx);
	}

	$effect(() => {
		if (!animatedSkills.length) return;
		setTimeout(() => {
			let currentAnimatedSkills = [...animatedSkills];
			currentAnimatedSkills.shift();
			animatedSkills = currentAnimatedSkills;
		}, 1000);
	});
</script>

<section class="pt-m pb-m bg-white">
	<SectionHeadline sectionName="skills">Skills</SectionHeadline>
	<div class="wrapper default-margin">
		<div class="skills-container mt-m">
			{#each skills as skill, idx}
				<div
					onmouseenter={() => handleAnimateSkill(idx)}
					class="skill-container"
					class:animate={animatedSkills.includes(idx)}
					role="presentation"
				>
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
		font-size: 1.2rem;
	}

	i {
		font-size: 80px;
		color: black;
	}
	.skill-container i,
	.skill-container span {
		transition: color 1s ease-out;
	}

	.skill-container.animate i,
	.skill-container.animate span {
		color: var(--red);
	}

	.skill-container.animate i {
		animation-name: flip_animation;
		animation-duration: 1s;
	}

	@keyframes flip_animation {
		from {
			transform: rotateY(0deg);
		}
		to {
			transform: rotateY(360deg);
		}
	}
</style>
