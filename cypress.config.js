
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '6ufukt',
  e2e: {
    baseUrl:"https://demoblaze.com/"
    //setupNodeEvents(on, config) {
      // implement node event listeners here
      
    },
  },
);
