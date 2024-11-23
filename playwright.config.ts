import { defineConfig, devices } from '@playwright/test';

const config = defineConfig({
  testDir: "./src",
  fullyParallel: true,
  // reporter: 'html',
  reporter: 'list',
  use: {
    headless: true,
  },
  projects: [
    {
      "name": "chromium",
      use: {
        userAgent: "testing",
        isMobile: false,
        hasTouch: false,
        defaultBrowserType: 'chromium',
        actionTimeout:30*1000
      }
    }
  ]
})

export default config
