<script lang="ts">
	import {
		SiBootstrap,
		SiCss,
		SiDocker,
		SiExpress,
		SiGit,
		SiHtml5,
		SiJavascript,
		SiKubernetes,
		SiLinux,
		SiMariadb,
		SiMongodb,
		SiMysql,
		SiNodedotjs,
		SiOpenjdk,
		SiPython,
		SiReact,
		SiSass,
		SiSpringboot,
		SiSvelte,
		SiTypescript,
		SiVuedotjs,
	} from '@icons-pack/svelte-simple-icons'
	import { Cloud, Code, GitFork } from '@lucide/svelte'
</script>

<div class="page-content">
	<h1>Habilidades</h1>
	<h2 class="sub-heading">
		Un vistazo a las herramientas que uso para construir mis proyectos, desde el frontend al backend
		y la infraestructura.
	</h2>

	<div class="skills-grid">
		<div class="skill-card">
			<Code size={48} color="var(--violet-purple)" />
			<h3 class="card-title">Frontend</h3>
			<p>Svelte, Vue.js, JavaScript, TypeScript, HTML, CSS, SCSS, Bootstrap, React</p>
			<div class="icon-group">
				<SiSvelte size={30} color="var(--violet-purple)" title="Svelte" />
				<SiVuedotjs size={30} color="var(--violet-purple)" title="Vue.js" />
				<SiJavascript size={30} color="var(--violet-purple)" title="JavaScript" />
				<SiTypescript size={30} color="var(--violet-purple)" title="TypeScript" />
				<SiHtml5 size={30} color="var(--violet-purple)" title="HTML" />
				<SiCss size={30} color="var(--violet-purple)" title="CSS" />
				<SiSass size={30} color="var(--violet-purple)" title="SCSS" />
				<SiBootstrap size={30} color="var(--violet-purple)" title="Bootstrap" />
				<SiReact size={30} color="var(--violet-purple)" title="React" />
			</div>
		</div>

		<div class="skill-card">
			<GitFork size={48} color="var(--violet-purple)" />
			<h3 class="card-title">Backend</h3>
			<p>Node.js, Express.js, Python, Java, Spring Boot</p>
			<div class="icon-group">
				<SiNodedotjs size={30} color="var(--violet-purple)" title="Node.js" />
				<SiExpress size={30} color="var(--violet-purple)" title="Express.js" />
				<SiPython size={30} color="var(--violet-purple)" title="Python" />
				<SiOpenjdk size={30} color="var(--violet-purple)" title="Java" />
				<SiSpringboot size={30} color="var(--violet-purple)" title="Spring Boot" />
			</div>
		</div>

		<div class="skill-card">
			<GitFork size={48} color="var(--violet-purple)" />
			<h3 class="card-title">Bases de datos</h3>
			<p>MariaDB, MySQL, MongoDB</p>
			<div class="icon-group">
				<SiMariadb size={30} color="var(--violet-purple)" title="MariaDB" />
				<SiMysql size={30} color="var(--violet-purple)" title="MySQL" />
				<SiMongodb size={30} color="var(--violet-purple)" title="MongoDB" />
			</div>
		</div>

		<div class="skill-card">
			<Cloud size={48} color="var(--violet-purple)" />
			<h3 class="card-title">DevOps & Cloud</h3>
			<p>Docker, Kubernetes, Linux, Git</p>
			<div class="icon-group">
				<SiDocker size={30} color="var(--violet-purple)" title="Docker" />
				<SiKubernetes size={30} color="var(--violet-purple)" title="Kubernetes" />
				<SiLinux size={30} color="var(--violet-purple)" title="Linux" />
				<SiGit size={30} color="var(--violet-purple)" title="Git" />
			</div>
		</div>
	</div>
</div>

<style>
	.sub-heading {
		max-width: 600px;
		font-family: var(--font-family-body);
		font-size: 1.2rem;
		margin-top: 0;
		margin-bottom: 3rem;
		font-style: italic;
	}

	.skills-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
		gap: 2rem;
		max-width: 1000px;
		width: 100%;
		padding: 0 1rem;
		box-sizing: border-box;
	}

	@media (min-width: 900px) {
		.skills-grid {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	.skill-card {
		background-color: var(--lavander-gray);
		border-radius: 12px;
		padding: 2rem;
		text-align: center;
		display: flex;
		flex-direction: column;
		align-items: center;
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
		transition: transform 0.2s ease-in-out;
	}

	.skill-card:hover {
		transform: translateY(-5px);
	}

	.card-title {
		font-family: var(--font-family-title);
		color: var(--violet-purple);
		font-size: 2rem;
		margin-bottom: 0.5rem;
	}

	.skill-card p {
		font-size: 1rem;
		color: var(--raisin-black);
	}

	.icon-group {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 1rem;
		margin-top: 1rem;
	}
</style>
