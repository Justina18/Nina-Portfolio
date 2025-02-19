/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        teal: '#1A535C',
        pink: '#EC368D',
        turquoise: '#3CC8C8',
      },
    },
  },
  plugins: [],
};