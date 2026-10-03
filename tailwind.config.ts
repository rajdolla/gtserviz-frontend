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
          light: "#e6f6ec",
        }
      }
    },
  },
  plugins: [],
};
export default config;
