<script lang="ts">
	import { _ } from 'svelte-i18n';
	const year: number = new Date().getFullYear();
</script>

<footer
	class="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-2 px-5 pt-16 pb-8 text-xs text-ink-soft md:px-10"
>
	<span>© {year} aarón alonso</span>
	<span class="italic">{$_('footer')}</span>
</footer>
