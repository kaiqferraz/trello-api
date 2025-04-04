const cucumber = require("cypress-cucumber-preprocessor").default; //Importação cucumber
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on("file:preprocessor", cucumber());
    },
    specPattern: "cypress/api/api_test/*.feature",
  },
});
