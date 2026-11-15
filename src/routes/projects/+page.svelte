<script lang="ts">
	import { _ } from 'svelte-i18n';
	import projects from '$lib/data/projects';
	import NextPage from '$lib/next-page.svelte';
	import PageHeader from '$lib/page-header.svelte';
	import ProjectCard from '$lib/project-card.svelte';
</script>

<svelte:head>
	<title>{$_('projects.title')} · rexwithluv.dev</title>
</svelte:head>

<PageHeader index={2} title={$_('projects.title')} />

<div class="grid grid-cols-1 gap-8 md:grid-cols-2">
	{#each projects as project, i}
		<ProjectCard index={i} project={{ ...project, desc: $_(`projects.${project.desc}`) }} />
	{/each}
</div>

<NextPage />
