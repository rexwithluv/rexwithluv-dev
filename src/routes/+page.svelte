<script lang="ts">
	import About from '$lib/about.svelte';
	import Footer from '$lib/footer.svelte';
	import Home from '$lib/home.svelte';
	import Navbar from '$lib/navbar.svelte';
	import Projects from '$lib/projects.svelte';
	import Skills from '$lib/skills.svelte';
	import Socials from '$lib/socials.svelte';
</script>

<div class="portfolio-page text-zinc-900">
	<Navbar />

	<Home />

	<About />

	<Projects />

	<Skills />

	<Socials />

	<Footer />
</div>
