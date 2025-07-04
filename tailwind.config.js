/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background:"#000",
        text:"#eab539",//eab539
        muted_yellow:"#d1a832",
        muted_black:"#121212",
        purple:"#b586f8"
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
