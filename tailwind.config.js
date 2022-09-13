/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'ellipseFive': "url('/src/assets/Ellips-5.png')",
        'icon': "url('/src/assets/Ellipse16.png')",
      }
    }
  }, 
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#2D89FF",
          secondary: "#642DFF",
          accent: "#1E1E1E",
          neutral: "#575757",
          "base-100": "#ffffff",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}