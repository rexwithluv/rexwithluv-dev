<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import Sidebar from '$lib/components/Sidebar.svelte';

	let isSidebarOpen = $state(false);
	const toggleSidebar = () => {
		isSidebarOpen = !isSidebarOpen;
	};

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<Sidebar {isSidebarOpen} {toggleSidebar}></Sidebar>

<main class:sidebar-open={isSidebarOpen}>{@render children?.()}</main>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap');
	@import url('https://fonts.googleapis.com/css2?family=Schoolbell&display=swap');

	:root {
		--font-family-title: 'Schoolbell', cursive;
		--font-family-body: 'Inter', sans-serif;
		--sidebar-full-width: 300px;
		--sidebar-reduced-width: 80px;

		/* Colors */
		--raisin-black: #222222;
		--off-white: #faf9f6;
		--violet-purple: #3a2948;
		--lavander-gray: #c0c0d1;
	}

	:global(:root) {
		font-family: var(--font-family-body);
		color: var(--raisin-black);
		background-color: var(--off-white);
		margin: 0;
		padding: 0;
	}

	main {
		transition: margin-left 0.3s ease;
		margin-left: var(--sidebar-reduced-width);
		padding: 2rem;
	}

	main.sidebar-open {
		margin-left: var(--sidebar-full-width);
	}
</style>
