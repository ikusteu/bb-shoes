module.exports = {
  future: {},
  purge: ["./pages/**/*.js", "./components/**/*.js"],
  theme: {
    extend: {},
    screens: {
      sm: { max: "599px" },
      md: { max: "899px", min: "600px" },
      lg: { max: "1200px", min: "900px" },
      xl: { min: "1200px" },
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
