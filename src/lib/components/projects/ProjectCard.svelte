<script lang="ts">
	import IconMap from '$lib/IconMap'
	import { SiGithub } from '@icons-pack/svelte-simple-icons'
	import { Globe } from '@lucide/svelte'
	import axios from 'axios'
	import { onMount } from 'svelte'
	import StatusIndicator from './StatusIndicator.svelte'
	import type { Project } from '$lib/types/Projects'

	let { project }: { project: Project } = $props()

	let projectIsOnline: boolean = $state(false)
	let screenshotUrl: string = 'https://placehold.co/600x400'

	async function getProjectIsOnline(url: string): Promise<boolean> {
		try {
			const response = await axios.get(url)
			return response.status === 200
		} catch (error) {
			return false
		}
	}

	onMount(async () => {
		if (import.meta.env.DEV) {
			projectIsOnline = Math.random() < 0.5
		} else {
			projectIsOnline = await getProjectIsOnline(project.url)
		}
	})
</script>

<div class="project-card">
	<div class="image-container">
		<img src={screenshotUrl} alt={`Screenshot of ${project.name}`} />
	</div>

	<div class="content">
		<div class="header">
			<h3>{project.name}</h3>
			<StatusIndicator isOnline={projectIsOnline} />
		</div>

		<p class="description">{project.description}</p>

		<div class="tech-stack">
			{#each project.stack as tech}
				{@const Icon = IconMap[tech as keyof typeof IconMap]}
				<div class="tech">
					<Icon />
					<span>{tech}</span>
				</div>
			{/each}
		</div>
	</div>

	<div class="actions">
		{#if projectIsOnline}
			<a href={project.url} target="_blank" rel="noopener noreferrer" class="btn">
				<Globe size={20} />
				Demo
			</a>
		{/if}
		<a href={project.github} target="_blank" rel="noopener noreferrer" class="btn">
			<SiGithub />
			GitHub
		</a>
	</div>
</div>

<style>
	.project-card {
		background-color: white;
		border-radius: 10px;
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
		overflow: hidden;
		display: flex;
		flex-direction: column;
		transition:
			transform 0.2s ease-in-out,
			box-shadow 0.2s ease-in-out;
	}

	.project-card:hover {
		transform: translateY(-5px);
		box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
	}

	.image-container {
		height: 200px;
		overflow: hidden;
	}

	.image-container img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.content {
		padding: 1.5rem;
		display: flex;
		flex-direction: column;
		flex-grow: 1;
	}

	.header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 0.5rem;
	}

	h3 {
		margin: 0;
		font-size: 1.5rem;
		color: var(--raisin-black);
	}

	.description {
		color: #666;
		margin: 0;
		font-size: 0.9rem;
		flex-grow: 1;
	}

	.tech-stack {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 1rem;
		text-align: center;
		padding-top: 1.6rem;
	}

	.tech {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.tech span {
		display: block;
		text-align: center;
		margin-top: 0.5rem;
	}

	.actions {
		display: flex;
		justify-content: center;
		padding: 1.5rem;
		gap: 2rem;
		border-top: 1px solid #eee;
	}

	.actions a {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		text-decoration: none;
		color: var(--raisin-black, #2a2a2a);
		font-weight: bold;
		transition: color 0.2s ease-in-out;
	}

	.actions a:hover {
		color: var(--primary-color, #007bff);
	}
</style>
