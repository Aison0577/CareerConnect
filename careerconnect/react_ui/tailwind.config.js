/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'], // Adding Montserrat
        poppins: ['Poppins', 'sans-serif'], // Adding Poppins
      },
      width:{
        sm:'90%',
        md:'80%',
        lg:'50%'
      },
      colors:{
        primary:'#202439',
        secondary:'#383838',
        white:'#fff'
      }
    },
  },
  plugins: [],
}
