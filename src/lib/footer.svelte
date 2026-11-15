<script lang="ts">
	import { _ } from 'svelte-i18n';
	import socials from './data/socials';

	const year: number = new Date().getFullYear();
	const github = socials.find((s) => s.name === 'github')?.url;
</script>

<footer
	class="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-2 px-5 pt-16 pb-8 text-xs text-ink-soft md:px-10"
>
	<span>© {year}</span>

	<span>
		{$_('footer')}

		<span class="accent font-bold" aria-hidden="true">&lt;3</span><span class="sr-only"
			>{$_('footer-heart')}</span
		>

		<span lang="gl" class="italic">(e morriña pola miña terra)</span>

		{$_('footer-by')}

		<span class="accent font-bold">@rexwithluv</span>
	</span>
</footer>
