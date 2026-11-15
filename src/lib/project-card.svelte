<script lang="ts">
	import type { Project } from './interfaces';

	let { project, index }: { project: Project; index: number } = $props();

	const host = $derived(
		new URL(project.url).host + new URL(project.url).pathname.replace(/\/$/, '')
	);
</script>

<a
	href={project.url}
	target="_blank"
	rel="noopener noreferrer"
	class="card group flex flex-col p-6"
>
	<div class="mb-6 flex items-center justify-between text-xs text-ink-soft">
		<span>[{String(index + 1).padStart(2, '0')}]</span>
		<span class="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
			>↗</span
		>
	</div>

	<h2 class="mb-3 font-display text-2xl font-bold tracking-tight">{project.name}</h2>

	<p class="mb-6 flex-grow text-sm leading-relaxed text-ink-soft">{project.desc}</p>

	<p class="accent mb-4 truncate text-xs">{host}</p>

	<div class="flex flex-wrap gap-1.5">
		{#each project.techStack as tech}
			<span class="tag">{tech.toLowerCase()}</span>
		{/each}
	</div>
</a>
