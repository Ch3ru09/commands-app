/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      // https://coolors.co/30bced-ef476f-f78c6b-ffd166-06d6a0
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
        100: "#d6f2fb",
        200: "#ace4f8",
        300: "#83d7f4",
        400: "#59c9f1",
        500: "#30bced",
        600: "#2696be",
        700: "#1d718e",
        800: "#134b5f",
        900: "#0a262f",
      },
      red: {
        100: "#fcdae2",
        200: "#f9b5c5",
        300: "#f591a9",
        400: "#f26c8c",
        500: "#ef476f",
        600: "#bf3959",
        700: "#8f2b43",
        800: "#601c2c",
        900: "#300e16",
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
        900: "#311c15",
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
        900: "#332a14",
      },
      green: {
        100: "#cdf7ec",
        200: "#9befd9",
        300: "#6ae6c6",
        400: "#38deb3",
        500: "#06d6a0",
        600: "#05ab80",
        700: "#048060",
        800: "#025640",
        900: "#012b20",
      },
    },

    extend: {},
  },
  plugins: [],
};

