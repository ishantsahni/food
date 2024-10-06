/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        slateGrey: "#F3F3F4",
        skyBlue: "#87CEEB",
        darkSkyBlue: "#448EE4",
        crimson: "#CB0736",
        nero: "#252525",
      },
      fontFamily: {
        dinCondensed: ['"DIN Condensed"', 'sans-serif'],
        gillSans: ['GillSans', 'sans-serif'],
        Inter: "Inter",
        mulish: "Mulish",
      },
    },
  },
  plugins: [],
}

