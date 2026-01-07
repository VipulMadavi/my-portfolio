
import { defineConfig } from 'vite';

export default defineConfig({
    base: './', // relative base path to ensure flexibility
    build: {
        outDir: 'dist',
        assetsDir: 'assets',
    }
});
