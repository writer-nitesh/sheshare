import type { Config } from "tailwindcss";
import { color } from "./src/application.json";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        primary: color.primary,
        secondary: color.secondary,
        accent: color.accent,
      },
      border: {
        primary: color.primary,
        secondary: color.secondary,
        accent: color.accent
      },
      colors: {
        primary: color.primary,
        secondary: color.secondary,
        accent: color.accent
      }
    },
  },
  plugins: [],
};
export default config;
