import { base } from '$app/paths';
import type { Section } from '../interfaces';

const sections: Section[] = [
	{ id: 'home', path: '/', color: 'red' },
	{ id: 'about-me', path: '/about-me/', color: 'orange' },
	{ id: 'projects', path: '/projects/', color: 'yellow' },
	{ id: 'skills', path: '/skills/', color: 'green' },
	{ id: 'socials', path: '/contact/', color: 'blue' }
];

export const href = (section: Section): string => base + section.path;

export const sectionFor = (pathname: string): Section | undefined => {
	const path = pathname.startsWith(base) ? pathname.slice(base.length) || '/' : pathname;
	return sections.find((s) => (s.path === '/' ? path === '/' : path.startsWith(s.path)));
};

export default sections;
