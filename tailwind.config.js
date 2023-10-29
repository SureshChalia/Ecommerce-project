/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      maxWidth:{
         maxContainer:"1440px"
      },
      fontFamily:{
        Montserrat:["Montserrat"],
        Figtree:["Figtree"],
        Lato:["Lato"],
        Open_sans:["Open Sans"]
      },
      borderRadius:{
         lgPlus:"10px"
      },
      fontSize:{
         xxs:"10px"
      },
      boxShadow:{
         shadowFull:"4px 4px 20px rgba(0,0,0,.1) "
      },
    },
  },
  plugins: [],
};
