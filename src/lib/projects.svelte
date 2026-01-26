<script lang="ts">
	import { _, locale } from 'svelte-i18n';
	import type { Project } from './interfaces';
	import ProjectCard from './project-card.svelte';

	const projects: Project[] = [
		{
			name: 'NAGA-FCT',
			desc: 'naga',
			techStack: ['Spring Boot', 'Vue', 'TypeScript', 'MariaDB'],
			url: 'https://rexwithluv.dev/naga-fct'
		},
		{
			name: 'MongoVerba',
			desc: 'mongo-verba',
			techStack: ['NodeJS', 'ExpressJS', 'MongoDB', 'VueJS', 'TypeScript'],
			url: 'https://rexwithluv.dev/mongo-verba'
		},
		{
			name: 'ParkingVigo',
			desc: 'parking-vigo',
			techStack: ['Svelte', 'TypeScript', 'TailwindCSS'],
			url: 'https://rexwithluv.dev/parking-vigo'
		}
	];
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
