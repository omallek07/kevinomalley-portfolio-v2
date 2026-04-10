<script lang="ts">
	import { PUBLIC_GITHUB_LINK, PUBLIC_LINKEDIN_LINK } from '$env/static/public';

	import githubIcon from '$assets/icons/github.svg';
	import linkedInIcon from '$assets/icons/linkedIn.svg';
</script>

<div class="icons">
	<div class="icon-container">
		<div class="icon-label"><span>GitHub</span></div>
		<div class="icon icon-round">
			<a href={PUBLIC_GITHUB_LINK} target="_blank">
				<img src={githubIcon} alt="Github" class="icon-img" />
			</a>
		</div>
	</div>
	<div class="icon-container">
		<div class="icon-label"><span>LinkedIn</span></div>
		<div class="icon">
			<a href={PUBLIC_LINKEDIN_LINK} target="_blank">
				<img src={linkedInIcon} alt="LinkedIn" class="icon-img" />
			</a>
		</div>
	</div>
</div>

<style>
	.icons {
		display: flex;
		align-items: center;
		gap: 1.5rem;
		padding: 0 1rem;
	}

	.icon-container {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.icon {
		height: 40px;
		width: 40px;
		cursor: pointer;
		transition: all 250ms ease;
		filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(140deg) brightness(104%) contrast(105%);
	}
	.icon-round {
		border-radius: 50%;
	}

	.icon-label {
		padding-bottom: 1rem;
		font-size: 1.5rem;
		letter-spacing: 1.2px;
		background: linear-gradient(to right, #4acfee, #53f8c9, #6070fd, #5bbdff, #4acfee);
		background-size: 200%;
		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		animation: animate-gradient 4s linear infinite;
	}

	.icon:hover {
		filter: invert(48%) sepia(23%) saturate(911%) hue-rotate(288deg) brightness(91%) contrast(80%);
		transform: scale(1.2);
	}

	.icon-round:hover {
		border: 1px solid white;
	}

	.icon-img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	@media (min-width: 768px) {
		.icon {
			width: 45px;
			height: 45px;
		}
	}

	@media (min-width: 1024px) {
		.icons {
			gap: 2rem;
		}
		.icon {
			width: 50px;
			height: 50px;
		}

		.icon-label {
			padding-bottom: 1.5rem;
		}
	}

	@keyframes animate-gradient {
		to {
			background-position: 200%;
		}
	}
</style>
