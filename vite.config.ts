import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import {resolve} from 'path';

export default defineConfig({
  build: {
    outDir: './dist',
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      fileName: 'index',
      formats: ['es'],
    },
    target: ['esnext'],
  },
  resolve: {
    alias: {
      _types: resolve(__dirname, 'src/types'),
    },
  },
  plugins: [dts()],
});
