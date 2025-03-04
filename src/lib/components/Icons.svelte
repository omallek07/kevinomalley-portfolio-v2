<script lang="ts">
	import { PUBLIC_GITHUB_LINK, PUBLIC_LINKEDIN_LINK } from '$env/static/public';

	import githubIcon from '$assets/icons/github.svg';
	import linkedInIcon from '$assets/icons/linkedIn.svg';
</script>

<div class="icons">
	<div class="icon icon-round">
		<a href={PUBLIC_GITHUB_LINK} target="_blank">
			<img src={githubIcon} alt="Github" class="icon-img" /></a
		>
	</div>
	<div class="icon">
		<a href={PUBLIC_LINKEDIN_LINK} target="_blank">
			<img src={linkedInIcon} alt="LinkedIn" class="icon-img" /></a
		>
	</div>
</div>

<style>
	.icons {
		display: flex;
		align-items: center;
		gap: 2rem;
		padding: 0 1rem;
	}

	.icon {
		height: 50px;
		width: 50px;
		cursor: pointer;
		transition: all 250ms ease;
	}
	.icon-round {
		border-radius: 50%;
	}

	.icon:hover {
		background: var(--green);
		transform: scale(1.2);
	}

	.icon-img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		/* width: 35%;
		border-radius: 20px;
		filter: drop-shadow(0 0 1rem black); */
	}
</style>
