import { defineConfig } from "astro/config";
import { rehypeAccessibleEmojis } from "rehype-accessible-emojis";

// https://astro.build/config
export default defineConfig({
  site: "https://kngroo.github.io",
  base: "/stratosphere",
  markdown: {
    rehypePlugins: [rehypeAccessibleEmojis],
  },
});
