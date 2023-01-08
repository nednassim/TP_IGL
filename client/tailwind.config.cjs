/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        "blue-igl": "#0097D8"
      },
      backgroundImage: {
        'hero': "url('/hero.png')"
      }
    },
  },
  plugins: [],
};
