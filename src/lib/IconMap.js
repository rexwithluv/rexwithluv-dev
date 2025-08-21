import {
	SiDocker,
	SiExpress,
	SiKubernetes,
	SiMariadb,
	SiMongodb,
	SiNodedotjs,
	SiOpenjdk,
	SiSpringboot,
	SiTypescript,
	SiVuedotjs,
} from '@icons-pack/svelte-simple-icons'

const IconMap = {
	// Languages
	Java: SiOpenjdk,
	TypeScript: SiTypescript,

	// Frameworks
	'Spring Boot': SiSpringboot,
	'Express.js': SiExpress,
	'Vue.js': SiVuedotjs,

	// Tools
	MongoDB: SiMongodb,
	'Node.js': SiNodedotjs,
	MariaDB: SiMariadb,
	Docker: SiDocker,
	Kubernetes: SiKubernetes,
}

export default IconMap
