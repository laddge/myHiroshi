import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import purgecss from "astro-purgecss";
import compress from "astro-compress";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind({
      applyBaseStyles: false
    }),
    purgecss({
      variables: true,
    }),
    compress(),
  ],
  vite: {
    build: {
      rollupOptions: {
        output: {
          assetFileNames: `assets/[name].[ext]`,
        },
      },
    },
  },
});
