/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,md,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,md,mdx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./content/**/*.{md,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        bg0: "#FFFFFF", bg1: "#F8FAFC", bg2: "#E2E8F0",
        text: "#0F172A", muted: "#475569", border: "#CBD5E1",
        primary: "#6E4AE2", primaryd: "#3C2C78",
        accent: "#00F5A0", accentd: "#00C9A7",
        info: "#00D8FF", success: "#27D17F", warn: "#FFC857", danger: "#FF5C7C"
      },
      boxShadow: {
        skin1: "0 1px 2px rgba(0,0,0,.15)",
        skin2: "0 12px 32px rgba(15,23,42,.18)",
        glowAccent: "0 0 0 6px rgba(0,245,160,.18)"
      },
      transitionTimingFunction: {
        standard: "cubic-bezier(.2,0,0,1)",
        emphIn: "cubic-bezier(0,0,.2,1)",
        emphOut: "cubic-bezier(.4,0,1,1)",
        springy: "cubic-bezier(.2,1,.3,1)"
      },
      transitionDuration: { fast: "120ms", base: "180ms", slow: "260ms" },
      borderRadius: { "2xl": "1rem" }
    }
  },
  plugins: []
};
