import tailwindcssPrimeUI from 'tailwindcss-primeui'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,tsx,vue}'],
  theme: {
    extend: {}
  },
  plugins: [tailwindcssPrimeUI]
}
