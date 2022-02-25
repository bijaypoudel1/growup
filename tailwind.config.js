module.exports = {
  content: ['./public/**/*.{html,js}'],
  theme: {
    extend: {
      fontFamily:{
        Poppins:["Poppins", "sans-serif"],
        Teko:["Teko","sans-serif"],
      },
      backgroundImage: {
        'section-bg': "url('./images/section_bg.png')",
        
      }
    },
  },
  plugins: [],
}
