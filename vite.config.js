// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/krishnaraj-portfolio/', // IMPORTANT: match your repo name
  plugins: [react()],
});
