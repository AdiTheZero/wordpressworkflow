const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    experimentalStudio: true,
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/reports', // Directory for reports
      overwrite: true, // Keep old reports
      html: true, // Generate HTML reports
      json: true, // Generate JSON reports
      timestamp: "mmddyyyy_HHMMss"
    },
    setupNodeEvents(on, config) {
      // Implement node event listeners here
      //  require('cypress-mochawesome-reporter')(on);
    },
  },
});
