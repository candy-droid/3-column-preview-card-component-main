/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  theme: {
    extend: {
      colors: {
      'bright-orange':'hsl(31, 77%, 52%)',
      'cyan':'hsl(184, 100%, 22%)',
      'dark-cyan':' hsl(179, 100%, 13%)',
      'light-gray':'hsl(0, 0%, 95%)',
      'white':'hsla(0, 0%, 100%, 0.75)',
      },
    },
  },
  plugins: [],
};
