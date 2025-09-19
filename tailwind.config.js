/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#274C5B",
        secondary: "#7EB693",
        accent: "#EFD372",
        gray: "#D4D4D4",
        light: "#F9F8F8",
        mint: "#EFF6F1",
        dark: "#525C60",
      },
    },
  },
  plugins: [],
};
