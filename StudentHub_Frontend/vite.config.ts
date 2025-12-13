import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [react(), tailwindcss()], // This plugin handles .tsx files
  server: {
    port: 3000, // Run dev server on port 3000
  },
  // ... other configurations
});