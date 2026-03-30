/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Fraunces", "serif"],
        secondary: ["Manrope", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [{
      mytheme: {
        "primary": "#580041",
        "secondary": "#af2365",
        "accent": "#5f0007",
        "neutral": "#FFBA86",
        "base-100": "#ffffff",
        "base-200": "#FFF1E9",
      },
    }],
  },
}