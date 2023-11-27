/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
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
      screens: {
        mobile: '480px',
        // => @media (min-width: 480px) { ... }
        tablet: '768px',
        // => @media (min-width: 768px) { ... }
        desktop: '1440px',
        // => @media (min-width: 1440px) { ... }
      },
      maxWidth: {
        mw: '1440px',
      },
      boxShadow: {
        button: '0px 2px 4px 0px rgb(52 60 68 / 0.16)',
        card: '0px 4px 15px rgb(128 128 128 / 0.10)',
        'card-hover': '0px 3px 16px 0px rgb(0 0 0 / 0.25)',
        modal: '0px 0px 30px 2px rgb(0 0 0 / 0.25)',
      },
    },
  },
  plugins: [],
};
