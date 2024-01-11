/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      colors: {
        // custom colors
        primary: "#edb932",
        secondary: "#bc9127",
        "semi-black": "#1a1a1a",
        "semi-gray": "#6c6c6c",
        "semi-white": "#fafafa",
      },
    },
  },
  plugins: [],
};
