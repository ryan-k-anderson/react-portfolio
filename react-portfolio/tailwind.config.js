/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        blue: "#2CBCE9",
        red: "#DC4492",
        Yellow: "#FGCC49",
        grey: "#EDEDED",
        'deep-blue': "#010026",
        'dark-grey': "#757575",
        'opaque-black': "rgba(0,0,0,0.35"
      },
      backgroundImage: (theme) => ({
        'gradient-rainbow':
          "linear-gradient(81.88deg, #00B5EE 7.21%, $FF45A4 45.05%, #FFBA00 78.07%)",
        'gradient-rainblue':
          "linear-gradient(90deg, #24CBFF 14.53%, $FC59FF 69.36%, #FFBD07 107.73%)"
      }),
      fontFamily:{
        playflair: ["Playfair Display", "serif"],
        opensans: ["Open Sans", "sans-serif"]
      },
      content: {
        pfp :"url('./assets/Photo Me.jpg')",
        dev1 :"url('./assets/dev1.jpg')",
        dev2 :"url('./assets/dev2.jpg')",
      }
    },
    screens:{
      xs: "480px",
      sm: "760px",
      md: "1060px"
    }
  },
  plugins: [],
}
