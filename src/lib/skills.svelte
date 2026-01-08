<script lang="ts">
	const skills: string[] = [
		'JavaScript ES6+',
		'React.js',
		'Node.js',
		'Tailwind CSS',
		'Crochet Design'
	];
</script>

<div id="skills" class="reveal flex min-h-[60vh] scroll-mt-20 flex-col justify-center px-[10%]">
	<h2 class="mb-10 text-4xl font-bold">Skills</h2>
	<ul class="flex list-none flex-wrap gap-x-10 gap-y-5">
		{#each skills as skill}
			<li
				class="text-2xl font-light text-gray-400 after:ml-10 after:text-gray-200 after:content-['/'] last:after:content-['']"
			>
				{skill}
			</li>
		{/each}
	</ul>
</div>
