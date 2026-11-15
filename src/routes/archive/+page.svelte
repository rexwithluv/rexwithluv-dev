<script lang="ts">
	import { _, locale } from 'svelte-i18n';
	import versions, { tagUrl } from '$lib/data/versions';
	import PageHeader from '$lib/page-header.svelte';

	const month = (ym: string) => {
		const [y, m] = ym.split('-').map(Number);
		return new Intl.DateTimeFormat($locale ?? 'es', { month: 'short', year: 'numeric' }).format(
			new Date(y, m - 1)
		);
	};
</script>

<svelte:head>
	<title>{$_('navbar.archive')} · rexwithluv.dev</title>
</svelte:head>

<PageHeader title={$_('navbar.archive')} />

<p class="-mt-6 mb-12 max-w-2xl text-base leading-relaxed text-ink-soft md:-mt-10 md:text-lg">
	{$_('archive.intro')}
</p>

<ol class="border-t-[1.5px] border-ink">
	{#each versions as version}
		{@const live = !version.url}
		{@const external = version.url?.startsWith('http')}
		<li
			class="grid grid-cols-1 gap-3 border-b-[1.5px] border-ink px-2 py-6 md:grid-cols-[10rem_1fr_auto] md:items-center md:gap-8"
		>
			<div>
				<h2 class="font-display text-3xl font-bold md:text-4xl">
					{version.id}<span class="accent">.</span>
				</h2>
				{#if version.name}
					<p lang="en" class="mt-1 text-xs text-ink-soft">{version.name}</p>
				{/if}
			</div>

			<div class="max-w-2xl">
				<p class="text-xs text-ink-soft">
					<time datetime={version.from}>{month(version.from)}</time>
					{#if live || version.to}
						–
						{#if version.to}
							<time datetime={version.to}>{month(version.to)}</time>
						{:else}
							{$_('archive.now')}
						{/if}
					{/if}
					·
					<a href={tagUrl(version.tag)} target="_blank" rel="noopener noreferrer" class="underline"
						>{version.tag}</a
					>
				</p>
				<p class="mt-2 text-sm leading-relaxed md:text-base">{$_(`archive.${version.id}`)}</p>
			</div>

			{#if live}
				<p class="accent text-sm font-bold">
					<span aria-hidden="true">&gt;</span>
					{$_('archive.live')}
				</p>
			{:else}
				<a
					href={version.url}
					target={external ? '_blank' : undefined}
					rel={external ? 'noopener noreferrer' : undefined}
					data-sveltekit-reload={external ? undefined : true}
					class="justify-self-start border border-ink px-3 py-1.5 text-sm whitespace-nowrap transition-colors hover:bg-[var(--accent-bg)] hover:text-[var(--accent-on)]"
				>
					{external ? $_('archive.code') : $_('archive.visit')}
					<span aria-hidden="true">{external ? '↗' : '→'}</span>
				</a>
			{/if}
		</li>
	{/each}
</ol>
