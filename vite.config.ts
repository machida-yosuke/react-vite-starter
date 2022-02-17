import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      jsxImportSource: '@emotion/react',
      babel: {
        plugins: ['@emotion/babel-plugin'],
      },
    }),
  ],
  server: {
    port: 3000,
  },
  base: './',
  resolve: {
    alias: {
      '~/': path.join(__dirname, 'src/'),
    },
  },
  build: {
    sourcemap: true,
  },
});
