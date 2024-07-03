/** @type {import('tailwindcss').Config} */

const { nextui } = require('@nextui-org/react');

module.exports = {
  content: [
    './src/**/*.{html,jsx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInTop: {
          '0%': { opacity: '0', transform: 'translateY(-1%)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInRight: {
          '0%': { opacity: '0', transform: 'translateX(1%)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        fadeOut: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        fadeOutTop: {
          '0%': { opacity: '1', transform: 'translateY(0)' },
          '100%': { opacity: '0', transform: 'translateY(-1%)' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-in-out',
        fadeInTop: 'fadeInTop 0.5s ease-in-out',
        fadeInRight: 'fadeInRight 0.5s ease-in-out',
        fadeOut: 'fadeOut 0.5s ease-in-out',
        fadeOutTop: 'fadeOutTop 0.5s ease-in-out',
      },
    },
  },
  variants: {},
  darkMode: 'class',
  plugins: [nextui()],
};
