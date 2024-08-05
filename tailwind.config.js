/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'spin-once': 'spin-once 1s linear',
      },
      keyframes: {
        'spin-once': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      colors: {
        'scrollbar-thumb': '#6b7280', 
        'scrollbar-track': '#f3f4f6', 
        greenCustom: {
          DEFAULT: '#66D624',
          '50': '#ECF9E5',
          '100': '#D9F3CC',
          '200': '#AEE799',
          '300': '#82DB66',
          '400': '#66D624',
          '500': '#4AA01B',
          '600': '#387613',
          '700': '#254C0A',
          '800': '#132202',
          '900': '#000000',
        },
      },
      scrollbar: ['rounded'],
      fontFamily: {
        'code': ['Fira Code', 'monospace']
      }, 
      screens: {
        'xs': '380px', // Define the custom breakpoint for extra small screens
      },
    },
  },
  plugins: [],
}