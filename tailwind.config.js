/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    // added vue
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}