/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      gridTemplateColumns: {
        'property-details': 'minmax(300px, 1fr) minmax(200px, 300px)',
      },
    },
  },
  plugins: [],
};