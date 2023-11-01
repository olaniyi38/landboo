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
        darkPurple: "hsl(261, 100%, 44%)",
        lightPurple: "hsl(240, 100%, 88%)",
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
