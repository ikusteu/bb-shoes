module.exports = {
  future: {},
  purge: ["./pages/**/*.js", "./components/**/*.js"],
  theme: {
    extend: {},
    screens: {
      xs: { max: "480px" },
      sm: { max: "768px", min: "481px" },
      md: { max: "1024px", min: "769px" },
      lg: { max: "1200px", min: "1025px" },
      xl: { min: "1201px" },
    },
    inset: {
      auto: "auto",
      "1/2": "50%",
      "3/4": "75%",
      fib: "60%",
    },
    extend: {
      colors: {
        primary: "rgb(255, 105, 0)",
        secondary: "rgb(44,45,101)",
      },
    },
  },
  variants: {},
  plugins: [],
};
