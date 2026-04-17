// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  site: "https://bridgeworldstravel.com",
  integrations: [mdx()],
  adapter: cloudflare({
    platformProxy: {
      enabled: true,
    },
  }),
});
