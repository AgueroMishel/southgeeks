const { defineConfig } = require('cypress')

module.exports = defineConfig({
  // Globals
  env: {
  },
  retries: 0,
  // Timeouts
  defaultCommandTimeout: 30000,
  // Folders / Files
  // Screenshots
  // Videos
  video: false,
  // Downloads
  // Browser
  // Viewport
  viewportHeight: 1080,
  viewportWidth: 1920,
  // Actionability
  // Experimental
  // experimentalSourceRewriting: true,
  e2e: {
    setupNodeEvents(on, config) {
      // Listeners
      return config
    },
    // Test Type Configuration
    testIsolation: true,
    // Environment Configuration
    environment: 'local',
    baseUrl: 'https://jsonplaceholder.typicode.com',
    // Authentication Configuration
  },
})
