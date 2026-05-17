// @ts-check
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  reporter: 'html',
  use: {
    
    trace: 'on-first-retry',
    screenshot: 'on',
    headless: false,
  },

    
});

