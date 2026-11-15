import { base } from '$app/paths';
import type { Section } from '../interfaces';

const sections: Section[] = [
	{ id: 'home', path: '/', color: 'red' },
	{ id: 'projects', path: '/projects/', color: 'orange' },
	{ id: 'skills', path: '/skills/', color: 'yellow' },
	{ id: 'about-me', path: '/about-me/', color: 'green' },
	{ id: 'socials', path: '/contact/', color: 'blue' },
	{ id: 'archive', path: '/archive/', color: 'violet' }
];

export const href = (section: Section): string => base + section.path;

export const sectionFor = (pathname: string): Section | undefined => {
	const path = pathname.startsWith(base) ? pathname.slice(base.length) || '/' : pathname;
	return sections.find((s) => (s.path === '/' ? path === '/' : path.startsWith(s.path)));
};

export default sections;
