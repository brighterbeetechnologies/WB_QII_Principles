import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
	plugins: [react()],
	base: './',
	build: {
		outDir: 'dist',
		rollupOptions: {
			output: {

				entryFileNames: 'assets/[name].js',   // JavaScript file name
				chunkFileNames: 'assets/[name].js',   // For code split chunks
				assetFileNames: 'assets/[name].[ext]', // For CSS or other assets
			},
		},

	}, optimizeDeps: {
		include: ['swiper'],
	},
});