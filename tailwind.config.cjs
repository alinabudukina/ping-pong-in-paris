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
      gray: "#eff0f2",
      white: "#ffffff",
    },
  },
  plugins: [],
};
