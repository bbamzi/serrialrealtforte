/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        tipper:
          "linear-gradient(to right bottom, rgba(16, 106, 31, 0.6), rgba(0, 0, 0, 0.6)), url('./../../../frontend/src/img/tipper.jpg')",
        survey:
          "linear-gradient(to right bottom, rgba(16, 106, 31, 0.6), rgba(0, 0, 0, 0.6)), url('./../../../frontend/src/img/survey.jpg')",
        land_survey:
          "linear-gradient(to right bottom, rgba(16, 106, 31, 0.6), rgba(0, 0, 0, 0.6)), url('./../../../frontend/src/img/land_survey.jpg')",
        contract:
          "linear-gradient(to right bottom, rgba(16, 106, 31, 0.6), rgba(0, 0, 0, 0.6)), url('./../../../frontend/src/img/contract.webp')",
      },
    },
  },
  plugins: [],
};
