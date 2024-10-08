import { defineConfig } from "cypress";
import { dotenv } from "cypress-plugin-dotenv";

export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:2024",
    setupNodeEvents(on, config) {
      config = dotenv(config, { path: ".env.local" });

      config.env.apiKey = process.env.NEXT_PUBLIC_APIKEY;
      config.env.authDomain = process.env.NEXT_PUBLIC_AUTHDOMAIN;
      config.env.projectId = process.env.NEXT_PUBLIC_PROJECTID;
      config.env.storageBucket = process.env.NEXT_PUBLIC_STORAGEBUCKET;
      config.env.messagingSenderId = process.env.NEXT_PUBLIC_MESSAGINGSENDERID;
      config.env.appId = process.env.NEXT_PUBLIC_APPID;
      config.env.measurementId = process.env.NEXT_PUBLIC_MEASUREMENTID;
      config.env.email = process.env.TEST_EMAIL;
      config.env.pwd = process.env.TEST_PWD;
      config.env.use_emulator = process.env.NEXT_PUBLIC_USE_EMULATOR;

      return config;
    },
    pageLoadTimeout: 60000 * 3, //3mins to help with local dev
    requestTimeout: 60000 * 3,
  },
});
