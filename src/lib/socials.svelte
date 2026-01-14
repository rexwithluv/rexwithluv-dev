<script lang="ts">
	import type { SocialNetwork } from './interfaces';

	const socials: SocialNetwork[] = [
		{ name: 'github', url: 'https://github.com/rexwithluv' },
		{ name: 'linkedin', url: 'https://www.linkedin.com/in/alonsoruedaaaron/' },
		{ name: 'instagram', url: 'https://www.instagram.com/rexwithluv/' },
		{ name: 'mastodon', url: 'https://neopaquita.es/@rexwithluv' },
		{ name: 'email', url: 'mailto:r.alonsoaaron@gmail.com' }
	];
</script>

<div id="socials" class="reveal flex min-h-[50vh] scroll-mt-20 flex-col justify-center px-[10%]">
	<h2 class="mb-10 text-4xl font-bold">Let's Connect</h2>
	<div class="flex flex-wrap gap-8">
		{#each socials as link}
			<a href={link.url} class="group relative text-xl font-bold text-indigo-500 uppercase">
				{link.name}
				<span
					class="absolute bottom-[-5px] left-0 h-[2px] w-0 bg-indigo-500 transition-all duration-300 group-hover:w-full"
				></span>
			</a>
		{/each}
	</div>
</div>
