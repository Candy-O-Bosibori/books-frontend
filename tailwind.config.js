/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        db : "#3D2F28",
        brown:"#B66F39",
        light:"#F2F0E4",
        ld:"#e6e2cb"
      },
      fontFamily: {
        'body': ["Antic Didone", "serif",'Inter', 
     ]}
    },
  },
  plugins: [],
}

