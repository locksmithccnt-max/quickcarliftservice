import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: "#0a0a0a",
          soft: "#111111",
        },
        surface: {
          DEFAULT: "#161616",
          raised: "#1a1a1a",
        },
        border: {
          DEFAULT: "#2a2a2a",
        },
        accent: {
          DEFAULT: "#e8b84b",
          hover: "#f0c765",
          soft: "#3a2e18",
        },
        foreground: {
          DEFAULT: "#f5f5f5",
          muted: "#a0a0a0",
          subtle: "#6b6b6b",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "1200px",
      },
      borderRadius: {
        xl: "0.875rem",
      },
    },
  },
  plugins: [],
};

export default config;
