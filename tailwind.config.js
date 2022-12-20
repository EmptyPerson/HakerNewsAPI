/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      flexShrink: {
        '4': 4,
        '5': 5,
      },
      colors: {
        brightBlue: "#3b81f5",
        transparentBlue: "#1f437c"
      }
    },
  },
  plugins: [],
}
