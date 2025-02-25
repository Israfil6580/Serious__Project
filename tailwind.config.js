/** @type {import('tailwindcss').Config} */
export default {
  daisyui: {
    themes: ["light", "synthwave"],
  },
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}

