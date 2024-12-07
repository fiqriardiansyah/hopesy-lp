/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "jakarta": ["Plus Jakarta Sans", "sans-serif"]
      },
      colors: {
        "primary-pink": "#F700B1",
        "dark": "#2E2E2E"
      },
      flex: {
        2: "2 2 0%",
        3: "3 3 0%",
      }
    },
  },
  plugins: [],
}