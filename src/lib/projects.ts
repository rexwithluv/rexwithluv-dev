import type { Project } from './interfaces';

const projects: Project[] = [
	{
		name: 'ProyectoPokémon',
		desc: 'proyecto-pokemon',
		techStack: ['HTML5', 'CSS3', 'JavaScript'],
		url: 'https://rexwithluv.dev/proyecto-pokemon'
	},
	{
		name: 'NAGA-FCT',
		desc: 'naga',
		techStack: ['Spring Boot', 'Vue', 'TypeScript', 'MariaDB'],
		url: 'https://github.com/rexwithluv/naga-fct'
	},
	{
		name: 'MongoVerba',
		desc: 'mongo-verba',
		techStack: ['NodeJS', 'ExpressJS', 'MongoDB', 'VueJS', 'TypeScript'],
		url: 'https://rexwithluv.dev/mongo-verba'
	},
	{
		name: 'ParkingVigo',
		desc: 'parking-vigo',
		techStack: ['Svelte', 'TypeScript', 'TailwindCSS'],
		url: 'https://rexwithluv.dev/parking-vigo'
	}
];

export default projects;
