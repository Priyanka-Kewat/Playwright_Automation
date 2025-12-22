// @ts-check
import { chromium, defineConfig, devices } from "@playwright/test";

/**
 * @see https://playwright.dev/docs/test-configuration
 */

export default defineConfig({
  testDir: "./tests",

  timeout: 40 * 1000,
  expect: {
    timeout: 40 * 1000,
  },
  reporter: "html",
  /* Run tests in files in parallel */
  use: {
    browserName: "chromium",
    headless: false,
    screenshot: "on",
    trace: "on",
    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    // trace: "on-first-retry",
  },
});
