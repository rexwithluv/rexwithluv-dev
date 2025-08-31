import type { Project } from '$lib/types/Projects'

const projects: Project[] = [
	{
		name: 'Mongo Verba',
		repoName: 'mongo-verba',
		techStack: ['Node.js', 'Express.js', 'MongoDB', 'Vue.js', 'Docker', 'Kubernetes'],
		imageName: 'mongo-verba',
	},
	{
		name: 'NAGA-FCT',
		repoName: 'naga-fct',
		techStack: ['Java', 'Spring Boot', 'MariaDB', 'Docker', 'Vue.js', 'TypeScript'],
		imageName: 'naga-fct',
	},
]

export default projects
