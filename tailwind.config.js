/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        aquamarine: {
          50: '#f0fefb',
          100: '#ccfdf2',
          200: '#99fae4',
          300: '#5eefd2',
          400: '#2ee0bc',
          500: '#47e5bc',
          600: '#0d9e88',
          700: '#0f7f6e',
          800: '#116759',
          900: '#13554a',
          950: '#04322e',
        },
        icterine: {
          50: '#fcfee8',
          100: '#f8ffc7',
          200: '#fcff6c',
          300: '#f9ff47',
          400: '#f5ff22',
          500: '#ecf508',
          600: '#ccd304',
          700: '#a1a407',
          800: '#83830f',
          900: '#6f6f13',
          950: '#3d3e02',
        },
      },
      fontFamily: {
        sans: [
          'Inter',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
    },
  },
  plugins: [],
};