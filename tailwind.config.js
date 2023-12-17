/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/**/*.{html,js}',
  ],
  theme: {
    extend: {
      colors: {
        pre_zolo: 'rgb(252, 69, 2)',
        sec_zolo: {
          100: 'rgb(252, 60, 2)',
          200: 'rgb(252, 79, 6)'
        }
      },
      fontFamily: {
        body: ['EB Garamond'],
        h4: ['Roboto']
        
      }
    },
  },
  plugins: [],
}
