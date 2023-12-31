/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}", "./projects/**/*.{html,ts}"],
  darkMode: "class",
  theme: {
    screens: {
      customSize: "1200px",
    },
    extend: {
      colors: {
        Purple: "#6441a5",
        backG: "#8673A1",
        redIsh: "#201820",
        BlacK: "#202020",
        mainCOLOR: "	#00BFFF",
      },
      width: {
        "fit-2vw": "calc(fit-content + 10rem)",
      },
    },
  },
  plugins: ["tailwindcss/nesting"],
};
