import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  // Load env vars from the current directory
  envDir: ".",
  // Ensure production bundles are fully minified
  build: {
    target: "es2017",
    cssMinify: true,
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        passes: 2,
        dead_code: true,
        pure_getters: true,
      },
      mangle: true,
      format: { comments: false },
    },
    reportCompressedSize: true,
  },
  esbuild: {
    // Drop debugging statements in production
    drop: ["console", "debugger"],
  },
  server: {
    port: 3000,
    proxy: {
      // Proxy backend API during development
      "/api": {
        target: "http://localhost:8000",
        changeOrigin: true,
        secure: false,
      },
    },
  },
});