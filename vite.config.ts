import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import viteCompression from 'vite-plugin-compression';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: ['styled-components', '@emotion/babel-plugin'],
      },
    }),
    dts({
      // tsconfigPath: 'tsconfig.app.json',
      entryRoot: 'src',
      outDir: 'dist',
      insertTypesEntry: true,
    }),
    viteCompression(),
  ],
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
  build: {
    lib: {
      entry: 'src/index.ts',
      name: 'UiElm',
      formats: ['es', 'umd'],
      fileName: (format) => `eui.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
});
