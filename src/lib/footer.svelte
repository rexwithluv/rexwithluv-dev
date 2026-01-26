<script lang="ts">
	import { _, locale } from 'svelte-i18n';
	const year: number = new Date().getFullYear();
</script>

<p class="pt-10 pb-7 text-center text-xs text-gray-600 italic opacity-40">
	{#if $locale}
		© {year} — {$_('footer')}
	{:else}
		Loading...
	{/if}
</p>
