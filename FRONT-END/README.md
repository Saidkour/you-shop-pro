# 1 install tailwindcss + vite

install tailwind css with vite:

`npm install -D tailwindcss postcss autoprefixer`

`npx tailwindcss init -p`

tailwind.config.js:

`
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}`
