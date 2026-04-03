<script lang="ts">
	import { _, locale } from 'svelte-i18n';
	import ProjectCard from './project-card.svelte';
	import projects from './projects';
</script>

<div id="projects" class="reveal flex min-h-[80vh] scroll-mt-20 flex-col justify-center px-[10%]">
	{#if $locale}
		<h2 class="mb-12 text-4xl font-bold tracking-tight">{$_('projects.title')}</h2>

		<div class="project-grid grid grid-cols-1 gap-x-12 gap-y-16 md:grid-cols-2 lg:grid-cols-3">
			{#each projects as project}
				<ProjectCard project={{ ...project, desc: $_(`projects.${project.desc}`) }} />
			{/each}
		</div>
	{:else}
		<p>Loading...</p>
	{/if}
</div>
