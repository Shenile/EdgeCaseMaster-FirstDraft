/** @type {import('tailwindcss').Config} */

const plugin = require('tailwind-scrollbar');


export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./public/index.html", // Ensure all relevant files are covered
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
        surface: {
          a0: '#121212',
          a10: '#1E1E1E',
          a20: '#232323',
          a30: '#252525',
          a40: '#272727',
          a50: '#2C2C2C',
          a60: '#2E2E2E',
          a70: '#333333',
          a80: '#363636',
          a90: '#383838',
        },
        navy: {
          DEFAULT: '#1A2A44', // Main navy
          light: '#2E3B5B',   // Lighter navy
          dark: '#0D1B31',    // Dark navy
        },

        // Rich Accent Colors
        gold: '#D4AF37',       // Gold color
        emerald: '#2E8B57',    // Emerald Green
        burgundy: '#800020',   // Burgundy
        lavender: '#9B4D96',   // Lavender
        silver: '#C0C0C0',     // Silver
        ivory: '#FFFFF0',      // Ivory (Soft White)
        copper: '#B87333',     // Copper
        charcoal: '#333333',   // Charcoal gray
      },
      fontFamily: {
        code: ['JetBrains Mono', 'Fira Code', 'Source Code Pro', 'monospace'],
        clock: ['Orbitron', 'Roboto Mono', 'Press Start 2P', 'monospace'],
        cards: ['Inter', 'Roboto', 'Nunito', 'sans-serif'],
        heading: ['Poppins', 'Montserrat', 'Archivo', 'sans-serif'],
        button: ['Roboto', 'Inter', 'Poppins', 'sans-serif'],
      },
      screens: {
        'xs': '280px', // Custom breakpoint for extra small screens
      },
    },
  },
  plugins: [plugin],

  // To get the scrollbars Rounded
  variants: {
    scrollbar: ['rounded'], // Enable rounded variants
  },
};