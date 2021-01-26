module.exports = {
  purge: false, // it was breaking css in production but it was like that: './pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: {
      'primary': '#1b1c1c',
      'secondary': '#232526',
      'tertiary': '#131313',
      'tertiary-hov': '#1a1a1a',
      'tertiary-act': '#1d221d',
      'black': '#000000',
      'white': '#ffffff'
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
