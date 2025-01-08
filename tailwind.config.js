/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  darkMode: "class",
  content: [
    "../../content/**/*.{html,md}",
    "../../layouts/**/*.html",
    "./layouts/**/*.html",
    "../../assets/css/*.css",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"EB Garamond"', ...defaultTheme.fontFamily.serif],
        sans: ["Lato", ...defaultTheme.fontFamily.sans],
      },
      typography: (theme) => ({
        "2xl": {
          css: {
            h2: {
              fontWeight: "400",
              fontSize: theme("fontSize.3xl"),
              // Add more custom styles here
            },
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
