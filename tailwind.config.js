const colors = require('tailwindcss/colors')

module.exports = {
  darkMode: false,
  plugins: [],
  purge: ['./pages/**/*.js', './components/**/*.js', './styles/*.scss'],
  theme: {
    colors,
    extend: {},
    fontFamily: {
      mono: ['Roboto Mono', 'sans-serif'],
      sans: ['Inter', 'sans-serif']
    }
  },
  variants: {
    extend: {}
  }
}
