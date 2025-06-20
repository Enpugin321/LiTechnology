/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#209BE0", // Blue
      },
      fontFamily: {
        montserrat: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
