<script lang="ts">
	import type { Project } from './interfaces';

	let { project }: { project: Project } = $props();
</script>

<a
	href={project.url}
	target="_blank"
	class="group flex flex-col border-b border-gray-300 pb-8 transition-all duration-500 hover:border-indigo-500"
>
	<h3
		class="mb-3 text-2xl font-bold tracking-tight transition-transform duration-300 group-hover:translate-x-1"
	>
		{project.name}
	</h3>

	<p class="mb-6 flex-grow text-lg leading-relaxed text-gray-600">
		{project.desc}
	</p>

	<div class="flex flex-wrap gap-2">
		{#each project.techStack as tech}
			<span class="text-[10px] tracking-widest text-gray-400 uppercase group-hover:text-indigo-500">
				{tech}
			</span>
		{/each}
	</div>
</a>
