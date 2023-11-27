/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: "Syne",
        body: "Space Grotesk"
      },
      transition: {
        slow: {
          transitionProperty: "all",
          transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
          transitionDuration: "500ms"
        }
      },
      colors: {
        eerieBlack: "#1b2021ff",
        utOrange: "#ff8811ff",
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}

