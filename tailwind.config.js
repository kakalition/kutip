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

        "maroon-bg": "#5B0E2D",
        "maroon-primary": "#FFA781",
        "maroon-neutral": "#FFFFFF",
        "maroon-fab": "#7D103C",

        "burlywood-bg": "#E7CBA9",
        "burlywood-primary": "#232323",
        "burlywood-neutral": "#FAFAFA",
        "burlywood-fab": "#FAFAFA",
      },
      fontFamily: {
        "playfair-display": ["Playfair Display", "sans-serif"],
        "poppins": ["Poppins", "sans-serif"]
      }
    },
  },
  plugins: [],
}
