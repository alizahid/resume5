const colors = require('tailwindcss/colors')

module.exports = {
  darkMode: false,
  plugins: [],
  purge: ['./pages/**/*.js', './components/**/*.js', './styles/*.scss'],
  theme: {
    colors,
    extend: {
      colors: {
        primary: '#0d9488',
        'primary-dark': '#0f766e',
        'primary-light': '#14b8a6'
      }
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif']
    }
  },
  variants: {
    extend: {}
  }
}
