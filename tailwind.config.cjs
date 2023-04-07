/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: {'min': '200px', 'max': '480px'},
        ss: {'min': '481px', 'max': '620px'},
        sm: {'min': '621px', 'max': '768px'},
        md: {'min': '769px', 'max': '1060px'},
        lg: {'min': '1061px', 'max': '1200px'},
        xlg: {'min': '1201px', 'max': '2560px'},
      },
  },
  },
  plugins: [],
}