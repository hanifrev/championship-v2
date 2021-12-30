module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}','./src/components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
     extend: {
      screens: {
        xs: "0px",
        sm: "600px",
        md: "960px",
        lg: "1170px",
        xl: "1920px",
      },
      fontSize: {
        xxs: '10px',
        xss: '11px'
      },
      width: {
        "5%": '5%'
      }
     },
  },
  variants: {
    extend: {},
  },
  plugins: []
}