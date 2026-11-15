<script lang="ts">
	import { page } from '$app/state';
	import { _ } from 'svelte-i18n';
	import sections, { href, sectionFor } from './data/sections';

	// Link to the next page in the rainbow, wrapping back to home.
	const next = $derived.by(() => {
		const current = sectionFor(page.url.pathname);
		const i = current ? sections.indexOf(current) : -1;
		return sections[(i + 1) % sections.length];
	});
</script>

<a
	href={href(next)}
	data-color={next.color}
	class="group mt-24 flex items-center justify-between border-t-[1.5px] border-[var(--accent)] pt-6"
>
	<span class="text-xs text-ink-soft">{$_('ui.next')}</span>
	<span
		class="font-display text-2xl font-bold transition-colors group-hover:text-[var(--accent)] md:text-4xl"
	>
		{$_(`navbar.${next.id}`).toLowerCase()}
		<span class="inline-block transition-transform group-hover:translate-x-2">→</span>
	</span>
</a>
