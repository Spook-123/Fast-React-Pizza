/** @type {import('tailwindcss').Config} */
// comment to disable eslint warnings
// eslint-disable-next-line
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // Solves the issue of mobile screen
      height: { screen: "100dvh" },
    },
  },
  plugins: [],
};
