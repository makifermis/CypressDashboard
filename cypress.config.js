
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'i6d9yu',
  e2e: {
    baseUrl:"https://demoblaze.com/"
    //setupNodeEvents(on, config) {
      // implement node event listeners here
      
    },
  },
);
