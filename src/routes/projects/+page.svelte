<script lang="ts">
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	import type { Project } from '$lib/types/Projects';

	const projects: Project[] = [
		{
			name: 'Mongo Verba',
			url: 'https://rexwithluv.dev/mongo-verba/',
			description:
				'Simple web application to store quotes with minimalist frontend and ExpressJS & MongoDB backend.',
			stack: ['Node.js', 'Express.js', 'MongoDB', 'Vue.js', 'Docker', 'Kubernetes'],
			github: 'https://github.com/rexwithluv/mongo-verba'
		}
	];
</script>

<div class="page-content">
	<h1>Proyectos</h1>
	<h2>
		Aquí encontrarás una muestra de mi trabajo, desde pequeños experimentos con diversas tecnologías
		hasta proyectos personales. Me gusta programar en mi tiempo libre, y este espacio refleja mis
		intereses y las habilidades que he cultivado.
	</h2>

	{#each projects as project}
		<ProjectCard {project}></ProjectCard>
	{/each}
</div>

<style>
	.page-content {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		min-height: calc(100vh - 4rem);
		text-align: center;
		padding: 2rem;
	}

	h1,
	h2 {
		font-family: var(--font-family-title);
	}

	h2 {
		font-weight: 400;
		max-width: 600px;
	}

	.projects-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(200pc, 1fr));
		gap: 2rem;
	}

	.status-indicator {
		width: 12px;
		height: 12px;
		border-radius: 50%;
		display: inline-block;
		margin-left: 0.5rem;
	}

	.status-indicator.online {
		background-color: green;
	}

	.status-indicator.offline {
		background-color: red;
	}
</style>
