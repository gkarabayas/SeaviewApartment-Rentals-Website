/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Trebuchet MS"', 'Arial', 'Helvetica', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
