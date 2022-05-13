module.exports = {
  content: [ "./src/**/*.tsx" ],
  theme: {
    extend: {
      colors:{
        tabMain: {
          500: "rgb(219,82,77)",
        },
        tabShortTime: {
          500: "rgb(70,142,145)",
        },
        tabLongTime:{
          500: "rgb(67,126,168)",
        },
      },
      fontFamily: {
        mPlus: ['"M PLUS Rounded 1c"', 'sans-serif'],
      },
      borderRadius: {
        md: '4px'
      }
    },
  },
  plugins: [ ],
}
