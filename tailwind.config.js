/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'theme': {
          1: '#C0D9F4',
          2: '#0A1C62',
          3: '#4A8BDF',
          4: '#A0006D'
        }
      }
    },
  },
  plugins: [],
}
