import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  build: {
    target: 'production'
  },
  plugins: [react()],
  base: "/Login-Form-React",
});
