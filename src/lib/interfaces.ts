export interface Project {
	name: string;
	desc: string;
	techStack: string[];
	url: string;
}

export interface SocialNetwork {
	name: string;
	url: string;
}

export interface Skill {
	name: string;
	url: string;
}

export type RainbowColor = 'red' | 'orange' | 'yellow' | 'green' | 'blue' | 'violet';

export interface Section {
	id: string;
	path: string;
	color: RainbowColor;
}
