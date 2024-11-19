import { defineConfig, devices } from '@playwright/test';

const config = defineConfig({
  testDir: "./src",
  fullyParallel: true,
  reporter: 'html',
  use: {
    headless: false,
  },
  projects: [
    {
      "name": "chromium",
      use: {
        userAgent: "testing",
        isMobile: false,
        hasTouch: false,
        defaultBrowserType: 'chromium'
      }
    }
  ]
})

export default config
