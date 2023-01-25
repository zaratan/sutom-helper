/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      transitionDuration: {
        5000: '5s',
      },
      fontFamily: {
        sans: ['var(--font-inter)', ...defaultTheme.fontFamily.sans],
        roboto: ['var(--font-roboto-medium)', ...defaultTheme.fontFamily.sans],
      },
      flexGrow: {
        2: 2,
        1.5: 1.5,
      },
      colors: {
        sutom: {
          gray: 'rgb(43, 43, 43)',
          blue: '#0077c7',
          yellow: '#ffbd00',
          red: '#e7002a',
          lightGray: 'rgb(112, 112, 112)',
        },
        ...defaultTheme.colors,
      },
    },
  },
  plugins: [],
};
