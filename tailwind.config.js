/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        ...colors,
        'neon-cyan': '#00f0ff',
        'neon-purple': '#c084fc',
        'neon-blue': '#3b82f6',
        'neon-green': '#34d399',
      },
    },
  },
  plugins: [],
};
