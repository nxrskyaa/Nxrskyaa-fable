import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0E0A07",
        paper: "#FEFEFE",
        brand: {
          DEFAULT: "#18498B",
          600: "#18498B",
          700: "#143b72",
          50: "#eef4fb",
        },
        muted: "#565656",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      borderRadius: {
        xl: "0.875rem",
        "2xl": "1rem",
        "3xl": "1.5rem",
      },
      boxShadow: {
        card: "0 1px 2px rgba(14,10,7,0.04), 0 8px 24px rgba(14,10,7,0.06)",
        "card-hover": "0 2px 4px rgba(14,10,7,0.06), 0 18px 48px rgba(14,10,7,0.12)",
        glass: "0 8px 40px rgba(14,10,7,0.10), inset 0 1px 0 rgba(255,255,255,0.6)",
        soft: "0 1px 3px rgba(14,10,7,0.05)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "0.8" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        shimmer: "shimmer 2.5s linear infinite",
        pulseGlow: "pulseGlow 4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
