import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: "#061e14",
          green: "#00A54F",
          light: "#00ff88",
        },
      },
    },
  },
  plugins: [],
};
export default config;
