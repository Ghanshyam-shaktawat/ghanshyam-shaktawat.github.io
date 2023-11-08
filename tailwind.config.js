/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'blue': '#5271FF',
      'white': '#ffffff',
      'dark-blue': '#141C3A',
      'black': '#000',
    },

    fontFamily: {
      noto: ['Noto Sans', 'sans-serif']
    },
    
    extend: {
      fontSize: {
        '5xl': '2.8rem'
      },
      padding: {
        'wide': '5rem'
      }
    },
  },
  plugins: [],
}