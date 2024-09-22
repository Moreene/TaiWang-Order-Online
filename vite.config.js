import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import AutoImport from 'unplugin-auto-import/vite';

// https://vitejs.dev/config/
export default defineConfig({
  base:'/TaiWang-Order-Online/',
  plugins: [
    vue(),
    AutoImport({
      imports:[
        'vue',
        'vue-router',
        'pinia',
        {
          'axios':[
            ['default','axios'],
          ],
        },
      ],
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
});
