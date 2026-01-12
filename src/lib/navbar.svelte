<script lang="ts">
	let y: number = $state(0);
	let isScrolled: Boolean = $derived(y > 50);

	const pages: string[] = ['home', 'about', 'projects', 'skills', 'socials'];
</script>

<svelte:window bind:scrollY={y} />

<div
	class="fixed top-0 z-[1000] flex w-full items-center justify-between px-[10%] transition-all duration-500 ease-in-out {isScrolled
		? 'bg-white/80 py-4 shadow-sm backdrop-blur-md'
		: 'bg-transparent py-6'}"
>
	<div class="logo text-lg font-bold tracking-tighter uppercase">rexwithluv.dev</div>
	<nav class="hidden space-x-9 md:flex">
		{#each pages as page}
			<a
				href="#{page}"
				class="text-sm font-normal capitalize transition-colors hover:text-[#5e60ce]"
			>
				{page}
			</a>
		{/each}
	</nav>
</div>
