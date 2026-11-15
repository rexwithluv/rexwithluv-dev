<script lang="ts">
	let { index, title }: { index: number; title: string } = $props();
</script>

<header class="mb-14 md:mb-20">
	<p class="eyebrow mb-4">{String(index).padStart(2, '0')}</p>
	<h1 class="font-display text-4xl leading-[1.05] font-bold tracking-tight md:text-7xl">
		{title}<span class="accent">.</span>
	</h1>
</header>
