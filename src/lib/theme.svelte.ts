export type Theme = 'light' | 'dark';

const KEY = 'theme';
const root = () => document.documentElement;

export const theme = $state({ current: 'light' as Theme, color: '' });

const sync = () => {
	theme.current = root().dataset.theme === 'dark' ? 'dark' : 'light';
	theme.color = getComputedStyle(root()).getPropertyValue('--color-paper').trim();
};

const stored = (): string | null => {
	try {
		return localStorage.getItem(KEY);
	} catch {
		return null;
	}
};

export const setTheme = (next: Theme, remember = true) => {
	root().dataset.theme = next;
	if (remember) {
		try {
			localStorage.setItem(KEY, next);
		} catch {
			/* storage unavailable */
		}
	}
	sync();
};

export const initTheme = () => {
	sync();
	const media = matchMedia('(prefers-color-scheme: dark)');
	const onChange = (e: MediaQueryListEvent) => {
		if (!stored()) setTheme(e.matches ? 'dark' : 'light', false);
	};
	media.addEventListener('change', onChange);
	return () => media.removeEventListener('change', onChange);
};
