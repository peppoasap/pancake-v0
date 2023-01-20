/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/index.html',
    './src/components/**/*.tsx',
  ],
  prefix: 'pnk-',
  theme: {
    extend: {
        colors: {
            black: '#333333',
            white: '#FFFFFF',
            primary: {
                base: '#E82C88',
                hover: '#C7166D'
            },
            secondary: {
                base: '#FAD5E7',
                hover: '#C7166D'
            },
            accent: '#6DC716',
            surface: '#F5F5F5',
            disabled: {
                base: '#E3E3E3',
                text: '#777777'
            },
            fontSize: {
              base: '15px',
            },
            fontFamily: {
              base: 'Roboto, sans-serif',
            },
            borderRadius: {
              DEFAULT: '5px'
            }
        }
    }
},
  plugins: [],
}
