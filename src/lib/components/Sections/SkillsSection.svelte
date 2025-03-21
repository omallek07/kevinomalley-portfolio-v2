<script lang="ts">
	import IntersectionObserver from 'svelte-intersection-observer';
	import type { SkillItem } from '$lib/types/sanity';
	import { PUBLIC_MY_SKILLS_LINK } from '$env/static/public';

	import { SectionHeadline } from '$lib';

	interface Props {
		skills: SkillItem[];
	}
	let { skills }: Props = $props();

	let animatedSkills: number[] = $state([]);
	let element: HTMLDivElement | undefined = $state();
	let intersecting: boolean = $state(false);
	let showInitialAnimation = $state(false);
	let initialAnimationShown = $state(false);

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

	$effect(() => {
		if (showInitialAnimation) {
			setTimeout(() => {
				showInitialAnimation = false;
			}, 1000);
		}
	});
</script>

<IntersectionObserver
	{element}
	bind:intersecting
	on:observe={(e) => {
		const {
			detail: { isIntersecting }
		} = e;

		if (isIntersecting && !initialAnimationShown) {
			showInitialAnimation = true;
			initialAnimationShown = true;
		}
		if (!isIntersecting) {
			showInitialAnimation = false;
			initialAnimationShown = false;
		}
	}}
>
	<section class="section bg-white box-shadow-both">
		<SectionHeadline headline="Skills" id={PUBLIC_MY_SKILLS_LINK.slice(2)} />
		<div class="wrapper default-margin">
			<div bind:this={element} class="skills-container mt-m">
				{#each skills as skill, idx}
					<div
						onmouseenter={() => handleAnimateSkill(idx)}
						class="skill-container"
						class:animate={animatedSkills.includes(idx) || showInitialAnimation}
						role="presentation"
					>
						<i class={skill.iconClass}></i>
						<span>{skill.name}</span>
					</div>
				{/each}
			</div>
		</div>
	</section>
</IntersectionObserver>

<style>
	.wrapper {
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.skills-container {
		width: 100%;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		row-gap: 1rem;
		column-gap: 3rem;
	}

	.skill-container {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.skill-container span {
		padding-top: 3px;
		font-size: clamp(1.2rem, 3vw, 1.4rem);
	}

	i {
		font-size: 6rem;
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

	@media (min-width: 768px) {
		.skills-container {
			row-gap: 2rem;
			column-gap: 2rem;
		}
	}

	@media (min-width: 1024px) {
		i {
			font-size: 8rem;
		}

		.skills-container {
			width: 90%;
			row-gap: 1.8rem;
			column-gap: 1.8rem;
		}
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
