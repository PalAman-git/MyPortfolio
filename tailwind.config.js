/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background:"#000",
        text:"#eab539",
        secondary:"#b586f8"
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        carattere: ["Carattere", "sans-serif"],
        script :["Dancing Script", "cursive"],
        roboto:["Roboto Condensed", "sans-serif"],
        bebas:["Bebas Neue", "cursive"],
      },
    },
  },
  plugins: [],
};
