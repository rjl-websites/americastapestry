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
      typography: (theme) => ({
        "2xl": {
          css: {
            h2: {
              color: theme("colors.gray.800"),
              fontWeight: "700",
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
