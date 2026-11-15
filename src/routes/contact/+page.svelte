<script lang="ts">
	import { _ } from 'svelte-i18n';
	import socials from '$lib/data/socials';
	import PageHeader from '$lib/page-header.svelte';

	const label = (url: string) => url.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '');
</script>

<svelte:head>
	<title>{$_('socials')} · rexwithluv.dev</title>
</svelte:head>

<PageHeader index={4} title={$_('socials')} />

<ul class="border-t-[1.5px] border-ink">
	{#each socials as link}
		<li class="border-b-[1.5px] border-ink">
			<a
				href={link.url}
				target="_blank"
				rel="noopener noreferrer me"
				class="group grid grid-cols-1 gap-1 px-2 py-5 transition-colors hover:bg-[var(--accent-bg)] hover:text-[var(--accent-on)] md:grid-cols-[14rem_1fr_auto] md:items-center"
			>
				<span class="font-display text-2xl font-bold md:text-3xl">{link.name}</span>
				<span class="text-sm break-all text-ink-soft group-hover:text-[var(--accent-on)]"
					>{label(link.url)}</span
				>
				<span
					aria-hidden="true"
					class="hidden transition-transform group-hover:translate-x-1 md:block">→</span
				>
			</a>
		</li>
	{/each}
</ul>
