/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          primary: "#0FCFEC",

          secondary: "#19D3AE",

          accent: "#EFFEFA",
          info: "#EFFEFA",

          neutral: "#3D4451",

          "base-100": "#FFFFFF",

          "error": "#EA4034",
        }
      }
    ]
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
