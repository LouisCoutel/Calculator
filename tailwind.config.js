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
      textColor: {
        "eerie-black": "#1b2021ff",
        "ut-orange": "#ff8811ff",
        "gray": "#797b84ff",
        "dark-gray": "#2C2C2C"
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}

