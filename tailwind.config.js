/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'xl': '1440px',
      'md': '1024px'
    },
    extend: {
      'almost-white': 'hsl(0, 0%, 98%)',
      'medium-grey': 'hsl(0, 0%, 41%)',
      'almost-black': 'hsl(0, 0%, 8%)'
    },
  },
  plugins: [],
}
