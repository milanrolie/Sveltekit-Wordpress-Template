// svelte.config.js
import adapterStatic from "@sveltejs/adapter-static";

export default {
  kit: {
    adapter: adapterStatic({
      pages: "build",
      assets: "build",
      fallback: null,
    }),
  },
};
