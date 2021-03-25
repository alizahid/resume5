const colors = require('tailwindcss/colors')

module.exports = {
  darkMode: false,
  plugins: [],
  purge: ['./pages/**/*.js', './components/**/*.js', './styles/*.scss'],
  theme: {
    colors,
    extend: {},
    fontFamily: {
      sans: ['Circular', 'system-ui', 'sans-serif']
    }
  },
  variants: {
    extend: {}
  }
}
