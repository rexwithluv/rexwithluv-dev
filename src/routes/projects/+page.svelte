<script lang="ts">
	import ProjectCard from '$lib/components/ProjectCard.svelte'
	import type { Project } from '$lib/types/Projects'

	const projects: Project[] = [
		{
			name: 'Mongo Verba',
			url: 'https://rexwithluv.dev/mongo-verba/',
			description:
				'Simple web application to store quotes with minimalist frontend and ExpressJS & MongoDB backend.',
			stack: ['Node.js', 'Express.js', 'MongoDB', 'Vue.js', 'Docker', 'Kubernetes'],
			github: 'https://github.com/rexwithluv/mongo-verba',
		},
		{
			name: 'NAGA-FCT',
			url: 'https://rexwithluv.dev/naga/',
			description:
				'Una aplicación web permite a los docentes administrar y gestionar las FCT del alumnado de Ciclos Formativos.',
			stack: ['Java', 'Spring Boot', 'MariaDB', 'Docker', 'Vue.js', 'TypeScript'],
			github: 'https://github.com/rexwithluv/naga-fct',
		},
	]
</script>

<div class="page-content">
	<h1>Proyectos</h1>
	<h2>
		Aquí encontrarás una muestra de mi trabajo, desde pequeños experimentos con diversas tecnologías
		hasta proyectos personales. Me gusta programar en mi tiempo libre, y este espacio refleja mis
		intereses y las habilidades que he cultivado.
	</h2>

	<div>
		{#each projects as project}
			<ProjectCard {project}></ProjectCard>
		{/each}
	</div>
</div>
