// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        siteGreen: "#8CC542", // Custom green
      },
    },
  },
  plugins: [],
};

export default config;
