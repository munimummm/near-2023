/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    '../../packages/ui/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        theme: {
          main: '#312e81',
          main_dark: '#1e1b4b',
          main_light: '#3730a3',
        },
        text: {
          black1: '#242424',
          gray: '#A3A3A3',
          gray2: '#E0E0E0',
          red: '#CC3B3B',
          white: '#FFFFFF',
        },
        bg: {
          blue1: '#EEF2FF',
          blue2: '#E0E7FF',
          gray1: '#F0F1F2',
          white: '#FFFFFF',
        },
        gray: {
          1: '#E1E1E1',
          2: '#F0F1F2',
          3: '#F9F9F9',
        },
        black: '#000000',
        white: '#FFFFFF',
      },
    },
  },
  plugins: [],
};
