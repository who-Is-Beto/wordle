/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    colors: {
      "green-box": "var(--green-box)  ",
      "yellow-box": "var(--yellow-box) ",
      "gray-miss-box": "var(--gray-miss-box) ",
      "gray-empty": "var(--color-empty-box) ",
      "white-box-letter": "var(--letter-box-active) ",
      "light-gray": "var(--light-gray) ",
      "mid-gray": "var(--mid-gray) ",
      "dark-gray": "var(--dark-gray) ",
      "general-bg": "var(--general-bg) "
    }
  },
  plugins: []
};
