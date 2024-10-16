// svelte.config.js
import adapterAuto from "@sveltejs/adapter-auto";

export default {
  kit: {
    adapter: adapterAuto({
      pages: "build",
      assets: "build",
      fallback: null,
    }),
  },
};
