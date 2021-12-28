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
     },
  },
  variants: {
    extend: {},
  },
  plugins: []
}