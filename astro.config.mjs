import { defineConfig } from "astro/config";
import icon from "astro-icon";

import relativeLinks from "astro-relative-links";

// https://astro.build/config
export default defineConfig({
  site: "https://tom-wat.github.io/",
  base: "/sunshine-solutions",
  integrations: [icon(), relativeLinks()],
});
