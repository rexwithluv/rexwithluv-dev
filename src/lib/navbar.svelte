<script lang="ts">
	import { page } from '$app/state';
	import { _, locale, locales } from 'svelte-i18n';
	import sections, { href, sectionFor } from './data/sections';
	import GlobeIcon from './globe-icon.svelte';

	let langOpen = $state(false);
	let menuOpen = $state(false);

	const current = $derived(sectionFor(page.url.pathname));
	// Shell-style breadcrumb: ~/rexwithluv.dev/about
	const crumb = $derived(current && current.path !== '/' ? current.path.replace(/\/$/, '') : '');

	const changeLanguage = (newLocale: string) => {
		$locale = newLocale;
		langOpen = false;
	};

	$effect(() => {
		// close the mobile menu whenever the route changes
		page.url.pathname;
		menuOpen = false;
	});
</script>

<!-- Rainbow strip: the active page's band grows -->
<div class="flex h-2 w-full" aria-hidden="true">
	{#each [...sections.map((s) => s.color), 'violet'] as color, i}
		<span
			class="flex-1 transition-[flex-grow] duration-500"
			style="background: var(--color-{color}); flex-grow: {current?.color === color ? 3 : 1}"
		></span>
	{/each}
</div>

<header class="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-5 md:px-10">
	<a href={href(sections[0])} class="group text-sm font-medium whitespace-nowrap">
		<span class="text-ink-soft">~/</span>rexwithluv.dev<span class="accent">{crumb}</span><span
			class="ml-0.5 inline-block h-4 w-2 translate-y-0.5 [animation:blink_1.1s_steps(1)_infinite] bg-[var(--accent)]"
		></span>
	</a>

	<button
		class="border border-ink px-2 py-1 text-xs md:hidden"
		onclick={() => (menuOpen = !menuOpen)}
		aria-expanded={menuOpen}
		aria-controls="main-nav"
	>
		{menuOpen ? '[x]' : '[menu]'}
	</button>

	<nav
		id="main-nav"
		class="{menuOpen
			? 'flex'
			: 'hidden'} absolute top-20 right-5 left-5 z-50 flex-col gap-1 border border-ink bg-paper p-3 shadow-[5px_5px_0_0_var(--accent)] md:static md:flex md:flex-row md:items-center md:gap-1 md:border-0 md:bg-transparent md:p-0 md:shadow-none"
	>
		{#each sections as section, i}
			{@const active = current?.id === section.id}
			<a
				href={href(section)}
				data-color={section.color}
				aria-current={active ? 'page' : undefined}
				class="px-2.5 py-1.5 text-sm transition-colors {active
					? 'bg-[var(--accent)] text-paper'
					: 'hover:bg-[var(--accent-soft)]'}"
			>
				<span class="opacity-60">{String(i).padStart(2, '0')}</span>
				{$_(`navbar.${section.id}`).toLowerCase()}
			</a>
		{/each}

		<div class="relative md:ml-3">
			<button
				onclick={() => (langOpen = !langOpen)}
				class="flex cursor-pointer items-center gap-1.5 px-2.5 py-1.5 text-sm hover:bg-[var(--accent-soft)]"
				aria-haspopup="true"
				aria-expanded={langOpen}
			>
				<GlobeIcon />
				<span class="text-xs">{$locale?.split('-')[0]}</span>
			</button>

			{#if langOpen}
				<div class="absolute right-0 z-50 mt-2 w-24 border border-ink bg-paper" role="menu">
					{#each $locales as lang}
						<button
							onclick={() => changeLanguage(lang)}
							class="block w-full px-3 py-1.5 text-left text-sm hover:bg-[var(--accent-soft)] {$locale?.startsWith(
								lang
							)
								? 'accent font-bold'
								: ''}"
							role="menuitem"
						>
							{$locale?.startsWith(lang) ? '>' : ' '}
							{lang}
						</button>
					{/each}
				</div>
			{/if}
		</div>
	</nav>
</header>
