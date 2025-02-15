<script lang="ts">
	import {
		PUBLIC_GITHUB_LINK,
		PUBLIC_LINKEDIN_LINK,
		PUBLIC_ABOUT_ME_LINK,
		PUBLIC_CONTACT_ME_LINK,
		PUBLIC_MY_PROJECTS_LINK
	} from '$env/static/public';
</script>

<footer class="footer">
	<div class="footer-container">
		<h3 class="semi-bold mb-xs">Kevin O'Malley</h3>
		<div class="mb-s">
			<a href={PUBLIC_ABOUT_ME_LINK} class="footer-link">About Me</a>
			<a href={PUBLIC_MY_PROJECTS_LINK} class="footer-link">My Projects</a>
			<a href={PUBLIC_CONTACT_ME_LINK} class="footer-link">Contact Me</a>
		</div>
		<div class="mb-s">
			<a href={PUBLIC_GITHUB_LINK} target="_blank" class="footer-link">Github</a>
			<a href={PUBLIC_LINKEDIN_LINK} target="_blank" class="footer-link">LinkedIn</a>
		</div>
		<p class="dark-grey">© {new Date().getFullYear()} Kevin O'Malley. All rights reserved.</p>
		<p class="dark-grey">Powered by Sveltekit</p>
	</div>
</footer>

<style>
	.footer {
		background-color: black;
		color: white;
		padding: 20px 0;
		text-align: center;
	}
	.footer-link {
		margin: 0 10px;
	}
	.footer-link:hover {
		text-decoration: underline;
	}
</style>
