/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    // fontFamily: 'Roboto Mono, monospace',
    extend: {
      container: {
        center: true,
        padding: '2rem',
      },
      fontFamily: {
        pizza: 'Roboto Mono, monospace',
      },
    },
  },
  plugins: [],
};
