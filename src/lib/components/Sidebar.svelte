<script lang="ts">
	import { ChevronLeft, ChevronRight } from '@lucide/svelte'

	let { isSidebarOpen, toggleSidebar } = $props()
</script>

<div class="sidebar" class:is-open={isSidebarOpen}>
	<div class="header">
		<button onclick={toggleSidebar}>
			{#if isSidebarOpen}
				<ChevronLeft />
			{:else}
				<ChevronRight />
			{/if}
		</button>
	</div>
	<div class="content">
		<ul>
			<li><a href="/">Inicio</a></li>
			<li><a href="/projects">Proyectos</a></li>
			<li><a href="/skills">Habilidades</a></li>
			<li><a href="/about-me">Sobre mí</a></li>
			<li><a href="/socials">Redes sociales</a></li>
		</ul>
	</div>
</div>

<style>
	button {
		background-color: transparent;
		border: none;
		cursor: pointer;
		color: var(--off-white);
	}

	.content {
		text-align: center;
		padding: 1rem;
	}

	.content a {
		display: block;
		padding: 0.5rem 1rem;
		border-radius: 5px;
		text-decoration: none;
		text-transform: uppercase;
		color: var(--off-white);
	}

	.content a:hover {
		background-color: var(--raisin-black);
	}

	.content ul {
		list-style-type: none;
		padding: 0;
		margin: 0;
	}

	.sidebar {
		position: fixed;
		top: 0;
		left: 0;
		width: var(--sidebar-full-width);
		height: 100%;
		background-color: var(--violet-purple);
		transform: translateX(calc(-100% + var(--sidebar-reduced-width)));
		transition: transform 0.3s ease;
		z-index: 100;
		box-shadow: 2px 0 10px rgba(0, 0, 0, 0.2);

		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	.sidebar.is-open {
		transform: translateX(0);
	}

	.header {
		position: absolute;
		top: 0;
		right: 0;
		padding: 1rem;
	}
</style>
