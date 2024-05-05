/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#464486",
        secondary: "#5b1aae",
        pink: "#e03ca8",
        tertiary: "#0eeefd",
      },
    },
  },
  plugins: ["@tailwindcss/forms"],
};
