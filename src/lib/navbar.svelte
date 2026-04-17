<script lang="ts">
	import { _, locale, locales } from 'svelte-i18n';
	import GlobeIcon from './globe-icon.svelte';

	let y: number = $state(0);
	let isOpen = $state(false);
	let isScrolled: boolean = $derived(y > 50);

	const pages: string[] = ['home', 'about', 'projects', 'skills', 'socials'];

	const toggleLangDropdown = () => (isOpen = !isOpen);

	const changeLanguage = (newLocale: string) => {
		$locale = newLocale;
		isOpen = false;
	};
</script>

<svelte:window bind:scrollY={y} />

<div
	class="fixed top-0 z-[1000] flex w-full items-center justify-between px-[10%] transition-all duration-500 ease-in-out {isScrolled
		? 'bg-indigo-200/70 py-4 shadow-sm backdrop-blur-md'
		: 'bg-transparent py-6'}"
>
	<div class="logo text-lg font-bold tracking-tighter uppercase"><a href="#home">rexwithluv.dev</a></div>
	<nav class="hidden space-x-9 md:flex">
		{#if $locale}
			{#each pages as page}
				<a href="#{page}" class="text-sm font-normal transition-colors hover:text-indigo-500">
					{$_(`navbar.${page}`)}
				</a>
			{/each}
		{:else}
			<p>Loading...</p>
		{/if}
		<div class="relative">
			<button
				onclick={toggleLangDropdown}
				class="flex cursor-pointer items-center gap-1 text-sm font-normal transition-colors hover:text-indigo-500"
				aria-haspopup="true"
				aria-expanded={isOpen}
			>
				<GlobeIcon />
				<span class="text-xs font-bold uppercase">{$locale?.split('-')[0]}</span>
			</button>

			{#if isOpen}
				<div
					class="ring-opacity-5 absolute right-0 mt-2 w-32 rounded-md border border-gray-100 bg-white shadow-lg ring-1 ring-black"
				>
					<div class="py-1" role="menu">
						{#each $locales as lang}
							<button
								onclick={() => changeLanguage(lang)}
								class="block w-full px-4 py-2 text-left text-sm text-gray-700 transition-colors hover:bg-indigo-50 hover:text-indigo-600 {$locale ===
								lang
									? 'font-bold text-indigo-500'
									: ''}"
								role="menuitem"
							>
								{lang.toUpperCase()}
							</button>
						{/each}
					</div>
				</div>
			{/if}
		</div>
	</nav>
</div>
