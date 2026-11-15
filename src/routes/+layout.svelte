<script lang="ts">
	import { asset } from '$app/paths';
	import { page } from '$app/state';
	import { isLoading, locale } from 'svelte-i18n';
	import '../i18n';
	import { sectionFor } from '$lib/data/sections';
	import Footer from '$lib/footer.svelte';
	import Navbar from '$lib/navbar.svelte';
	import './layout.css';

	let { children } = $props();

	// Unknown routes (404) fall back to violet, the last colour of the rainbow.
	const color = $derived(sectionFor(page.url.pathname)?.color ?? 'violet');

	$effect(() => {
		if ($locale) document.documentElement.lang = $locale.split('-')[0];
		// keep the colour on <html> too so ::selection and scrollbars match
		document.documentElement.dataset.color = color;
	});
</script>

<svelte:head>
	<link rel="icon" type="image/png" href={asset('/icon.png')} />
</svelte:head>

<div data-color={color} class="flex min-h-dvh flex-col">
	{#if !$isLoading}
		<Navbar />

		<main class="mx-auto w-full max-w-6xl flex-1 px-5 pt-10 md:px-10 md:pt-20">
			{#key page.url.pathname}
				<div class="page-enter">
					{@render children()}
				</div>
			{/key}
		</main>

		<Footer />
	{/if}
</div>
