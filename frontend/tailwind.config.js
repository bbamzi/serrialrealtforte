/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      backgroundImage: {
        tipper:
          "linear-gradient(to right bottom, rgba(16, 106, 31, 0.6), rgba(0, 0, 0, 0.6)), url('./../img/tipper.jpg')",
        survey:
          "linear-gradient(to right bottom, rgba(16, 106, 31, 0.6), rgba(0, 0, 0, 0.6)), url('./../img/survey.jpg')",
        land_survey:
          "linear-gradient(to right bottom, rgba(16, 106, 31, 0.6), rgba(0, 0, 0, 0.6)), url('./../img/land_survey.jpg')",
        contract:
          "linear-gradient(to right bottom, rgba(16, 106, 31, 0.6), rgba(0, 0, 0, 0.6)), url('./../img/contract.webp')",
      },
    },
  },
  plugins: [],
};
