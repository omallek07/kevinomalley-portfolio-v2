<script lang="ts">
	import { Header, Footer, Sidebar } from '$lib';
	import '../app.css';
	let { children } = $props();
	let sidebarOpen = $state(false);

	function toggleSidebar() {
		return (sidebarOpen = !sidebarOpen);
	}
</script>

<Header {sidebarOpen} {toggleSidebar} />
<Sidebar {sidebarOpen} {toggleSidebar} />
{@render children()}
<Footer />
