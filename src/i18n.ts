import { register, init, getLocaleFromNavigator } from 'svelte-i18n';

register('en', () => import('./locales/en.json'));
register('es', () => import('./locales/es.json'));
register('gl', () => import('./locales/gl.json'));

const supported = ['en', 'es', 'gl'];
const browser = getLocaleFromNavigator()?.split('-')[0] ?? '';

init({
	fallbackLocale: 'en',
	initialLocale: supported.includes(browser) ? browser : 'en',
	loadingDelay: 200
});
