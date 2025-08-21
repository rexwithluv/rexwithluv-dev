<script lang="ts">
	import ProjectCard from '$lib/components/projects/ProjectCard.svelte'
	import projects from '$lib/components/projects/projects'
</script>

<div class="page-content">
	<h1>Proyectos</h1>
	<h2>
		Aquí encontrarás una muestra de mi trabajo, desde pequeños experimentos con diversas tecnologías
		hasta proyectos personales. Me gusta programar en mi tiempo libre, y este espacio refleja mis
		intereses y las habilidades que he cultivado.
	</h2>

	<div class="cards">
		{#each projects as project}
			<ProjectCard {project}></ProjectCard>
		{/each}
	</div>
</div>

<style>
	.cards {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		gap: 2rem;
	}
</style>
