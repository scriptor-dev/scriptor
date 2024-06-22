import { defineConfig } from "cypress";

const port = process.env.PORT ?? "3000";

export default defineConfig({
  retries: 2,
  defaultCommandTimeout: 10000,
  reporter: "junit",
  reporterOptions: {
    mochaFile: "cypress/results/junit/test-results-[hash].xml",
    toConsole: true
  },
  e2e: {
    baseUrl: `http://localhost:${port}`,
    setupNodeEvents(on, config) {}
  }
});
