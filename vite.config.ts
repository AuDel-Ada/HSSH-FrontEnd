import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

import type { UserConfig as VitestUserConfigInterface } from 'vitest/config';

// https://vitejs.dev/config/

const vitestConfig: VitestUserConfigInterface = {
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './test-setup.ts',
  },
};

export default defineConfig({
  plugins: [react(), svgr()],
  test: vitestConfig.test,
});
