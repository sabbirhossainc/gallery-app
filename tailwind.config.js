/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "Raleway", "Open Sans", "sans-serif"],
        serif: ["Marcellus", "serif"],
      },
    },
  },
  plugins: [],
}
