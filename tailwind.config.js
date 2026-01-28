/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'primary': '#114455',
        'primary-dark': '#0a2d39',
        'secondary': '#DBDFE6',
        'accent': '#493A1D',
        'accent-light': '#5a4a2a',
        'dark': '#030B0E',
        'success': '#28A745',
        'warning': '#FFC107',
        'info': '#17A2B8',
        'error': '#D72334',
      },
      fontFamily: {
        'urbanist': ['Urbanist', 'sans-serif'],
        'afacad': ['Afacad Flux', 'monospace'],
      },
      animation: {
        'slide-in-right': 'slideInRight 0.8s ease-out forwards',
        'slide-in-left': 'slideInLeft 0.8s ease-out forwards',
        'slide-in-up': 'slideInUp 0.7s ease-out forwards',
        'slide-in-down': 'slideInDown 0.7s ease-out forwards',
        'fade-in': 'fadeIn 1s ease-out forwards',
        'zoom-in': 'zoomIn 0.8s ease-out forwards',
        'float': 'float 3s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
