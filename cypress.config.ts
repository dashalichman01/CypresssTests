import { defineConfig } from 'cypress';
import 'dotenv/config';

export default defineConfig({
  e2e: {
    baseUrl: 'https://demo.realworld.io/#',
    setupNodeEvents(on, config) {
    },
  },
  env: {...process.env,
    NODE_ENV: 'a',
    },
});
