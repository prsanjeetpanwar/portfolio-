import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        playfair: ["var(--font-playfair)", "Georgia", "serif"],
        garamond: ["var(--font-garamond)", "Georgia", "serif"],
        josefin: ["var(--font-josefin)", "sans-serif"],
      },
      colors: {
        ink: "#0a0a0a",
        paper: "#f4f1ec",
        muted: "#8a8279",
        rule: "#cdc7bc",
        faint: "#e8e3da",
      },
      animation: {
        "fade-up": "fadeUp 0.8s cubic-bezier(0.22,1,0.36,1) both",
        "fade-in": "fadeIn 0.6s ease both",
        ticker: "ticker 28s linear infinite",
        blink: "blink 1s step-end infinite",
        "pulse-ring": "pulseRing 3s ease-out infinite",
        "slide-in-left": "slideInLeft 0.9s cubic-bezier(0.22,1,0.36,1) both",
        "slide-in-right": "slideInRight 0.9s cubic-bezier(0.22,1,0.36,1) both",
      },
      keyframes: {
        fadeUp: {
          from: { opacity: "0", transform: "translateY(28px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        ticker: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        pulseRing: {
          "0%": { opacity: "0.6", transform: "translate(-50%, -50%) scale(0.8)" },
          "100%": { opacity: "0", transform: "translate(-50%, -50%) scale(1.5)" },
        },
        slideInLeft: {
          from: { opacity: "0", transform: "translateX(-40px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        slideInRight: {
          from: { opacity: "0", transform: "translateX(40px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
