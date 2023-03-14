/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx,jsx,js}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        'lexend': ['Lexend', 'sans-serif'],
      },
      rotate: {
        '4': '4deg',
        '5': '5deg',
        '7': '7deg',
        '8': '8deg',
      }
    },
  },
  plugins: [],
};
