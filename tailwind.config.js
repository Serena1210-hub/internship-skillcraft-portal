/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#000000",
        accent: "#0e0abf",
        highlight: "#ffc916",
        base: "#ffffff",
      },
      boxShadow: {
        glow: "0 0 20px rgba(14, 10, 191, 0.5)",
        gold: "0 0 20px rgba(255, 201, 22, 0.6)",
      },
    },
  },
  plugins: [],
};
