/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}", "./projects/**/*.{html,ts}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        Purple: "#6441a5",
        backG: "#8673A1",
        redIsh: "#201820",
        BlacK: "#202020",
      },
    },
  },
  plugins: [],
};
