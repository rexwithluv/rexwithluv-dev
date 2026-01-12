<script lang="ts">
	import type { Project } from './interfaces';
	import ProjectCard from './project-card.svelte';

	const projects: Project[] = [
		{
			name: 'NAGA-FCT',
			desc: 'A management system designed to track FCT (vocational training internships).',
			techStack: ['Spring Boot', 'Vue', 'TypeScript', 'MariaDB'],
			url: 'https://rexwithluv.dev/naga-fct'
		},
		{
			name: 'MongoVerba',
			desc: 'A minimalist web application for collecting and managing personal quotes.',
			techStack: ['NodeJS', 'ExpressJS', 'MongoDB', 'VueJS', 'TypeScript'],
			url: 'https://rexwithluv.dev/mongo-verba'
		},
		{
			name: 'ParkingVigo',
			desc: 'Real-time availability tracker for parking spaces across Vigo.',
			techStack: ['Svelte', 'TypeScript', 'TailwindCSS'],
			url: 'https://rexwithluv.dev/parking-vigo'
		}
	];
</script>

<div id="projects" class="reveal flex min-h-[80vh] scroll-mt-20 flex-col justify-center px-[10%]">
	<h2 class="mb-12 text-4xl font-bold tracking-tight">Projects</h2>

	<div class="project-grid grid grid-cols-1 gap-x-12 gap-y-16 md:grid-cols-2 lg:grid-cols-3">
		{#each projects as project}
			<ProjectCard {project} />
		{/each}
	</div>
</div>
