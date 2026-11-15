<script lang="ts">
	import { _ } from 'svelte-i18n';
	import sections, { href } from '$lib/data/sections';

	const rest = sections.filter((s) => s.id !== 'home');
</script>

<svelte:head>
	<title>rexwithluv.dev</title>
</svelte:head>

<section class="grid gap-16 md:min-h-[60vh] md:grid-cols-[1.4fr_1fr] md:items-end">
	<div>
		<p class="eyebrow mb-6">hello, world</p>
		<h1 class="font-display text-5xl leading-[1.02] font-extrabold tracking-tight md:text-8xl">
			{@html $_('home.title')}
		</h1>
		<p class="prose-rich mt-8 max-w-xl text-base leading-relaxed text-ink-soft md:text-lg">
			{@html $_('home.body')}
		</p>
	</div>

	<nav aria-label={$_('ui.index')}>
		<p class="mb-3 text-xs text-ink-soft">$ ls ./{$_('ui.index')}</p>
		<ul class="border-t-[1.5px] border-ink">
			{#each rest as section, i}
				<li data-color={section.color} class="border-b-[1.5px] border-ink">
					<a
						href={href(section)}
						class="group flex items-center gap-4 px-2 py-4 transition-colors hover:bg-[var(--accent)] hover:text-paper"
					>
						<span class="h-3 w-3 shrink-0 bg-[var(--accent)] group-hover:bg-paper"></span>
						<span class="text-xs opacity-60">{String(i + 1).padStart(2, '0')}</span>
						<span class="flex-1 text-lg">{$_(`navbar.${section.id}`).toLowerCase()}</span>
						<span class="transition-transform group-hover:translate-x-1">→</span>
					</a>
				</li>
			{/each}
		</ul>
	</nav>
</section>
