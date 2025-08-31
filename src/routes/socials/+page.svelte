<script lang="ts">
	import { SiGithub, SiInstagram, SiLinkerd, SiX } from '@icons-pack/svelte-simple-icons'
</script>

<div class="page-content">
	<h1>Redes Sociales</h1>
	<h2>
		Puedes encontrarme y seguir mi trabajo en las siguientes plataformas. Explora mis perfiles para
		ver los proyectos en los que trabajo y las cosas que me inspiran.
	</h2>

	<div class="cards">
		<div>
			<a
				href="https://linkedin.com/in/alonsoruedaaaron"
				target="_blank"
				rel="noopener noreferrer"
				class="social-card"
			>
				<img src="/icons/linkedin.png" alt="LinkedIn Logo" class="social-icon-img" />
				<h3 class="card-title">LinkedIn</h3>
			</a>
		</div>
		<div>
			<a
				href="https://github.com/rexwithluv"
				target="_blank"
				rel="noopener noreferrer"
				class="social-card"
			>
				<SiGithub size={40} />
				<h3 class="card-title">GitHub</h3>
			</a>
		</div>
		<div>
			<a
				href="https://www.instagram.com/rexwithluv/"
				target="_blank"
				rel="noopener noreferrer"
				class="social-card"
			>
				<SiInstagram size={40} />
				<h3 class="card-title">Instagram</h3>
			</a>
		</div>
		<div>
			<a
				href="https://x.com/rexwithluv"
				target="_blank"
				rel="noopener noreferrer"
				class="social-card"
			>
				<SiX size={40} />
				<h3 class="card-title">X</h3>
			</a>
		</div>
	</div>
</div>

<style>
	.social-card {
		background-color: var(--lavander-gray);
		border-radius: 12px;
		padding: 2rem;
		text-align: center;
		display: flex;
		flex-direction: column;
		align-items: center;
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
		transition: transform 0.2s ease-in-out;
		text-decoration: none;
		color: var(--raisin-black);
	}

	.social-card:hover {
		transform: translateY(-5px);
	}

	.card-title {
		font-family: var(--font-family-title);
		color: var(--violet-purple);
		font-size: 2rem;
		margin-bottom: 0.5rem;
		margin-top: 1rem;
	}

	.cards {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 0.5rem;
		justify-content: center;
		max-width: 1000px;
		width: 100%;
		padding: 0 1rem;
		box-sizing: border-box;
	}

	@media (max-width: 900px) {
		.cards {
			grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
			gap: 1rem;
		}
	}

	.social-icon-img {
		height: 40px;
		width: 40px;
	}
</style>
