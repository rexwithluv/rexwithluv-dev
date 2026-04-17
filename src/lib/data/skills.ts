import { type Skill } from '../interfaces';

const hardSkills: { category: string; skills: Skill[] }[] = [
	{
		category: 'Frontend',
		skills: [
			{ name: 'Svelte', url: 'https://svelte.dev' },
			{ name: 'React', url: 'https://react.dev' },
			{ name: 'Vue', url: 'https://vuejs.org' },
			{ name: 'TypeScript', url: 'https://www.typescriptlang.org' },
			{ name: 'Tailwind CSS', url: 'https://tailwindcss.com' },
			{ name: 'HTML5', url: 'https://html.spec.whatwg.org' },
			{ name: 'CSS3', url: 'https://www.w3.org/Style/CSS' },
			{ name: 'Bootstrap', url: 'https://getbootstrap.com' }
		]
	},
	{
		category: 'Backend',
		skills: [
			{ name: 'Node.js', url: 'https://nodejs.org' },
			{ name: 'Spring Boot', url: 'https://spring.io/projects/spring-boot' },
			{ name: 'Python', url: 'https://www.python.org' },
			{ name: 'Java', url: 'https://www.java.com' }
		]
	},
	{
		category: 'Infraestructura / Herramientas',
		skills: [
			{ name: 'Docker', url: 'https://www.docker.com' },
			{ name: 'Linux', url: 'https://www.linux.org' },
			{ name: 'Git', url: 'https://git-scm.com' },
			{ name: 'Kubernetes', url: 'https://kubernetes.io' },
			{ name: 'CI/CD', url: 'https://docs.github.com/en/actions' },
			{ name: 'MariaDB', url: 'https://mariadb.org' },
			{ name: 'MongoDB', url: 'https://www.mongodb.com' },
			{ name: 'Grafana', url: 'https://grafana.com' }
		]
	}
];

const softSkills: string[] = [
	'modular-architecture',
	'sustainability-review',
	'methodical-problem-solving',
	'growth-mindset'
];

export { softSkills, hardSkills };
