/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: {
          1: "#292967",
          2: "#f2c100",
        },
      },
    },
  },
  plugins: [],
};
