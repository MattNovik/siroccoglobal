import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [autoprefixer()],
    },
    preprocessorOptions: {
      scss: {
        additionalData:
          '@import "./src/scss/variables.scss";\n@import "./src/scss/mixins.scss";',
      },
    },
  },
});
