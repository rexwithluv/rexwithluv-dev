import { base } from '$app/paths';
import type { Version } from '../interfaces';

const repo = 'https://github.com/rexwithluv/rexwithluv-dev';

const versions: Version[] = [
	{ id: 'v2', name: 'rainbow mono', from: '2026-11', tag: 'v2.0.0' },
	{ id: 'v1', from: '2026-01', to: '2026-11', tag: 'v1.0.0', url: base + '/v1/' },
	{ id: 'v0', from: '2025-08', tag: 'v0.6.0', url: `${repo}/tree/v0.6.0` }
];

export const tagUrl = (tag: string): string => `${repo}/releases/tag/${tag}`;

export default versions;
