import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

// Versión publicada, la pasa el CI al hacer docker build. En local queda 'dev'.
const version = process.env.APP_VERSION || 'dev';
if (version !== 'dev' && !/^\d+\.\d+\.\d+$/.test(version)) {
	throw new Error(`APP_VERSION no válida: "${version}" (se espera X.Y.Z)`);
}

export default defineConfig({
	plugins: [tailwindcss(), sveltekit()],
	define: { __APP_VERSION__: JSON.stringify(version) }
});
