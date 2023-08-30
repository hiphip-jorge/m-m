/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx,jsx,js}"],
  darkMode: "class",
  theme: {
    screens: {
      'sm': '400px',
      // => @media (min-width: 400px) { ... }
      'md': '640px',
      // => @media (min-width: 640px) { ... }
      'lg': '812px',
      // => @media (min-width: 812px) { ... } 
      'xl': '1024px',
      // => @media (min-width: 1024px) { ... }
      '2xl': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      gridTemplateRows: {
        'masonry': 'masonry',
      },
      fontFamily: {
        lexend: ["Lexend", "sans-serif"],
        playfair: ["Playfair Display SC", "serif"]
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
