/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      neutral: {
        900: "#131325",
      },
      primary: {
        500: "#f5deb3"
      }
    }
  },
  plugins: [],
}

