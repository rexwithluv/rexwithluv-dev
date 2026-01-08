<script lang="ts">
	import About from '$lib/about.svelte';
	import Home from '$lib/home.svelte';
	import Navbar from '$lib/navbar.svelte';
	import Projects from '$lib/projects.svelte';
	import Skills from '$lib/skills.svelte';
	import Socials from '$lib/socials.svelte';
	import { onMount } from 'svelte';

	onMount(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						entry.target.classList.add('visible');
					}
				});
			},
			{ threshold: 0.15 }
		);

		document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
	});
</script>

<div class="bg-[#fafafa] text-[#1a1a1a]">
	<Navbar />

	<Home />

	<About />

	<Projects />

	<Skills />

	<Socials />
</div>

<style>
	/* Estos estilos deben ser globales o aplicarse a la clase reveal */
	:global(.reveal) {
		opacity: 0;
		transform: translateY(30px);
		transition: all 0.8s ease-out;
	}

	:global(.reveal.visible) {
		opacity: 1;
		transform: translateY(0);
	}
</style>
