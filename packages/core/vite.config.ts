import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    cssCodeSplit: true,
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: [resolve(__dirname, 'src/index.ts'), resolve(__dirname, 'src/index.scss')],
      name: 'pagination-js-core',
      // the proper extensions will be added
      fileName: 'index'
    },
    outDir: 'lib'
  }
});
