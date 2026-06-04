import { defineConfig } from 'vitest/config';

// Standalone Vitest config (kept separate from vite.config.ts, which carries the
// SvelteKit plugin). The current tests only import plain-TS data modules, so they
// need no Svelte/SvelteKit resolution — a minimal node environment is enough.
export default defineConfig({
	test: {
		include: ['src/**/*.{test,spec}.ts'],
		environment: 'node'
	}
});
