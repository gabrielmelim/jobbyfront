import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
});

// Adicione os scripts de construção e execução
export const scripts = {
  build: 'npm run build',
  start: 'npm start',
};
