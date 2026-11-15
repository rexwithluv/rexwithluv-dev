<script lang="ts">
	import { _ } from 'svelte-i18n';
	import { setTheme, theme } from './theme.svelte';

	const dark = $derived(theme.current === 'dark');
</script>

<button
	type="button"
	onclick={() => setTheme(dark ? 'light' : 'dark')}
	class="flex h-8 w-8 cursor-pointer items-center justify-center transition-colors hover:bg-ink hover:text-paper"
	aria-label={$_('ui.dark-theme')}
	title={$_('ui.dark-theme')}
	aria-pressed={dark}
>
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="20"
		height="20"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		stroke-width="2"
		stroke-linecap="round"
		stroke-linejoin="round"
		aria-hidden="true"
	>
		{#if dark}
			<circle cx="12" cy="12" r="4" />
			<path
				d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"
			/>
		{:else}
			<path
				d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"
			/>
		{/if}
	</svg>
</button>
