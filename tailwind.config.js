/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gold: "#FFB145",
        justWhite: "#FFFFFF",
        justBlack: "#000000",
      },
      backgroundImage: {
        hero_bg: "url('/src/assets/hero_bg.png')",
        gradient_bg: "url('/src/assets/gradient-bg.png')",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        sevillana: ["Sevillana", "cursive"],
        spacegrotesk: ["SpaceGrotesk", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
  },
  plugins: [],
};
