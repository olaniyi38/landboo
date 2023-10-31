/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {

      },
      gridColumn: {
        "overlay": "1 / 2 "
      },
      gridRow: {
        "overlay": " 1 / 2"
      }

    },
  },
  plugins: [],
}
