/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  plugins: [require("daisyui")],
  daisyui: {
    themes: [{
      cupcake: {
        "primary": "#FBD062",

        "secondary": "#111430",

        "accent": "#7AB259",

        "neutral": "#111430",

        "base-100": "#FAF7F5",

        "info": "#3ABFF8",

        "success": "#36D399",

        "warning": "#FBBD23",

        "error": "#F87272",
      },
    },
      "dark"],
  },
}
