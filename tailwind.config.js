/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'levcamp': {
          orange: '#FF7043',
          green: '#2E7D32',
          cream: '#FFF8E1',
          sky: '#81D4FA',
          brown: '#795548'
        }
      }
    },
  },
  plugins: [],
};