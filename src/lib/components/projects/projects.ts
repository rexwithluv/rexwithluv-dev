import type { Project } from '$lib/types/Projects'

const projects: Project[] = [
	{
		name: 'Mongo Verba',
		url: 'https://rexwithluv.dev/mongo-verba/',
		description:
			'Simple web application to store quotes with minimalist frontend and ExpressJS & MongoDB backend.',
		stack: ['Node.js', 'Express.js', 'MongoDB', 'Vue.js', 'Docker', 'Kubernetes'],
		github: 'https://github.com/rexwithluv/mongo-verba',
	},
	{
		name: 'NAGA-FCT',
		url: 'https://rexwithluv.dev/naga/',
		description:
			'Una aplicación web permite a los docentes administrar y gestionar las FCT del alumnado de Ciclos Formativos.',
		stack: ['Java', 'Spring Boot', 'MariaDB', 'Docker', 'Vue.js', 'TypeScript'],
		github: 'https://github.com/rexwithluv/naga-fct',
	},
]

export default projects
