/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      // vivid: https://coolors.co/30bced-ef476f-f78c6b-ffd166-06d6a0
      // pastel : https://coolors.co/65b2ff-ff6961-f78c6b-ffd166-77dd77
      black: {
        100: "#dadada",
        200: "#b4b4b4",
        300: "#8f8f8f",
        400: "#696969",
        500: "#444444",
        600: "#363636",
        700: "#292929",
        800: "#1b1b1b",
        900: "#0f0f0f",
      },

      blue: {
        100: "#e0f0ff",
        200: "#c1e0ff",
        300: "#a3d1ff",
        400: "#84c1ff",
        500: "#65b2ff",
        600: "#518ecc",
        700: "#3d6b99",
        800: "#284766",
        900: "#142433"
      },
      red: {
        100: "#ffe1df",
        200: "#ffc3c0",
        300: "#ffa5a0",
        400: "#ff8781",
        500: "#ff6961",
        600: "#cc544e",
        700: "#993f3a",
        800: "#662a27",
        900: "#331513"
      },
      orange: {
        100: "#fde8e1",
        200: "#fcd1c4",
        300: "#fabaa6",
        400: "#f9a389",
        500: "#f78c6b",
        600: "#c67056",
        700: "#945440",
        800: "#63382b",
        900: "#311c15"
      },
      yellow: {
        100: "#fff6e0",
        200: "#ffedc2",
        300: "#ffe3a3",
        400: "#ffda85",
        500: "#ffd166",
        600: "#cca752",
        700: "#997d3d",
        800: "#665429",
        900: "#332a14"
      },
      green: {
        100: "#e4f8e4",
        200: "#c9f1c9",
        300: "#adebad",
        400: "#92e492",
        500: "#77dd77",
        600: "#5fb15f",
        700: "#478547",
        800: "#305830",
        900: "#182c18"
      },

      transparent: "rgba(0, 0, 0, 0)"
    },

    extend: {},
  },
  plugins: [],
};

