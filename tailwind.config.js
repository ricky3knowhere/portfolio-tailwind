/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    container: {
      center: true,
      padding: "2em",
    },
    extend: {
      colors: {
        primary: "#14B8A6",
        secondary: "#64748b",
        dark: "#0F172A",
      },
    },
  },
  plugins: [],
};
