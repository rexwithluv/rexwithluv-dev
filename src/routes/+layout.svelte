<script lang="ts">
	import { asset } from '$app/paths';
	import { page } from '$app/state';
	import { _, isLoading, locale } from 'svelte-i18n';
	import '../i18n';
	import { sectionFor } from '$lib/data/sections';
	import Footer from '$lib/footer.svelte';
	import Navbar from '$lib/navbar.svelte';
	import { initTheme, theme } from '$lib/theme.svelte';
	import './layout.css';

	let { children } = $props();

	const color = $derived(sectionFor(page.url.pathname)?.color ?? 'violet');

	$effect(initTheme);

	$effect(() => {
		if ($locale) document.documentElement.lang = $locale.split('-')[0];

		document.documentElement.dataset.color = color;
	});
</script>

<svelte:head>
	{#if theme.color}<meta name="theme-color" content={theme.color} />{/if}
	<link rel="icon" type="image/png" sizes="32x32" href={asset('/favicon-32.png')} />
	<link rel="icon" type="image/svg+xml" href={asset('/favicon.svg')} />
	<link rel="apple-touch-icon" href={asset('/apple-touch-icon.png')} />
</svelte:head>

<div data-color={color} class="flex min-h-dvh flex-col">
	{#if !$isLoading}
		<a
			href="#content"
			class="sr-only z-50 border border-ink bg-paper px-3 py-2 text-sm focus:not-sr-only focus:absolute focus:top-4 focus:left-4"
			>{$_('ui.skip')}</a
		>

		<Navbar />

		<main
			id="content"
			tabindex="-1"
			class="mx-auto w-full max-w-6xl flex-1 px-5 pt-10 outline-none md:px-10 md:pt-20"
		>
			{#key page.url.pathname}
				<div class="page-enter">
					{@render children()}
				</div>
			{/key}
		</main>

		<Footer />
	{/if}
</div>
