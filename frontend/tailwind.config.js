/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        section_one_bg:
          "linear-gradient(to right bottom,rgba(16, 106, 31, 0.6), rgba(0, 0, 0, 0.6)), url(' ./../img/land-1.jpg')",
        haikei: "url('./../img/wave-haikei.svg')",
        tipper:
          "linear-gradient(to right bottom, rgba(16, 106, 31, 0.6), rgba(0, 0, 0, 0.6)), url('./../img/tipper.jpg')",
        survey:
          "linear-gradient(to right bottom, rgba(16, 106, 31, 0.6), rgba(0, 0, 0, 0.6)), url('./../img/surveyor.jpeg')",
        land_survey:
          "linear-gradient(to right bottom, rgba(16, 106, 31, 0.6), rgba(0, 0, 0, 0.6)), url('./../img/land_survey.jpg')",
        contract:
          "linear-gradient(to right bottom, rgba(16, 106, 31, 0.6), rgba(0, 0, 0, 0.6)), url('./../img/land_docs.jpeg')",
        about_us: "url('./../img/circle-scatter-haikei.svg')",
        reviews: "url('./../img/haikei.svg')",
      },
    },
  },
  plugins: [],
};
