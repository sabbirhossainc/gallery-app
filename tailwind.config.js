/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Montserrat","Poppins", "Raleway", "Open Sans", "sans-serif"],
        serif: ["Marcellus", "serif"],
      },
      backgroundImage:(theme) => ({
        'back_effect' : "url('https://pixabay.com/videos/ink-water-underwater-foam-smoke-67358/')",
      }),
    },
  },
  plugins: [],
}
