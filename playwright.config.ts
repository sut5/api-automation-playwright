import 'dotenv/config';
import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: false,
  retries: 0,
  reporter: 'html',
  use: {
    baseURL: process.env.REQRES_BASE_URL || 'https://reqres.in',
    extraHTTPHeaders: {
      'x-api-key': process.env.REQRES_API_KEY || '',
    },
  },
});