<script lang="ts">
	import { PUBLIC_CONTACT_ME_LINK } from '$env/static/public';
	import { goto } from '$app/navigation';
	import { Button } from '$lib';

	function onclick() {
		goto(PUBLIC_CONTACT_ME_LINK);
	}
</script>

<section class="hero-section default-margin">
	<h3>Hello! I'm Kevin</h3>
	<div class="underscore mb-m"></div>
	<h1>JavaScript developer</h1>
	<h1 class="dark-grey mb-l">web experiences.</h1>
	<Button {onclick}>Let's talk</Button>
</section>

<style>
	.hero-section {
		padding-top: 60px;
	}
</style>
