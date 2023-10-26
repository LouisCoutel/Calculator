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
      screens: {
        'xs-short': { 'raw': '(max-width: 639px) and (max-height: 500px)', },
        'xs-reg': { 'raw': '(max-width: 639px) and (min-height: 640px)', },
        'xs-tall': { 'raw': '(max-width: 639px) and (min-height: 800px)', },

        'sm-short': { 'raw': '(min-width: 640px) and (max-height: 639px)', },
        'sm-reg': { 'raw': '(min-width: 640px) and (min-height: 640px)', },
        'sm-tall': { 'raw': '(min-width: 640px) and (min-height: 1080px)', },

        'md-short': { 'raw': '(min-width: 768px) and (max-height: 639px)', },
        'md-reg': { 'raw': '(min-width: 768px) and (min-height: 640px)', },
        'md-tall': { 'raw': '(min-width: 768px) and (min-height: 1080px)', },

        'lg-short': { 'raw': '(min-width: 1024px) and (max-height: 639px)' },
        'lg-reg': { 'raw': '(min-width: 1024px) and (min-height: 640px)' },
        'lg-tall': { 'raw': '(min-width: 1024px) and (min-height: 1080px)' },

        'xl': '1280px',

        '2xl': '1536px',
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}

