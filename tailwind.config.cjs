/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        minipax: ["Minipax", "sans-serif"],
      },
    },
    colors: {
      coral: "#e74132",
      gray: "#f8f8f8",
      black: "#0e1016",
      "dark-gray": "#151922",
      "stone-gray": "#8a8c91",
      white: "#ffffff",
    },
  },
  plugins: [],
};
