/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-pink': '#C92C7A',
      },
      fontFamily: {
        'main-font': ['Cormorant SC', 'serif'],
      }
    }
  },
  plugins: [],
}

