<script lang="ts">
	const year: number = new Date().getFullYear();

	const socials: string[] = ['GITHUB', 'LINKEDIN', 'EMAIL'];
</script>

<div id="socials" class="reveal flex min-h-[50vh] scroll-mt-20 flex-col justify-center px-[10%]">
	<h2 class="mb-10 text-4xl font-bold">Let's Connect</h2>
	<div class="flex flex-wrap gap-8">
		{#each socials as link}
			<a href="#" class="group relative text-xl font-bold text-[#5e60ce]">
				{link}
				<span
					class="absolute bottom-[-5px] left-0 h-[2px] w-0 bg-[#5e60ce] transition-all duration-300 group-hover:w-full"
				></span>
			</a>
		{/each}
	</div>
	<p class="mt-20 text-xs text-gray-600 italic opacity-40">
		© {year} — Diseñado con lógica, tejido con pasión.
	</p>
</div>
