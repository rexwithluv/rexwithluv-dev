<script lang="ts">
	import { Github, Globe } from '@lucide/svelte';
	import axios from 'axios';
	import { onMount } from 'svelte';

	let { project } = $props();

	let isOnline: boolean = $state(false);
	let screenshotUrl: string = 'https://placehold.co/600x400';

	async function getProjectIsOnline(url: string): Promise<boolean> {
		try {
			const response = await axios.get(url);
			return response.status === 200;
		} catch (error) {
			return false;
		}
	}

	onMount(async () => {
		isOnline = await getProjectIsOnline(project.url);
	});
</script>

<div class="project-card">
	<div class="image-container">
		<img src={screenshotUrl} alt={`Screenshot of ${project.name}`} />
	</div>

	<div class="content">
		<div class="header">
			<h3>{project.name}</h3>
			<span class="status-indicator" class:online={isOnline}></span>
		</div>
		<p class="description">{project.description}</p>
		<div class="stack-list">
			{#each project.stack as tech}
				<span class="tech-tag">{tech}</span>
			{/each}
		</div>
	</div>

	<div class="actions">
		{#if isOnline}
			<a href={project.url} target="_blank" rel="noopener noreferrer" class="btn">
				<Globe size={20} />
				Demo
			</a>
		{/if}
		<a href={project.github} target="_blank" rel="noopener noreferrer" class="btn">
			<Github size={20} />
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
		transition: transform 0.2s ease-in-out;
	}

	.project-card:hover {
		transform: translateY(-5px);
		box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
	}

	.image-container {
		width: 100%;
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
	}

	.status-indicator {
		width: 12px;
		height: 12px;
		border-radius: 50%;
		background-color: #ccc;
	}

	.status-indicator.online {
		background-color: #28a745;
	}

	.actions {
		display: flex;
		gap: 1rem;
		padding: 1.5rem;
		border-top: 1px solid #eee;
		margin-top: auto;
	}

	.btn {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		text-decoration: none;
		color: var(--raisin-black);
		font-weight: bold;
	}
</style>
