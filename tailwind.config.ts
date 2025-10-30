import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Core grayscale palette
        charcoal: "#121212",
        light: "#E0E0E0",
        medium: "#B0B0B0",
        dark: "#444444",
        soft: "#888888",

        // Semantic aliases used across the app
        background: "#121212",
        secondary: "#E0E0E0",
        "dark-subtle": "rgba(224, 224, 224, 0.5)",
        "light-subtle": "rgba(18, 18, 18, 0.5)",
        "highlight-dark": "#E0E0E0",
        "highlight-light": "#E0E0E0",
      }
    },
    screens: {
      xm: { max: "400px" },
      sm: { min: "401px", max: "768px" },
      md: { min: "769px", max: "1024px" },
      lg: { min: "1025px", max: "1490px" },
      xl: { min: "1491px" },
    }
  },
  plugins: [],
};
export default config;
