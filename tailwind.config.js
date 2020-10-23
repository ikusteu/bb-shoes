module.exports = {
    future: {},
    purge: [
        './pages/**/*.js',
        './components/**/*.js'
    ],
    theme: {
      extend: {},
      screens: {
        'sm': {'max': '599px'},
        'md': {'max': '899px', 'min': '600px'},
        'lg': {'max': '1200px', 'min': '900px'},
        'xl': {'min': '1200px'},
      },
      inset: {
        '1/2': '50%',
      },
    },
    variants: {},
    plugins: [],
}
    