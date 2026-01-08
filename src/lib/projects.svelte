<script lang="ts">
	interface Project {
		id: string;
		title: string;
		desc: string;
	}

	const projects: Project[] = [
		{ id: '01', title: 'Poké-Dashboard', desc: 'Visualizador de stats de Sinnoh y Alola.' },
		{ id: '02', title: 'Esoteric Commerce', desc: 'Tienda online para lecturas de Tarot.' },
		{ id: '03', title: 'Pattern Generator', desc: 'Algoritmo para patrones de ganchillo.' }
	];
</script>

<div id="projects" class="reveal flex min-h-[80vh] scroll-mt-20 flex-col justify-center px-[10%]">
	<h2 class="mb-10 text-4xl font-bold">Selected Projects</h2>
	<div class="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
		{#each projects as project}
			<div
				class="group cursor-pointer border-b border-gray-300 pb-5 transition-all duration-300 hover:translate-x-2 hover:border-[#5e60ce]"
			>
				<h3 class="mb-2 text-xl font-bold">{project.id} / {project.title}</h3>
				<p class="text-gray-500">{project.desc}</p>
			</div>
		{/each}
	</div>
</div>
