
import { defineConfig } from 'vite';

export default defineConfig({
  base: '/', // explicit base path for user pages (root)
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  }
});
