<script lang="ts">
	const technicalGroups: { category: string; skills: string[] }[] = [
		{
			category: 'Frontend',
			skills: ['Svelte', 'React', 'Vue', 'TypeScript', 'Tailwind CSS', 'HTML5', 'CSS3', 'Bootstrap']
		},
		{
			category: 'Backend',
			skills: ['Node.js', 'Spring Boot', 'Python', 'Java']
		},
		{
			category: 'Infra & Tools',
			skills: ['Docker', 'Linux', 'Git', 'Kubernetes', 'CI/CD Basics', 'MariaDB', 'MongoDB']
		}
	];

	const creativeSkills: { title: string; desc: string }[] = [
		{
			title: 'Arquitectura Modular',
			desc: 'Organización del código en piezas independientes para facilitar su mantenimiento.'
		},
		{
			title: 'Sostenibilidad y Revisión',
			desc: 'Foco en la legibilidad y en la mejora constante para evitar deuda técnica.'
		},
		{
			title: 'Resolución Metódica',
			desc: 'Enfoque paso a paso para desgranar problemas, apoyado en la documentación y la lógica.'
		},
		{
			title: 'Mentalidad de Aprendizaje',
			desc: 'Curiosidad constante y capacidad de investigar nuevas herramientas ante cada reto.'
		}
	];
</script>

<div
	id="skills"
	class="reveal flex min-h-[60vh] scroll-mt-20 flex-col justify-center px-[10%] py-20"
>
	<h2 class="mb-16 text-4xl font-bold">Skills</h2>

	<div class="grid grid-cols-1 gap-16 lg:grid-cols-2">
		<div class="space-y-10">
			{#each technicalGroups as group}
				<div>
					<h3
						class="mb-5 flex items-center gap-2 text-xs font-bold tracking-[0.2em] text-indigo-500 uppercase"
					>
						<span class="h-1.5 w-1.5 rounded-full bg-indigo-500"></span>
						{group.category}
					</h3>
					<div class="flex flex-wrap gap-x-6 gap-y-3">
						{#each group.skills as skill}
							<span class="text-xl font-light text-gray-700">{skill}</span>
						{/each}
					</div>
				</div>
			{/each}
		</div>

		<div class="rounded-2xl border border-gray-100 bg-gray-50/50 p-8 backdrop-blur-sm">
			<h3 class="mb-8 text-xs font-bold tracking-[0.2em] text-indigo-500 uppercase">
				Creative Mindset
			</h3>
			<div class="flex flex-col gap-8">
				{#each creativeSkills as craft}
					<div>
						<h4 class="text-lg font-bold text-gray-800">{craft.title}</h4>
						<p class="text-sm leading-relaxed text-gray-500 italic">
							{craft.desc}
						</p>
					</div>
				{/each}
			</div>
		</div>
	</div>
</div>
