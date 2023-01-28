/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gold: "#FFB145",
        justWhite: "#FFFFFF",
        justBlack: "#000000",
        footerColor: "#505050",
        darkTexts: "#141112",
      },
      backgroundImage: {
        hero_bg: "url('/src/assets/hero_bg.png')",
        hero_bg_mobile: "url('/src/assets/BANNER_HERO_MOBILE.png')",
        gradient_bg: "url('/src/assets/gradient-bg.png')",
        gradient_bg_mobile: "url('/src/assets/GRADIENT_BG_MOBILE.png')",
        gradient_footer: "url('/src/assets/gradient-footer.png')",
        gradient_footer_mobile: "url('/src/assets/FOOTER_BG_MOBILE.png')",
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
