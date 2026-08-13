import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  base: 'bigs-instruction',

  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@use "variables" as *;',
        loadPaths: ['src/styles'],
      },
    },
  },
});