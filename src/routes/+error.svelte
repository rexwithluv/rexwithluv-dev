<script lang="ts">
	import { base } from '$app/paths';
	import { page } from '$app/state';
	import { _ } from 'svelte-i18n';
</script>

<svelte:head>
	<title>{page.status} · rexwithluv.dev</title>
</svelte:head>

<section class="py-10">
	<p class="eyebrow mb-4">error {page.status}</p>
	<h1 class="font-display text-5xl font-extrabold tracking-tight md:text-8xl">
		{$_('not-found.title')}<span class="accent">.</span>
	</h1>
	<p class="mt-6 text-lg text-ink-soft">{$_('not-found.body')}</p>
	<a href={base + '/'} class="card mt-10 inline-block px-5 py-3 text-sm">← {$_('not-found.back')}</a
	>
</section>
