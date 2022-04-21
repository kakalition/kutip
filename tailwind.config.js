module.exports = {
  content: [
    "./resources/**/*.js",
    "./resources/**/*.blade.php",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#F6F4EA",
        "secondary": "#C8A703",
        "form-bg": "#F2EDD5",
        "form-border": "#DDDDDD",
      },
      fontFamily: {
        "playfair-display": ["Playfair Display", "sans-serif"],
        "poppins": ["Poppins", "sans-serif"]
      }
    },
  },
  plugins: [],
}
