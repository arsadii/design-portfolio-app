module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      container : {
        center : true,
        padding : '1rem'
      },
      backgroundImage: theme => ({
        'karya' : "url('/img/pattern1.jpg')"
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
