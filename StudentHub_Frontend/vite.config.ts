import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  // Load env vars from the repo root (one level up)
  envDir: "..",
  server: {
    port: 3000,
  },
});
