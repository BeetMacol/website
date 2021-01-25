module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: theme => ({
      'primary': '#1b1c1c'
    }),
    extend: {}
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
