import { defineConfig } from 'vitest/config';
import path from 'path';

export default defineConfig({
  test: {
    include: ['test/**/*.test.ts'],
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
    retry: 3,
  },
});
