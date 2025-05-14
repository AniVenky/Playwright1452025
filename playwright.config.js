// @ts-check
import { defineConfig, devices } from '@playwright/test';
import { on } from 'events';

/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = defineConfig({
  testDir: './tests',
  timeout: 40 * 1000,
  expect: {
    timeout: 5000,
  },
  reporter: 'html',
  use: {
    browserName: 'chromium',
    headless: false,
    screenshot : 'on-first-failure',
    trace : 'on-first-retry'
  },
});

export default config;
