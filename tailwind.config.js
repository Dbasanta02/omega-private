const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/layouts/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        neon: {
          green: '#39FFBE',
          blue: '#437EFF',
          pink: '#FF3CBB',
        },
        omega: {
          base: '#000000',
          surface: '#111111',
          accent: '#1e1e1e',
        }
      },
      fontFamily: {
        sans: ['Inter', ...fontFamily.sans],
      },
      boxShadow: {
        glow: '0 0 10px #39FFBE, 0 0 20px #437EFF',
        innerGlow: 'inset 0 0 10px #437EFF',
      },
      animation: {
        flicker: 'flicker 3s infinite linear',
      },
      keyframes: {
        flicker: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.4 },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
