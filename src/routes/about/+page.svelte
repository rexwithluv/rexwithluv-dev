<script lang="ts">
	import { _ } from 'svelte-i18n';
	import NextPage from '$lib/next-page.svelte';
	import PageHeader from '$lib/page-header.svelte';

	const paragraphs = ['path', 'hobbies', 'crochet'] as const;
</script>

<svelte:head>
	<title>{$_('about-me.title').toLowerCase()} · rexwithluv.dev</title>
</svelte:head>

<PageHeader index={1} title={$_('about-me.title')} />

<div class="grid gap-10 md:grid-cols-[10rem_1fr]">
	{#each paragraphs as key, i}
		<p class="pt-1 text-xs text-ink-soft md:text-right">
			<span class="accent">#</span>{key}
		</p>
		<p class="prose-rich max-w-2xl text-base leading-[1.8] md:text-lg">
			{@html $_(`about-me.${key}`)}
		</p>
	{/each}
</div>

<NextPage />
