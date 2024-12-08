const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    experimentalStudio: true,
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/reports', // Directory for reports
      overwrite: false, // Keep old reports
      html: true, // Generate HTML reports
      json: true, // Generate JSON reports
    },
    setupNodeEvents(on, config) {
      // Implement node event listeners here
    },
  },
});
