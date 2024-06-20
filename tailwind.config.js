/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2EBAC1",
        title: "#3A1097",
      },
      boxShadow: {
        custom: "0px 12px 25px -12px #A783F126",
      },
    },
  },
  plugins: [],
};
