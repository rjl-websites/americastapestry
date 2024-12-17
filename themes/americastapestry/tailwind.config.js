/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
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
      },
    },
  },
  plugins: [],
};
