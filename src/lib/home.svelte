<script lang="ts">
	import { _, locale } from 'svelte-i18n';
</script>

<div
	id="home"
	class="flex min-h-screen scroll-mt-20 flex-col justify-center bg-gradient-to-br from-zinc-50 via-indigo-300 to-zinc-50 px-[10%]"
>
	{#if $locale}
		<h1 class="mb-5 text-5xl leading-[1.1] font-bold md:text-8xl">
			{@html $_('home.title')}
		</h1>
		<p class="max-w-xl text-xl leading-relaxed text-gray-600">
			{@html $_('home.body')}
		</p>
	{:else}
		<p>Loading...</p>
	{/if}
</div>
