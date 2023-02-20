/** @type {import('tailwindcss').Config} */
module.exports = {

  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    // colors:{
    // opacityBlack: '0,0,0,0.8'
    // },
    extend: {
      accentColor:{
        opacityBlack: '0,0,0,0.8'
      }
    },
  },
  plugins: [],
}