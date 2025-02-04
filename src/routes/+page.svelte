<script>
	import { HeroSection, AboutMeSection } from '$lib';

	const { data } = $props();
	$inspect(data);
</script>

<HeroSection />
<AboutMeSection />
