module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      pseudo: { // defaults to {'before': 'before', 'after': 'after'}
        'before': 'before',
        'after': 'after',
      }  
    },
  },
  variants: {
    extend: {
      backgroundColor: ['before', 'after'],
      borderColor: ['before', 'after'],
    }
  },
  plugins: [
    require('tailwindcss-pseudo')({
      empty: true, // defaults to true
    }),
  ],
}
