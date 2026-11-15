<script lang="ts">
	import { page } from '$app/state';
	import { _, locale, locales } from 'svelte-i18n';
	import sections, { href, sectionFor } from './data/sections';
	import GlobeIcon from './globe-icon.svelte';

	let langOpen = $state(false);
	let menuOpen = $state(false);
	let langButton: HTMLButtonElement | undefined = $state();
	let langBox: HTMLDivElement | undefined = $state();
	let menuButton: HTMLButtonElement | undefined = $state();
	let nav: HTMLElement | undefined = $state();

	const PAUSE_KEY = 'cursor-paused';
	let cursorPaused = $state(false);
	$effect(() => {
		try {
			cursorPaused = localStorage.getItem(PAUSE_KEY) === '1';
		} catch {
			/* storage unavailable: keep blinking */
		}
	});
	const toggleCursor = () => {
		cursorPaused = !cursorPaused;
		try {
			localStorage.setItem(PAUSE_KEY, cursorPaused ? '1' : '0');
		} catch {
			/* ignore */
		}
	};

	const current = $derived(sectionFor(page.url.pathname));
	const crumb = $derived(current && current.path !== '/' ? current.path.replace(/\/$/, '') : '');

	const changeLanguage = (newLocale: string) => {
		$locale = newLocale;
		langOpen = false;

		langButton?.focus();
	};

	const onKeydown = (e: KeyboardEvent) => {
		if (e.key !== 'Escape') return;
		if (langOpen) {
			langOpen = false;
			langButton?.focus();
		} else if (menuOpen) {
			const focusInside = nav?.contains(document.activeElement);
			menuOpen = false;
			if (focusInside) menuButton?.focus();
		}
	};

	const onNavFocusOut = (e: FocusEvent) => {
		const next = e.relatedTarget as Node | null;
		if (menuOpen && next && !nav?.contains(next) && next !== menuButton) menuOpen = false;
	};

	const onClick = (e: MouseEvent) => {
		if (langOpen && langBox && !langBox.contains(e.target as Node)) langOpen = false;
	};

	$effect(() => {
		page.url.pathname;
		menuOpen = false;
	});
</script>

<svelte:window onkeydown={onKeydown} onclick={onClick} />

<div class="flex h-2 w-full" aria-hidden="true">
	{#each [...sections.map((s) => s.color), 'violet'] as color, i}
		<span
			class="flex-1 transition-[flex-grow] duration-500"
			style="background: var(--color-{color}); flex-grow: {current?.color === color ? 3 : 1}"
		></span>
	{/each}
</div>

<header
	class="mx-auto flex max-w-6xl items-center justify-between gap-2 px-5 py-5 md:gap-4 md:px-10"
>
	<div class="flex items-center">
		<a href={href(sections[0])} class="py-1 text-xs font-medium whitespace-nowrap md:text-sm">
			<span class="hidden text-ink-soft min-[360px]:inline">~/</span>rexwithluv.dev<span
				class="accent">{crumb}</span
			>
		</a>
		<button
			type="button"
			class="flex h-6 w-6 cursor-pointer items-center justify-start pl-0.5"
			aria-label={$_('ui.cursor-pause')}
			title={$_('ui.cursor-pause')}
			aria-pressed={cursorPaused}
			onclick={toggleCursor}
		>
			<span
				aria-hidden="true"
				class="inline-block h-4 w-2 bg-[var(--accent-deco)] {cursorPaused
					? ''
					: '[animation:blink_1.1s_steps(1)_infinite]'}"
			></span>
		</button>
	</div>

	<div class="flex items-center gap-1">
		<button
			bind:this={menuButton}
			class="cursor-pointer border border-ink px-2 py-1 text-xs transition-colors hover:bg-ink hover:text-paper lg:hidden"
			onclick={() => (menuOpen = !menuOpen)}
			aria-label={$_('ui.menu')}
			aria-expanded={menuOpen}
			aria-controls="main-nav"
		>
			<span aria-hidden="true">{menuOpen ? '[x]' : `[${$_('ui.menu')}]`}</span>
		</button>

		<nav
			bind:this={nav}
			onfocusout={onNavFocusOut}
			id="main-nav"
			aria-label={$_('ui.main-nav')}
			class="{menuOpen
				? 'flex'
				: 'hidden'} absolute top-20 right-5 left-5 z-50 flex-col gap-1 border border-ink bg-paper p-3 shadow-[5px_5px_0_0_var(--accent-deco)] lg:static lg:flex lg:flex-row lg:items-center lg:gap-1 lg:border-0 lg:bg-transparent lg:p-0 lg:shadow-none"
		>
			{#each sections as section, i}
				{@const active = current?.id === section.id}
				<a
					href={href(section)}
					data-color={section.color}
					aria-current={active ? 'page' : undefined}
					class="group px-2.5 py-1.5 text-sm transition-colors {active
						? 'bg-[var(--accent-bg)] text-[var(--accent-on)]'
						: 'hover:bg-[var(--accent-soft)]'}"
				>
					<span aria-hidden="true" class={active ? '' : 'text-ink-soft group-hover:text-ink'}
						>{String(i).padStart(2, '0')}</span
					>
					{$_(`navbar.${section.id}`).toLowerCase()}
				</a>
			{/each}
		</nav>

		<div class="relative lg:ml-3" bind:this={langBox}>
			<button
				bind:this={langButton}
				onclick={() => (langOpen = !langOpen)}
				class="flex cursor-pointer items-center gap-1.5 px-2.5 py-1.5 text-sm hover:bg-[var(--accent-soft)]"
				aria-label="{$_('ui.language')}: {$locale?.split('-')[0]}"
				aria-expanded={langOpen}
				aria-controls="lang-list"
			>
				<GlobeIcon />
				<span class="text-xs">{$locale?.split('-')[0]}</span>
			</button>

			{#if langOpen}
				<ul id="lang-list" class="absolute right-0 z-50 mt-2 w-24 border border-ink bg-paper">
					{#each $locales as lang}
						<li>
							<button
								{lang}
								aria-current={$locale?.startsWith(lang) ? 'true' : undefined}
								onclick={() => changeLanguage(lang)}
								class="block w-full px-3 py-1.5 text-left text-sm hover:bg-[var(--accent-soft)] {$locale?.startsWith(
									lang
								)
									? 'accent font-bold'
									: ''}"
							>
								<span aria-hidden="true">{$locale?.startsWith(lang) ? '>' : ' '}</span>
								{lang}
							</button>
						</li>
					{/each}
				</ul>
			{/if}
		</div>
	</div>
</header>
