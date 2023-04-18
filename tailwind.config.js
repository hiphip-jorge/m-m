/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx,jsx,js}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        lexend: ["Lexend", "sans-serif"],
      },
      rotate: {
        4: "4deg",
        5: "5deg",
        7: "7deg",
        8: "8deg",
      },
      dropShadow: {
        photoStack: "0 25px 50px -12px rgb(0 0 0 / .75)",
      },
    },
  },
  plugins: [],
};
