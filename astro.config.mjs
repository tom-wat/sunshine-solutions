import { defineConfig } from "astro/config";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: "https://tom-wat.github.io/",
  base: "/sunshine-solutions",
  integrations: [icon()],
});
