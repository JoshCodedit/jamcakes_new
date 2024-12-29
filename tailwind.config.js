/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-pink': '#FAC3DB',
      },
      fontFamily: {
        'main-font': ['Cormorant SC', 'serif'],
        'tangerine': ['Tangerine', 'cursive'],
      }
    }
  },
  plugins: [],
}

