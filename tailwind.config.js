/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],

  theme: {
    extend: {
      colors: {
        darkPurple: "hsl(270, 100%, 20%)",
        lightPurple: "hsl(278, 56%, 55%)",
        veryLightPurple: "hsl(270, 24%, 84%)",
        darkBlue: "hsl(230, 35%, 7%)"
      },
      gridColumn: {
        "overlay": "1 / 2 "
      },
      gridRow: {
        "overlay": " 1 / 2"
      },
      screens: {
        "xs": "350px"
      }

    },
  },
  plugins: [],
}
