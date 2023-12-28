/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        carattere: ["Carattere", "sans-serif"],
        script :["Dancing Script", "cursive"],
        roboto:["Roboto Condensed", "sans-serif"],
      },
    },
  },
  plugins: [],
};
