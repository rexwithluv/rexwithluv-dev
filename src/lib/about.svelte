<script lang="ts">
	import { _, locale } from 'svelte-i18n';
</script>

<div id="about" class="reveal flex min-h-screen scroll-mt-20 flex-col justify-center px-[10%]">
	{#if $locale}
		<h2 class="mb-10 text-4xl font-bold">{$_(`about-me.title`)}</h2>
		<div class="max-w-3xl space-y-6 text-lg leading-relaxed text-gray-800 md:text-xl">
			<p>{@html $_(`about-me.path`)}</p>

			<p>{@html $_(`about-me.hobbies`)}</p>

			<p>{@html $_(`about-me.crochet`)}</p>
		</div>
	{:else}
		<p>Loading...</p>
	{/if}
</div>
