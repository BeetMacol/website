module.exports = {
  purge: [], // it was breaking css in production but it was like that: './pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: {
      'primary': '#1b1c1c',
      'secondary': '#232526',
      'tertiary': '#030303'
    },
    textColor: {
      'primary': '#e4e4e4',
      'highlight': '#9be4b4',
      'select': '#e6ffff'
    },
    extend: {}
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
